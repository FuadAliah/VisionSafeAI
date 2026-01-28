import { Target, ChevronRight } from 'lucide-react';
import { ServiceInfo } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ServiceMedia } from './ServiceMedia';
import { AdditionalServices } from './AdditionalServices';

interface ServicesProps {
  services: ServiceInfo[];
  additionalServices: Array<{ icon: string; title_en: string; title_ar: string }>;
  isAr: boolean;
}

export const Services = ({ services, additionalServices, isAr }: ServicesProps) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h2 className={`text-5xl font-bold text-indigo-500 mb-3 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
            {isAr ? 'الأتمتة في اكتشاف المخاطر' : 'Automation in Risk Detection'}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isAr ? 'arabic-font' : ''}`}>
            {isAr ? 'يعمل النظام الذكي كحارس رقمي يراقب البيئة الصناعية باستمرار، مكتشفاً الانحرافات الدقيقة التي قد تغيب عن العين البشرية.' : 'The AI system works as a digital guard monitoring the industrial environment continuously, uncovering subtle deviations that may escape human observation.'}
          </p>
        </div>

        {/* Main Services - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group hover:shadow-lg transition-all`}
            >
              {/* Image on up */}
              <div className="w-full h-64 md:h-auto relative">
                <ServiceMedia url={service.mediaUrl} title={service.title} />
              </div>

              {/* Information on down */}
              <div className="w-full py-4 flex flex-col justify-center border border-gray-200 p-4 rounded-b-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <DynamicIcon name={service.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className={`text-2xl mt-3 font-bold text-gray-900 leading-tight ${isAr ? 'arabic-font' : ''}`}>
                      {service.title}
                    </h3>
                    <p className={`text-base text-gray-600 mb-6 leading-relaxed h-12 ${isAr ? 'arabic-font' : ''}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className={`inline-flex items-center gap-2 text-xs font-bold text-purple-600 py-2 px-4 bg-purple-50 rounded-xl border border-purple-100 uppercase tracking-wider w-fit ${isAr ? 'arabic-font' : ''}`}>
                  <Target size={14} /> {service.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services at the end */}
        <AdditionalServices services={additionalServices} isAr={isAr} />

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:eye.design17@yahoo.com?subject=VisionSafe AI - Service Inquiry&body=I'm interested in implementing VisionSafe AI services in my facility."
            className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-full transition-all text-lg ${isAr ? 'arabic-font' : ''}`}
          >
            {isAr ? 'احجز استشارة مجانية' : 'Book a Free Consultation'}
            <ChevronRight size={20} className={isAr ? 'rotate-180' : ''} />
          </a>
        </div>
      </div>
    </section>
  );
};
