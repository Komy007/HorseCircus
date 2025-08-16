import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useLanguage } from "@/contexts/language-context";

export function RevenueChart() {
  const { t } = useLanguage();

  const data = [
    { 
      name: t("티켓 판매", "Ticket Sales"), 
      value: 85, 
      color: "hsl(20, 91%, 48%)" // mongolian-600
    },
    { 
      name: t("체험 프로그램", "Experience Programs"), 
      value: 8, 
      color: "hsl(45, 93%, 47%)" // earth-500
    },
    { 
      name: t("기념품", "Souvenirs"), 
      value: 4, 
      color: "hsl(159.7826, 100%, 36.0784%)" // green
    },
    { 
      name: t("F&B", "F&B"), 
      value: 3, 
      color: "hsl(203.8863, 88.2845%, 53.1373%)" // blue
    }
  ];

  const breakdown = [
    {
      name: t("티켓 판매", "Ticket Sales"),
      percentage: "85%",
      color: "bg-mongolian-500"
    },
    {
      name: t("체험 프로그램", "Experience Programs"),
      percentage: "8%",
      color: "bg-earth-500"
    },
    {
      name: t("기념품", "Souvenirs"),
      percentage: "4%",
      color: "bg-green-500"
    },
    {
      name: t("F&B", "F&B"),
      percentage: "3%",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-8 mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        📊 {t("수익 구조 분석", "Revenue Breakdown")}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, '']}
                labelStyle={{ color: '#374151' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {breakdown.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg">
              <div className="flex items-center">
                <div className={`w-4 h-4 ${item.color} rounded-full mr-3`}></div>
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="font-bold text-gray-900">{item.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
