import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function RiskManagementPage() {
  const { t } = useLanguage();

  const riskCategories = [
    {
      icon: "🐎",
      title: t("운영 리스크", "Operational Risks"),
      color: "bg-red-100",
      risks: [
        {
          risk: t("마필 건강 및 안전", "Horse Health & Safety"),
          impact: t("중간", "Medium"),
          probability: t("중간", "Medium"),
          mitigation: [
            t("정기적인 수의사 검진 및 예방 접종", "Regular veterinary checkups and vaccinations"),
            t("전문적인 마필 관리 팀 운영", "Professional horse care team operations"),
            t("비상 상황 대응 매뉴얼 및 훈련", "Emergency response manual and training"),
            t("마필 보험 가입", "Horse insurance coverage")
          ]
        },
        {
          risk: t("기수 및 스태프 부상", "Rider & Staff Injuries"),
          impact: t("중간", "Medium"),
          probability: t("중간", "Medium"),
          mitigation: [
            t("안전 장비 착용 의무화", "Mandatory safety equipment usage"),
            t("정기적인 안전 교육 및 훈련", "Regular safety education and training"),
            t("의료진 상주 및 응급처치 시설", "On-site medical staff and first aid facilities"),
            t("포괄적인 상해 보험 가입", "Comprehensive injury insurance coverage")
          ]
        }
      ]
    },
    {
      icon: "🏛️",
      title: t("정치적/법적 리스크", "Political/Legal Risks"),
      color: "bg-orange-100",
      risks: [
        {
          risk: t("정부 정책 변화", "Government Policy Changes"),
          impact: t("중간", "Medium"),
          probability: t("매우 낮음", "Very Low"),
          mitigation: [
            t("현지 정부와의 긴밀한 협력 관계 유지", "Maintain close cooperation with local government"),
            t("관광 산업 발전에 기여하는 사업 모델", "Business model contributing to tourism development"),
            t("법적 전문가와의 지속적 자문", "Ongoing consultation with legal experts"),
            t("정책 변화에 대한 모니터링 시스템", "Policy change monitoring system")
          ]
        },
        {
          risk: t("라이센스 및 허가 이슈", "License & Permit Issues"),
          impact: t("중간", "Medium"),
          probability: t("매우 낮음", "Very Low"),
          mitigation: [
            t("사전 철저한 법적 검토", "Thorough legal review in advance"),
            t("현지 법무법인과의 파트너십", "Partnership with local law firm"),
            t("정기적인 컴플라이언스 점검", "Regular compliance checks"),
            t("허가 갱신 일정 관리 시스템", "Permit renewal schedule management system")
          ]
        }
      ]
    },
    {
      icon: "🌦️",
      title: t("시장 및 환경 리스크", "Market & Environmental Risks"),
      color: "bg-yellow-100",
      risks: [
        {
          risk: t("관광객 수 변동", "Tourist Number Fluctuations"),
          impact: t("중간", "Medium"),
          probability: t("중간", "Medium"),
          mitigation: [
            t("다양한 고객층 타겟팅", "Target diverse customer segments"),
            t("오프시즌 특별 프로그램 운영", "Special off-season programs"),
            t("현지 고객 및 기업 이벤트 유치", "Attract local customers and corporate events"),
            t("유연한 요금제 및 패키지 상품", "Flexible pricing and package deals")
          ]
        },
        {
          risk: t("기후 변화 및 날씨", "Climate Change & Weather"),
          impact: t("중간", "Medium"),
          probability: t("높음", "High"),
          mitigation: [
            t("실내외 겸용 공연장 설계", "Indoor/outdoor hybrid venue design"),
            t("우기 대비 대체 프로그램", "Alternative programs for rainy season"),
            t("날씨 보험 가입", "Weather insurance coverage"),
            t("계절별 운영 계획 수립", "Seasonal operation planning")
          ]
        }
      ]
    },
    {
      icon: "💰",
      title: t("재무적 리스크", "Financial Risks"),
      color: "bg-blue-100",
      risks: [
        {
          risk: t("환율 변동", "Exchange Rate Fluctuations"),
          impact: t("중간", "Medium"),
          probability: t("매우 낮음", "Very Low"),
          mitigation: [
            t("현지 통화로의 수익 다각화", "Diversify revenue in local currency"),
            t("환율 헤징 상품 활용", "Use currency hedging products"),
            t("달러화 기준 계약 체결", "USD-based contracts where possible"),
            t("정기적인 환율 영향 분석", "Regular exchange rate impact analysis")
          ]
        },
        {
          risk: t("초기 투자금 회수 지연", "Delayed Investment Recovery"),
          impact: t("중간", "Medium"),
          probability: t("매우 낮음", "Very Low"),
          mitigation: [
            t("보수적인 수익 예측 및 계획", "Conservative revenue forecasting and planning"),
            t("6개월치 운영비 예비자금", "6-month operating expense reserve"),
            t("단계적 투자 및 확장 계획", "Phased investment and expansion plan"),
            t("다양한 수익원 확보", "Secure diversified revenue streams")
          ]
        }
      ]
    }
  ];

  const contingencyPlanning = [
    {
      scenario: t("팬데믹 상황", "Pandemic Situation"),
      impact: t("관광객 급감, 운영 제한", "Sharp tourist decline, operational restrictions"),
      responses: [
        t("온라인 버추얼 공연 서비스", "Online virtual performance services"),
        t("현지 고객 대상 특별 프로그램", "Special programs for local customers"),
        t("운영비 축소 및 인력 조정", "Reduce operating costs and adjust workforce"),
        t("정부 지원 프로그램 활용", "Utilize government support programs")
      ]
    },
    {
      scenario: t("경쟁자 출현", "Competitor Emergence"),
      impact: t("시장 점유율 하락, 가격 경쟁", "Market share decline, price competition"),
      responses: [
        t("차별화된 프리미엄 서비스", "Differentiated premium services"),
        t("고객 충성도 프로그램 강화", "Strengthen customer loyalty programs"),
        t("기술 혁신을 통한 경쟁력 확보", "Secure competitiveness through technological innovation"),
        t("전략적 파트너십 확대", "Expand strategic partnerships")
      ]
    },
    {
      scenario: t("주요 스태프 이탈", "Key Staff Departure"),
      impact: t("운영 중단, 서비스 질 저하", "Operation disruption, service quality decline"),
      responses: [
        t("백업 인력 및 교육 시스템", "Backup personnel and training systems"),
        t("경쟁력 있는 보상 패키지", "Competitive compensation packages"),
        t("지속적인 인재 개발 프로그램", "Continuous talent development programs"),
        t("지식 관리 시스템 구축", "Establish knowledge management system")
      ]
    }
  ];

  const insuranceCoverage = [
    {
      type: t("일반 책임 보험", "General Liability Insurance"),
      coverage: t("관객 및 제3자 손해", "Audience and third-party damages"),
      amount: "$2M",
      premium: "$15,000/년"
    },
    {
      type: t("마필 보험", "Horse Insurance"),
      coverage: t("마필 사망, 부상, 도난", "Horse death, injury, theft"),
      amount: "$500K",
      premium: "$25,000/년"
    },
    {
      type: t("사업 중단 보험", "Business Interruption Insurance"),
      coverage: t("운영 중단으로 인한 손실", "Loss due to operation interruption"),
      amount: "$1M",
      premium: "$12,000/년"
    },
    {
      type: t("재산 보험", "Property Insurance"),
      coverage: t("시설 및 장비 손상", "Facility and equipment damage"),
      amount: "$3M",
      premium: "$18,000/년"
    },
    {
      type: t("근로자 상해 보험", "Workers' Compensation"),
      coverage: t("직원 업무상 재해", "Employee workplace injuries"),
      amount: t("법정 기준", "Legal Standard"),
      premium: "$8,000/년"
    }
  ];

  const riskMatrix = [
    { risk: t("마필 건강 이슈", "Horse Health Issues"), impact: 3, probability: 3, score: 9 },
    { risk: t("스태프 부상", "Staff Injuries"), impact: 3, probability: 3, score: 9 },
    { risk: t("정책 변화", "Policy Changes"), impact: 3, probability: 1, score: 3 },
    { risk: t("관광객 감소", "Tourist Decline"), impact: 3, probability: 3, score: 9 },
    { risk: t("환율 변동", "Exchange Rate"), impact: 2, probability: 1, score: 2 },
    { risk: t("기후 영향", "Climate Impact"), impact: 3, probability: 3, score: 9 },
    { risk: t("경쟁자 출현", "Competition"), impact: 3, probability: 2, score: 6 },
    { risk: t("라이센스 이슈", "License Issues"), impact: 3, probability: 1, score: 3 }
  ];

  const getRiskLevel = (score: number) => {
    if (score >= 12) return { level: t("높음", "High"), color: "bg-red-500" };
    if (score >= 8) return { level: t("중간", "Medium"), color: "bg-yellow-500" };
    if (score >= 4) return { level: t("낮음", "Low"), color: "bg-green-500" };
    return { level: t("매우 낮음", "Very Low"), color: "bg-blue-500" };
  };

  return (
    <div className="space-y-8 bg-black min-h-screen text-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          🛡️ {t("리스크 관리 전략", "Risk Management Strategy")}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t("체계적인 위험 분석과 대응 전략을 통한 안정적인 사업 운영 보장", 
             "Ensuring stable business operations through systematic risk analysis and response strategies")}
        </p>
      </div>

      {/* 리스크 매트릭스 */}
      <Card className="bg-white/90 backdrop-blur-md shadow-xl border border-white/30">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            📊 {t("리스크 평가 매트릭스", "Risk Assessment Matrix")}
          </h2>
          {/* Mobile-optimized responsive table */}
          <div className="block md:hidden">
            {/* Mobile card layout */}
            <div className="space-y-4">
              {riskMatrix.map((item, index) => {
                const riskLevel = getRiskLevel(item.score);
                return (
                  <div key={index} className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-gray-900 text-sm flex-1 mr-2">{item.risk}</h3>
                      <span className={`px-2 py-1 rounded-full text-white text-xs font-bold shadow-lg ${riskLevel.color}`}>
                        {riskLevel.level}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="text-center">
                        <div className="font-semibold text-gray-700 mb-1">{t("영향도", "Impact")}</div>
                        <div className="flex justify-center">
                          {Array.from({ length: item.impact }, (_, i) => (
                            <span key={i} className="text-red-600 text-sm">●</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-700 mb-1">{t("확률", "Probability")}</div>
                        <div className="flex justify-center">
                          {Array.from({ length: item.probability }, (_, i) => (
                            <span key={i} className="text-blue-600 text-sm">●</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-700 mb-1">{t("점수", "Score")}</div>
                        <div className="font-bold text-gray-900 text-lg">{item.score}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop table layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-3 font-semibold text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("위험 요소", "Risk Factor")}</th>
                  <th className="text-center p-3 font-semibold text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("영향도", "Impact")}</th>
                  <th className="text-center p-3 font-semibold text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("발생 확률", "Probability")}</th>
                  <th className="text-center p-3 font-semibold text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("위험 점수", "Risk Score")}</th>
                  <th className="text-center p-3 font-semibold text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("위험 수준", "Risk Level")}</th>
                </tr>
              </thead>
              <tbody>
                {riskMatrix.map((item, index) => {
                  const riskLevel = getRiskLevel(item.score);
                  return (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 font-bold text-gray-900">{item.risk}</td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center">
                          {Array.from({ length: item.impact }, (_, i) => (
                            <span key={i} className="text-red-600 text-lg">●</span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center">
                          {Array.from({ length: item.probability }, (_, i) => (
                            <span key={i} className="text-blue-600 text-lg">●</span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 text-center font-bold text-gray-900 text-lg">{item.score}</td>
                      <td className="p-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-white text-sm font-bold shadow-lg ${riskLevel.color}`}>
                          {riskLevel.level}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs md:text-sm text-gray-800 font-bold bg-gray-100 p-3 rounded-lg">
            <p className="mb-1">{t("영향도/발생확률: 1 (매우낮음) ~ 5 (매우높음)", "Impact/Probability: 1 (Very Low) ~ 5 (Very High)")}</p>
            <p>{t("위험점수 = 영향도 × 발생확률", "Risk Score = Impact × Probability")}</p>
          </div>
        </CardContent>
      </Card>

      {/* 카테고리별 리스크 분석 */}
      <div className="space-y-6">
        {riskCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="bg-white/90 backdrop-blur-md shadow-xl border border-white/30">
            <CardContent className="p-8">
              {/* Operational Risks Image - First Image */}
              {categoryIndex === 0 && (
                <div className="relative w-full mb-4 md:mb-6">
                  <img 
                    src="/attached_assets/what-is-management_1755068151092.jpg" 
                    alt={t("운영 관리 전략", "Operations Management Strategy")}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-red-300"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("체계적인 운영 관리와 리스크 최소화 전략", "Systematic Operations Management and Risk Minimization Strategy")}
                    </p>
                  </div>
                </div>
              )}

              {/* Market & Environmental Risks Image - Second Image */}
              {categoryIndex === 2 && (
                <div className="relative w-full mb-4 md:mb-6">
                  <img 
                    src="/attached_assets/service-leadership-rules-header_1755068245593.webp" 
                    alt={t("리더십과 시장 대응", "Leadership and Market Response")}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-yellow-300"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("강력한 리더십과 시장 환경 변화 대응 능력", "Strong Leadership and Market Environment Adaptation Capability")}
                    </p>
                  </div>
                </div>
              )}

              {/* Financial Risks Image - Third Image */}
              {categoryIndex === 3 && (
                <div className="relative w-full mb-4 md:mb-6">
                  <img 
                    src="/attached_assets/Celebrating-big-profit_1755068371502.jpg" 
                    alt={t("재무 성공과 수익 관리", "Financial Success and Profit Management")}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-blue-300"
                    style={{
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("안정적인 재무 관리와 지속 가능한 수익 창출", "Stable Financial Management and Sustainable Profit Generation")}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">{category.title}</h2>
              </div>

              <div className="space-y-6">
                {category.risks.map((risk, riskIndex) => (
                  <div key={riskIndex} className="border border-gray-300 rounded-lg p-6 bg-white/60 backdrop-blur-sm shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{risk.risk}</h3>
                      <div className="flex space-x-4 text-sm">
                        <span className="px-2 py-1 bg-red-200 text-red-900 rounded font-bold shadow-sm">
                          {t("영향도", "Impact")}: {risk.impact}
                        </span>
                        <span className="px-2 py-1 bg-blue-200 text-blue-900 rounded font-bold shadow-sm">
                          {t("확률", "Probability")}: {risk.probability}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("대응 방안", "Mitigation Strategies")}</h4>
                      <ul className="space-y-2">
                        {risk.mitigation.map((strategy, strategyIndex) => (
                          <li key={strategyIndex} className="flex items-start">
                            <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                            <span className="text-gray-800 font-medium">{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 비상 계획 */}
      <Card className="bg-white/90 backdrop-blur-md shadow-xl border border-white/30">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            🚨 {t("비상 대응 계획", "Emergency Response Plans")}
          </h2>
          <div className="space-y-6">
            {contingencyPlanning.map((plan, index) => (
              <div key={index} className="bg-amber-50/80 border border-amber-200 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{plan.scenario}</h3>
                <p className="text-gray-800 mb-4 font-medium">
                  <span className="font-bold text-red-700">{t("예상 영향", "Expected Impact")}:</span> {plan.impact}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("대응 방안", "Response Strategies")}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {plan.responses.map((response, responseIndex) => (
                      <div key={responseIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                        <span className="text-gray-800 font-medium">{response}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>



      {/* 리스크 모니터링 */}
      <Card className="bg-white/90 backdrop-blur-md shadow-xl border border-white/30">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            📈 {t("리스크 모니터링 체계", "Risk Monitoring System")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-100 border border-red-300 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-red-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("일일 모니터링", "Daily Monitoring")}</h3>
              <ul className="space-y-2 text-red-800 font-medium">
                <li>• {t("마필 건강 상태 점검", "Horse health status check")}</li>
                <li>• {t("안전 장비 점검", "Safety equipment inspection")}</li>
                <li>• {t("날씨 및 환경 조건", "Weather and environmental conditions")}</li>
              </ul>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-yellow-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("주간 모니터링", "Weekly Monitoring")}</h3>
              <ul className="space-y-2 text-yellow-800 font-medium">
                <li>• {t("수익 및 비용 분석", "Revenue and cost analysis")}</li>
                <li>• {t("고객 만족도 조사", "Customer satisfaction survey")}</li>
                <li>• {t("직원 안전 교육", "Employee safety training")}</li>
              </ul>
            </div>
            <div className="bg-green-100 border border-green-300 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-green-900 mb-3 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("월간 모니터링", "Monthly Monitoring")}</h3>
              <ul className="space-y-2 text-green-800 font-medium">
                <li>• {t("전체 리스크 평가 검토", "Comprehensive risk assessment review")}</li>
                <li>• {t("정책 및 규제 변화 분석", "Policy and regulatory change analysis")}</li>
                <li>• {t("비상 계획 업데이트", "Emergency plan updates")}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}