import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function InvestmentPointsPage() {
  const { t } = useLanguage();

  const investmentHighlights = [
    {
      icon: "🎯",
      title: t("독점적 시장 기회", "Exclusive Market Opportunity"),
      description: t("동남아시아 유일의 몽골 마상곡예 공연으로 경쟁자 없는 블루오션 시장", "Blue ocean market with no competitors as the only Mongolian equestrian show in Southeast Asia"),
      details: [
        {
          subtitle: t("시장 독점성", "Market Monopoly"),
          points: [
            t("동남아시아 전체에서 유일무이한 콘텐츠", "Unique content across all of Southeast Asia"),
            t("타 관광지와의 차별화된 경험 제공", "Differentiated experience from other tourist attractions"),
            t("선점 효과로 인한 브랜드 인지도 확보", "Brand recognition secured through first-mover advantage")
          ]
        },
        {
          subtitle: t("정부 지원", "Government Support"),
          points: [
            t("캄보디아 정부의 관광 투자 우대 정책", "Cambodia's preferential tourism investment policies"),
            t("외국인 투자 유치를 위한 각종 혜택", "Various benefits for attracting foreign investment"),
            t("문화 콘텐츠 산업 육성 의지", "Government commitment to cultural content industry development")
          ]
        }
      ]
    },
    {
      icon: "💰",
      title: t("안정적 수익 구조", "Stable Revenue Structure"),
      description: t("다양한 수익원을 통한 안정적이고 지속가능한 비즈니스 모델", "Stable and sustainable business model through diversified revenue streams"),
      details: [
        {
          subtitle: t("다중 수익원", "Multiple Revenue Streams"),
          points: [
            t("티켓 판매 (85%): 메인 수익 원", "Ticket sales (85%): Primary revenue source"),
            t("체험 프로그램 (8%): 승마, 활쏘기 등 공연 후 필요한 관광객", "Experience programs (8%): Horse riding, archery for tourists after performances"),
            t("기념품 판매 (4%): 몽골 전통 상품, 경기장 외 매장", "Souvenir sales (4%): Traditional Mongolian products, stores outside venue"),
            t("F&B 운영 (3%): 전통 음식 및 음료", "F&B operations (3%): Traditional food and beverages")
          ]
        },
        {
          subtitle: t("고객 확보 전략", "Customer Acquisition Strategy"),
          points: [
            t("여행사 중 대형 패키지 가능한 여행사 컨텍, 옵션 포함으로 안정적 고객 유치", "Contact with travel agencies capable of large packages, stable customer attraction through optional inclusions"),
            t("호텔 및 리조트와의 제휴 마케팅", "Partnership marketing with hotels and resorts"),
            t("온라인 예약 시스템을 통한 개별 고객 확보", "Individual customer acquisition through online booking system"),
            t("대중 교통인 택시, 뚝뚝 기사 커미션 포함 고객유치", "Customer acquisition including taxi and tuk-tuk driver commissions for public transportation")
          ]
        }
      ]
    },
    {
      icon: "📈",
      title: t("높은 수익성", "High Profitability"),
      description: t("투자 대비 뛰어난 수익률과 빠른 회수 기간", "Excellent ROI and fast payback period"),
      details: [
        {
          subtitle: t("수익 전망", "Revenue Forecast"),
          points: [
            t("연간 순이익: $2.1M ~ $3.3M (보수적 추정)", "Annual net profit: $2.1M ~ $3.3M (conservative estimate)"),
            t("투자 회수 기간: 약 1.5년", "Investment payback period: Approximately 1.5 years"),
            t("연간 ROI: 67% ~ 100%", "Annual ROI: 67% ~ 100%")
          ]
        },
        {
          subtitle: t("비용 효율성", "Cost Efficiency"),
          points: [
            t("상대적으로 낮은 초기 투자 비용", "Relatively low initial investment cost"),
            t("효율적인 운영비 구조", "Efficient operating cost structure"),
            t("규모의 경제 실현 가능", "Economies of scale achievable")
          ]
        }
      ]
    },
    {
      icon: "🚀",
      title: t("확장 가능성", "Expansion Potential"),
      description: t("다양한 부가 사업과 지역 확장을 통한 성장 기회", "Growth opportunities through various ancillary businesses and regional expansion"),
      details: [
        {
          subtitle: t("부가 사업 기회", "Ancillary Business Opportunities"),
          points: [
            t("말 테마 체험존: 승마 교육, 포토존", "Horse-themed experience zone: Riding education, photo zones"),
            t("전통 야시장: 한국 음식/화장품,수공예품", "Traditional night market: Korean food/Cosmetics, handicrafts"),
            t("문화 박물관: 한국/캄보디아/몽골 역사 및 문화 전시", "Cultural museum: Korea,Cambodia,Mongolian history and culture exhibition")
          ]
        },
        {
          subtitle: t("사업 확장", "Business Expansion"),
          points: [
            t("광광객이 모일만한 멋진장소 확장,시장수요 마추어 확장", "Expansion to major Tour Business destinations like Wonderful and unforgettabl"),
            t("한국에서 관광객 인기상품 판매", "Selling popular products to tourists in Korea."),
            t("문화 콘텐츠 브랜드로 성장", "Growth as a cultural content brand across Asia")
          ]
        }
      ]
    }
  ];

  const financialHighlights = [
    {
      metric: t("예상 연간 매출", "Expected Annual Revenue"),
      value: "$5.04M",
      description: t("티켓 판매 기준", "Based on ticket sales"),
      color: "bg-mongolian-500"
    },
    {
      metric: t("예상 연간 순이익", "Expected Annual Net Profit"),
      value: "$2.1M+",
      description: t("보수적 추정", "Conservative estimate"),
      color: "bg-green-500"
    },
    {
      metric: t("투자 회수 기간", "Payback Period"),
      value: "1.5년",
      description: t("운영 안정화 후", "After operational stabilization"),
      color: "bg-blue-500"
    },
    {
      metric: t("연간 ROI", "Annual ROI"),
      value: "67%+",
      description: t("투자 대비 수익률", "Return on investment"),
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="relative space-y-6 md:space-y-8 min-h-screen text-white p-4 md:p-8">
      {/* Background Image - Mobile Optimized */}
      <div 
        className="absolute inset-0 w-full h-full opacity-70 hidden md:block"
        style={{
          backgroundImage: `url('/investment-points-bg.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 w-full h-full opacity-80 md:hidden"
        style={{
          backgroundImage: `url('/investment-points-bg.jpeg')`,
          backgroundSize: '120% auto',
          backgroundPosition: 'center 15%',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      {/* Light overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30"
        style={{ zIndex: 2 }}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
          💎 {t("투자 포인트", "Investment Highlights")}
        </h1>
        <p className="text-base md:text-xl text-white max-w-3xl mx-auto px-2 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.8)]">
          {t("검증된 비즈니스 모델과 독점적 시장 기회를 통한 안정적이고 수익성 높은 투자", 
             "Stable and highly profitable investment through proven business model and exclusive market opportunity")}
        </p>
      </div>

      {/* Financial Highlights */}
      <Card className="relative z-10 bg-white/30 backdrop-blur-md shadow-xl border border-white/20">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 text-center drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            📊 {t("핵심 재무 지표", "Key Financial Metrics")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {financialHighlights.map((item, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-amber-100/40 to-orange-200/40 backdrop-blur-sm border-2 border-amber-400/50 rounded-lg p-4 md:p-6 shadow-lg">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <span className="text-white text-lg md:text-2xl font-bold">
                    {item.value.includes('$') ? '$' : item.value.includes('%') ? '%' : item.value.includes('년') ? '년' : '💰'}
                  </span>
                </div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 mb-1 md:mb-2 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{item.metric}</h3>
                <p className="text-xl md:text-3xl font-bold text-amber-900 mb-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{item.value}</p>
                <p className="text-xs md:text-sm text-gray-800 font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Investment Feature Image - Mobile Optimized */}
      <div className="relative z-10 w-full mb-4 md:mb-6">
        <img 
          src="/investment-points-bg.jpeg" 
          alt={t("투자 포인트 이미지", "Investment Points Image")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-white/30"
          style={{
            objectPosition: 'center 20%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg"></div>
      </div>

      {/* Investment Highlights */}
      <div className="relative z-10 space-y-4 md:space-y-6">
        {investmentHighlights.map((highlight, index) => (
          <Card key={index} className="bg-white/30 backdrop-blur-md shadow-xl border border-white/20 overflow-hidden">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl md:text-3xl text-white">{highlight.icon}</span>
                </div>
                <div>
                  <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-1 md:mb-2 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{highlight.title}</h2>
                  <p className="text-sm md:text-base text-gray-800 font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{highlight.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {highlight.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="bg-white/40 backdrop-blur-sm border-2 border-white/30 rounded-lg p-4 md:p-6">
                    <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-3 md:mb-4 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{detail.subtitle}</h3>
                    <ul className="space-y-2 md:space-y-3">
                      {detail.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="text-amber-600 mr-2 mt-1 flex-shrink-0 font-bold">•</span>
                          <span className="text-gray-900 text-sm md:text-base font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Timeline */}
      <Card className="relative z-10 bg-white/30 backdrop-blur-md shadow-xl border border-white/20">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            ⏰ {t("투자 일정", "Investment Timeline")}
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start space-x-3 md:space-x-4 bg-amber-50/40 backdrop-blur-sm border-2 border-amber-300/50 rounded-lg p-3 md:p-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">1</div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("투자 유치 및 계약", "Investment Attraction & Contract")}</h3>
                <p className="text-gray-800 text-xs md:text-base font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("0-3개월: 투자 확정, 법적 절차 완료", "0-3 months: Investor confirmation, legal procedures completion")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4 bg-blue-50/40 backdrop-blur-sm border-2 border-blue-300/50 rounded-lg p-3 md:p-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">2</div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("시설 구축", "Facility Construction")}</h3>
                <p className="text-gray-800 text-xs md:text-base font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("3-9개월: 공연장 건설, 마필 도입, 스태프 훈련, 여행사 접촉 팩키지상담", "3-9 months: Theater construction, horse import, staff training, contact tour agency")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4 bg-green-50/40 backdrop-blur-sm border-2 border-green-300/50 rounded-lg p-3 md:p-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">3</div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("운영 시작", "Operations Launch")}</h3>
                <p className="text-gray-800 text-xs md:text-base font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("9-12개월: 정식 오픈, 마케팅 런칭, 수익 창출 시작", "9-12 months: Official opening, marketing launch, revenue generation start")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4 bg-purple-50/40 backdrop-blur-sm border-2 border-purple-300/50 rounded-lg p-3 md:p-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">4</div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("투자 회수", "Investment Recovery")}</h3>
                <p className="text-gray-800 text-xs md:text-base font-bold drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)]">{t("12-29개월: 안정적 운영, 투자금 회수 완료", "12-29 months: Stable operations, investment recovery completion")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


    </div>
  );
}