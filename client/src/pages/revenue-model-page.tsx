import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useLanguage } from "@/contexts/language-context";

export function RevenueModelPage() {
  const { t } = useLanguage();
  const [dailyShows, setDailyShows] = useState(2);
  const [audiencePerShow, setAudiencePerShow] = useState(500);
  const [ticketPrice, setTicketPrice] = useState(20);
  const [occupancyRate, setOccupancyRate] = useState(50);

  // 계산 로직
  const actualAudience = Math.round((audiencePerShow * occupancyRate) / 100);
  const monthlyShows = dailyShows * 30;
  const monthlyAudience = actualAudience * monthlyShows;
  const monthlyTicketRevenue = monthlyAudience * ticketPrice;
  const agencyCommission = monthlyTicketRevenue * 0.25; // $5 commission on $20 ticket = 25%
  const monthlyNetTicketRevenue = monthlyTicketRevenue - agencyCommission;
  const annualNetTicketRevenue = monthlyNetTicketRevenue * 12;

  // 부가 수익
  const avgSpendingPerPerson = 1.5; // $1-2 평균
  const monthlyAncillaryRevenue = monthlyAudience * avgSpendingPerPerson;
  const annualAncillaryRevenue = monthlyAncillaryRevenue * 12;

  // 총 수익
  const totalAnnualRevenue = annualNetTicketRevenue + annualAncillaryRevenue;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // 새로운 수익 구조 (첨부 이미지 기준)
  const totalTicketRevenue = monthlyTicketRevenue * 12;
  const experienceRevenue = totalTicketRevenue * 0.08; // 8%
  const souvenirRevenue = totalTicketRevenue * 0.04; // 4%
  const fnbRevenue = totalTicketRevenue * 0.03; // 3%
  const totalRevenueNew = totalTicketRevenue + experienceRevenue + souvenirRevenue + fnbRevenue;

  const revenueBreakdown = [
    { 
      name: t("티켓 판매", "Ticket Sales"), 
      value: 85,
      amount: totalTicketRevenue,
      color: "#D97706"
    },
    { 
      name: t("체험 프로그램", "Experience Programs"), 
      value: 8,
      amount: experienceRevenue,
      color: "#059669",
      description: t("승마, 활쏘기 등 공연 후 필요한 관광객", "Horse riding, archery for tourists after performances")
    },
    { 
      name: t("기념품 판매", "Souvenir Sales"), 
      value: 4,
      amount: souvenirRevenue,
      color: "#3B82F6",
      description: t("몽골 전통 상품, 경기장 외 매장", "Traditional Mongolian products, stores outside venue")
    },
    { 
      name: t("F&B 운영", "F&B Operations"), 
      value: 3,
      amount: fnbRevenue,
      color: "#EF4444",
      description: t("전통 음식 및 음료", "Traditional food and beverages")
    }
  ];

  const monthlyProjection = Array.from({ length: 12 }, (_, i) => {
    const monthlyTotalRevenue = (totalRevenueNew / 12);
    return {
      month: t(
        `${i + 1}월`,
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]
      ),
      revenue: monthlyTotalRevenue,
      costs: 65000,
      profit: monthlyTotalRevenue - 65000
    };
  });

  const ticketCalculationSteps = [
    {
      step: t("1단계", "Step 1"),
      description: t("일일 관객 수", "Daily Audience"),
      calculation: `${actualAudience}명 × ${dailyShows}회 = ${actualAudience * dailyShows}명/일`,
      result: `${(actualAudience * dailyShows).toLocaleString()}명/일`
    },
    {
      step: t("2단계", "Step 2"), 
      description: t("월간 관객 수", "Monthly Audience"),
      calculation: `${actualAudience * dailyShows}명/일 × 30일 = ${monthlyAudience.toLocaleString()}명/월`,
      result: `${monthlyAudience.toLocaleString()}명/월`
    },
    {
      step: t("3단계", "Step 3"),
      description: t("연간 티켓 총매출", "Annual Gross Ticket Revenue"), 
      calculation: `${monthlyAudience.toLocaleString()}명 × $${ticketPrice} × 12개월 = ${formatCurrency(totalTicketRevenue)}`,
      result: formatCurrency(totalTicketRevenue)
    },
    {
      step: t("3-1단계", "Step 3-1"),
      description: t("여행사 커미션 차감 ($5/티켓)", "Travel Agency Commission Deduction ($5/ticket)"), 
      calculation: `${formatCurrency(totalTicketRevenue)} × 25% = ${formatCurrency(totalTicketRevenue * 0.25)}`,
      result: `${formatCurrency(totalTicketRevenue * 0.75)} (순수익)`
    },
    {
      step: t("4단계", "Step 4"),
      description: t("체험 프로그램 수익 (8%)", "Experience Program Revenue (8%)"),
      calculation: `${formatCurrency(totalTicketRevenue * 0.75)} × 8% = ${formatCurrency(experienceRevenue)}`,
      result: formatCurrency(experienceRevenue)
    },
    {
      step: t("5단계", "Step 5"),
      description: t("기념품 판매 수익 (4%)", "Souvenir Sales Revenue (4%)"),
      calculation: `${formatCurrency(totalTicketRevenue)} × 4% = ${formatCurrency(souvenirRevenue)}`,
      result: formatCurrency(souvenirRevenue)
    },
    {
      step: t("6단계", "Step 6"),
      description: t("F&B 운영 수익 (3%)", "F&B Operations Revenue (3%)"),
      calculation: `${formatCurrency(totalTicketRevenue)} × 3% = ${formatCurrency(fnbRevenue)}`,
      result: formatCurrency(fnbRevenue)
    },
    {
      step: t("7단계", "Step 7"),
      description: t("연간 총 수익 (커미션 차감 후)", "Total Annual Revenue (After Commission Deduction)"),
      calculation: `${formatCurrency(totalTicketRevenue * 0.75)} + ${formatCurrency(experienceRevenue)} + ${formatCurrency(souvenirRevenue)} + ${formatCurrency(fnbRevenue)}`,
      result: formatCurrency(totalRevenueNew * 0.75 + experienceRevenue + souvenirRevenue + fnbRevenue)
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8 bg-black min-h-screen text-white p-4 md:p-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          🎟️ {t("수익 모델 상세 분석", "Detailed Revenue Model Analysis")}
        </h1>
        <p className="text-base md:text-2xl text-gray-200 max-w-4xl mx-auto px-2">
          {t("체계적이고 투명한 수익 구조 분석과 실시간 계산 시뮬레이션", 
             "Systematic and transparent revenue structure analysis with real-time calculation simulation")}
        </p>
      </div>

      {/* 수익 계산기 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            🧮 {t("실시간 수익 계산기", "Real-time Revenue Calculator")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <div>
              <Label htmlFor="dailyShows" className="block text-lg font-bold text-gray-900 mb-3">
                {t("일일 공연 횟수", "Daily Shows")}
              </Label>
              <Input
                id="dailyShows"
                type="number"
                value={dailyShows}
                onChange={(e) => setDailyShows(Number(e.target.value))}
                min={1}
                max={4}
                className="focus:ring-2 focus:ring-amber-500 border-2 border-amber-300 text-lg font-bold p-3"
              />
            </div>
            <div>
              <Label htmlFor="audiencePerShow" className="block text-lg font-bold text-gray-900 mb-3">
                {t("회당 수용 인원", "Capacity per Show")}
              </Label>
              <Input
                id="audiencePerShow"
                type="number"
                value={audiencePerShow}
                onChange={(e) => setAudiencePerShow(Number(e.target.value))}
                min={100}
                max={1000}
                className="focus:ring-2 focus:ring-amber-500 border-2 border-amber-300 text-lg font-bold p-3"
              />
            </div>
            <div>
              <Label htmlFor="ticketPrice" className="block text-lg font-bold text-gray-900 mb-3">
                {t("티켓 가격 ($)", "Ticket Price ($)")}
              </Label>
              <Input
                id="ticketPrice"
                type="number"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                min={10}
                max={50}
                className="focus:ring-2 focus:ring-amber-500 border-2 border-amber-300 text-lg font-bold p-3"
              />
            </div>
            <div>
              <Label htmlFor="occupancyRate" className="block text-lg font-bold text-gray-900 mb-3">
                {t("점유율 (%)", "Occupancy Rate (%)")}
              </Label>
              <Input
                id="occupancyRate"
                type="number"
                value={occupancyRate}
                onChange={(e) => setOccupancyRate(Number(e.target.value))}
                min={30}
                max={100}
                className="focus:ring-2 focus:ring-amber-500 border-2 border-amber-300 text-lg font-bold p-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-400 p-6 rounded-lg text-center shadow-md">
              <p className="text-lg text-blue-800 font-bold">{t("월간 총수익", "Monthly Total Revenue")}</p>
              <p className="text-3xl font-bold text-blue-900">
                {formatCurrency(totalRevenueNew / 12)}
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-400 p-6 rounded-lg text-center shadow-md">
              <p className="text-lg text-green-800 font-bold">{t("연간 총수익", "Annual Total Revenue")}</p>
              <p className="text-3xl font-bold text-green-900">
                {formatCurrency(totalRevenueNew)}
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-purple-400 p-6 rounded-lg text-center shadow-md">
              <p className="text-lg text-purple-800 font-bold">{t("월간 관객 수", "Monthly Audience")}</p>
              <p className="text-3xl font-bold text-purple-900">
                {monthlyAudience.toLocaleString()}명
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-100 to-orange-200 border-2 border-orange-400 p-6 rounded-lg text-center shadow-md">
              <p className="text-lg text-orange-800 font-bold">{t("연간 관객 수", "Annual Audience")}</p>
              <p className="text-3xl font-bold text-orange-900">
                {(monthlyAudience * 12).toLocaleString()}명
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* First Revenue Feature Image - Business Legal Documents - Mobile Optimized */}
      <div className="relative w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/LitigationSupportServices_HonoluluHawaii_1755066330055.jpg" 
          alt={t("사업 계약 및 법적 문서", "Business Contracts and Legal Documents")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-amber-300"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
        {/* Image Caption */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("투명한 수익 분석과 법적 근거 마련", "Transparent Revenue Analysis and Legal Foundation")}
          </p>
        </div>
      </div>

      {/* 티켓 수익 계산 단계 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            📝 {t("티켓 판매 수익 계산 단계", "Ticket Revenue Calculation Steps")}
          </h2>
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
            <p className="text-gray-900 font-bold text-sm md:text-base">
              💡 {t("주요 정보: 티켓 가격 $20, 여행사 커미션 $5 (25%)", "Key Info: Ticket price $20, Travel agency commission $5 (25%)")}
            </p>
          </div>
          <div className="space-y-3 md:space-y-6">
            {ticketCalculationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-6 p-3 md:p-6 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-md">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm md:text-lg text-gray-900">{step.step}: {step.description}</h3>
                  <p className="text-gray-700 mt-1 md:mt-2 text-xs md:text-base font-medium">{step.calculation}</p>
                  <p className="font-bold text-amber-700 mt-2 md:mt-3 text-sm md:text-lg">{step.result}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 수익 구조 분석 차트 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <Card className="bg-white shadow-xl">
          <CardContent className="p-4 md:p-8">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
              📊 {t("수익 구조 분석", "Revenue Structure Analysis")}
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value}% (${formatCurrency(revenueBreakdown.find(r => r.name === name)?.amount || 0)})`, name]}
                    labelStyle={{ color: '#374151' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl">
          <CardContent className="p-4 md:p-8">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
              📈 {t("월별 수익 전망", "Monthly Revenue Projection")}
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#D97706" name={t("수익", "Revenue")} />
                  <Bar dataKey="costs" fill="#EF4444" name={t("비용", "Costs")} />
                  <Bar dataKey="profit" fill="#059669" name={t("순이익", "Net Profit")} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Revenue Feature Image - Profit Growth - Mobile Optimized */}
      <div className="relative w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/profits_1755066494786.png" 
          alt={t("수익 성장 분석", "Profit Growth Analysis")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-green-300"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg"></div>
        {/* Image Caption */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("지속적인 수익 성장과 안정적인 투자 수익률", "Continuous Profit Growth and Stable Investment Returns")}
          </p>
        </div>
      </div>

      {/* 월간 수익 분석 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            📅 {t("월간 수익 분석", "Monthly Revenue Analysis")}
          </h2>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 md:p-4 shadow-md">
            <Table>
              <TableHeader>
                <TableRow className="bg-amber-100">
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("항목", "Category")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("1인당 평균 지출", "Avg. Spend per Person")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("월간 수익", "Monthly Revenue")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("비중", "Share")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("티켓 판매", "Ticket Sales")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">$20.00</TableCell>
                  <TableCell className="font-bold text-orange-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(monthlyTicketRevenue)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">85%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("체험 프로그램", "Experience Programs")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">$1.60</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(experienceRevenue / 12)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">8%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("기념품 판매", "Souvenir Sales")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">$0.80</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(souvenirRevenue / 12)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">4%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("F&B 운영", "F&B Operations")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">$0.60</TableCell>
                  <TableCell className="font-bold text-red-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(fnbRevenue / 12)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">3%</TableCell>
                </TableRow>
                <TableRow className="bg-amber-200 border-t-2 border-amber-400">
                  <TableCell className="font-bold text-sm md:text-lg text-amber-800 py-3 md:py-4">{t("월간 총 수익", "Monthly Total Revenue")}</TableCell>
                  <TableCell className="font-bold text-sm md:text-lg text-amber-800 py-3 md:py-4">$23.00</TableCell>
                  <TableCell className="font-bold text-sm md:text-xl text-amber-800 py-3 md:py-4">{formatCurrency(totalRevenueNew / 12)}</TableCell>
                  <TableCell className="font-bold text-sm md:text-lg text-amber-800 py-3 md:py-4">100%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* 연간 수익 분석 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            📈 {t("연간 수익 분석", "Annual Revenue Analysis")}
          </h2>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 md:p-4 shadow-md">
            <Table>
              <TableHeader>
                <TableRow className="bg-teal-100">
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("항목", "Category")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("연간 관객 수", "Annual Audience")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("연간 수익", "Annual Revenue")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-4">{t("비중", "Share")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("티켓 판매", "Ticket Sales")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">{(monthlyAudience * 12).toLocaleString()}명</TableCell>
                  <TableCell className="font-bold text-orange-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(totalTicketRevenue)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">85%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("체험 프로그램", "Experience Programs")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">{(monthlyAudience * 12).toLocaleString()}명</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(experienceRevenue)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">8%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("기념품 판매", "Souvenir Sales")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">{(monthlyAudience * 12).toLocaleString()}명</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(souvenirRevenue)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">4%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800 py-2 md:py-3 text-xs md:text-base">{t("F&B 운영", "F&B Operations")}</TableCell>
                  <TableCell className="font-bold text-blue-700 py-2 md:py-3 text-xs md:text-base">{(monthlyAudience * 12).toLocaleString()}명</TableCell>
                  <TableCell className="font-bold text-red-700 py-2 md:py-3 text-xs md:text-base">{formatCurrency(fnbRevenue)}</TableCell>
                  <TableCell className="font-bold text-green-700 py-2 md:py-3 text-xs md:text-base">3%</TableCell>
                </TableRow>
                <TableRow className="bg-teal-200 border-t-2 border-teal-400">
                  <TableCell className="font-bold text-sm md:text-lg text-teal-800 py-3 md:py-4">{t("연간 총 수익", "Annual Total Revenue")}</TableCell>
                  <TableCell className="font-bold text-sm md:text-lg text-teal-800 py-3 md:py-4">{(monthlyAudience * 12).toLocaleString()}명</TableCell>
                  <TableCell className="font-bold text-sm md:text-xl text-teal-800 py-3 md:py-4">{formatCurrency(totalRevenueNew)}</TableCell>
                  <TableCell className="font-bold text-sm md:text-lg text-teal-800 py-3 md:py-4">100%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}