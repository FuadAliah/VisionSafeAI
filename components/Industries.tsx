import { LucideIcon } from 'lucide-react';

interface Industry {
  icon: LucideIcon;
  title_en: string;
  title_ar: string;
}

interface IndustriesProps {
  industries: Industry[];
  isAr: boolean;
}

export const Industries = ({ industries, isAr }: IndustriesProps) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className={`text-5xl font-bold text-indigo-500 mb-2 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
            {isAr ? 'القطاعات المستهدفة' : 'Targeted Industries'}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon;
            return (
              <div key={idx} className="bg-white border-2 border-gray-100 p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-purple-300 transition-all h-64">
                <div className="p-5 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl mb-5 group-hover:scale-110 transition-transform border-2 border-purple-100">
                  <IconComponent size={40} className="text-purple-600" />
                </div>
                <h4 className={`text-base font-bold text-gray-900 leading-tight ${isAr ? 'arabic-font' : ''}`}>
                  {isAr ? industry.title_ar : industry.title_en}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
