import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function BusinessOverviewPage() {
  const { t } = useLanguage();

  const projectDetails = [
    {
      title: t("프로젝트명", "Project Name"),
      content: t("몽골 마상곡예 & 문화 체험 공연장", "Mongolian Equestrian & Cultural Experience Theater")
    },
    {
      title: t("위치", "Location"),
      content: t("앙코르와트 인근, 시내 접근성 우수 지역", "Near Angkor Wat complex, excellent city accessibility")
    },
    {
      title: t("사업 목적", "Business Purpose"),
      content: t("시엠립 관광의 필수 콘텐츠로 육성 및 몽골 전통 마상곡예의 아시아 대표 콘텐츠화", "Establishing as essential Siem Reap tourism content and Asia's leading Mongolian equestrian performance")
    }
  ];

  const performanceDetails = [
    {
      icon: "🎭",
      title: t("공연 내용", "Performance Content"),
      details: [
        t("몽골 전통 기마전사와 아크로바틱 곡예", "Traditional Mongolian mounted warriors and acrobatic performances"),
        t("전통 음악과 의상, 조명이 결합된 스토리텔링", "Storytelling combined with traditional music, costumes, and lighting"),
        t("관객 참여형 포토존 및 체험 프로그램", "Interactive photo zones and experience programs for audience")
      ]
    },
    {
      icon: "👥",
      title: t("운영 규모", "Operating Scale"),
      details: [
        t("1일 2회 공연 (상황에 따라 탄력적운영,오전,오후)", "2 shows daily (Hours are flexible,morning and afternoon.)"),
        t("회당 500명 수용 규모", "500 audience capacity per show"),
        t("월 60회 공연 (30일 기준)", "60 performances per month (30 days)")
      ]
    },
    {
      icon: "🏛️",
      title: t("시설 구성", "Facility Composition"),
      details: [
        t("메인 공연장 (실내외 겸용)", "Main theater (indoor/outdoor hybrid)"),
        t("기념품샵 및 문화 체험 공간", "Souvenir shop and cultural experience area"),
        t("F&B 구역 및 휴식 공간", "F&B zone and rest areas"),
        t("마필 관리 시설", "Horse care facilities")
      ]
    }
  ];

  const keyMetrics = [
    {
      label: t("일일 최소 관객", "Daily Minimum Audience"),
      value: "1,000명",
      color: "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200"
    },
    {
      label: t("월간 예상 관객", "Monthly Expected Audience"),
      value: "30,000명",
      color: "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200"
    },
    {
      label: t("연간 예상 관객", "Annual Expected Audience"),
      value: "360,000명",
      color: "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200"
    },
    {
      label: t("시장 독점성", "Market Exclusivity"),
      value: t("동남아 유일", "Only in Southeast Asia"),
      color: "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 border border-violet-200"
    }
  ];

  return (
    <div className="relative space-y-6 md:space-y-8 min-h-screen text-white p-4 md:p-8">
      {/* Background Image - Mobile Optimized */}
      <div 
        className="absolute inset-0 w-full h-full opacity-70 hidden md:block"
        style={{
          backgroundImage: `url('/business-overview-bg.png')`,
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
          backgroundImage: `url('/business-overview-bg.png')`,
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
          📊 {t("사업 개요", "Business Overview")}
        </h1>
        <p className="text-base md:text-xl text-white max-w-4xl mx-auto mb-4 md:mb-6 px-2 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.8)]">
          {t("동남아시아 최초의 몽골 마상곡예 공연장으로 시엠립 관광의 새로운 랜드마크를 창조합니다", 
             "Creating Siem Reap's new tourism landmark as Southeast Asia's first Mongolian equestrian performance venue")}
        </p>
        
        {/* Project Background */}
        <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 md:p-6 max-w-5xl mx-auto shadow-lg border border-white/30">
          <p className="text-sm md:text-lg text-gray-900 leading-relaxed font-bold">
            {t("캄보디아 연간 약 700만 명의 관광객이 방문하는 세계적인 관광 명소 앙코르와트를 가지고 있습니다. 이 지역의 높은 관광 수요를 활용하여 마장마술 공연장을 설립하는 프로젝트로, 투자금 회수가 적합하고 수익성이 확보된 사업 모델을 기반으로 운영됩니다.",
               "Cambodia hosts approximately 7 million tourists annually with the world-famous Angkor Wat. This project leverages the high tourism demand in this region to establish an equestrian show venue, operating on a business model that ensures proper investment recovery and secured profitability.")}
          </p>
          <p className="text-sm md:text-lg text-gray-900 leading-relaxed mt-3 md:mt-4 font-bold">
            {t("이 프로젝트는 캄보디아의 관광 명소인 씨엠립주, 세계적인 명소인 앙코르와트 지역, 유적지 관광 후 관광객들에게 특별한 경험을 제공하며, 안정적인 수익 모델을 구축하는 것을 목표로 합니다.",
               "This project aims to provide tourists with a unique experience after visiting the historic sites in Siem Reap Province, Cambodia, near the world-renowned Angkor Wat, while establishing a stable revenue model.")}
          </p>
        </div>
      </div>

      {/* Mongolian Riding Feature Image - Mobile Optimized */}
      <div className="relative z-10 w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/Riding1 (5)_1755062196060.jpg" 
          alt={t("몽골 마상곡예 이미지", "Mongolian Equestrian Performance Image")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-white/30"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
        {/* Image Caption */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("몽골 전통 마상곡예의 역동적인 모습", "Dynamic Mongolian Traditional Equestrian Performance")}
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
        {/* Background Image for this section */}
        <div 
          className="absolute inset-0 w-full h-full opacity-50"
          style={{
            backgroundImage: `url('/business-overview-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Content overlay */}
        <div className="relative bg-black/40 backdrop-blur-sm">
          <div className="p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              🎯 {t("프로젝트 상세", "Project Details")}
            </h2>
            <div className="space-y-4 md:space-y-6">
              {projectDetails.map((detail, index) => (
                <div key={index} className="border-l-4 border-amber-400 pl-3 md:pl-4 bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-r-lg">
                  <h3 className="font-bold text-base md:text-lg text-gray-900">{detail.title}</h3>
                  <p className="text-gray-900 mt-1 text-sm md:text-base font-bold">{detail.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Details */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {performanceDetails.map((section, index) => (
          <Card key={index} className="h-full bg-white/70 backdrop-blur-md shadow-xl border border-white/30">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl mr-2 md:mr-3">{section.icon}</span>
                <h3 className="text-base md:text-xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1 font-bold">•</span>
                    <span className="text-gray-900 text-sm md:text-base font-bold">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Second Mongolian Riding Feature Image - Mobile Optimized */}
      <div className="relative z-10 w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/Riding1 (9)_1755062331594.jpg" 
          alt={t("몽골 마상 곡예 공연", "Mongolian Equestrian Acrobatic Performance")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-white/30"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
        {/* Image Caption */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("몽골 기수의 놀라운 승마 기술과 곡예", "Amazing riding skills and acrobatics of Mongolian horsemen")}
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <Card className="relative z-10 bg-white/50 backdrop-blur-md shadow-xl border border-white/20">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            📈 {t("핵심 지표", "Key Metrics")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-100 to-orange-200 border-2 border-amber-400 rounded-lg p-3 md:p-4 text-center shadow-md">
                <p className="text-xs md:text-sm font-bold mb-1 md:mb-2 text-gray-900">{metric.label}</p>
                <p className="text-lg md:text-2xl font-bold text-amber-800">{metric.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Advantages */}
      <Card className="relative z-10 bg-white/50 backdrop-blur-md shadow-xl border border-white/20">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            🏆 {t("경쟁 우위", "Competitive Advantages")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6">
              <h3 className="font-bold text-base md:text-lg text-green-900 mb-3">
                {t("차별화 요소", "Differentiation Factors")}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("동남아시아 유일의 몽골 마상곡예 공연", "Only Mongolian equestrian show in Southeast Asia")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("전통과 현대가 결합된 독창적 콘텐츠", "Unique content combining tradition and modernity")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("앙코르와트 관광과 완벽한 시너지", "Perfect synergy with Angkor Wat tourism")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 md:p-6">
              <h3 className="font-bold text-base md:text-lg text-blue-900 mb-3">
                {t("시장 기회", "Market Opportunities")}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("연간 700만 명의 시엠립 방문객", "7 million annual Siem Reap visitors")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("캄보디아 정부의 관광 산업 육성 정책", "Cambodian government's tourism industry development policy")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("포스트 코로나 체험형 관광 수요 증가", "Increasing demand for experiential tourism post-COVID")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}