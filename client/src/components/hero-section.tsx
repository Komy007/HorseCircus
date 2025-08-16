import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadBrochure = () => {
    // TODO: Implement actual PDF download
    alert(t('브로셔 다운로드 기능을 준비 중입니다.', 'Brochure download feature is being prepared.'));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 mongolian-gradient"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.4'><circle cx='30' cy='30' r='4'/></g></svg>")`
        }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt={t("몽골 기마 곡예 공연 모습", "Mongolian horseman performing traditional equestrian show")}
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl opacity-90" 
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          {t("시엠립 몽골 마상곡예 공연", "Mongolian Equestrian Show in Siem Reap")}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          {t(
            "앙코르와트 관광객을 위한 전통과 모험의 융합",
            "Where tradition meets thrill for global travelers"
          )}
          <br />
          {t("연간 순익", "Expected annual net profit:")} <span className="font-bold text-earth-200">$2.1M ~ $3.3M</span> {t("예상", "")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            onClick={() => scrollToSection('investment')}
            className="bg-white text-mongolian-600 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            size="lg"
          >
            🎯 {t("투자 제안서 보기", "View Investment Proposal")}
          </Button>
          <Button
            onClick={handleDownloadBrochure}
            variant="outline"
            className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-mongolian-600 transition-all duration-200"
            size="lg"
          >
            📄 {t("브로셔 다운로드", "Download Brochure")}
          </Button>
        </div>
      </div>
    </section>
  );
}
