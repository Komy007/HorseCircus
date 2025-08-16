import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { useEffect, useRef } from "react";

interface HomeProps {
  onSectionChange: (section: string) => void;
}

export default function Home({ onSectionChange }: HomeProps) {
  const { t, language, toggleLanguage } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple floating stars - just points of different sizes
    const stars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const numStars = 200;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Very slow movement
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1, // 1-3px dots
        opacity: Math.random() * 0.8 + 0.2 // 0.2-1.0 opacity
      });
    }

    let animationId: number;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw simple circular dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initial fill
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image - Mobile Optimized */}
      <div 
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{ 
          backgroundImage: `url('/riding-background.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%', // Move image up
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      {/* Mobile Background Adjustment */}
      <div 
        className="absolute inset-0 w-full h-full md:hidden"
        style={{ 
          backgroundImage: `url('/riding-background.jpeg')`,
          backgroundSize: '150% auto', // Mobile: zoom in for better visibility
          backgroundPosition: 'center 5%', // Focus on upper part of horse and rider
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />

      {/* Subtle overlay for text readability only */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 md:from-black/30 md:via-transparent md:to-black/40" style={{ zIndex: 2 }} />

      {/* Subtle Star Field Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ zIndex: 3 }}
      />

      {/* Angkor Wat Silhouette - Very Subtle */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 opacity-10"
        style={{ 
          zIndex: 4,
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M0 200h1200V120c-50-20-100-40-150-50-30-10-60-15-90-15s-60 5-90 15c-50 10-100 30-150 50-50-20-100-40-150-50-30-10-60-15-90-15s-60 5-90 15c-50 10-100 30-150 50-50-20-100-40-150-50-30-10-60-15-90-15s-60 5-90 15C50 80 0 100 0 120V200z' fill='%23ffffff'/%3E%3C/svg%3E") bottom center/cover no-repeat`,
        }}
      />

      {/* Language Toggle - Desktop Only */}
      <div className="absolute top-6 right-6 z-20 hidden md:block">
        <Button
          variant="outline"
          onClick={toggleLanguage}
          className="px-4 py-2 border border-white/30 bg-black/20 text-white hover:bg-white/10 backdrop-blur-sm"
        >
          {language === 'ko' ? 'English' : '한국어'}
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 text-center">
        {/* Logo */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 md:mb-8 overflow-hidden shadow-2xl border-4 border-white/20 logo-rotate">
          <img 
            src="/attached_assets/20250313_172013_1754638755741.png" 
            alt="Mongolian Equestrian Show"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 안내 텍스트 */}
        <div className="mb-6 md:mb-8 max-w-4xl mx-auto px-4">
          <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-relaxed drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] bg-black/20 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20">
            {t("오른쪽 메뉴를 눌러서 항목을 보시거나 화면을 내리면 자세히 항목을 확인 할 수 있습니다.", 
               "Click the right menu to view sections or scroll down to explore detailed items.")}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white px-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
          {t("몽골 마상곡예", "Mongolian Equestrian")}
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-8 text-slate-100 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.7)]">
          {t("제안서", "Investment Proposal")}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">
          {t("캄보디아 시엠립에서 펼쳐지는 특별한 기회를 소개합니다", 
             "Discover unique investment opportunities in Siem Reap, Cambodia")}
        </p>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto mb-8 md:mb-12 px-4">
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-slate-900 text-2xl md:text-3xl font-bold">🏆</span>
            </div>
            <h3 className="font-semibold text-white text-sm md:text-lg mb-1 md:mb-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">{t("시장 독점", "Market Monopoly")}</h3>
            <p className="text-slate-200 text-xs md:text-base drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">{t("동남아 유일", "Southeast Asia's Only")}</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl md:text-3xl font-bold">💰</span>
            </div>
            <h3 className="font-semibold text-white text-sm md:text-lg mb-1 md:mb-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">{t("높은 수익성", "High Profitability")}</h3>
            <p className="text-slate-200 text-xs md:text-base drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">ROI 67%+</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl md:text-3xl font-bold">📍</span>
            </div>
            <h3 className="font-semibold text-white text-sm md:text-lg mb-1 md:mb-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">{t("최적 입지", "Optimal Location")}</h3>
            <p className="text-slate-200 text-xs md:text-base drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">{t("앙코르와트 최대중심지", "Near Angkor Wat")}</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl md:text-3xl font-bold">🚀</span>
            </div>
            <h3 className="font-semibold text-white text-sm md:text-lg mb-1 md:mb-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">{t("확장 가능성", "Expansion Potential")}</h3>
            <p className="text-slate-200 text-xs md:text-base drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">{t("시엠립 관광객", "Aall Tourist")}</p>
          </div>
        </div>

        {/* Navigation Guide */}
        <div className="text-white text-base md:text-lg text-center px-4 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
          {t("☰ 메뉴를 통해 상세 내용을 확인하세요", "☰ Use menu to explore detailed sections")}
        </div>
      </div>

      {/* Navigation Guide and Contact */}
      <div className="relative z-10 px-4 md:px-6 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Guide */}
          <Card className="bg-black/60 border-white/30 backdrop-blur-md mb-6 md:mb-8">
            <CardContent className="p-4 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                📋 {t("사업 제안서 구성", "Business Proposal Structure")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <button 
                  onClick={() => {
                    onSectionChange("overview");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">📊 {t("사업 개요", "Business Overview")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("프로젝트 개요, 공연 내용, 핵심 지표 및 경쟁 우위 분석", 
                       "Project overview, performance content, key metrics and competitive advantages")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("investment");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">💎 {t("투자 포인트", "Investment Points")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("독점 시장 기회, 안정적 수익 구조, 높은 수익성 분석", 
                       "Exclusive market opportunity, stable revenue structure, high profitability analysis")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("revenue");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">🎟️ {t("수익 모델", "Revenue Model")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("티켓 판매 분석, 실시간 계산기, 상세한 수익 구조", 
                       "Ticket sales analysis, real-time calculator, detailed revenue structure")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("operations");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">🛠️ {t("운영비 전망", "Operations Forecast")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("상세 운영비 분석, 5년 수익 전망, 비용 최적화 전략", 
                       "Detailed operating cost analysis, 5-year revenue forecast, cost optimization strategies")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("risk");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30 shadow-lg"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">🛡️ {t("리스크 관리", "Risk Management")}</h3>
                  <p className="text-gray-200 text-xs md:text-sm drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
                    {t("위험 평가 매트릭스, 대응 전략, 보험 및 보장 체계", 
                       "Risk assessment matrix, response strategies, insurance and coverage systems")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("marketing");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">📢 {t("마케팅 전략", "Marketing Strategy")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("다채널 마케팅, 타겟 고객 분석, 브랜딩 및 성과 지표", 
                       "Multi-channel marketing, target customer analysis, branding and performance metrics")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("initial-investment");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">💰 {t("초기 투자", "Initial Investment")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("상세한 초기 투자 비용 분석 및 항목별 예산 계획", 
                       "Detailed initial investment cost analysis and budget planning by category")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("vision");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">🚀 {t("사업 비전", "Business Vision")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("장기 비전, 확장 계획 및 미래 성장 전략", 
                       "Long-term vision, expansion plans and future growth strategies")}
                  </p>
                </button>
                <button 
                  onClick={() => {
                    onSectionChange("location");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 md:p-6 backdrop-blur-sm transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-white/30"
                >
                  <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">📍 {t("시엠립 위치", "Siem Reap Location")}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {t("최적의 입지 조건, 접근성 및 관광 인프라 분석", 
                       "Optimal location conditions, accessibility and tourism infrastructure analysis")}
                  </p>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-black/40 border-mongolian-500/50 backdrop-blur-sm">
            <CardContent className="p-4 md:p-8">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                  📞 {t("문의", "Investment Inquiry")}
                </h2>
                <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 px-2">
                  {t("더 자세한 정보나 문의를 원하시면 언제든 연락주세요.", 
                     "Contact us anytime for more detailed information or investment consultation.")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                  <button 
                    onClick={() => window.open('mailto:cambodia.bae@gmail.com', '_blank')}
                    className="text-center bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200 cursor-pointer border border-transparent hover:border-white/30"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
                      <span className="text-white text-base md:text-lg">📧</span>
                    </div>
                    <h3 className="font-semibold text-white text-sm md:text-base">{t("이메일", "Email")}</h3>
                    <p className="text-xs md:text-sm text-gray-300">cambodia.bae@gmail.com</p>
                  </button>
                  <button 
                    onClick={() => window.open('tel:+855095779873', '_self')}
                    className="text-center bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200 cursor-pointer border border-transparent hover:border-white/30"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
                      <span className="text-white text-base md:text-lg">📱</span>
                    </div>
                    <h3 className="font-semibold text-white text-sm md:text-base">{t("전화", "Phone")}</h3>
                    <p className="text-xs md:text-sm text-gray-300">+855 095 779 873</p>
                  </button>
                  <button 
                    onClick={() => {
                      onSectionChange("location");
                      // 페이지 이동 후 구글 맵 섹션으로 스크롤
                      setTimeout(() => {
                        const mapElement = document.getElementById('google-map-section');
                        if (mapElement) {
                          mapElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 500);
                    }}
                    className="text-center bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200 cursor-pointer border border-transparent hover:border-white/30"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
                      <span className="text-white text-base md:text-lg">📍</span>
                    </div>
                    <h3 className="font-semibold text-white text-sm md:text-base">{t("위치", "Location")}</h3>
                    <p className="text-xs md:text-sm text-gray-300">{t("시엠립, 캄보디아", "Siem Reap, Cambodia")}</p>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 몽골 마상곡예 갤러리 */}
          <Card className="bg-black/40 border-mongolian-500/50 backdrop-blur-sm">
            <CardContent className="p-4 md:p-8">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  🏇 {t("몽골 마상곡예 갤러리", "Mongolian Equestrian Gallery")}
                </h2>
                <p className="text-base md:text-lg text-gray-300 px-2">
                  {t("전통적인 몽골 마상곡예의 웅장한 모습을 미리 만나보세요", 
                     "Preview the magnificent traditional Mongolian equestrian performances")}
                </p>
              </div>

              {/* 이미지 갤러리 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* 첫 번째 이미지 - 전통 몽골 기병대 */}
                <div className="relative group">
                  <img 
                    src="/attached_assets/Riding1 (1)_1755070691411.png" 
                    alt={t("전통 몽골 기병대", "Traditional Mongolian Cavalry")}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-2xl border-2 border-amber-300 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("전통 몽골 기병대의 위용", "Majesty of Traditional Mongolian Cavalry")}
                    </p>
                  </div>
                </div>

                {/* 두 번째 이미지 - 몽골 전통 경기 */}
                <div className="relative group">
                  <img 
                    src="/attached_assets/Riding1 (2)_1755070691412.jpg" 
                    alt={t("몽골 전통 경기", "Mongolian Traditional Competition")}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-2xl border-2 border-blue-300 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("몽골 전통 말 경기", "Traditional Mongolian Horse Racing")}
                    </p>
                  </div>
                </div>

                {/* 세 번째 이미지 - 마상 궁술 */}
                <div className="relative group">
                  <img 
                    src="/attached_assets/Riding1 (2)_1755070691413.png" 
                    alt={t("마상 궁술", "Mounted Archery")}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-2xl border-2 border-green-300 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("정교한 마상 궁술 기예", "Precise Mounted Archery Skills")}
                    </p>
                  </div>
                </div>

                {/* 네 번째 이미지 - 승마 곡예 */}
                <div className="relative group">
                  <img 
                    src="/attached_assets/Riding1 (3)_1755070691414.png" 
                    alt={t("승마 곡예", "Equestrian Acrobatics")}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-2xl border-2 border-purple-300 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("역동적인 승마 곡예", "Dynamic Equestrian Acrobatics")}
                    </p>
                  </div>
                </div>

                {/* 다섯 번째 이미지 - 전통 의상 기예 */}
                <div className="relative group">
                  <img 
                    src="/attached_assets/Riding1 (4)_1755070691414.png" 
                    alt={t("전통 의상 기예", "Traditional Costume Performance")}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-2xl border-2 border-red-300 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("전통 몽골 의상과 기예", "Traditional Mongolian Costume & Skills")}
                    </p>
                  </div>
                </div>

                {/* 여섯 번째 이미지 - 다중 말 곡예 */}
                <div className="relative group">
                  <img 
                    src="/attached_assets/Riding1 (9)_1755070691414.jpg" 
                    alt={t("다중 말 곡예", "Multi-Horse Acrobatics")}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-2xl border-2 border-orange-300 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm font-bold text-center">
                      {t("스릴 넘치는 다중 말 곡예", "Thrilling Multi-Horse Acrobatics")}
                    </p>
                  </div>
                </div>
              </div>

              {/* 갤러리 하단 설명 */}
              <div className="mt-6 md:mt-8 text-center">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed px-2">
                  {t("이 모든 웅장한 공연을 시엠립에서 직접 체험할 수 있습니다. 전통과 현대가 만나는 특별한 투자 기회를 놓치지 마세요.", 
                     "Experience all these magnificent performances live in Siem Reap. Don't miss this unique investment opportunity where tradition meets modernity.")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}