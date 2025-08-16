import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function BusinessVisionPage() {
  const { t } = useLanguage();

  const businessModel = [
    {
      category: t("핵심 사업", "Core Business"),
      icon: "🎭",
      description: t("몽골 마상곡예 공연", "Mongolian equestrian performance"),
      revenue: "70%",
      details: [
        t("일일 2회 공연 (500명 수용)", "2 daily performances (500 capacity)"),
        t("몰입형 스토리텔링 공연", "Immersive storytelling performance"),
        t("전통 의상, 음악, 조명 효과", "Traditional costumes, music, lighting effects")
      ]
    },
    {
      category: t("체험 서비스", "Experience Services"),
      icon: "🐎",
      description: t("말 테마 체험 프로그램", "Horse-themed experience programs"),
      revenue: "15%",
      details: [
        t("승마 체험 및 교육", "Horse riding experiences and education"),
        t("전통 활쏘기 체험", "Traditional archery experience"),
        t("몽골 전사 의상 체험", "Mongolian warrior costume experience")
      ]
    },
    {
      category: t("상품 판매", "Merchandise"),
      icon: "🛍️",
      description: t("기념품 및 문화 상품", "Souvenirs and cultural products"),
      revenue: "10%",
      details: [
        t("몽골 전통 수공예품", "Mongolian traditional handicrafts"),
        t("공연 기념품", "Performance souvenirs"),
        t("문화 교육 자료", "Cultural educational materials")
      ]
    },
    {
      category: t("F&B 서비스", "F&B Services"),
      icon: "🍖",
      description: t("전통 몽골 음식 및 음료", "Traditional Mongolian food and beverages"),
      revenue: "5%",
      details: [
        t("몽골 전통 요리", "Traditional Mongolian cuisine"),
        t("말유주 및 전통 차", "Mare's milk wine and traditional tea"),
        t("야외 BBQ 체험", "Outdoor BBQ experience")
      ]
    }
  ];





  return (
    <div className="space-y-8 bg-black min-h-screen text-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          🧭 {t("사업 비전 및 확장 계획", "Business Vision & Expansion Plan")}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          {t("통합 비즈니스 모델을 통한 지속 가능한 성장 전략", 
             "Sustainable growth strategy through integrated business model")}
        </p>
      </div>

      {/* 통합 비즈니스 모델 이미지 - 첫 번째 이미지 */}
      <div className="relative w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/63072608_l-e1568175792180-1024x594_1755069592258.jpg" 
          alt={t("승마 교육과 체험", "Horse Riding Education and Experience")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-amber-300"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
        <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("전문적인 승마 교육과 다양한 체험 프로그램으로 차별화된 서비스 제공", "Providing Differentiated Services Through Professional Horse Riding Education and Various Experience Programs")}
          </p>
        </div>
      </div>

      {/* 비즈니스 모델 */}
      <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-300">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            💼 {t("통합 비즈니스 모델", "Integrated Business Model")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessModel.map((model, index) => (
              <div key={index} className="bg-white border-2 border-amber-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{model.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{model.category}</h3>
                      <p className="text-sm text-gray-800 font-medium">{model.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-amber-700">{model.revenue}</span>
                    <p className="text-sm text-gray-800 font-semibold">{t("수익 비중", "Revenue Share")}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {model.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-amber-600 mr-2 mt-1 font-bold">•</span>
                      <span className="text-gray-800 font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 전략적 입지 및 확장 비전 */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-100 border-2 border-purple-300">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            🌏 {t("전략적 입지 및 확장 비전", "Strategic Location & Expansion Vision")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 입지 우수성 */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📍</span>
                <h3 className="text-xl font-bold text-gray-900">{t("최적의 접근성", "Optimal Accessibility")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 font-medium">{t("시내 중심가에서 차량 7분 거리", "7 minutes drive from city center")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 font-medium">{t("펍스트리트 도보 10분, 관광 허브 중심지", "10-minute walk to Pub Street, heart of tourism hub")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 font-medium">{t("주요 호텔 지구와 근접한 황금 입지", "Prime location near major hotel districts")}</span>
                </div>
              </div>
            </div>

            {/* 부지 확장성 */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏞️</span>
                <h3 className="text-xl font-bold text-gray-900">{t("무한 확장 가능성", "Unlimited Expansion Potential")}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 font-medium">{t("현재 3헥타(9천평) 대규모 부지", "Current 3-hectare (9,000 pyeong) large site")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 font-medium">{t("관광특구 지정으로 추가 확장 용이", "Easy additional expansion in designated tourism zone")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 font-medium">{t("다양한 테마파크 및 부대시설 건설 가능", "Capable of building various theme parks and facilities")}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* K-Culture 융합전략 이미지들 - 두 번째, 세 번째 이미지 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        {/* 두 번째 이미지 - K-Pop */}
        <div className="relative w-full">
          <img 
            src="/attached_assets/K-POP-LEAD-Final_1755069825483.webp" 
            alt={t("K-Pop 문화 융합", "K-Pop Culture Integration")}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-pink-300"
            style={{
              objectPosition: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
          <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
            <p className="text-white text-xs md:text-sm font-bold text-center">
              {t("K-Pop과 몽골 전통 문화의 혁신적 융합", "Innovative Fusion of K-Pop and Mongolian Traditional Culture")}
            </p>
          </div>
        </div>

        {/* 세 번째 이미지 - K-Beauty */}
        <div className="relative w-full">
          <img 
            src="/attached_assets/news-p.v1.20250106.ef59f5881ad7444088f9e29fde8da7f4_P1_1755069907554.jpg" 
            alt={t("K-뷰티 체험", "K-Beauty Experience")}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-red-300"
            style={{
              objectPosition: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
          <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
            <p className="text-white text-xs md:text-sm font-bold text-center">
              {t("K-뷰티와 전통 메이크업의 특별한 체험 공간", "Special Experience Space for K-Beauty and Traditional Makeup")}
            </p>
          </div>
        </div>
      </div>

      {/* K-Culture 융합 전략 */}
      <Card className="bg-gradient-to-br from-pink-50 to-red-100 border-2 border-pink-300">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            🎭 {t("K-Culture 융합 전략", "K-Culture Integration Strategy")}
          </h2>
          <div className="bg-white border-2 border-pink-200 rounded-lg p-6 shadow-md mb-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("단순 유적지 관광을 넘어선 혁신적 문화 체험", "Innovative Cultural Experience Beyond Simple Heritage Tourism")}
              </h3>
              <p className="text-gray-700 text-lg">
                {t("전통 몽골 문화와 현대 한류 문화의 만남", "Meeting of Traditional Mongolian Culture and Modern Hallyu Culture")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* K-Pop 융합 */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-lg border border-purple-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎵</span>
                  <h4 className="text-lg font-bold text-gray-900">{t("K-Pop 콘텐츠 융합", "K-Pop Content Integration")}</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">♪</span>
                    <span className="text-gray-800 text-sm">{t("몽골 전통 음악과 K-Pop 퓨전 공연", "Fusion performances of Mongolian traditional music and K-Pop")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">♪</span>
                    <span className="text-gray-800 text-sm">{t("K-Pop 아이돌과 몽골 전사 콜라보 쇼", "K-Pop idol and Mongolian warrior collaboration shows")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">♪</span>
                    <span className="text-gray-800 text-sm">{t("한류 팬들을 위한 특별 이벤트", "Special events for Hallyu fans")}</span>
                  </li>
                </ul>
              </div>

              {/* K-Culture 체험 */}
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-5 rounded-lg border border-blue-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🏛️</span>
                  <h4 className="text-lg font-bold text-gray-900">{t("K-Culture 체험 존", "K-Culture Experience Zone")}</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✦</span>
                    <span className="text-gray-800 text-sm">{t("한복과 몽골 전통 의상 체험", "Hanbok and Mongolian traditional costume experience")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✦</span>
                    <span className="text-gray-800 text-sm">{t("K-뷰티 & 전통 메이크업 체험", "K-Beauty & traditional makeup experience")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✦</span>
                    <span className="text-gray-800 text-sm">{t("한국 전통 차와 몽골 차 비교 시음", "Comparison tasting of Korean and Mongolian traditional teas")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 차별화된 관광 경험 */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-yellow-300">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            ✨ {t("차별화된 관광 경험 창출", "Creating Differentiated Tourism Experience")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 기억에 남는 추억 */}
            <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t("인스타그래머블한 추억", "Instagram-worthy Memories")}</h3>
              <p className="text-gray-700 text-sm">
                {t("SNS에서 화제가 되는 독특한 콘텐츠로 입소문 마케팅 효과 극대화", "Maximize viral marketing with unique content that becomes a social media sensation")}
              </p>
            </div>

            {/* 문화 융합 */}
            <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t("문화 융합의 혁신", "Innovation in Cultural Fusion")}</h3>
              <p className="text-gray-700 text-sm">
                {t("동서양 문화가 만나는 유일무이한 체험으로 관광객들에게 새로운 가치 제공", "Provide new value to tourists with unique experiences where Eastern and Western cultures meet")}
              </p>
            </div>

            {/* 재방문 유도 */}
            <div className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t("지속적 재방문 유도", "Continuous Return Visits")}</h3>
              <p className="text-gray-700 text-sm">
                {t("계절별 테마 변경과 신규 콘텐츠 업데이트로 지속적인 관광객 유입 보장", "Ensure continuous tourist influx with seasonal theme changes and new content updates")}
              </p>
            </div>
          </div>

          {/* 사업 확장 로드맵 */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border-2 border-amber-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              🚀 {t("단계별 사업 확장 로드맵", "Phased Business Expansion Roadmap")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{t("1단계", "Phase 1")}</h4>
                <p className="text-gray-700 text-xs">{t("마상 공연장 구축", "Build equestrian theater")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{t("2단계", "Phase 2")}</h4>
                <p className="text-gray-700 text-xs">{t("K-Culture 융합관", "K-Culture fusion center")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{t("3단계", "Phase 3")}</h4>
                <p className="text-gray-700 text-xs">{t("체험형 테마파크", "Interactive theme park")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{t("4단계", "Phase 4")}</h4>
                <p className="text-gray-700 text-xs">{t("글로벌 브랜드화", "Global branding")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}