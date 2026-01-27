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
          <h2 className={`text-5xl font-black text-gray-900 mb-3 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
            {isAr ? 'خدماتنا' : 'Our Services'}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isAr ? 'arabic-font' : ''}`}>
            {isAr ? 'حلول متقدمة للسلامة الصناعية مدعومة بالذكاء الاصطناعي' : 'Advanced AI-powered industrial safety solutions'}
          </p>
        </div>

        {/* Main Services - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden group transition-all hover:border-purple-300`}
            >
              {/* Image on Left */}
              <div className="w-full h-64 md:h-auto relative">
                <ServiceMedia url={service.mediaUrl} title={service.title} />
              </div>
              
              {/* Information on Right */}
              <div className="w-full py-6 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <DynamicIcon name={service.icon} size={24} className="text-white" />
                  </div>
                  <h3 className={`text-2xl font-black text-gray-900 leading-tight ${isAr ? 'arabic-font' : ''}`}>
                    {service.title}
                  </h3>
                </div>
                <p className={`text-base text-gray-600 mb-6 leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                  {service.description}
                </p>
                <div className={`inline-flex items-center gap-2 text-sm font-bold text-purple-600 py-3 px-6 bg-purple-50 rounded-xl border border-purple-100 uppercase tracking-wider w-fit ${isAr ? 'arabic-font' : ''}`}>
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
            className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-black rounded-full transition-all text-lg ${isAr ? 'arabic-font' : ''}`}
          >
            {isAr ? 'احجز استشارة مجانية' : 'Book a Free Consultation'}
            <ChevronRight size={20} className={isAr ? 'rotate-180' : ''} />
          </a>
        </div>
      </div>
    </section>
  );
};
