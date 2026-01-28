import { Globe, ExternalLink, ChevronRight } from 'lucide-react';
import { PresentationData } from '../types';

interface SourcesProps {
  data: PresentationData;
  isAr: boolean;
}

export const Sources = ({ data, isAr }: SourcesProps) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`text-5xl font-bold text-indigo-500 mb-5 ${isAr ? 'arabic-font' : ''}`}>
            {isAr ? 'المراجع والمصادر' : 'References & Sources'}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isAr ? 'arabic-font' : ''}`}>
            {isAr ? 'تم التحقق من هذه البيانات من خلال البحث المباشر في المواقع الرسمية لرواد السلامة الصناعية.' : 'Verified through direct research from the official sites of industrial safety leaders.'}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 w-full mb-12">
          {data.sources?.map((source, idx) => (
            <a key={idx} href={source.uri} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-purple-300 transition-all group">
              <div className="flex items-center gap-4">
                <Globe size={28} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                <p className={`text-gray-900 text-lg font-bold ${isAr ? 'arabic-font' : ''}`}>{source.title}</p>
              </div>
              <ExternalLink size={24} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:eye.design17@yahoo.com?subject=VisionSafe AI - General Inquiry&body=Hello, I'd like to learn more about VisionSafe AI solutions."
            className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-full transition-all text-lg ${isAr ? 'arabic-font' : ''}`}
          >
            {isAr ? 'ابدأ رحلة السلامة الآن' : 'Start Your Safety Journey Now'}
            <ChevronRight size={20} className={isAr ? 'rotate-180' : ''} />
          </a>
        </div>
      </div>
    </section>
  );
};
