
import React, { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink, 
  Target, 
  Link as LinkIcon, 
  Factory, 
  Truck, 
  ShoppingCart, 
  Box, 
  Utensils 
} from 'lucide-react';
import { PresentationData, Language, ServiceInfo } from './types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const DynamicIcon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return <IconComponent size={size} className={className} />;
};

const ServiceMedia = ({ url, title }: { url: string, title: string }) => {
  const isVideo = url.endsWith('.mp4');
  if (isVideo) {
    return (
      <video 
        src={url} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover rounded-xl"
      />
    );
  }
  return (
    <img 
      src={url} 
      alt={title} 
      className="w-full h-full object-cover rounded-xl" 
    />
  );
};

const STATIC_DATA: Record<Language, PresentationData> = {
  en: {
    title: "Revolutionizing Industrial Safety",
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
    title: "ثورة في السلامة الصناعية",
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

const ADDITIONAL_SERVICES = [
  { icon: "ShieldCheck", title_en: "Hardware Guarding Check", title_ar: "التحقق من حماية الأجهزة" },
  { icon: "Search", title_en: "Object Left-Behind Detection", title_ar: "اكتشاف الأجسام المتروكة" },
  { icon: "UserMinus", title_en: "Lone Worker Safety", title_ar: "سلامة العامل المنفرد" },
  { icon: "Navigation", title_en: "Path Obstruction Detection", title_ar: "اكتشاف عوائق المسار" },
  { icon: "Activity", title_en: "Ergonomic Hazard Alerts", title_ar: "تنبيهات المخاطر المريحة" },
  { icon: "Cpu", title_en: "Machine Usage Analytics", title_ar: "تحليلات استخدام الماكينة" },
  { icon: "EyeOff", title_en: "Privacy Masking AI", title_ar: "إخفاء الخصوصية بالذكاء الاصطناعي" },
  { icon: "Zap", title_en: "Arc Flash Risk Warning", title_ar: "تحذير من مخاطر القوس الكهربائي" }
];

const TARGET_INDUSTRIES = [
  { icon: Truck, title_en: "Logistics & Supply-Chain", title_ar: "الخدمات اللوجستية وسلاسل التوريد" },
  { icon: ShoppingCart, title_en: "Retail & Wholesale", title_ar: "تجارة التجزئة والجملة" },
  { icon: Factory, title_en: "Industrial Manufacturing", title_ar: "التصنيع الصناعي" },
  { icon: Utensils, title_en: "Food & Bev Manufacturing", title_ar: "تصنيع الأغذية والمشروبات" },
  { icon: Box, title_en: "Warehousing", title_ar: "التخزين" }
];

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = STATIC_DATA[lang];

  const chartData = useMemo(() => {
    return data.problemStatement.stats.map(stat => {
      const numericPart = stat.value.replace(/[^0-9.]/g, '');
      const val = parseFloat(numericPart) || 0;
      return { ...stat, numericValue: val, originalValue: stat.value };
    });
  }, [data]);

  const handleLangToggle = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
    setCurrentSlide(0);
  };

  const isAr = lang === 'ar';
  const directionClass = isAr ? 'rtl' : 'ltr';

  const serviceSlidesData = useMemo(() => {
    const chunks: ServiceInfo[][] = [];
    for (let i = 0; i < data.services.length; i += 4) {
      chunks.push(data.services.slice(i, i + 4));
    }
    return chunks;
  }, [data]);

  const slides = useMemo(() => {
    const result = [
      // Slide 0: Hero
      <div key="hero" className="flex flex-col items-center justify-center text-center h-full p-8 animate-in fade-in duration-1000">
        <div className="mb-6 p-5 bg-blue-600/10 rounded-[2rem] relative">
          <ShieldCheck size={80} className="text-blue-500" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
        </div>
        <h1 className={`text-5xl md:text-7xl font-black text-white mb-4 tracking-tight ${isAr ? 'arabic-font leading-normal' : 'leading-tight'}`}>{data.title}</h1>
        <p className={`text-xl md:text-2xl text-slate-400 max-w-4xl leading-relaxed font-light ${isAr ? 'arabic-font' : ''}`}>{data.subtitle}</p>
        <div className="mt-10 flex items-center gap-4 bg-slate-800/40 px-6 py-3 rounded-full border border-slate-700/50">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping"></span>
          <span className={`text-base font-bold text-slate-300 uppercase tracking-[0.3em] ${isAr ? 'arabic-font' : ''}`}>
            {isAr ? 'الذكاء الاصطناعي الصناعي' : 'Industrial Safety AI'}
          </span>
        </div>
      </div>,

      // Slide 1: Problem & Stats
      <div key="problem" className="grid md:grid-cols-2 gap-10 items-center h-full p-12">
        <div className={isAr ? 'order-2' : ''}>
          <div className="flex items-center gap-4 mb-5 text-red-400">
            <AlertCircle size={36} />
            <h2 className={`text-3xl font-black ${isAr ? 'arabic-font' : ''}`}>{isAr ? 'واقع السلامة الصناعية اليوم' : 'The Reality of Industrial Safety'}</h2>
          </div>
          <p className={`text-lg text-slate-300 leading-relaxed mb-8 ${isAr ? 'arabic-font' : ''}`}>{data.problemStatement.text}</p>
          <div className="grid grid-cols-2 gap-4">
            {data.problemStatement.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/50 hover:border-red-500/30 transition-all flex flex-col justify-between h-32">
                <div>
                  <div className="text-3xl font-black text-white mb-0.5">{stat.value}</div>
                  <div className={`text-[10px] text-slate-400 font-black uppercase tracking-widest ${isAr ? 'arabic-font' : ''}`}>{stat.label}</div>
                </div>
                {stat.sourceUrl && (
                  <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] text-blue-400 hover:underline">
                    <LinkIcon size={10} /> {isAr ? 'عرض المرجع' : 'View Reference'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={`bg-slate-900/60 p-8 rounded-[2.5rem] h-full flex flex-col border border-slate-800 ${isAr ? 'order-1' : ''}`}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis dataKey="label" type="category" hide />
              <Tooltip cursor={{ fill: 'rgba(59,130,246,0.1)' }} />
              <Bar dataKey="numericValue" radius={[0, 8, 8, 0]} barSize={40}>
                {chartData.map((_, index) => <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#6366f1'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    ];

    // Service Slides (4 per slide - Slides 3 and 4)
    serviceSlidesData.forEach((chunk, idx) => {
      result.push(
        <div key={`services-grid-${idx}`} className="grid grid-cols-2 gap-4 h-full p-8">
          {chunk.map((service, sIdx) => (
            <div key={sIdx} className="bg-slate-800/20 rounded-[1.2rem] border border-slate-700/30 overflow-hidden flex flex-col group transition-all hover:bg-slate-800/40">
              <div className="h-[70%] relative"> {/* Increased media height further */}
                <ServiceMedia url={service.mediaUrl} title={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/10 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-lg shadow-xl shrink-0">
                    <DynamicIcon name={service.icon} size={20} className="text-white" />
                  </div>
                  <h3 className={`text-lg font-black text-white leading-tight ${isAr ? 'arabic-font' : ''}`}>{service.title}</h3>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <p className={`text-xs text-slate-300 mb-2 leading-relaxed flex-grow line-clamp-2 ${isAr ? 'arabic-font' : ''}`}>{service.description}</p>
                <div className={`mt-auto inline-flex items-center gap-2 text-[9px] font-black text-blue-400 py-2 px-4 bg-blue-500/10 rounded-lg border border-blue-500/20 uppercase tracking-widest ${isAr ? 'arabic-font' : ''}`}>
                  <Target size={10} /> {service.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    });

    // Slide 5 (Additional Services - Enhanced into Cards)
    result.push(
      <div key="full-services-list" className="flex flex-col h-full p-12">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-black text-white mb-2 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
            {isAr ? 'قدرات الكشف الشاملة' : 'Comprehensive Detection Capabilities'}
          </h2>
          <p className="text-lg text-slate-400">{isAr ? 'أدوات متخصصة لكل تحدي أمني وصناعي' : 'Specialized tools for every industrial safety challenge'}</p>
        </div>
        <div className="grid grid-cols-4 gap-4 flex-grow items-center max-w-6xl mx-auto"> 
          {ADDITIONAL_SERVICES.map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center group hover:bg-blue-600/10 hover:border-blue-500/30 transition-all h-40 justify-center">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <DynamicIcon name={item.icon} size={24} className="text-blue-500" />
              </div>
              <h4 className={`text-base font-bold text-slate-100 leading-tight ${isAr ? 'arabic-font' : ''}`}>
                {isAr ? item.title_ar : item.title_en}
              </h4>
            </div>
          ))}
        </div>
      </div>
    );

    // Slide 6 (Industries)
    result.push(
      <div key="target-industries" className="flex flex-col h-full p-12">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-black text-white mb-2 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
            {isAr ? 'القطاعات المستهدفة' : 'Targeted Industries'}
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-3 max-w-6xl mx-auto w-full flex-grow items-center">
          {TARGET_INDUSTRIES.map((industry, idx) => (
            <div key={idx} className="bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-800 flex flex-col items-center justify-center text-center group hover:bg-blue-600/5 hover:border-blue-500/30 transition-all h-56">
              <div className="p-4 bg-blue-600/10 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <industry.icon size={36} className="text-blue-500" />
              </div>
              <h4 className={`text-base font-black text-white leading-tight ${isAr ? 'arabic-font' : ''}`}>
                {isAr ? industry.title_ar : industry.title_en}
              </h4>
            </div>
          ))}
        </div>
      </div>
    );

    // Slide 7: Case Study
    result.push(
      <div key="case-study" className="grid md:grid-cols-2 gap-12 items-center h-full p-12">
        <div className={isAr ? 'order-2' : ''}>
          <div className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-xs font-black mb-6 uppercase tracking-widest">
            {isAr ? 'دراسة حالة حقيقية' : 'Real-World Case Study'}
          </div>
          <h2 className={`text-4xl font-black text-white mb-4 leading-tight ${isAr ? 'arabic-font leading-tight' : ''}`}>{data.caseStudy.title}</h2>
          <p className={`text-lg text-slate-300 mb-6 leading-relaxed ${isAr ? 'arabic-font' : ''}`}>{data.caseStudy.description}</p>
          <div className="space-y-3 mb-8">
            {data.caseStudy.results.map((res, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-500 mt-1" />
                <span className={`text-slate-200 text-lg ${isAr ? 'arabic-font' : ''}`}>{res}</span>
              </div>
            ))}
          </div>
          {data.caseStudy.sourceUrl && (
            <a href={data.caseStudy.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors text-blue-400 text-base font-bold">
              <LinkIcon size={18} /> {isAr ? 'عرض دراسة الحالة كاملة' : 'View Full Case Study'}
            </a>
          )}
        </div>
        <div className={`relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl h-full ${isAr ? 'order-1' : ''}`}>
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Factory" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
        </div>
      </div>
    );

    // Slide 8: Impact
    result.push(
      <div key="impact" className="grid md:grid-cols-2 gap-12 items-center h-full p-12">
        <div className={`space-y-8 ${isAr ? 'order-2' : ''}`}>
          <div className="flex items-center gap-5">
            <TrendingUp className="text-blue-400" size={48} />
            <h2 className={`text-4xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>{isAr ? 'الجدوى الاقتصادية' : 'Economic Viability'}</h2>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-[2rem] border border-slate-700/40 shadow-2xl">
            <h4 className="text-blue-400 font-black mb-3 flex items-center gap-3 text-lg uppercase tracking-wider"><BarChart3 size={24} /> {isAr ? 'العائد على الاستثمار' : 'Return on Investment'}</h4>
            <p className="text-xl text-slate-200 font-medium leading-relaxed">{data.businessImpact.roi}</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-[2rem] border border-slate-700/40 shadow-2xl">
            <h4 className="text-green-400 font-black mb-3 flex items-center gap-3 text-lg uppercase tracking-wider"><Target size={24} /> {isAr ? 'القيمة الإستراتيجية' : 'Strategic Value'}</h4>
            <p className="text-xl text-slate-200 font-medium leading-relaxed">{data.businessImpact.longTermValue}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="w-48 h-48 rounded-full border-[8px] border-blue-500/20 flex items-center justify-center relative">
               <div className="absolute inset-0 rounded-full border-t-[8px] border-blue-500 animate-[spin_4s_linear_infinite]"></div>
               <ShieldCheck size={64} className="text-blue-500" />
            </div>
            <h3 className={`text-3xl font-black text-white max-sm ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
              {isAr ? 'سلامة بلا حوادث، إنتاجية بلا توقف' : 'Zero Incidents, Unstoppable Productivity'}
            </h3>
        </div>
      </div>
    );

    // Slide 9: Sources
    result.push(
      <div key="sources" className="flex flex-col h-full p-12 items-center justify-center text-center">
        <div className="mb-10">
          <h2 className={`text-4xl font-black text-white mb-4 ${isAr ? 'arabic-font' : ''}`}>{isAr ? 'المراجع والمصادر' : 'References & Sources'}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{isAr ? 'تم التحقق من هذه البيانات من خلال البحث المباشر في المواقع الرسمية لرواد السلامة الصناعية.' : 'Verified through direct research from the official sites of industrial safety leaders.'}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl">
          {data.sources?.map((source, idx) => (
            <a key={idx} href={source.uri} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-slate-900/40 border border-slate-800 rounded-[1.2rem] hover:bg-blue-600/10 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4 text-left">
                <Globe size={24} className="text-slate-500 group-hover:text-blue-400" />
                <p className="text-white text-lg font-bold truncate max-w-[300px]">{source.title}</p>
              </div>
              <ExternalLink size={24} className="text-slate-700 group-hover:text-blue-400" />
            </a>
          ))}
        </div>
        <div className="mt-12">
          <button className={`px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-full transition-all flex items-center gap-4 text-xl shadow-2xl shadow-blue-600/40 ${isAr ? 'arabic-font' : ''}`}>
            {isAr ? 'ابدأ رحلة السلامة الآن' : 'Start Your Safety Journey Now'}
            <ChevronRight size={24} className={isAr ? 'rotate-180' : ''} />
          </button>
        </div>
      </div>
    );

    return result;
  }, [data, isAr, chartData, serviceSlidesData]);

  const nextSlide = () => currentSlide < slides.length - 1 && setCurrentSlide(prev => prev + 1);
  const prevSlide = () => currentSlide > 0 && setCurrentSlide(prev => prev - 1);

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col overflow-hidden font-sans`} dir={directionClass}>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tighter text-white">VisionSafe<span className="text-blue-500">AI</span></span>
            <div className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mt-0.5">{isAr ? 'الذكاء الصناعي للمستقبل' : 'Industrial Intelligence'}</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={handleLangToggle} className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-blue-500 text-sm font-bold transition-all">
            <Globe size={16} className="text-blue-500" />
            <span className={isAr ? 'arabic-font' : ''}>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center pt-20 pb-24 px-6">
        <div className="w-full max-w-7xl aspect-16-9 bg-slate-900/30 rounded-[2.5rem] border border-slate-800 shadow-[0_0_60px_rgba(0,0,0,0.3)] relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-1 flex gap-1 z-20 px-10 pt-5">
            {slides.map((_, i) => (
              <div key={i} className={`h-full flex-grow transition-all duration-700 rounded-full ${i <= currentSlide ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-slate-800'}`} />
            ))}
          </div>
          
          <div className="h-full">
            {slides[currentSlide]}
          </div>

          <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-indigo-500/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full z-50 px-10 py-6 flex items-center justify-center pointer-events-none">
        <div className="bg-slate-900/90 border border-slate-700/50 backdrop-blur-3xl p-3 rounded-full flex items-center gap-6 shadow-xl pointer-events-auto">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0} 
            className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-20 transition-all border border-slate-700"
          >
            <ChevronLeft size={28} className={isAr ? 'rotate-180' : ''} />
          </button>
          
          <div className="px-8 py-2 bg-slate-950/50 rounded-full text-slate-300 font-black text-lg tracking-[0.1em]">
            {currentSlide + 1} <span className="text-slate-600 mx-1">/</span> {slides.length}
          </div>

          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1} 
            className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-20 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <ChevronRight size={28} className={isAr ? 'rotate-180' : ''} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
