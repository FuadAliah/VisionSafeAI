import { Users, FileText, EyeOff, Clock, TrendingDown, AlertTriangle, ChevronRight } from 'lucide-react';

interface CurrentSituationProps {
  isAr: boolean;
}

export const CurrentSituation = ({ isAr }: CurrentSituationProps) => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Right Column - Main Content */}
          <div className={isAr ? 'order-1' : ''}>
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-lg mb-4">
                <span className="text-blue-400 text-sm font-bold">
                  {isAr ? 'الوضع الراهن' : 'Current Situation'}
                </span>
              </div>
              <h2 className={`text-4xl font-black text-white mb-6 leading-tight ${isAr ? 'arabic-font' : ''}`}>
                {isAr ? 'الفجوة في أنظمة السلامة التقليدية' : 'The Gap in Traditional Safety Systems'}
              </h2>
              <p className={`text-xl text-gray-300 leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                {isAr 
                  ? 'تعتمد معظم المنشآت على الرقابة البشرية المتقطعة، مما يخلق فجوة هائلة بين "ما نراه" و "ما يحدث بالفعل" في أرض المصنع.'
                  : 'Most facilities rely on intermittent human supervision, which creates a huge gap between "what we see" and "what actually happens" on the factory floor.'}
              </p>
            </div>

            {/* Two Cards Below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Limited Time Monitoring */}
              <div className="bg-gray-800/50 border-2 border-gray-700/50 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Users size={24} className="text-blue-400" />
                  </div>
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'رقابة محدودة الوقت' : 'Limited Time Monitoring'}
                  </h3>
                </div>
                <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                  {isAr 
                    ? 'المشرف لا يمكنه التواجد في كل مكان'
                    : 'The supervisor cannot be everywhere'}
                </p>
              </div>

              {/* Late Reports */}
              <div className="bg-gray-800/50 border-2 border-gray-700/50 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <FileText size={24} className="text-blue-400" />
                  </div>
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'تقارير متأخرة' : 'Late Reports'}
                  </h3>
                </div>
                <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                  {isAr 
                    ? 'رد الفعل يأتي بعد وقوع الحادث وقت العمل المغطى بالرقابة'
                    : 'Response comes after the incident during monitored work time'}
                </p>
              </div>
            </div>
          </div>

          {/* Left Column - Critical Weaknesses */}
          <div className={isAr ? 'order-1' : ''}>
            {/* Critical Weaknesses Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-red-500/20 border-2 border-red-500/30 rounded-xl">
                <AlertTriangle size={24} className="text-red-400" />
                <span className={`text-red-400 text-lg font-black ${isAr ? 'arabic-font' : ''}`}>
                  {isAr ? 'نقاط الضعف الحرجة' : 'Critical Weaknesses'}
                </span>
              </div>
            </div>

            {/* Three Problem Cards */}
            <div className="space-y-6">
              {/* Blind Spots */}
              <div className="bg-gray-800/50 border-2 border-red-500/30 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <EyeOff size={24} className="text-red-400" />
                  </div>
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'النقاط العمياء (Blind Spots)' : 'Blind Spots'}
                  </h3>
                </div>
                <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                  {isAr 
                    ? 'تقع 80% من الحوادث في المناطق أو الأوقات التي تغيب عنها أعين المشرفين المباشرين.'
                    : '80% of accidents occur in areas or at times where direct supervisors\' eyes are absent.'}
                </p>
              </div>

              {/* Slow Response Time */}
              <div className="bg-gray-800/50 border-2 border-red-500/30 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Clock size={24} className="text-red-400" />
                  </div>
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'زمن الاستجابة البطيء' : 'Slow Response Time'}
                  </h3>
                </div>
                <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                  {isAr 
                    ? 'يستغرق اكتشاف المخاطر السلوكية في المتوسط 6-4 ساعات، مما يزيد من احتمالية وقوع الضرر.'
                    : 'Detecting behavioral risks takes an average of 4-6 hours, which increases the likelihood of harm.'}
                </p>
              </div>

              {/* Hidden Cost */}
              <div className="bg-gray-800/50 border-2 border-red-500/30 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <TrendingDown size={24} className="text-red-400" />
                  </div>
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'التكلفة الخفية' : 'Hidden Cost'}
                  </h3>
                </div>
                <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                  {isAr 
                    ? 'الحوادث غير المرصودة تؤدي لتوقفات صغيرة متكررة تكلف 10 أضعاف تكلفة الحوادث الكبرى الظاهرة.'
                    : 'Unmonitored incidents lead to repeated small stoppages that cost 10 times the cost of major visible incidents.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="mailto:eye.design17@yahoo.com?subject=VisionSafe AI - Solution Inquiry&body=I want to learn how VisionSafe AI can solve these safety challenges in my facility."
            className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-black rounded-full transition-all text-lg ${isAr ? 'arabic-font' : ''}`}
          >
            {isAr ? 'اكتشف الحل' : 'Discover the Solution'}
            <ChevronRight size={20} className={isAr ? 'rotate-180' : ''} />
          </a>
        </div>
      </div>
    </section>
  );
};
