import { AlertCircle, Link as LinkIcon } from 'lucide-react';
import { PresentationData } from '../types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { useMemo } from 'react';

interface ProblemStatementProps {
  data: PresentationData;
  isAr: boolean;
}

export const ProblemStatement = ({ data, isAr }: ProblemStatementProps) => {
  const chartData = useMemo(() => {
    return data.problemStatement.stats.map((stat, index) => {
      const numericPart = stat.value.replace(/[^0-9.]/g, '');
      const val = parseFloat(numericPart) || 0;
      return {
        ...stat,
        numericValue: val,
        originalValue: stat.value,
        fill: index % 2 === 0 ? '#a855f7' : '#9333ea'
      };
    });
  }, [data]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={isAr ? 'order-2' : ''}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-50 rounded-xl">
                <AlertCircle size={32} className="text-red-500" />
              </div>
              <h2 className={`text-4xl font-black text-gray-900 ${isAr ? 'arabic-font' : ''}`}>
                {isAr ? 'واقع السلامة الصناعية اليوم' : 'The Reality of Industrial Safety'}
              </h2>
            </div>
            <p className={`text-xl text-gray-600 leading-relaxed mb-10 ${isAr ? 'arabic-font' : ''}`}>
              {data.problemStatement.text}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {data.problemStatement.stats.map((stat, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-100 py-4 px-6 rounded-2xl hover:border-purple-300 transition-all">
                  <div className={`text-4xl font-black text-purple-600 mb-2 ${isAr ? 'arabic-font' : ''}`}>{stat.value}</div>
                  <div className={`text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 ${isAr ? 'arabic-font' : ''}`}>
                    {stat.label}
                  </div>
                  {stat.sourceUrl && (
                    <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-xs text-purple-500 hover:underline font-medium ${isAr ? 'arabic-font' : ''}`}>
                      <LinkIcon size={12} /> {isAr ? 'عرض المرجع' : 'View Reference'}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={`bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-100 h-[560px] flex flex-col focus-within:outline-none ${isAr ? 'order-1' : ''}`}>
            <ResponsiveContainer width="100%" height="100%" className="focus-within:outline-none">
              <BarChart data={chartData} className="focus-within:outline-none">
                <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" vertical={false} />
                <XAxis dataKey="label" type="category" className={`mt-2 ${isAr ? 'arabic-font' : ''}`} />
                <YAxis type="number" hide />
                <Tooltip
                  cursor={{ fill: 'rgba(168,85,247,0.1)' }}
                  contentStyle={{ backgroundColor: 'white', border: '2px solid #f3e8ff', borderRadius: '12px' }}
                />
                <Bar dataKey="numericValue" radius={[12, 12, 0, 0]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
