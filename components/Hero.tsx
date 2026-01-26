import { ShieldCheck, ChevronRight } from 'lucide-react';
import { PresentationData } from '../types';

interface HeroProps {
  data: PresentationData;
  isAr: boolean;
}

export const Hero = ({ data, isAr }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl">
            <ShieldCheck size={64} className="text-white" />
          </div>
        </div>
        <h1 className={`text-6xl md:text-5xl font-black text-indigo-900 mb-6 tracking-tight leading-tight ${isAr ? 'arabic-font leading-tight' : ''}`}>
          {data.title}
        </h1>
        <p className={`text-2xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12 ${isAr ? 'arabic-font' : ''}`}>
          {data.subtitle}
        </p>
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-purple-200 rounded-full mb-8">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <span className={`text-lg font-bold text-purple-600 uppercase tracking-wider ${isAr ? 'arabic-font' : ''}`}>
            {isAr ? 'الذكاء الاصطناعي الصناعي' : 'Industrial Safety AI'}
          </span>
        </div>
        
      </div>
    </section>
  );
};
