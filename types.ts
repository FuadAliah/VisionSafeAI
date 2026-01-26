
export interface ServiceInfo {
  title: string;
  description: string;
  impact: string;
  icon: string;
  mediaUrl: string; // URL for GIF or Video
}

export interface Source {
  title: string;
  uri: string;
}

export interface Stat {
  label: string;
  value: string;
  sourceUrl?: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  sourceUrl?: string;
}

export interface PresentationData {
  title: string;
  subtitle: string;
  problemStatement: {
    text: string;
    stats: Stat[];
  };
  services: ServiceInfo[];
  caseStudy: CaseStudy;
  businessImpact: {
    roi: string;
    longTermValue: string;
  };
  sources?: Source[];
}

export type Language = 'en' | 'ar';
