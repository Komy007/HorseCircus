import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useLanguage } from "@/contexts/language-context";

export function MarketingStrategyPage() {
  const { t } = useLanguage();

  const marketingChannels = [
    {
      channel: t("디지털 마케팅", "Digital Marketing"),
      icon: "📱",
      budget: 30,
      color: "#3B82F6",
      strategies: [
        t("소셜미디어 광고 (Facebook, Instagram, TikTok)", "Social media advertising (Facebook, Instagram, TikTok)"),
        t("구글 광고 및 SEO 최적화", "Google Ads and SEO optimization"),
        t("유튜브 공연 영상 및 체험 콘텐츠", "YouTube performance videos and experience content"),
        t("인플루언서 마케팅 (여행 블로거)", "Influencer marketing (travel bloggers)")
      ],
      roi: "400%",
      reach: "50,000명/월"
    },
    {
      channel: t("여행사 제휴", "Travel Agency Partnership"),
      icon: "🤝",
      budget: 25,
      color: "#10B981",
      strategies: [
        t("현지 여행사와 패키지 상품 개발", "Package development with local travel agencies"),
        t("국제 여행사 B2B 세일즈", "International travel agency B2B sales"),
        t("온라인 여행 플랫폼 입점", "Listing on online travel platforms"),
        t("여행 전시회 및 컨벤션 참가", "Travel fair and convention participation")
      ],
      roi: "350%",
      reach: "25,000명/월"
    },
    {
      channel: t("호텔 파트너십", "Hotel Partnership"),
      icon: "🏨",
      budget: 20,
      color: "#F59E0B",
      strategies: [
        t("리조트 및 호텔 콘시어지 서비스", "Resort and hotel concierge services"),
        t("VIP 고객 전용 패키지", "VIP customer exclusive packages"),
        t("호텔 로비 프로모션 부스", "Hotel lobby promotion booths"),
        t("패키지 할인 및 크로스 프로모션", "Package discounts and cross-promotion")
      ],
      roi: "300%",
      reach: "15,000명/월"
    },
    {
      channel: t("현지 마케팅", "Local Marketing"),
      icon: "🎪",
      budget: 15,
      color: "#EF4444",
      strategies: [
        t("앙코르와트 주변 안내소 홍보", "Promotion at Angkor Wat area information centers"),
        t("현지 이벤트 및 축제 참가", "Participation in local events and festivals"),
        t("학교 및 단체 방문 프로그램", "School and group visit programs"),
        t("현지 미디어 및 신문 광고", "Local media and newspaper advertising")
      ],
      roi: "250%",
      reach: "8,000명/월"
    },
    {
      channel: t("PR 및 브랜딩", "PR & Branding"),
      icon: "📺",
      budget: 10,
      color: "#8B5CF6",
      strategies: [
        t("국제 여행 매체 보도자료", "International travel media press releases"),
        t("다큐멘터리 및 TV 프로그램 협찬", "Documentary and TV program sponsorship"),
        t("문화 교류 행사 및 외교관 초청", "Cultural exchange events and diplomat invitations"),
        t("어워드 및 인증 획득", "Awards and certification acquisition")
      ],
      roi: "200%",
      reach: "100,000명/월"
    }
  ];

  const targetSegments = [
    {
      segment: t("국제 관광객", "International Tourists"),
      percentage: 60,
      description: t("앙코르와트 방문 외국인", "Foreign visitors to Angkor Wat"),
      characteristics: [
        t("연령: 25-55세", "Age: 25-55 years"),
        t("소득: 중상위층", "Income: Middle to upper class"),
        t("관심: 문화, 모험, 사진", "Interests: Culture, adventure, photography"),
        t("체류: 3-7일", "Stay: 3-7 days")
      ],
      marketingFocus: [
        t("온라인 예약 시스템", "Online booking system"),
        t("다국어 서비스", "Multilingual services"),
        t("소셜미디어 마케팅", "Social media marketing"),
        t("여행사 제휴", "Travel agency partnerships")
      ]
    },
    {
      segment: t("현지 및 지역 고객", "Local & Regional Customers"),
      percentage: 25,
      description: t("캄보디아 및 동남아 거주자", "Cambodia and Southeast Asia residents"),
      characteristics: [
        t("연령: 20-45세", "Age: 20-45 years"),
        t("가족 단위 방문", "Family visits"),
        t("주말 및 휴일 이용", "Weekend and holiday usage"),
        t("할인 혜택 선호", "Prefer discount benefits")
      ],
      marketingFocus: [
        t("현지 언어 서비스", "Local language services"),
        t("가족 패키지 상품", "Family package deals"),
        t("현지 미디어 광고", "Local media advertising"),
        t("커뮤니티 이벤트", "Community events")
      ]
    },
    {
      segment: t("기업 및 단체", "Corporate & Groups"),
      percentage: 15,
      description: t("기업 행사, 인센티브 여행", "Corporate events, incentive travel"),
      characteristics: [
        t("대규모 단체 (50명+)", "Large groups (50+ people)"),
        t("기업 예산 활용", "Corporate budget utilization"),
        t("팀빌딩 목적", "Team building purposes"),
        t("특별 서비스 요구", "Special service requirements")
      ],
      marketingFocus: [
        t("B2B 영업 활동", "B2B sales activities"),
        t("맞춤형 패키지", "Customized packages"),
        t("기업 할인 프로그램", "Corporate discount programs"),
        t("전용 공간 제공", "Dedicated space provision")
      ]
    }
  ];

  const monthlyMarketingBudget = [
    { month: t('1월', 'Jan'), budget: 4000, roi: 3.8, leads: 180 },
    { month: t('2월', 'Feb'), budget: 4200, roi: 4.1, leads: 195 },
    { month: t('3월', 'Mar'), budget: 4500, roi: 4.3, leads: 220 },
    { month: t('4월', 'Apr'), budget: 5000, roi: 4.5, leads: 250 },
    { month: t('5월', 'May'), budget: 5200, roi: 4.7, leads: 275 },
    { month: t('6월', 'Jun'), budget: 4800, roi: 4.4, leads: 245 },
    { month: t('7월', 'Jul'), budget: 5500, roi: 4.8, leads: 290 },
    { month: t('8월', 'Aug'), budget: 5800, roi: 5.0, leads: 310 },
    { month: t('9월', 'Sep'), budget: 5300, roi: 4.6, leads: 265 },
    { month: t('10월', 'Oct'), budget: 5100, roi: 4.5, leads: 255 },
    { month: t('11월', 'Nov'), budget: 4900, roi: 4.3, leads: 240 },
    { month: t('12월', 'Dec'), budget: 4700, roi: 4.2, leads: 225 }
  ];

  const digitalMarketingMetrics = [
    {
      platform: "Facebook & Instagram",
      monthlyReach: "35,000",
      engagement: "6.8%",
      cost: "$800/월",
      conversions: "120"
    },
    {
      platform: "Google Ads",
      monthlyReach: "25,000",
      engagement: "3.2%",
      cost: "$1,200/월",
      conversions: "85"
    },
    {
      platform: "YouTube",
      monthlyReach: "50,000",
      engagement: "4.5%",
      cost: "$600/월",
      conversions: "95"
    },
    {
      platform: "TikTok",
      monthlyReach: "40,000",
      engagement: "8.2%",
      cost: "$500/월",
      conversions: "110"
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6 md:space-y-8 bg-black min-h-screen text-white p-4 md:p-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          📢 {t("마케팅 전략", "Marketing Strategy")}
        </h1>
        <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
          {t("다채널 마케팅 접근법을 통한 효과적인 고객 유치 및 브랜드 인지도 구축", 
             "Effective customer acquisition and brand awareness building through multi-channel marketing approach")}
        </p>
      </div>

      {/* 마케팅 예산 배분 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            💰 {t("마케팅 예산 배분", "Marketing Budget Allocation")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketingChannels}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="budget"
                    strokeWidth={0}
                  >
                    {marketingChannels.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, t("예산 비중", "Budget Share")]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 md:space-y-4">
              {marketingChannels.map((channel, index) => (
                <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <span className="text-xl md:text-2xl mr-2 md:mr-3">{channel.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">{channel.channel}</h3>
                      <p className="text-xs md:text-sm text-gray-700">{t("월 도달", "Monthly Reach")}: {channel.reach}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-sm md:text-base">{channel.budget}%</p>
                    <p className="text-xs md:text-sm text-green-700 font-medium">ROI: {channel.roi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 마케팅 채널별 상세 전략 */}
      <div className="space-y-4 md:space-y-6">
        {marketingChannels.map((channel, index) => (
          <Card key={index} className="bg-white shadow-xl">
            <CardContent className="p-4 md:p-8">
              {/* 디지털 마케팅 이미지 - 첫 번째 이미지 */}
              {index === 0 && (
                <div className="relative w-full mb-4 md:mb-6">
                  <img 
                    src="/attached_assets/how-to-become-a-digital-marketer_1755068964025.webp" 
                    alt={t("디지털 마케팅 전략", "Digital Marketing Strategy")}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-blue-300"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("혁신적인 디지털 마케팅으로 전 세계 고객에게 다가가기", "Reaching Global Customers Through Innovative Digital Marketing")}
                    </p>
                  </div>
                </div>
              )}

              {/* 호텔 파트너십 이미지 - 두 번째 이미지 */}
              {index === 2 && (
                <div className="relative w-full mb-4 md:mb-6">
                  <img 
                    src="/attached_assets/jaz-tour-khalef-thalasso_1755069044918.jpg" 
                    alt={t("럭셔리 호텔 파트너십", "Luxury Hotel Partnership")}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-yellow-300"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("프리미엄 리조트와의 전략적 파트너십으로 VIP 고객 유치", "Attracting VIP Customers Through Strategic Premium Resort Partnerships")}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-xl flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-xl md:text-2xl">{channel.icon}</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{channel.channel}</h2>
                  <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-700 mt-1">
                    <span className="font-medium">{t("예산 비중", "Budget Share")}: {channel.budget}%</span>
                    <span className="font-medium">ROI: {channel.roi}</span>
                    <span className="font-medium">{t("월 도달", "Monthly Reach")}: {channel.reach}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {channel.strategies.map((strategy, strategyIndex) => (
                  <div key={strategyIndex} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                    <span className="text-gray-800 text-sm md:text-base">{strategy}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 타겟 고객 세분화 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          {/* 타겟 고객 세분화 이미지 - 세 번째 이미지 */}
          <div className="relative w-full mb-4 md:mb-6">
            <img 
              src="/attached_assets/istockphoto-1850391734-612x612_1755069264743.jpg" 
              alt={t("다양한 고객층 타겟팅", "Diverse Customer Targeting")}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-green-300"
              style={{
                objectPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
              <p className="text-white text-xs md:text-sm font-bold text-center">
                {t("다양한 고객층을 위한 맞춤형 마케팅 전략", "Customized Marketing Strategies for Diverse Customer Segments")}
              </p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            🎯 {t("타겟 고객 세분화", "Target Customer Segmentation")}
          </h2>
          <div className="space-y-4 md:space-y-6">
            {targetSegments.map((segment, index) => (
              <div key={index} className="border-2 border-gray-300 rounded-lg p-4 md:p-6 bg-gray-50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="mb-3 md:mb-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{segment.segment}</h3>
                    <p className="text-gray-700 font-medium">{segment.description}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <span className="text-2xl md:text-3xl font-bold text-blue-700">{segment.percentage}%</span>
                    <p className="text-sm text-gray-700 font-medium">{t("시장 점유", "Market Share")}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">{t("고객 특성", "Customer Characteristics")}</h4>
                    <ul className="space-y-2">
                      {segment.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                          <span className="text-gray-800 text-sm md:text-base">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">{t("마케팅 집중 영역", "Marketing Focus Areas")}</h4>
                    <ul className="space-y-2">
                      {segment.marketingFocus.map((focus, focusIndex) => (
                        <li key={focusIndex} className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                          <span className="text-gray-800 text-sm md:text-base">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 디지털 마케팅 성과 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            📱 {t("디지털 마케팅 성과 분석", "Digital Marketing Performance Analysis")}
          </h2>
          <div className="overflow-x-auto bg-gray-100 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">{t("플랫폼", "Platform")}</th>
                  <th className="text-center p-3 font-bold text-gray-900">{t("월간 도달", "Monthly Reach")}</th>
                  <th className="text-center p-3 font-bold text-gray-900">{t("참여율", "Engagement")}</th>
                  <th className="text-center p-3 font-bold text-gray-900">{t("비용", "Cost")}</th>
                  <th className="text-center p-3 font-bold text-gray-900">{t("전환수", "Conversions")}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {digitalMarketingMetrics.map((metric, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-3 font-semibold text-gray-900">{metric.platform}</td>
                    <td className="p-3 text-center font-medium text-gray-800">{metric.monthlyReach}</td>
                    <td className="p-3 text-center text-green-700 font-bold">{metric.engagement}</td>
                    <td className="p-3 text-center text-red-700 font-medium">{metric.cost}</td>
                    <td className="p-3 text-center text-blue-700 font-bold">{metric.conversions}</td>
                  </tr>
                ))}
                <tr className="bg-gray-200 font-bold">
                  <td className="p-3 text-gray-900">{t("총계", "Total")}</td>
                  <td className="p-3 text-center text-gray-900">150,000</td>
                  <td className="p-3 text-center text-gray-900">5.7%</td>
                  <td className="p-3 text-center text-red-700">$3,100/월</td>
                  <td className="p-3 text-center text-blue-700">410</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 월별 마케팅 성과 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            📈 {t("월별 마케팅 성과 전망", "Monthly Marketing Performance Forecast")}
          </h2>
          <div className="h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyMarketingBudget}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === 'budget') return [formatCurrency(Number(value)), t("예산", "Budget")];
                    if (name === 'roi') return [`${value}x`, "ROI"];
                    if (name === 'leads') return [`${value}명`, t("리드", "Leads")];
                    return [value, name];
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="budget" fill="#3B82F6" name={t("예산", "Budget")} />
                <Bar yAxisId="right" dataKey="leads" fill="#10B981" name={t("리드 수", "Leads")} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{t("연간 마케팅 예산", "Annual Marketing Budget")}</h3>
              <p className="text-3xl font-bold text-blue-900">$60,000</p>
              <p className="text-sm text-blue-600">{t("총 수익의 1.2%", "1.2% of total revenue")}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{t("예상 연간 리드", "Expected Annual Leads")}</h3>
              <p className="text-3xl font-bold text-green-900">3,000명</p>
              <p className="text-sm text-green-600">{t("전환율 25%", "25% conversion rate")}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">{t("평균 마케팅 ROI", "Average Marketing ROI")}</h3>
              <p className="text-3xl font-bold text-orange-900">4.5x</p>
              <p className="text-sm text-orange-600">{t("업계 평균 대비 우수", "Above industry average")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 브랜딩 및 포지셔닝 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            🎨 {t("브랜딩 및 포지셔닝 전략", "Branding & Positioning Strategy")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t("브랜드 아이덴티티", "Brand Identity")}</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-3 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{t("브랜드 미션", "Brand Mission")}</h4>
                  <p className="text-gray-800 text-sm md:text-base mt-1">
                    {t("전통 몽골 마상 문화를 현대적으로 재해석하여 캄보디아 관광의 새로운 경험을 제공", 
                       "Providing new tourism experiences in Cambodia by reinterpreting traditional Mongolian equestrian culture in a modern way")}
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-3 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{t("브랜드 비전", "Brand Vision")}</h4>
                  <p className="text-gray-800 text-sm md:text-base mt-1">
                    {t("동남아시아 대표 문화 체험 콘텐츠로 성장하여 글로벌 브랜드 구축", 
                       "Growing as Southeast Asia's leading cultural experience content and building a global brand")}
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{t("브랜드 가치", "Brand Values")}</h4>
                  <p className="text-gray-800 text-sm md:text-base mt-1 font-medium">
                    {t("전통성, 모험성, 안전성, 감동", "Tradition, Adventure, Safety, Inspiration")}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t("마케팅 메시지", "Marketing Messages")}</h3>
              <div className="space-y-3">
                <div className="bg-orange-100 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-900 text-sm md:text-base">{t("주요 메시지", "Primary Message")}</h4>
                  <p className="text-orange-800 text-sm md:text-base mt-1 font-medium">
                    {t("앙코르와트에서 만나는 몽골 전사의 웅장한 이야기", "The magnificent story of Mongolian warriors at Angkor Wat")}
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-bold text-amber-900 text-sm md:text-base">{t("감정적 어필", "Emotional Appeal")}</h4>
                  <p className="text-amber-800 text-sm md:text-base mt-1 font-medium">
                    {t("천년의 전통이 살아 숨쉬는 감동적인 순간", "Moving moments where thousand-year traditions come alive")}
                  </p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900 text-sm md:text-base">{t("차별화 포인트", "Differentiation Point")}</h4>
                  <p className="text-blue-800 text-sm md:text-base mt-1 font-medium">
                    {t("동남아시아 유일, 세계적 수준의 마상 공연", "Southeast Asia's only world-class equestrian performance")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 성공 지표 (KPI) */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            🎯 {t("마케팅 성공 지표 (KPI)", "Marketing Success Indicators (KPIs)")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-bold">👥</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">{t("브랜드 인지도", "Brand Awareness")}</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-700">75%</p>
              <p className="text-xs md:text-sm text-gray-700 font-medium mt-1">{t("타겟 고객층 내", "Within target audience")}</p>
            </div>
            <div className="text-center bg-green-50 p-4 md:p-6 rounded-lg border border-green-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-bold">📈</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">{t("고객 획득 비용", "Customer Acquisition Cost")}</h3>
              <p className="text-2xl md:text-3xl font-bold text-green-700">$8</p>
              <p className="text-xs md:text-sm text-gray-700 font-medium mt-1">{t("고객당", "Per customer")}</p>
            </div>
            <div className="text-center bg-orange-50 p-4 md:p-6 rounded-lg border border-orange-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-600 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-bold">❤️</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">{t("고객 만족도", "Customer Satisfaction")}</h3>
              <p className="text-2xl md:text-3xl font-bold text-orange-700">4.8/5</p>
              <p className="text-xs md:text-sm text-gray-700 font-medium mt-1">{t("리뷰 평균", "Average review")}</p>
            </div>
            <div className="text-center bg-purple-50 p-4 md:p-6 rounded-lg border border-purple-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-bold">🔄</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">{t("재방문율", "Return Rate")}</h3>
              <p className="text-2xl md:text-3xl font-bold text-purple-700">35%</p>
              <p className="text-xs md:text-sm text-gray-700 font-medium mt-1">{t("6개월 내", "Within 6 months")}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}