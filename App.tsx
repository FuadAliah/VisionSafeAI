import React, { useState } from 'react';
import { Language } from './types';
import { STATIC_DATA, ADDITIONAL_SERVICES, TARGET_INDUSTRIES } from './data/staticData';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { CurrentSituation } from './components/CurrentSituation';
import { ComputerVision } from './components/ComputerVision';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { CaseStudy } from './components/CaseStudy';
import { Impact } from './components/Impact';
import { Sources } from './components/Sources';
import { Contacts } from './components/Contacts';

import './style.css';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  const data = STATIC_DATA[lang];
  const isAr = lang === 'ar';
  const directionClass = isAr ? 'rtl' : 'ltr';

  const handleLangToggle = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 text-gray-900 flex flex-col font-sans relative mt-[72px]`} dir={directionClass}>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/20 to-purple-300/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/25 to-purple-200/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-50/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Navigation lang={lang} isAr={isAr} onLangToggle={handleLangToggle} />

      <main className="relative z-10">
        <Hero data={data} isAr={isAr} />
        <ProblemStatement data={data} isAr={isAr} />
        {/* <CurrentSituation isAr={isAr} /> */}
        {/* <ComputerVision isAr={isAr} /> */}
        <Services services={data.services} additionalServices={ADDITIONAL_SERVICES} isAr={isAr} />
        <Industries industries={TARGET_INDUSTRIES} isAr={isAr} />
        <CaseStudy data={data} isAr={isAr} />
        <Impact data={data} isAr={isAr} />
        <Sources data={data} isAr={isAr} />
        <Contacts isAr={isAr} />
      </main>
    </div>
  );
};

export default App;
