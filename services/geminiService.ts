
import { GoogleGenAI, Type } from "@google/genai";
import { PresentationData, Source } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const presentationSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    subtitle: { type: Type.STRING },
    problemStatement: {
      type: Type.OBJECT,
      properties: {
        text: { type: Type.STRING },
        stats: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              label: { type: Type.STRING },
              value: { type: Type.STRING },
              sourceUrl: { type: Type.STRING, description: "Direct URL to the source page for this specific statistic." }
            },
            required: ["label", "value"]
          }
        }
      },
      required: ["text", "stats"]
    },
    services: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          impact: { type: Type.STRING },
          icon: { type: Type.STRING },
          mediaUrl: { type: Type.STRING, description: "A high-quality GIF or stock video URL related to this industrial service. If a direct URL isn't found, provide a descriptive Pexels video search URL." }
        },
        required: ["title", "description", "impact", "icon", "mediaUrl"]
      }
    },
    caseStudy: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        description: { type: Type.STRING },
        results: { type: Type.ARRAY, items: { type: Type.STRING } },
        sourceUrl: { type: Type.STRING, description: "Direct URL to the case study on the source website." }
      },
      required: ["title", "description", "results"]
    },
    businessImpact: {
      type: Type.OBJECT,
      properties: {
        roi: { type: Type.STRING },
        longTermValue: { type: Type.STRING }
      },
      required: ["roi", "longTermValue"]
    }
  },
  required: ["title", "subtitle", "problemStatement", "services", "caseStudy", "businessImpact"]
};

export async function synthesizeContent(language: 'en' | 'ar'): Promise<PresentationData> {
  const prompt = `
    Task: Exhaustively extract industrial manufacturing safety AI data from:
    1. https://visionify.ai/industries/manufacturing
    2. https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution
    3. https://www.viact.ai/manufacturing
    
    Instructions:
    - Extract 8-10 unique AI safety services.
    - For EVERY statistic (e.g., accident reduction, cost savings), find the EXACT reference link/source from the provided websites.
    - For the Case Study, provide the direct link to where it is hosted.
    - For each service, provide a mediaUrl. This should be a direct link to a relevant GIF or Video if available on their site, OR a relevant high-quality stock video link from a provider like Pexels (e.g., https://www.pexels.com/video/industrial-robotic-arm-working-in-a-factory-3752834/).
    - Deduplicate services.
    - Use Professional Business ${language === 'ar' ? 'Arabic' : 'English'}.
    
    Output Format:
    Strictly JSON matching the schema.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: 'application/json',
      responseSchema: presentationSchema,
    },
  });

  const parsedData: PresentationData = JSON.parse(response.text || '{}');
  
  const sources: Source[] = [];
  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
  if (groundingChunks) {
    groundingChunks.forEach((chunk: any) => {
      if (chunk.web?.uri && chunk.web?.title) {
        sources.push({ title: chunk.web.title, uri: chunk.web.uri });
      }
    });
  }
  
  const uniqueSources = Array.from(new Map(sources.map(s => [s.uri, s])).values());
  
  return {
    ...parsedData,
    sources: uniqueSources
  };
}
