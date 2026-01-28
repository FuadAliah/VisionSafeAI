import { DynamicIcon } from './DynamicIcon';

interface AdditionalService {
  icon: string;
  title_en: string;
  title_ar: string;
}

interface AdditionalServicesProps {
  services: AdditionalService[];
  isAr: boolean;
}

export const AdditionalServices = ({ services, isAr }: AdditionalServicesProps) => {
  return (
    <div>
      <div className="mb-10 text-center">
        <h2 className={`text-5xl font-bold text-indigo-500 mb-3 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
          {isAr ? 'المزيد من الخدمات' : 'More Services'}
        </h2>
        <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isAr ? 'arabic-font' : ''}`}>{isAr ? 'أدوات متخصصة لكل تحدي أمني وصناعي' : 'Specialized tools for every industrial safety challenge'}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {services.map((item, idx) => (
          <div key={idx} className="bg-white border-2 border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-purple-300 transition-all h-44 justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border-2 border-purple-100">
              <DynamicIcon name={item.icon} size={28} className="text-purple-600" />
            </div>
            <h4 className={`text-base font-bold text-gray-800 leading-tight ${isAr ? 'arabic-font' : ''}`}>
              {isAr ? item.title_ar : item.title_en}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
