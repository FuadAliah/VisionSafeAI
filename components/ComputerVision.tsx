import { Cpu, Zap } from 'lucide-react';
import computerVisionImage from '../src/assets/image.png';

interface ComputerVisionProps {
  isAr: boolean;
}

export const ComputerVision = ({ isAr }: ComputerVisionProps) => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Visual/Demo Area */}
          <div className={isAr ? 'order-2' : ''}>
            <div className="relative bg-white border-2 border-gray-200 rounded-3xl overflow-hidden h-[620px] shadow-sm">
              <img
                src={computerVisionImage}
                alt={isAr ? 'تحليل مباشر للرؤية الحاسوبية' : 'Computer Vision Live Analysis'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className={isAr ? 'order-1' : ''}>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-200 rounded-lg mb-4">
                <span className={`text-purple-600 text-sm font-bold ${isAr ? 'arabic-font' : ''}`}>
                  {isAr ? 'تقنية الذكاء الاصطناعي' : 'AI Technology'}
                </span>
              </div>
              <h2 className={`text-5xl font-bold text-indigo-500 mb-6 leading-tight ${isAr ? 'arabic-font' : ''}`}>
                {isAr ? 'عيون رقمية.. بذكاء بشري وسرعة فائقة' : 'Digital Eyes... Human Intelligence, Super Speed'}
              </h2>
              <p className={`text-xl text-gray-600 leading-relaxed mb-8 ${isAr ? 'arabic-font' : ''}`}>
                {isAr
                  ? 'نتجاوز مفهوم المراقبة التقليدية لنمنح منشأتك "وعياً لحظياً" قادراً على كشف المخاطر قبل تحولها إلى حوادث'
                  : 'We transcend traditional monitoring concepts to give your facility "instant awareness" capable of detecting risks before they become incidents.'}
              </p>
            </div>

            {/* Two Feature Cards */}
            <div className="space-y-6">
              {/* Smart Transformation Card */}
              <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Cpu size={24} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isAr ? 'arabic-font' : ''}`}>
                      {isAr ? 'نقطة التحويل الذكي' : 'Smart Transformation Point'}
                    </h3>
                    <p className={`text-gray-600 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                      {isAr
                        ? 'دمج الذكاء الاصطناعي مع البنية التحتية الحالية لتحويل الكاميرات إلى أدوات لقياس الكفاءة وتدفق العمل.'
                        : 'Integrating AI with existing infrastructure to transform cameras into tools for measuring efficiency and workflow.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Real-time Analysis Card */}
              <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <Zap size={24} className="text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isAr ? 'arabic-font' : ''}`}>
                      {isAr ? 'نقطة التحليل المباشر' : 'Real-time Analysis Point'}
                    </h3>
                    <p className={`text-gray-600 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                      {isAr
                        ? 'تحليل حركة الآلات والعمال لحظياً لتحديد الاختناقات وضمان استمرارية العمل دون انقطاع.'
                        : 'Real-time analysis of machine and worker movements to identify bottlenecks and ensure uninterrupted workflow continuity.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
