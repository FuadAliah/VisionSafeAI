import { ShieldCheck, TrendingUp, BarChart3, Target, ChevronRight } from 'lucide-react';
import { PresentationData } from '../types';

interface ImpactProps {
  data: PresentationData;
  isAr: boolean;
}

export const Impact = ({ data, isAr }: ImpactProps) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row-reverse gap-12 items-center">
          <div className={`w-1/2 space-y-8 ${isAr ? 'order-2' : ''}`}>
            <div className="flex items-center gap-5">
              <h2 className={`text-5xl font-black text-gray-900 ${isAr ? 'arabic-font' : ''}`}>
                {isAr ? 'الجدوى الاقتصادية' : 'Economic Viability'}
              </h2>
            </div>
            <div className="bg-white border-2 border-purple-100 p-8 rounded-3xl">
              <h4 className={`text-purple-600 font-black mb-4 flex items-center gap-3 text-xl uppercase tracking-wider ${isAr ? 'arabic-font' : ''}`}>
                <BarChart3 size={28} /> {isAr ? 'العائد على الاستثمار' : 'Return on Investment'}
              </h4>
              <p className={`text-xl text-gray-700 font-medium leading-relaxed ${isAr ? 'arabic-font' : ''}`}>{data.businessImpact.roi}</p>
            </div>
            <div className="bg-white border-2 border-green-100 p-8 rounded-3xl">
              <h4 className={`text-green-600 font-black mb-4 flex items-center gap-3 text-xl uppercase tracking-wider ${isAr ? 'arabic-font' : ''}`}>
                <Target size={28} /> {isAr ? 'القيمة الإستراتيجية' : 'Strategic Value'}
              </h4>
              <p className={`text-xl text-gray-700 font-medium leading-relaxed ${isAr ? 'arabic-font' : ''}`}>{data.businessImpact.longTermValue}</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center gap-8 text-center">
            <div className="w-56 h-56 rounded-full border-4 border-purple-100 flex items-center justify-center relative bg-gradient-to-br from-purple-50 to-white">
              <div className="absolute inset-0 rounded-full border-t-4 border-purple-500 animate-[spin_4s_linear_infinite]"></div>
              <div className="p-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full">
                <ShieldCheck size={56} className="text-white" />
              </div>
            </div>
            <h3 className={`text-3xl font-black text-gray-900 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
              {isAr ? 'سلامة بلا حوادث، إنتاجية بلا توقف' : 'Zero Incidents, Unstoppable Productivity'}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
