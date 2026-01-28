import { CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { PresentationData } from '../types';

interface CaseStudyProps {
  data: PresentationData;
  isAr: boolean;
}

export const CaseStudy = ({ data, isAr }: CaseStudyProps) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isAr ? 'order-2' : ''}>
            <div className={`inline-block px-5 py-2 bg-green-50 border-2 border-green-200 rounded-full text-green-600 text-sm font-bold mb-6 uppercase tracking-wider ${isAr ? 'arabic-font' : ''}`}>
              {isAr ? 'دراسة حالة حقيقية' : 'Real-World Case Study'}
            </div>
            <h2 className={`text-5xl font-bold text-indigo-500 mb-5 leading-tight ${isAr ? 'arabic-font' : ''}`}>
              {data.caseStudy.title}
            </h2>
            <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
              {data.caseStudy.description}
            </p>
            <div className="space-y-4 mb-10">
              {data.caseStudy.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className={`text-gray-700 text-lg font-medium ${isAr ? 'arabic-font' : ''}`}>
                    {res}
                  </span>
                </div>
              ))}
            </div>
            {data.caseStudy.sourceUrl && (
              <a href={data.caseStudy.sourceUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-purple-200 rounded-xl hover:border-purple-400 transition-all text-purple-600 text-base font-bold ${isAr ? 'arabic-font' : ''}`}>
                <LinkIcon size={20} /> {isAr ? 'عرض دراسة الحالة كاملة' : 'View Full Case Study'}
              </a>
            )}
          </div>
          <div className={`relative rounded-3xl overflow-hidden border-2 border-purple-100 h-[500px] ${isAr ? 'order-1' : ''}`}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Factory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
