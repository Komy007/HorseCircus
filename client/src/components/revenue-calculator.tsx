import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/language-context";

export function RevenueCalculator() {
  const { t } = useLanguage();
  const [dailyShows, setDailyShows] = useState(2);
  const [audiencePerShow, setAudiencePerShow] = useState(500);
  const [ticketPrice, setTicketPrice] = useState(20);
  
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [commission, setCommission] = useState(0);
  const [monthlyNet, setMonthlyNet] = useState(0);
  const [annualNet, setAnnualNet] = useState(0);

  useEffect(() => {
    const monthlyRev = dailyShows * audiencePerShow * ticketPrice * 30;
    const comm = monthlyRev * 0.3; // 30% commission
    const monthlyNetValue = monthlyRev - comm;
    const annualNetValue = monthlyNetValue * 12;
    
    setMonthlyRevenue(monthlyRev);
    setCommission(comm);
    setMonthlyNet(monthlyNetValue);
    setAnnualNet(annualNetValue);
  }, [dailyShows, audiencePerShow, ticketPrice]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        🧮 {t("수익 계산기", "Revenue Calculator")}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Label htmlFor="dailyShows" className="block text-sm font-medium text-gray-700 mb-2">
            {t("일일 공연 횟수", "Daily Shows")}
          </Label>
          <Input
            id="dailyShows"
            type="number"
            value={dailyShows}
            onChange={(e) => setDailyShows(Number(e.target.value))}
            min={1}
            max={4}
            className="focus:ring-2 focus:ring-mongolian-500 focus:border-transparent"
          />
        </div>
        <div>
          <Label htmlFor="audiencePerShow" className="block text-sm font-medium text-gray-700 mb-2">
            {t("회당 관객 수", "Audience per Show")}
          </Label>
          <Input
            id="audiencePerShow"
            type="number"
            value={audiencePerShow}
            onChange={(e) => setAudiencePerShow(Number(e.target.value))}
            min={100}
            max={1000}
            className="focus:ring-2 focus:ring-mongolian-500 focus:border-transparent"
          />
        </div>
        <div>
          <Label htmlFor="ticketPrice" className="block text-sm font-medium text-gray-700 mb-2">
            {t("티켓 가격 ($)", "Ticket Price ($)")}
          </Label>
          <Input
            id="ticketPrice"
            type="number"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(Number(e.target.value))}
            min={10}
            max={50}
            className="focus:ring-2 focus:ring-mongolian-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">
              {t("월간 수익", "Monthly Revenue")}
            </p>
            <p className="text-2xl font-bold text-mongolian-600">{formatCurrency(monthlyRevenue)}</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">
              {t("여행사 수수료", "Agency Commission")}
            </p>
            <p className="text-2xl font-bold text-red-600">-{formatCurrency(commission)}</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">
              {t("월간 순수익", "Monthly Net")}
            </p>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(monthlyNet)}</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">
              {t("연간 순수익", "Annual Net")}
            </p>
            <p className="text-2xl font-bold text-mongolian-600">{formatCurrency(annualNet)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
