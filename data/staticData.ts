import { PresentationData, Language } from '../types';
import { Truck, ShoppingCart, Factory, Utensils, Box } from 'lucide-react';

export const STATIC_DATA: Record<Language, PresentationData> = {
  en: {
    title: "Artificial Intelligence in Service of Industry and Automating Safety Standards",
    secTitle: "For Factories, Facilities and Logistics Services",
    subtitle: "AI-Powered Computer Vision for the Zero-Harm Factory",
    problemStatement: {
      text: "Global manufacturing faces millions of accidents yearly, leading to human loss and billions in financial impact. Traditional safety protocols are reactive and prone to human error.",
      stats: [
        { label: "Accident Reduction", value: "85%", sourceUrl: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution" },
        { label: "Global Injury Costs", value: "$171B", sourceUrl: "https://visionify.ai/industries/manufacturing" },
        { label: "Annual Fatalities", value: "4,500+", sourceUrl: "https://www.viact.ai/manufacturing" },
        { label: "Safety Compliance", value: "100%", sourceUrl: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution" }
      ]
    },
    services: [
      {
        title: "PPE Detection",
        description: "Real-time verification of helmets, vests, and eyewear to ensure every worker is protected before entering risk zones.",
        impact: "99% Compliance Rate",
        icon: "HardHat",
        mediaUrl: "https://protex-image-asset-cdn.s3.eu-west-1.amazonaws.com/PPE/PPE+X+detection.gif"
      },
      {
        title: "Exclusion Zone Monitoring",
        description: "Automated alerts when unauthorized personnel enter high-risk machinery areas or 'red zones'.",
        impact: "Zero Intrusion Accidents",
        icon: "Eye",
        mediaUrl: "https://protex-image-asset-cdn.s3.eu-west-1.amazonaws.com/Area+Control/Max+worker+count.(area+control)+gif.gif"
      },
      {
        title: "Vehicle & Forklift Safety",
        description: "Detecting speeding, improper maneuvers, and proximity alerts between vehicles and pedestrians.",
        impact: "65% Fewer Collisions",
        icon: "Truck",
        mediaUrl: "https://protex-image-asset-cdn.s3.eu-west-1.amazonaws.com/Vehicle+Control/Speeding.+(vehicle+control)+gif.gif"
      },
      {
        title: "Fire & Smoke Detection",
        description: "Ultra-fast detection of smoke and fire plumes, often beating standard hardware sensors in open industrial spaces.",
        impact: "Rapid Response Ready",
        icon: "Flame",
        mediaUrl: "https://visionify.ai/videos/smoke-and-fire-drill.mp4"
      },
      {
        title: "Slip & Fall Detection",
        description: "Instant notification to emergency response teams when a worker falls, significantly reducing medical response time.",
        impact: "Faster Medical Aid",
        icon: "AlertTriangle",
        mediaUrl: "https://visionify.ai/videos/slip-and-fall-1.mp4"
      },
      {
        title: "Smoking Detection",
        description: "Ensuring compliance in fire-hazard zones by identifying unauthorized smoking activity in real-time.",
        impact: "Fire Risk Mitigation",
        icon: "Wind",
        mediaUrl: "https://visionify.ai/videos/no-smoking-1.mp4"
      },
      {
        title: "Mobile Phone Compliance",
        description: "Identifying distracted behavior in dangerous walkways and operational areas where focus is critical.",
        impact: "Boosted Situational Awareness",
        icon: "Smartphone",
        mediaUrl: "https://visionify.ai/videos/mobile-phone-compliance-walkway.mp4"
      },
      {
        title: "Spills & Leaks Detection",
        description: "AI analysis identifying liquid hazards on the floor to prevent slips and chemical exposure.",
        impact: "Proactive Floor Safety",
        icon: "Droplets",
        mediaUrl: "https://visionify.ai/videos/spills-and-leaks-detection-video-1.mp4"
      }
    ],
    caseStudy: {
      title: "Tier 1 Automotive Manufacturer Success",
      description: "Implementing VisionSafe AI across 12 production lines to automate safety auditing and real-time risk management.",
      results: [
        "70% reduction in near-miss incidents",
        "ROI achieved within 9 months",
        "40% decrease in safety insurance premiums"
      ],
      sourceUrl: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution"
    },
    businessImpact: {
      roi: "Average payback period of less than 12 months through reduction in liability and operational downtime.",
      longTermValue: "Moving from reactive to proactive safety culture with data-driven insights for continuous improvement."
    },
    sources: [
      { title: "Visionify Manufacturing", uri: "https://visionify.ai/industries/manufacturing" },
      { title: "Protex Industrial Solutions", uri: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution" },
      { title: "viAct Construction & Factory", uri: "https://www.viact.ai/manufacturing" }
    ]
  },
  ar: {
    title: "إدارة مخاطر السلامة والصحة العامة بالذكاء الاصطناعي",
    secTitle: "للمصانع، المنشآت والخدمات اللوجستية",
    subtitle: "رؤية حاسوبية مدعومة بالذكاء الاصطناعي لمصانع خالية من المخاطر",
    problemStatement: {
      text: "يواجه التصنيع العالمي ملايين الحوادث سنوياً، مما يؤدي إلى خسائر بشرية وآثار مالية تقدر بالمليارات. بروتوكولات السلامة التقليدية هي رد فعل ومعرضة للخطأ البشري.",
      stats: [
        { label: "تقليل الحوادث", value: "85%", sourceUrl: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution" },
        { label: "تكاليف الإصابات", value: "$171B", sourceUrl: "https://visionify.ai/industries/manufacturing" },
        { label: "الوفيات السنوية", value: "4,500+", sourceUrl: "https://www.viact.ai/manufacturing" },
        { label: "الامتثال للسلامة", value: "100%", sourceUrl: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution" }
      ]
    },
    services: [
      {
        title: "اكتشاف معدات الوقاية الشخصية",
        description: "التحقق الفوري من الخوذات والسترات والنظارات لضمان حماية كل عامل قبل دخول مناطق الخطر.",
        impact: "معدل امتثال 99%",
        icon: "HardHat",
        mediaUrl: "https://protex-image-asset-cdn.s3.eu-west-1.amazonaws.com/PPE/PPE+X+detection.gif"
      },
      {
        title: "مراقبة المناطق المحظورة",
        description: "تنبيهات تلقائية عند دخول الموظفين غير المصرح لهم إلى مناطق الآلات عالية المخاطر.",
        impact: "صفر حوادث تسلل",
        icon: "Eye",
        mediaUrl: "https://protex-image-asset-cdn.s3.eu-west-1.amazonaws.com/Area+Control/Max+worker+count.(area+control)+gif.gif"
      },
      {
        title: "سلامة المركبات والرافعات الشوكية",
        description: "اكتشاف السرعة، والمناورات غير الصحيحة، وتنبيهات التقارب بين المركبات والمشاة.",
        impact: "تقليل الاصطدامات بنسبة 65%",
        icon: "Truck",
        mediaUrl: "https://protex-image-asset-cdn.s3.eu-west-1.amazonaws.com/Vehicle+Control/Speeding.+(vehicle+control)+gif.gif"
      },
      {
        title: "اكتشاف الحريق والدخان",
        description: "اكتشاف فائق السرعة للدخان وألسنة اللهب، غالباً ما يتفوق على مستشعرات الأجهزة القياسية.",
        impact: "جاهزية الاستجابة السريعة",
        icon: "Flame",
        mediaUrl: "https://visionify.ai/videos/smoke-and-fire-drill.mp4"
      },
      {
        title: "اكتشاف الانزلاق والسقوط",
        description: "إخطار فوري لفرق الاستجابة للطوارئ عند سقوط عامل، مما يقلل وقت الاستجابة الطبية.",
        impact: "مساعدة طبية أسرع",
        icon: "AlertTriangle",
        mediaUrl: "https://visionify.ai/videos/slip-and-fall-1.mp4"
      },
      {
        title: "اكتشاف التدخين",
        description: "ضمان الامتثال في مناطق خطر الحريق من خلال تحديد نشاط التدخين غير المصرح به في الوقت الفعلي.",
        impact: "تخفيف مخاطر الحريق",
        icon: "Wind",
        mediaUrl: "https://visionify.ai/videos/no-smoking-1.mp4"
      },
      {
        title: "الامتثال للهواتف المحمولة",
        description: "تحديد السلوك المشتت في الممرات الخطرة ومناطق العمليات حيث يكون التركيز ضرورياً.",
        impact: "تعزيز الوعي بالموقف",
        icon: "Smartphone",
        mediaUrl: "https://visionify.ai/videos/mobile-phone-compliance-walkway.mp4"
      },
      {
        title: "اكتشاف الانسكابات والتسريبات",
        description: "تحليل الذكاء الاصطناعي لتحديد مخاطر السوائل على الأرض لمنع الانزلاق والتعرض الكيميائي.",
        impact: "سلامة أرضية استباقية",
        icon: "Droplets",
        mediaUrl: "https://visionify.ai/videos/spills-and-leaks-detection-video-1.mp4"
      }
    ],
    caseStudy: {
      title: "نجاح مصنع سيارات عالمي",
      description: "تطبيق VisionSafe AI عبر 12 خط إنتاج لأتمتة تدقيق السلامة وإدارة المخاطر في الوقت الفعلي.",
      results: [
        "تقليل الحوادث الوشيكة بنسبة 70%",
        "تحقيق العائد على الاستثمار في غضون 9 أشهر",
        "انخفاض بنسبة 40% في أقساط تأمين السلامة"
      ],
      sourceUrl: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution"
    },
    businessImpact: {
      roi: "متوسط فترة استرداد أقل من 12 شهراً من خلال تقليل المسؤولية وتوقف العمليات.",
      longTermValue: "الانتقال من ثقافة السلامة القائمة على رد الفعل إلى ثقافة استباقية مع رؤى مدفوعة بالبيانات."
    },
    sources: [
      { title: "Visionify Manufacturing", uri: "https://visionify.ai/industries/manufacturing" },
      { title: "Protex Industrial Solutions", uri: "https://www.protex.ai/industries/industrial-manufacturing-ai-safety-solution" },
      { title: "viAct Construction & Factory", uri: "https://www.viact.ai/manufacturing" }
    ]
  }
};

export const ADDITIONAL_SERVICES = [
  { icon: "ShieldCheck", title_en: "Hardware Guarding Check", title_ar: "التحقق من حماية الأجهزة" },
  { icon: "Search", title_en: "Object Left-Behind Detection", title_ar: "اكتشاف الأجسام المتروكة" },
  { icon: "UserMinus", title_en: "Lone Worker Safety", title_ar: "سلامة العامل المنفرد" },
  { icon: "Navigation", title_en: "Path Obstruction Detection", title_ar: "اكتشاف عوائق المسار" },
  { icon: "Activity", title_en: "Ergonomic Hazard Alerts", title_ar: "تنبيهات المخاطر المريحة" },
  { icon: "Cpu", title_en: "Machine Usage Analytics", title_ar: "تحليلات استخدام الماكينة" },
  { icon: "EyeOff", title_en: "Privacy Masking AI", title_ar: "إخفاء الخصوصية بالذكاء الاصطناعي" },
  { icon: "Zap", title_en: "Arc Flash Risk Warning", title_ar: "تحذير من مخاطر التماس الكهربائي" }
];

export const TARGET_INDUSTRIES = [
  { icon: Truck, title_en: "Logistics & Supply-Chain", title_ar: "الخدمات اللوجستية وسلاسل التوريد" },
  { icon: ShoppingCart, title_en: "Retail & Wholesale", title_ar: "تجارة التجزئة والجملة" },
  { icon: Factory, title_en: "Industrial Manufacturing", title_ar: "التصنيع الصناعي" },
  { icon: Utensils, title_en: "Food & Bev Manufacturing", title_ar: "تصنيع الأغذية والمشروبات" },
  { icon: Box, title_en: "Warehousing", title_ar: "التخزين" }
];
