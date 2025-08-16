import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function BusinessVision() {
  const { t } = useLanguage();

  const phases = [
    {
      icon: "🏗️",
      title: t("1단계: 기반 구축", "Phase 1: Foundation"),
      timeline: t("0-18개월", "0-18 months"),
      bgColor: "bg-mongolian-100",
      items: [
        t("공연장 건설 및 마필 도입", "Venue construction and horse import"),
        t("몽골 기수진 및 현지 스태프 훈련", "Mongolian riders and local staff training"),
        t("정식 공연 런칭 및 마케팅", "Official performance launch and marketing")
      ],
      pointColor: "text-mongolian-500"
    },
    {
      icon: "📈",
      title: t("2단계: 성장 & 확장", "Phase 2: Growth & Expansion"),
      timeline: t("18-36개월", "18-36 months"),
      bgColor: "bg-earth-100",
      items: [
        t("말 테마 체험존 및 승마 교육", "Horse-themed experience zone and riding education"),
        t("전통 야시장 및 문화 공간", "Traditional night market and cultural space"),
        t("VIP 패키지 및 기업 이벤트", "VIP packages and corporate events")
      ],
      pointColor: "text-earth-500"
    },
    {
      icon: "🌏",
      title: t("3단계: 브랜드화", "Phase 3: Branding"),
      timeline: t("36개월+", "36+ months"),
      bgColor: "bg-green-100",
      items: [
        t("태국, 베트남 등 타 도시 확장", "Expansion to Thailand, Vietnam and other cities"),
        t("프랜차이즈 모델 개발", "Franchise model development"),
        t("동남아 대표 문화 콘텐츠 브랜드", "Leading cultural content brand in Southeast Asia")
      ],
      pointColor: "text-green-500"
    }
  ];

  return (
    <section className="py-20 earth-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧭 {t("사업 비전 & 확장 계획", "Business Vision & Expansion Plan")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("시엠립 관광의 새로운 랜드마크에서 동남아시아 대표 브랜드로", "From Siem Reap's new landmark to Southeast Asia's leading brand")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index} className="bg-white shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${phase.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">{phase.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  <p className="text-sm text-gray-500">{phase.timeline}</p>
                </div>
                <ul className="space-y-3 text-gray-600">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={`${phase.pointColor} mr-2 mt-1`}>•</span>
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
