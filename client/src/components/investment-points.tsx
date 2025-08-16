import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function InvestmentPoints() {
  const { t } = useLanguage();

  const investmentPoints = [
    {
      icon: "🎯",
      title: t("독점적 시장 기회", "Exclusive Market Opportunity"),
      bgColor: "bg-mongolian-100",
      points: [
        t("동남아시아 유일의 몽골 마상곡예 공연", "Only Mongolian equestrian show in Southeast Asia"),
        t("캄보디아 정부의 관광 투자 우대 정책", "Cambodian government's tourism investment incentives"),
        t("경쟁사 부재로 인한 시장 선점 효과", "First-mover advantage with no direct competitors")
      ],
      pointColor: "text-mongolian-500"
    },
    {
      icon: "📈",
      title: t("안정적 수익 구조", "Stable Revenue Structure"),
      bgColor: "bg-earth-100",
      points: [
        t("다중 수익원: 티켓 + 체험 + 기념품 + F&B", "Multiple revenue streams: Tickets + Experience + Souvenirs + F&B"),
        t("여행사 패키지 포함으로 안정적 고객 확보", "Stable customer base through travel agency packages"),
        t("성수기/비수기 편차 최소화 전략", "Strategy to minimize seasonal variations")
      ],
      pointColor: "text-earth-500"
    },
    {
      icon: "🚀",
      title: t("확장 가능성", "Expansion Potential"),
      bgColor: "bg-green-100",
      points: [
        t("말 테마 체험존 및 승마 교육 프로그램", "Horse-themed experience zones and riding education programs"),
        t("전통 야시장 및 문화 체험 공간", "Traditional night markets and cultural experience areas"),
        t("다른 도시로의 프랜차이즈 확장", "Franchise expansion to other cities")
      ],
      pointColor: "text-green-500"
    },
    {
      icon: "🛡️",
      title: t("리스크 관리", "Risk Management"),
      bgColor: "bg-blue-100",
      points: [
        t("포괄적 보험 가입 및 안전 시스템", "Comprehensive insurance coverage and safety systems"),
        t("6개월치 운영비 예비자금 확보", "6-month operating expense reserve fund"),
        t("현지 파트너십 및 정부 관계 구축", "Local partnerships and government relations")
      ],
      pointColor: "text-blue-500"
    }
  ];

  return (
    <section id="investment" className="py-20 earth-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💎 {t("투자 포인트", "Investment Highlights")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("검증된 비즈니스 모델과 독점적 시장 기회", "Proven business model with exclusive market opportunity")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {investmentPoints.map((point, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${point.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <span className="text-2xl">{point.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  {point.points.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={`${point.pointColor} mr-2 mt-1`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
