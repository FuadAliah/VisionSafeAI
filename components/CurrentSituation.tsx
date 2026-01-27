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
                <span className={`text-blue-400 text-sm font-bold ${isAr ? 'arabic-font' : ''}`}>
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
            <div className="flex flex-col gap-6">
              {/* Limited Time Monitoring */}
              <div className="flex gap-4 bg-gray-800/50 border-2 border-gray-700/50 p-6 rounded-2xl">
                <div className="p-3 bg-blue-500/20 rounded-xl self-start">
                  <Users size={24} className="text-blue-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'رقابة محدودة الوقت' : 'Limited Time Monitoring'}
                  </h3>
                  <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                    {isAr
                      ? 'المشرف لا يمكنه التواجد في كل مكان'
                      : 'The supervisor cannot be everywhere'}
                  </p>
                </div>
              </div>

              {/* Late Reports */}
              <div className="flex gap-4 bg-gray-800/50 border-2 border-gray-700/50 p-6 rounded-2xl">
                <div className="p-3 bg-blue-500/20 rounded-xl self-start">
                  <FileText size={24} className="text-blue-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'تقارير متأخرة' : 'Late Reports'}
                  </h3>
                  <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                    {isAr
                      ? 'رد الفعل يأتي بعد وقوع الحادث وقت العمل المغطى بالرقابة'
                      : 'Response comes after the incident during monitored work time'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Critical Weaknesses */}
          <div className={isAr ? 'order-1' : ''}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 px-3 py-2 bg-red-500/20 border border-red-500/30 rounded-xl">
                <AlertTriangle size={16} className="text-red-400" />
                <span className={`text-red-400 text-sm font-black ${isAr ? 'arabic-font' : ''}`}>
                  {isAr ? 'نقاط الضعف الحرجة' : 'Critical Weaknesses'}
                </span>
              </div>
            </div>

            {/* Three Problem Cards */}
            <div className="space-y-6">
              {/* Blind Spots */}
              <div className="flex gap-4 bg-gray-800/50 border-2 border-red-500/30 p-6 rounded-2xl">
                <div className="p-3 bg-red-500/20 rounded-xl self-start">
                  <EyeOff size={24} className="text-red-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'النقاط العمياء (Blind Spots)' : 'Blind Spots'}
                  </h3>
                  <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                    {isAr
                      ? 'تقع 80% من الحوادث في المناطق أو الأوقات التي تغيب عنها أعين المشرفين المباشرين.'
                      : '80% of accidents occur in areas or at times where direct supervisors\' eyes are absent.'}
                  </p>
                </div>
              </div>

              {/* Slow Response Time */}
              <div className="flex gap-4 bg-gray-800/50 border-2 border-red-500/30 p-6 rounded-2xl">
                <div className="p-3 bg-red-500/20 rounded-xl self-start">
                  <Clock size={24} className="text-red-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'زمن الاستجابة البطيء' : 'Slow Response Time'}
                  </h3>
                  <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                    {isAr
                      ? 'يستغرق اكتشاف المخاطر السلوكية في المتوسط 6-4 ساعات، مما يزيد من احتمالية وقوع الضرر.'
                      : 'Detecting behavioral risks takes an average of 4-6 hours, which increases the likelihood of harm.'}
                  </p>
                </div>
              </div>

              {/* Hidden Cost */}
              <div className="flex gap-4 bg-gray-800/50 border-2 border-red-500/30 p-6 rounded-2xl">
                <div className="p-3 bg-red-500/20 rounded-xl self-start">
                  <TrendingDown size={24} className="text-red-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={`text-xl font-black text-white ${isAr ? 'arabic-font' : ''}`}>
                    {isAr ? 'التكلفة الخفية' : 'Hidden Cost'}
                  </h3>
                  <p className={`text-gray-300 text-sm leading-relaxed ${isAr ? 'arabic-font' : ''}`}>
                    {isAr
                      ? 'الحوادث غير المرصودة تؤدي لتوقفات صغيرة متكررة تكلف 10 أضعاف تكلفة الحوادث الكبرى الظاهرة.'
                      : 'Unmonitored incidents lead to repeated small stoppages that cost 10 times the cost of major visible incidents.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
