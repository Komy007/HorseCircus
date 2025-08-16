import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";

interface SidebarNavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function SidebarNavigation({ currentSection, onSectionChange }: SidebarNavigationProps) {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: "home",
      label: t("홈", "Home"),
      icon: "🏠",
      description: t("제안서 개요", "Investment proposal overview")
    },
    {
      id: "overview",
      label: t("사업 개요", "Business Overview"),
      icon: "📊",
      description: t("프로젝트 개요 및 핵심 지표", "Project overview and key metrics")
    },
    {
      id: "investment",
      label: t("투자 포인트", "Investment Points"),
      icon: "💎",
      description: t("핵심 투자 매력도", "Core investment attractiveness")
    },
    {
      id: "initial-investment",
      label: t("초기 투자내역", "Initial Investment"),
      icon: "💰",
      description: t("상세 투자 비용 분석", "Detailed investment cost analysis")
    },
    {
      id: "revenue",
      label: t("수익 모델", "Revenue Model"),
      icon: "🎟️",
      description: t("상세 수익 구조 분석", "Detailed revenue structure analysis")
    },
    {
      id: "operations",
      label: t("운영비 전망", "Operations Forecast"),
      icon: "🛠️",
      description: t("운영비 및 수익성 전망", "Operating costs and profitability forecast")
    },
    {
      id: "risk",
      label: t("리스크 관리", "Risk Management"),
      icon: "🛡️",
      description: t("위험 분석 및 대응 전략", "Risk analysis and response strategies")
    },
    {
      id: "marketing",
      label: t("마케팅 전략", "Marketing Strategy"),
      icon: "📢",
      description: t("고객 유치 및 브랜딩", "Customer acquisition and branding")
    },
    {
      id: "vision",
      label: t("사업 비전", "Business Vision"),
      icon: "🧭",
      description: t("확장 계획 및 미래 전망", "Expansion plan and future outlook")
    },
    {
      id: "location",
      label: t("시엠립 입지", "Siem Reap Location"),
      icon: "🗺️",
      description: t("입지 장점 및 사업 기회", "Location advantages and business opportunities")
    }
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-50 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-500/50">
              <img 
                src="/attached_assets/20250313_172013_1754638755741.png" 
                alt="Mongolian Equestrian"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-white text-lg">
                {t("몽골 마상곡예", "Mongolian Show")}
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 text-xs px-3 py-2"
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`border-slate-600 text-slate-200 hover:bg-slate-700 px-3 py-2 text-sm flex items-center space-x-2 ${
                isMobileMenuOpen 
                  ? 'bg-amber-500 text-slate-900 border-amber-400' 
                  : 'bg-slate-800'
              }`}
            >
              <span className="text-lg">{isMobileMenuOpen ? '✕' : '☰'}</span>
              <span className="text-sm font-medium">
                {t("메뉴", "Menu")}
              </span>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-700 z-50 shadow-xl">
              <div className="p-4 space-y-3 max-h-[80vh] overflow-y-auto">
                {navigationItems.map((item) => {
                  const isActive = currentSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange(item.id);
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full p-4 rounded-lg transition-all duration-200 min-h-[70px] ${
                        isActive
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 shadow-lg'
                          : 'text-slate-200 hover:bg-slate-700 hover:text-white bg-slate-800/50 border border-slate-600/30'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center">
                          <span className="text-2xl">
                            {item.icon}
                          </span>
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className={`font-semibold text-lg ${
                            isActive ? 'text-slate-900' : 'text-white'
                          }`}>
                            {item.label}
                          </h3>
                          <p className={`text-sm mt-1 ${
                            isActive ? 'text-slate-700' : 'text-slate-400'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className={`text-xl ${
                            isActive ? 'text-slate-900' : 'text-slate-400'
                          }`}>
                            →
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-700 overflow-y-auto z-30">
        {/* Desktop Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/50">
              <img 
                src="/attached_assets/20250313_172013_1754638755741.png" 
                alt="Mongolian Equestrian"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-white text-lg">
                {t("몽골 마상곡예", "Mongolian Show")}
              </h1>
              <p className="text-sm text-slate-300">
                {t("제안서", "Investment Proposal")}
              </p>
            </div>
          </div>
          
          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="w-full bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-amber-500"
          >
            {language === 'ko' ? 'English' : '한국어'}
          </Button>
        </div>

        {/* Desktop Navigation Items */}
        <div className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 shadow-lg shadow-amber-500/25'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-semibold text-sm mb-1 ${
                      isActive ? 'text-slate-900' : 'text-white'
                    }`}>
                      {item.label}
                    </h3>
                    <p className={`text-xs ${
                      isActive ? 'text-slate-700' : 'text-slate-400'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}