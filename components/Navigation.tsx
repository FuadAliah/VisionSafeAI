import { Globe, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface NavigationProps {
  lang: Language;
  isAr: boolean;
  onLangToggle: () => void;
}

export const Navigation = ({ lang, isAr, onLangToggle }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-5 py-4 flex items-center justify-between bg-white/80 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
          <ShieldCheck size={24} className="text-white" />
        </div>
        <div>
          <span className={`text-xl font-bold tracking-tighter text-gray-900 ${isAr ? 'arabic-font' : ''}`}>VisionSafe<span className="text-purple-600">AI</span></span>
          <div className={`text-[9px] font-bold text-gray-500 tracking-[0.4em] ${isAr ? 'arabic-font' : ''}`}>{isAr ? 'الذكاء الصناعي للمستقبل' : 'Industrial Intelligence'}</div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={onLangToggle} className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border-2 border-gray-200 hover:border-purple-300 text-sm font-bold transition-all">
          <Globe size={18} className="text-purple-600" />
          <span className={isAr ? 'arabic-font' : ''}>{lang === 'en' ? 'العربية' : 'English'}</span>
        </button>
      </div>
    </nav>
  );
};
