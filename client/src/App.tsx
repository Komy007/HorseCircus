import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import { SidebarNavigation } from "@/components/sidebar-navigation";
import Home from "@/pages/home";
import { BusinessOverviewPage } from "@/pages/business-overview-page";
import { InvestmentPointsPage } from "@/pages/investment-points-page";
import { InitialInvestmentPage } from "@/pages/initial-investment-page";
import { RevenueModelPage } from "@/pages/revenue-model-page";
import { OperationsForecastPage } from "@/pages/operations-forecast-page";
import { RiskManagementPage } from "@/pages/risk-management-page";
import { MarketingStrategyPage } from "@/pages/marketing-strategy-page";
import { BusinessVisionPage } from "@/pages/business-vision-page";
import { SiemReapLocationPage } from "@/pages/siem-reap-location-page";
import NotFound from "@/pages/not-found";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "home":
        return <Home onSectionChange={setCurrentSection} />;
      case "overview":
        return <BusinessOverviewPage />;
      case "investment":
        return <InvestmentPointsPage />;
      case "initial-investment":
        return <InitialInvestmentPage />;
      case "revenue":
        return <RevenueModelPage />;
      case "operations":
        return <OperationsForecastPage />;
      case "risk":
        return <RiskManagementPage />;
      case "marketing":
        return <MarketingStrategyPage />;
      case "vision":
        return <BusinessVisionPage />;
      case "location":
        return <SiemReapLocationPage />;
      default:
        return <NotFound />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col md:flex-row bg-black">
            {/* Navigation: Mobile top bar, Desktop sidebar */}
            <SidebarNavigation 
              currentSection={currentSection} 
              onSectionChange={setCurrentSection} 
            />
            
            <main className="flex-1 md:pl-64 transition-all duration-300 min-h-screen">
              <div className="w-full px-4 md:px-6 py-4 md:py-6 pt-20 md:pt-6">
                {renderCurrentSection()}
              </div>
            </main>
          </div>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
