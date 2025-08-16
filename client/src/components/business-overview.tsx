import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function BusinessOverview() {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: "🎭",
      title: t("일일 공연", "Daily Shows"),
      value: "2회",
      description: t("회당 500명 수용", "500 guests per show"),
      bgColor: "from-mongolian-50 to-earth-50"
    },
    {
      icon: "💰",
      title: t("연간 순익", "Annual Profit"),
      value: "$2.1M+",
      description: t("보수적 추정치", "Conservative estimate"),
      bgColor: "from-earth-50 to-mongolian-50"
    },
    {
      icon: "⏱️",
      title: t("투자 회수", "ROI Timeline"),
      value: "1.5년",
      description: t("운영 안정화 기준", "Based on stable operations"),
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: "🌏",
      title: t("시장 독점", "Market Position"),
      value: t("최초", "First"),
      description: t("동남아 유일", "Only in Southeast Asia"),
      bgColor: "from-blue-50 to-indigo-50"
    }
  ];

  const locationAdvantages = [
    {
      icon: "✈️",
      title: t("공항 접근성", "Airport Access"),
      description: t("시엠립 국제공항에서 15분 거리, 관광객 유입 최적화", "15 minutes from Siem Reap International Airport, optimized for tourist inflow"),
      bgColor: "bg-mongolian-100",
      iconColor: "text-mongolian-600"
    },
    {
      icon: "🏛️",
      title: t("앙코르와트 연계", "Angkor Wat Connection"),
      description: t("세계문화유산 관광 루트에 포함, 자연스러운 고객 유치", "Included in World Heritage tourism route, natural customer attraction"),
      bgColor: "bg-earth-100",
      iconColor: "text-earth-600"
    },
    {
      icon: "🚌",
      title: t("교통 편의", "Transportation"),
      description: t("무료 툭툭 서비스 제공, 시내 호텔에서 직접 픽업", "Free tuk-tuk service, direct pickup from city hotels"),
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📊 {t("사업 개요", "Project Overview")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("동남아시아 최초의 몽골 마상곡예 공연장으로 시엠립 관광의 새로운 랜드마크를 창조합니다", "Creating a new landmark in Siem Reap tourism as Southeast Asia's first Mongolian equestrian performance venue")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className={`bg-gradient-to-br ${metric.bgColor} shadow-sm hover:shadow-md transition-shadow animate-fade-in`}>
              <CardContent className="p-6">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{metric.title}</h3>
                <p className="text-2xl font-bold text-mongolian-600">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Advantages */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🗺️ {t("시엠립 입지 장점", "Siem Reap Location Advantages")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-8 h-8 ${advantage.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className={`${advantage.iconColor} font-bold`}>{advantage.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{advantage.title}</h4>
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
