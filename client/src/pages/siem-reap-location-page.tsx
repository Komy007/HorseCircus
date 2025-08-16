import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function SiemReapLocationPage() {
  const { t } = useLanguage();

  const locationAdvantages = [
    {
      icon: "🏛️",
      title: t("앙코르와트 인근 최적 입지", "Optimal Location Near Angkor Wat"),
      description: t("세계적인 관광 명소 앙코르와트에서 차로 5분 거리", "5 minutes by car from world-famous Angkor Wat"),
      benefits: [
        t("연간 240만 명의 앙코르와트 관광객", "2.4 million annual Angkor Wat visitors"),
        t("관광 루트의 자연스러운 연결점", "Natural connection point in tourist routes"),
        t("기존 관광 인프라 활용 가능", "Utilize existing tourism infrastructure"),
        t("국제공항에서 30분 접근성", "30-minute accessibility from international airport")
      ],
      metrics: {
        distance: "8km",
        visitors: "2.4M/년",
        accessibility: "A급"
      }
    },
    {
      icon: "🌏",
      title: t("동남아시아 관광 허브", "Southeast Asia Tourism Hub"),
      description: t("캄보디아 대표 관광도시로서의 전략적 위치", "Strategic position as Cambodia's premier tourist city"),
      benefits: [
        t("동남아시아 배낭여행의 필수 코스", "Essential stop in Southeast Asian backpacking route"),
        t("태국, 베트남과의 연계 관광", "Connected tourism with Thailand and Vietnam"),
        t("국제적 인지도 및 브랜드 파워", "International recognition and brand power"),
        t("다양한 국적의 관광객 유입", "Diverse international tourist influx")
      ],
      metrics: {
        countries: "150+",
        routes: "15개",
        recognition: "세계적"
      }
    },
    {
      icon: "🏢",
      title: t("우수한 사업 환경", "Excellent Business Environment"),
      description: t("관광업 친화적인 정책과 투자 환경", "Tourism-friendly policies and investment environment"),
      benefits: [
        t("외국인 투자 우대 정책", "Foreign investment incentive policies"),
        t("관광업 육성을 위한 정부 지원", "Government support for tourism development"),
        t("영어 사용 가능한 인력 풍부", "Abundant English-speaking workforce"),
        t("저렴한 운영비와 인건비", "Low operating costs and labor costs")
      ],
      metrics: {
        investment: "우대",
        support: "정부지원",
        cost: "30% 절감"
      }
    }
  ];

  const siteLocation = {
    name: t("시엠립 몽골 마상곡예 파크", "Siem Reap Mongolian Horse Adventure Park"),
    address: t("시엠립 시내 중심가에서 북동쪽 12km", "12km northeast of Siem Reap city center"),
    size: "15 hectares (150,000 m²)",
    zoning: t("관광 특구 내 문화 공연장", "Cultural performance venue within tourism special zone"),
    accessibility: [
      t("시엠립 국제공항에서 25분", "25 minutes from Siem Reap International Airport"),
      t("앙코르와트에서 15분", "15 minutes from Angkor Wat"),
      t("시내 중심가 7분거리", "7 minutes from city center"),
      t("주요 호텔 지구에서 10분", "10 minutes from major hotel districts")
    ]
  };







  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8 bg-black min-h-screen text-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          🗺️ {t("시엠립 입지 장점 및 사업 기회", "Siem Reap Location Advantages & Business Opportunities")}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t("세계적 관광 도시 시엠립의 전략적 입지와 무한한 확장 가능성", 
             "Strategic location advantages and unlimited expansion potential in world-class tourist city Siem Reap")}
        </p>
      </div>

      {/* 입지 장점 */}
      <div className="space-y-6">
        {locationAdvantages.map((advantage, index) => (
          <Card key={index} className="overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
            <CardContent className="p-8">
              {/* 앙코르와트 인근 최적입지 이미지 - 첫 번째 이미지 */}
              {index === 0 && (
                <div className="relative w-full mb-4 md:mb-6">
                  <img 
                    src="/attached_assets/DJI_0070L_1755070169516.jpg" 
                    alt={t("앙코르와트 항공뷰", "Angkor Wat Aerial View")}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-amber-300"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("세계유산 앙코르와트의 웅장한 모습과 완벽한 접근성", "Magnificent Angkor Wat World Heritage Site with Perfect Accessibility")}
                    </p>
                  </div>
                </div>
              )}

              {/* 동남아시아 관광허브 이미지 - 두 번째 이미지 */}
              {index === 1 && (
                <div className="relative w-full mb-4 md:mb-6">
                  <img 
                    src="/attached_assets/hq720_1755070422884.jpg" 
                    alt={t("시엠립 야경과 관광허브", "Siem Reap Night Scene and Tourism Hub")}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-blue-300"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("활기찬 시엠립 야경과 동남아시아 최고의 관광허브", "Vibrant Siem Reap Nightlife and Southeast Asia's Premier Tourism Hub")}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{advantage.title}</h2>
                  <p className="text-gray-800 mb-6 font-medium">{advantage.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">{t("주요 혜택", "Key Benefits")}</h3>
                      <ul className="space-y-3">
                        {advantage.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <span className="text-emerald-600 mr-2 mt-1 font-bold">✓</span>
                            <span className="text-gray-800 font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">{t("핵심 지표", "Key Metrics")}</h3>
                      <div className="space-y-3">
                        {Object.entries(advantage.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-amber-200">
                            <span className="text-gray-800 capitalize font-semibold">{key}</span>
                            <span className="font-bold text-amber-700 text-lg">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 예정 부지 정보 */}
      <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-300">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            📍 {t("시엠립 최적 입지 - 펍 스트리트 중심가", "Siem Reap Prime Location - Pub Street Center")}
          </h2>
          
          {/* 위치 하이라이트 박스 */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-400 rounded-lg p-6 mb-8 shadow-lg">
            <h3 className="text-xl font-bold text-amber-900 mb-4">
              {t("🎯 핵심 위치 장점", "🎯 Key Location Advantages")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg text-gray-900 mb-2 font-medium">
                  <span className="font-bold text-amber-800">{t("펍 스트리트 직선거리:", "Straight Distance from Pub Street:")}</span> 800m
                </p>
                <p className="text-lg text-gray-900 mb-2 font-medium">
                  <span className="font-bold text-amber-800">{t("총 부지 면적:", "Total Site Area:")}</span> 3헥타르 (30,000㎡)
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  <span className="font-bold text-amber-800">{t("시설 규모:", "Facility Scale:")}</span> 9,000평 부지 활용
                </p>
              </div>
              <div>
                <p className="text-gray-800 leading-relaxed font-medium">
                  {t("시엠립의 가장 번화한 중심지인 펍 스트리트와 나이트 마켓에서 직선거리 800미터에 위치한 최적의 입지로, 필요에 따라 부지를 단계적으로 확장 사용이 가능합니다.",
                     "Optimally located just 800 meters straight from Pub Street and Night Market, the busiest center of Siem Reap, with the ability to expand site usage in phases as needed.")}
                </p>
              </div>
            </div>
          </div>

          {/* 사진 갤러리 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("부지 현황 사진", "Site Current Photos")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 기존 경기장 사진 */}
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/attached_assets/KakaoTalk_20250412_154104952_02_1754641006392.jpg" 
                    alt="현재 부지 - 기존 경기장"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {t("기존 경기장 시설", "Existing Stadium Facility")}
                  </h4>
                  <p className="text-blue-700 text-sm">
                    {t("다른 부지에 위치한 기존 축구 경기장, 마상곡예 공연장으로 건축시 모델링으로 실사함", 
                       "Existing soccer stadium located on different site, referenced as modeling for equestrian performance venue construction")}
                  </p>
                </div>
              </div>

              {/* 빈 부지 사진 */}
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/attached_assets/부지지도4_거리_1754641006393.png" 
                    alt="확장 가능한 빈 부지"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {t("확장 가능한 부지", "Expandable Land")}
                  </h4>
                  <p className="text-green-700 text-sm">
                    {t("3헥타르 규모의 넓은 부지로 단계별 시설 확장이 가능한 여유 공간", 
                       "3-hectare spacious land allowing phased facility expansion with ample space")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 위치 지도 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("위치 지도 및 거리 분석", "Location Map & Distance Analysis")}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/attached_assets/부지지도1_거리_1754641006392.png" 
                    alt="시엠립 위치 지도"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {t("구글 어스 위성 지도", "Google Earth Satellite Map")}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {t("3.0 헥타르 부지 경계와 시내 중심가와의 위치 관계를 보여주는 위성 지도", 
                       "Satellite map showing 3.0-hectare site boundaries and location relationship with city center")}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/attached_assets/부지지도3_거리_1754641006393.png" 
                    alt="주변 지역 현황"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {t("주변 지역 현황", "Surrounding Area Status")}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {t("주변 주거 지역과 상업 시설들과의 조화로운 위치를 보여주는 지역 현황", 
                       "Area overview showing harmonious location with surrounding residential and commercial facilities")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-6 mb-6 border-2 border-amber-300 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("시엠립 몽골리안 헤리티지 파크", "Siem Reap Mongolian Heritage Park")}
                </h3>
                <div className="space-y-3 text-gray-900">
                  <p><span className="font-bold text-amber-800">{t("위치", "Location")}:</span> <span className="font-semibold">{t("펍 스트리트에서 직선거리 800m", "800m straight distance from Pub Street")}</span></p>
                  <p><span className="font-bold text-amber-800">{t("총 부지 면적", "Total Site Area")}:</span> <span className="font-semibold">3헥타르 (30,000㎡ / 9,000평)</span></p>
                  <p><span className="font-bold text-amber-800">{t("용도 구역", "Zoning")}:</span> <span className="font-semibold">{t("관광 특구 내 문화 공연장", "Cultural performance venue within tourism special zone")}</span></p>
                  <p><span className="font-bold text-amber-800">{t("확장성", "Expandability")}:</span> <span className="font-semibold">{t("필요에 따라 단계별 부지 활용 가능", "Phased site utilization available as needed")}</span></p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("접근성 분석", "Accessibility Analysis")}</h3>
              <div className="space-y-4">
                {siteLocation.accessibility.map((access, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg border-2 border-amber-200 shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-900 font-medium">{access}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("교통 인프라", "Transportation Infrastructure")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-4 rounded-lg text-center border-2 border-emerald-200 shadow-md">
                    <span className="text-emerald-700 text-2xl block mb-2">✈️</span>
                    <p className="font-bold text-emerald-900">{t("국제공항", "International Airport")}</p>
                    <p className="text-sm text-emerald-800 font-semibold">{t("20km (25분)", "20km (25min)")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg text-center border-2 border-blue-200 shadow-md">
                    <span className="text-blue-700 text-2xl block mb-2">🏛️</span>
                    <p className="font-bold text-blue-900">{t("앙코르와트", "Angkor Wat")}</p>
                    <p className="text-sm text-blue-800 font-semibold">{t("8km (10분)", "8km (10min)")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-lg text-center border-2 border-orange-200 shadow-md">
                    <span className="text-orange-700 text-2xl block mb-2">🍻</span>
                    <p className="font-bold text-orange-900">{t("펍 스트리트", "Pub Street")}</p>
                    <p className="text-sm text-orange-800 font-semibold">{t("800m (5분)", "800m (5min)")}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-4 rounded-lg text-center border-2 border-purple-200 shadow-md">
                    <span className="text-purple-700 text-2xl block mb-2">🅿️</span>
                    <p className="font-bold text-purple-900">{t("주차장", "Parking")}</p>
                    <p className="text-sm text-purple-800 font-semibold">{t("300대 이상", "300+ cars")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>





      {/* 구글 맵 섹션 */}
      <Card id="google-map-section" className="relative z-10 bg-white/70 backdrop-blur-md shadow-xl border border-white/30 mt-6">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 text-center drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            🗺️ {t("구글 맵 위치", "Google Maps Location")}
          </h2>
          <p className="text-center text-gray-800 mb-6 font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">
            {t("시엠립 몽골 마상곡예 파크 예정지", "Siem Reap Mongolian Equestrian Park Planned Site")}
          </p>
          
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15493.8!2d103.85639!3d13.36194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110169a8c91a691%3A0x4c7e7e6b9b5a8b8a!2z8J6RqPCfkZnCoDhWVzUrUTJSIEtyb25nIFNpZW0gUmVhcA!5e0!3m2!1sen!2skh!4v1642089600000!5m2!1sen!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("시엠립 몽골 마상곡예 파크 위치", "Siem Reap Mongolian Equestrian Park Location")}
            />
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50/60 backdrop-blur-sm border-2 border-amber-300/50 rounded-lg p-4">
              <h3 className="font-bold text-amber-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">
                📍 {t("정확한 위치 정보", "Exact Location Details")}
              </h3>
              <div className="space-y-2 text-amber-800 font-bold">
                <p>📌 {t("주소", "Address")}: 8VW5+Q2R Krong Siem Reap</p>
                <p>🎯 {t("좌표", "Coordinates")}: {t("시엠립, 캄보디아", "Siem Reap, Cambodia")}</p>
                <p>🏛️ {t("앙코르와트에서", "From Angkor Wat")}: 8km (10분)</p>
                <p>✈️ {t("공항에서", "From Airport")}: 20km (25분)</p>
              </div>
            </div>
            
            <div className="bg-blue-50/60 backdrop-blur-sm border-2 border-blue-300/50 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">
                🚗 {t("교통 접근성", "Transportation Access")}
              </h3>
              <div className="space-y-2 text-blue-800 font-bold">
                <p>🍻 {t("펍 스트리트에서", "From Pub Street")}: 800m (5분)</p>
                <p>🏍️ {t("툭툭", "Tuk-tuk")}: {t("직접 접근 가능", "Direct access available")}</p>
                <p>🚌 {t("관광버스", "Tour Bus")}: {t("직접 접근 가능", "Direct access available")}</p>
                <p>🅿️ {t("주차장", "Parking")}: {t("300대 이상 수용 가능", "300+ vehicle capacity")}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => window.open('https://maps.google.com/?q=8VW5%2BQ2R+Krong+Siem+Reap', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
            >
              📍 {t("구글 맵에서 열기", "Open in Google Maps")}
            </button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}