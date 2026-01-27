import { Mail, Phone, ChevronRight } from 'lucide-react';

interface ContactsProps {
  isAr: boolean;
}

export const Contacts = ({ isAr }: ContactsProps) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-black text-gray-900 mb-4 ${isAr ? 'arabic-font leading-relaxed' : ''}`}>
            {isAr ? 'هل أنت مستعد لنقلة نوعية؟' : 'Are You Ready for a Qualitative Shift?'}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isAr ? 'arabic-font' : ''}`}>
            {isAr 
              ? 'ابدأ التجربة الموجهة (Pilot) في موقع واحد لمدة 4 أسابيع وشاهد الفرق بنفسك.'
              : 'Start a guided pilot experience at one site for 4 weeks and see the difference yourself.'}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Email */}
          <a 
            href="mailto:eye.design17@yahoo.com?subject=VisionSafe AI - Pilot Program Inquiry&body=I'm interested in starting a 4-week pilot program at my facility." 
            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors group"
          >
            <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
              <Mail size={20} className="text-purple-600" />
            </div>
            <span className={`text-base font-medium ${isAr ? 'arabic-font' : ''}`}>eye.design17@yahoo.com</span>
          </a>

          <div className="hidden md:block w-px h-8 bg-gray-300"></div>

          {/* Mobile */}
          <a 
            href="tel:00962776968571" 
            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors group"
          >
            <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
              <Phone size={20} className="text-purple-600" />
            </div>
            <span className={`text-base font-medium ${isAr ? 'arabic-font' : ''}`}>00962776968571</span>
          </a>
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a 
            href="mailto:eye.design17@yahoo.com?subject=VisionSafe AI - Pilot Program&body=I'm ready to start a 4-week pilot program. Please contact me."
            className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-black rounded-full transition-all text-lg ${isAr ? 'arabic-font' : ''}`}
          >
            {isAr ? 'ابدأ التجربة الموجهة الآن' : 'Start Pilot Program Now'}
            <ChevronRight size={20} className={isAr ? 'rotate-180' : ''} />
          </a>
        </div>
      </div>
    </section>
  );
};
