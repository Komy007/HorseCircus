import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useLanguage } from "@/contexts/language-context";

export function OperationsForecastPage() {
  const { t } = useLanguage();

  const operatingCosts = [
    {
      category: t("인건비", "Labor Costs"),
      items: [
        { item: t("몽골 기수진 (10명)", "Mongolian Riders (10)"), monthly: 12000, annual: 144000 },
        { item: t("현지 스태프 (15명)", "Local Staff (15)"), monthly: 6000, annual: 72000 },
        { item: t("관리진 (5명)", "Management (5)"), monthly: 2000, annual: 24000 }
      ],
      total: { monthly: 20000, annual: 240000 }
    },
    {
      category: t("마필 관리비", "Horse Care"),
      items: [
        { item: t("사료 및 영양제", "Feed & Supplements"), monthly: 4000, annual: 48000 },
        { item: t("수의사 및 건강관리", "Veterinary & Health"), monthly: 3000, annual: 36000 },
        { item: t("마구간 유지보수", "Stable Maintenance"), monthly: 2000, annual: 24000 },
        { item: t("기타 마필 관련", "Other Horse-related"), monthly: 1000, annual: 12000 }
      ],
      total: { monthly: 10000, annual: 120000 }
    },
    {
      category: t("시설 운영비", "Facility Operations"),
      items: [
        { item: t("공연장 임대료", "Venue Rent"), monthly: 12500, annual: 150000 },
        { item: t("조명/음향 운영", "Lighting/Sound Operations"), monthly: 5000, annual: 60000 },
        { item: t("전기/수도/통신", "Utilities"), monthly: 3000, annual: 36000 },
        { item: t("청소 및 유지보수", "Cleaning & Maintenance"), monthly: 2500, annual: 30000 }
      ],
      total: { monthly: 23000, annual: 276000 }
    },
    {
      category: t("마케팅 및 기타", "Marketing & Others"),
      items: [
        { item: t("마케팅 및 홍보", "Marketing & PR"), monthly: 5000, annual: 60000 },
        { item: t("보험료", "Insurance"), monthly: 2000, annual: 24000 },
        { item: t("세금 및 라이센스", "Taxes & Licenses"), monthly: 2000, annual: 24000 },
        { item: t("예비비", "Reserve Fund"), monthly: 3000, annual: 36000 }
      ],
      total: { monthly: 12000, annual: 144000 }
    }
  ];

  const totalMonthlyCosts = operatingCosts.reduce((sum, category) => sum + category.total.monthly, 0);
  const totalAnnualCosts = operatingCosts.reduce((sum, category) => sum + category.total.annual, 0);

  const monthlyRevenueProjection = [
    { month: '1월', revenue: 350000, costs: 65000, netProfit: 285000, cumulative: 285000 },
    { month: '2월', revenue: 380000, costs: 65000, netProfit: 315000, cumulative: 600000 },
    { month: '3월', revenue: 420000, costs: 65000, netProfit: 355000, cumulative: 955000 },
    { month: '4월', revenue: 450000, costs: 65000, netProfit: 385000, cumulative: 1340000 },
    { month: '5월', revenue: 480000, costs: 65000, netProfit: 415000, cumulative: 1755000 },
    { month: '6월', revenue: 460000, costs: 65000, netProfit: 395000, cumulative: 2150000 },
    { month: '7월', revenue: 500000, costs: 65000, netProfit: 435000, cumulative: 2585000 },
    { month: '8월', revenue: 520000, costs: 65000, netProfit: 455000, cumulative: 3040000 },
    { month: '9월', revenue: 490000, costs: 65000, netProfit: 425000, cumulative: 3465000 },
    { month: '10월', revenue: 470000, costs: 65000, netProfit: 405000, cumulative: 3870000 },
    { month: '11월', revenue: 450000, costs: 65000, netProfit: 385000, cumulative: 4255000 },
    { month: '12월', revenue: 430000, costs: 65000, netProfit: 365000, cumulative: 4620000 }
  ];

  const yearlyProjection = [
    { year: t('1년차', 'Year 1'), revenue: 5400000, costs: 780000, netProfit: 4620000, roi: 308 },
    { year: t('2년차', 'Year 2'), revenue: 5940000, costs: 810000, netProfit: 5130000, roi: 342 },
    { year: t('3년차', 'Year 3'), revenue: 6530000, costs: 840000, netProfit: 5690000, roi: 379 },
    { year: t('4년차', 'Year 4'), revenue: 7180000, costs: 870000, netProfit: 6310000, roi: 421 },
    { year: t('5년차', 'Year 5'), revenue: 7900000, costs: 900000, netProfit: 7000000, roi: 467 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const profitabilityMetrics = [
    {
      metric: t("총 투자금", "Total Investment"),
      value: "$780,000",
      description: t("초기 투자 소요 자금", "Initial investment required"),
      color: "bg-red-100 text-red-800"
    },
    {
      metric: t("월간 손익분기점", "Monthly Break-even"),
      value: formatCurrency(totalMonthlyCosts),
      description: t("월간 최소 수익 목표", "Monthly minimum revenue target"),
      color: "bg-orange-100 text-orange-800"
    },
    {
      metric: t("투자 회수 기간", "Payback Period"),
      value: "1.2년",
      description: t("누적 이익으로 투자금 회수", "Investment recovery through cumulative profit"),
      color: "bg-blue-100 text-blue-800"
    },
    {
      metric: t("5년 누적 이익", "5-Year Cumulative Profit"),
      value: "$29.1M",
      description: t("5년간 총 순이익", "Total net profit over 5 years"),
      color: "bg-green-100 text-green-800"
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8 bg-black min-h-screen text-white p-4 md:p-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          🛠️ {t("운영비 및 수익 전망", "Operations & Revenue Forecast")}
        </h1>
        <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
          {t("상세한 운영비 분석과 장기간 수익성 전망을 통한 투자 수익성 검증", 
             "Investment profitability verification through detailed operating cost analysis and long-term revenue forecasting")}
        </p>
      </div>

      {/* 수익성 핵심 지표 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            📊 {t("수익성 핵심 지표", "Key Profitability Metrics")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {profitabilityMetrics.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-100 to-orange-200 border-2 border-amber-400 rounded-lg p-4 md:p-6 text-center shadow-lg">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-gray-900">{item.metric}</h3>
                <p className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-amber-800">{item.value}</p>
                <p className="text-sm md:text-base font-medium text-gray-800">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* First Operations Image - Investment Analysis - Mobile Optimized */}
      <div className="relative w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/income-investing-1024x576_1755066961401.webp" 
          alt={t("투자 수익률 분석", "Investment Return Analysis")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-blue-300"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
        {/* Image Caption */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("체계적인 투자 분석과 안정적인 수익률 관리", "Systematic Investment Analysis and Stable Return Management")}
          </p>
        </div>
      </div>

      {/* 운영비 상세 분석 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            💼 {t("운영비 상세 분석", "Detailed Operating Cost Analysis")}
          </h2>
          <div className="space-y-6 md:space-y-8">
            {operatingCosts.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Horse Care Image - Second Image for Horse Care Category */}
                {categoryIndex === 1 && (
                  <div className="relative w-full mb-4 md:mb-6">
                    <img 
                      src="/attached_assets/petting horse_1755067178913.avif" 
                      alt={t("마필 관리와 건강관리", "Horse Care and Health Management")}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-green-300"
                      style={{
                        objectPosition: 'center center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-white text-xs md:text-sm font-bold text-center">
                        {t("전문적인 마필 관리와 건강한 공연 환경", "Professional Horse Care and Healthy Performance Environment")}
                      </p>
                    </div>
                  </div>
                )}

                {/* Facility Operations Image - Third Image for Facility Operations Category */}
                {categoryIndex === 2 && (
                  <div className="relative w-full mb-4 md:mb-6">
                    <img 
                      src="/attached_assets/Integrated-Facilities-Management-Infographic_1755067340550.jpg" 
                      alt={t("시설 운영 관리", "Facility Operations Management")}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-purple-300"
                      style={{
                        objectPosition: 'center center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-white text-xs md:text-sm font-bold text-center">
                        {t("통합적인 시설 관리와 효율적인 운영 시스템", "Integrated Facility Management and Efficient Operations System")}
                      </p>
                    </div>
                  </div>
                )}

                {/* Marketing Team Image - Fourth Image for Marketing & Others Category */}
                {categoryIndex === 3 && (
                  <div className="relative w-full mb-4 md:mb-6">
                    <img 
                      src="/attached_assets/GettyImages-1374879082_1755067920204.png" 
                      alt={t("마케팅 팀 전략 회의", "Marketing Team Strategy Meeting")}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-orange-300"
                      style={{
                        objectPosition: 'center center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-white text-xs md:text-sm font-bold text-center">
                        {t("전문적인 마케팅 전략과 효과적인 홍보 활동", "Professional Marketing Strategy and Effective Promotional Activities")}
                      </p>
                    </div>
                  </div>
                )}

                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <span className="w-8 h-8 md:w-10 md:h-10 bg-amber-700 text-white rounded-full flex items-center justify-center text-sm md:text-lg font-bold mr-3 md:mr-4">
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h3>
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 md:p-6 shadow-md">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-200">
                        <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-3 md:py-4">{t("세부 항목", "Line Items")}</TableHead>
                        <TableHead className="font-bold text-sm md:text-lg text-gray-900 text-right py-3 md:py-4">{t("월간 비용", "Monthly Cost")}</TableHead>
                        <TableHead className="font-bold text-sm md:text-lg text-gray-900 text-right py-3 md:py-4">{t("연간 비용", "Annual Cost")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.items.map((item, itemIndex) => (
                        <TableRow key={itemIndex} className="hover:bg-gray-100 bg-white">
                          <TableCell className="font-semibold text-gray-900 py-2 md:py-3 text-sm md:text-base">{item.item}</TableCell>
                          <TableCell className="text-right font-bold text-blue-800 py-2 md:py-3 text-sm md:text-base">{formatCurrency(item.monthly)}</TableCell>
                          <TableCell className="text-right font-bold text-green-800 py-2 md:py-3 text-sm md:text-base">{formatCurrency(item.annual)}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-amber-200 border-t-2 border-amber-400">
                        <TableCell className="font-bold text-base md:text-lg text-amber-900 py-3 md:py-4">{t("소계", "Subtotal")}</TableCell>
                        <TableCell className="text-right font-bold text-base md:text-lg text-amber-900 py-3 md:py-4">{formatCurrency(category.total.monthly)}</TableCell>
                        <TableCell className="text-right font-bold text-base md:text-lg text-amber-900 py-3 md:py-4">{formatCurrency(category.total.annual)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
            
            {/* 총 운영비 */}
            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-lg p-6 md:p-8 shadow-lg border-2 border-red-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-0">{t("총 운영비", "Total Operating Costs")}</h3>
                <div className="text-center md:text-right">
                  <p className="text-2xl md:text-4xl font-bold">{formatCurrency(totalMonthlyCosts)}<span className="text-lg md:text-xl">/월</span></p>
                  <p className="text-lg md:text-2xl font-semibold">{formatCurrency(totalAnnualCosts)}<span className="text-base md:text-lg">/년</span></p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 월별 수익 전망 차트 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <Card className="bg-white shadow-xl">
          <CardContent className="p-4 md:p-8">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
              📈 {t("월별 수익 전망", "Monthly Revenue Forecast")}
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyRevenueProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#D97706" strokeWidth={3} name={t("수익", "Revenue")} />
                  <Line type="monotone" dataKey="costs" stroke="#EF4444" strokeWidth={3} name={t("비용", "Costs")} />
                  <Line type="monotone" dataKey="netProfit" stroke="#059669" strokeWidth={3} name={t("순이익", "Net Profit")} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl">
          <CardContent className="p-4 md:p-8">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
              📊 {t("연도별 성장 전망", "Annual Growth Projection")}
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#D97706" name={t("수익", "Revenue")} />
                  <Bar dataKey="netProfit" fill="#059669" name={t("순이익", "Net Profit")} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 5년 장기 전망 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            🔮 {t("5년 장기 사업 전망", "5-Year Long-term Business Projection")}
          </h2>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-3 md:p-4 shadow-md">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 py-3 md:py-4">{t("연도", "Year")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 text-right py-3 md:py-4">{t("연간 수익", "Annual Revenue")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 text-right py-3 md:py-4">{t("운영비", "Operating Costs")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 text-right py-3 md:py-4">{t("순이익", "Net Profit")}</TableHead>
                  <TableHead className="font-bold text-sm md:text-lg text-gray-900 text-right py-3 md:py-4">{t("ROI (%)", "ROI (%)")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {yearlyProjection.map((year, index) => (
                  <TableRow key={index} className={index === 0 ? "bg-amber-200" : "hover:bg-gray-100 bg-white"}>
                    <TableCell className="font-bold text-sm md:text-lg text-gray-900 py-2 md:py-3">{year.year}</TableCell>
                    <TableCell className="text-right font-bold text-sm md:text-lg text-blue-800 py-2 md:py-3">{formatCurrency(year.revenue)}</TableCell>
                    <TableCell className="text-right font-bold text-sm md:text-lg text-red-700 py-2 md:py-3">{formatCurrency(year.costs)}</TableCell>
                    <TableCell className="text-right font-bold text-sm md:text-lg text-green-800 py-2 md:py-3">{formatCurrency(year.netProfit)}</TableCell>
                    <TableCell className="text-right font-bold text-sm md:text-lg text-purple-800 py-2 md:py-3">{year.roi}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-green-100 rounded-lg border border-green-300">
            <h3 className="font-bold text-green-900 mb-2 text-sm md:text-base">{t("5년 누적 성과", "5-Year Cumulative Performance")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center">
              <div>
                <p className="text-xs md:text-sm text-green-700 font-medium">{t("총 누적 수익", "Total Cumulative Revenue")}</p>
                <p className="text-xl md:text-2xl font-bold text-green-900">$32.9M</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-green-700 font-medium">{t("총 누적 순이익", "Total Cumulative Net Profit")}</p>
                <p className="text-xl md:text-2xl font-bold text-green-900">$29.1M</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-green-700 font-medium">{t("평균 연간 ROI", "Average Annual ROI")}</p>
                <p className="text-xl md:text-2xl font-bold text-green-900">383%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 비용 최적화 전략 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            🎯 {t("비용 최적화 전략", "Cost Optimization Strategies")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-green-900 mb-3 md:mb-4">{t("단기 최적화", "Short-term Optimization")}</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("현지 스태프 비율 확대로 인건비 절감", "Increase local staff ratio to reduce labor costs")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("에너지 효율적 설비 도입", "Introduce energy-efficient equipment")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">✓</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("공급업체와 장기 계약을 통한 비용 절감", "Cost reduction through long-term supplier contracts")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-blue-900 mb-3 md:mb-4">{t("장기 최적화", "Long-term Optimization")}</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("자체 마필 번식 프로그램으로 도입비 절감", "Own horse breeding program to reduce acquisition costs")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("다목적 시설 활용으로 임대료 최적화", "Optimize rent through multi-purpose facility usage")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {t("디지털 마케팅 강화로 효율적 고객 유치", "Efficient customer acquisition through enhanced digital marketing")}
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