import { ShieldCheck, ChevronRight } from 'lucide-react';
import { PresentationData } from '../types';
import headerVideo from '../src/assets/header-safe-eng.mp4';

interface HeroProps {
  data: PresentationData;
  isAr: boolean;
}

export const Hero = ({ data, isAr }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-start justify-center relative overflow-hidden bg-[#eaecf3]">
      <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${isAr ? 'rtl' : 'ltr'}`}>
        {/* Video Section */}
        <div className={`relative w-full h-[calc(100vh-240px)] ${isAr ? 'order-1' : 'order-2'}`}>
          <div className="absolute w-auto right-0 top-0 bottom-0 aspect-[5/4]">
            <div className="absolute z-10 w-[140px] left-0 top-0 bottom-0 aspect-[5/4] bg-[linear-gradient(90deg,#eaecf3_0,#EAECF300_100%)]"></div>
            <video
              src={headerVideo}
              className="w-full h-full object-contain z-10"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <div class="absolute right-0 bottom-0 w-[120vw] h-[6.25rem] bg-[radial-gradient(102%_82%_at_98%_100%,#eaecf3_15%,#eaecf3_17%,#e5e8f000_100%)]">
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className={`order-2 z-50 w-2/3 flex flex-col justify-center`}>
          <div className="flex flex-col gap-4 mt-32">

            <h1 className={`text-5xl font-bold text-indigo-600 tracking-tight ${isAr ? 'arabic-font' : ''}`}>
              {data.title}
            </h1>

            <h2 className={`text-2xl font-bold text-indigo-500 tracking-tight ${isAr ? 'arabic-font' : ''}`}>
              {data.secTitle}
            </h2>

            <p className={`text-xl md:text-2xl text-gray-600 mb-8 font-light ${isAr ? 'arabic-font' : ''}`}>
              {data.subtitle}
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 px-6 py-3 bg-white border-2 border-purple-200 rounded-full">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className={`text-md font-bold text-purple-600 uppercase ${isAr ? 'arabic-font' : ''}`}>
              {isAr ? 'الذكاء الاصطناعي في الصناعة' : 'Industrial Safety AI'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
