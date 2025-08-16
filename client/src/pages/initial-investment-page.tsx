import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function InitialInvestmentPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 md:space-y-8 p-4 md:p-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-600 mb-3 md:mb-4">
          💰 {t("초기 투자내역", "Initial Investment Breakdown")}
        </h1>
        <p className="text-base md:text-xl text-yellow-600 max-w-3xl mx-auto px-2">
          {t("몽골 마상곡예 공연장 설립을 위한 상세한 초기 투자 비용 분석", 
             "Detailed initial investment cost analysis for establishing Mongolian equestrian performance venue")}
        </p>
      </div>

      {/* 투자 요약 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block bg-green-100 text-green-800 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xl md:text-2xl mb-3 md:mb-4 shadow-md">
              {t("총 투자금: $780,000", "Total Investment: $780,000")}
            </div>
            <p className="text-base md:text-lg text-gray-700 px-2">
              {t("예비비용 포함, 완전한 시설 구축을 위한 투자액", "Including contingency costs, investment for complete facility construction")}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* First Feature Image - Mongolian Arena Design - Mobile Optimized */}
      <div className="relative w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/DALL·E 2025-03-13 09.45.06 - A 3D-rendered outdoor Mongolian equestrian dressage performance arena. The arena includes a seating area for 500 spectators, a parking lot with space _1755064974276.webp" 
          alt={t("몽골 마상곡예 공연장 3D 설계도", "Mongolian Equestrian Performance Arena 3D Design")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-gray-300"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg"></div>
        {/* Image Caption */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("몽골 마상곡예 공연장 3D 설계 - 500석 관람석과 주차장 완비", "Mongolian Equestrian Arena 3D Design - 500 Seats and Complete Parking")}
          </p>
        </div>
      </div>

      {/* 상세 투자내역 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              📋 {t("상세 투자 항목", "Detailed Investment Items")}
            </h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-lg border-2 border-gray-200">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-green-400 to-green-500 text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg rounded-tl-lg">
                      {t("항목", "Category")}
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg">
                      {t("비용 (USD)", "Cost (USD)")}
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-lg rounded-tr-lg">
                      {t("비고", "Notes")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("토지 임대 보증금 (6개월)", "Land Rental Deposit (6 months)")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $30,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("월 $5,000 × 6개월(기본), 시설 증설가능,임대료 상황 조정필요", "Monthly $5,000 × 6 months (basic), rental adjustment needed for facility expansion")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("마장마술 경기장 조성", "Dressage Arena Construction")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $140,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("바닥 정리, 펜스 포함", "Floor preparation, fencing included")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("관람석 (1,000석, 철제 구조물 기반)", "Grandstand (1,000 seats, steel structure base)")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $200,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("순각 각종 등 고려/ 좌석 팬 시설상가 고려, 관람객 소피", "Various considerations for seating/fan facility considerations, audience comfort")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("마구간 및 말 관리 시설", "Stables and Horse Management Facilities")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $100,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("10~20마리 수용 가능", "Capacity for 10-20 horses")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("조명 및 음향 시스템", "Lighting and Sound System")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $50,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("공연 필수 장비", "Essential performance equipment")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("기본 인프라 (전기, 수도, 배수 등)", "Basic Infrastructure (electricity, water, drainage, etc.)")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $50,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("필수 기반 시설", "Essential basic facilities")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("주차장 및 편의시설 (화장실, 매점 등)", "Parking and Convenience Facilities (restrooms, shops, etc.)")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $80,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("기본 시설", "Basic facilities")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("운영 준비 비용 (허가, 인건비, 마케팅 등)", "Operational Preparation Costs (permits, personnel, marketing, etc.)")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $80,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("직원 채용, 홍보", "Staff recruitment, promotion")}
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t("예비비 (총 투자금의 5%)", "Contingency (5% of total investment)")}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg text-green-600">
                      $50,000
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {t("예상 외 추가 비용 대비", "Preparation for unexpected additional costs")}
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold">
                    <td className="px-6 py-4 text-lg rounded-bl-lg">
                      {t("총 투자금", "Total Investment")}
                    </td>
                    <td className="px-6 py-4 text-center text-2xl">
                      $780,000
                    </td>
                    <td className="px-6 py-4 rounded-br-lg">
                      {t("완전한 시설 구축 비용", "Complete facility construction cost")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-4">
              {[
                {
                  title: t("토지 임대 보증금 (6개월)", "Land Rental Deposit (6 months)"),
                  amount: "$30,000",
                  note: t("월 $5,000 × 6개월(기본)", "Monthly $5,000 × 6 months (basic)")
                },
                {
                  title: t("마장마술 경기장 조성", "Dressage Arena Construction"),
                  amount: "$140,000",
                  note: t("바닥 정리, 펜스 포함", "Floor preparation, fencing included")
                },
                {
                  title: t("관람석 (1,000석)", "Grandstand (1,000 seats)"),
                  amount: "$200,000",
                  note: t("철제 구조물 기반", "Steel structure base")
                },
                {
                  title: t("마구간 및 말 관리 시설", "Stables and Horse Management Facilities"),
                  amount: "$100,000",
                  note: t("10~20마리 수용 가능", "Capacity for 10-20 horses")
                },
                {
                  title: t("조명 및 음향 시스템", "Lighting and Sound System"),
                  amount: "$50,000",
                  note: t("공연 필수 장비", "Essential performance equipment")
                },
                {
                  title: t("기본 인프라", "Basic Infrastructure"),
                  amount: "$50,000",
                  note: t("전기, 수도, 배수 등", "Electricity, water, drainage, etc.")
                },
                {
                  title: t("주차장 및 편의시설", "Parking and Convenience Facilities"),
                  amount: "$80,000",
                  note: t("화장실, 매점 등", "Restrooms, shops, etc.")
                },
                {
                  title: t("운영 준비 비용", "Operational Preparation Costs"),
                  amount: "$80,000",
                  note: t("허가, 인건비, 마케팅 등", "Permits, personnel, marketing, etc.")
                },
                {
                  title: t("예비비 (5%)", "Contingency (5%)"),
                  amount: "$50,000",
                  note: t("예상 외 추가 비용 대비", "For unexpected additional costs")
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 shadow-sm">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 text-base mb-2">
                      {item.title}
                    </h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {item.amount}
                    </div>
                    <p className="text-sm text-gray-600">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Mobile Total */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3">
                    {t("총 투자금", "Total Investment")}
                  </h3>
                  <div className="text-3xl font-bold mb-2">
                    $780,000
                  </div>
                  <p className="text-green-100">
                    {t("완전한 시설 구축 비용", "Complete facility construction cost")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Second Feature Image - Angkor Wat Location - Mobile Optimized */}
      <div className="relative w-full mb-4 md:mb-6">
        <img 
          src="/attached_assets/7e0e8ab8-04e2-4677-b36b-89b6109b880f_1755065052157.webp" 
          alt={t("앙코르와트 인근 투자 지역", "Investment Area Near Angkor Wat")}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-2xl border-2 border-gray-300"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
        {/* Image Caption */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <p className="text-white text-xs md:text-sm font-bold text-center">
            {t("앙코르와트 인근 - 세계적 관광 명소와의 최적 입지", "Near Angkor Wat - Optimal Location with World-Class Tourist Attraction")}
          </p>
        </div>
      </div>

      {/* 투자 혜택 요약 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 text-center">
            🎯 {t("투자 혜택 요약", "Investment Benefits Summary")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6 text-center shadow-md border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {t("빠른 회수", "Quick Recovery")}
              </h3>
              <p className="text-gray-600">
                {t("투자금 회수 예상 기간: 1.5년", "Expected investment recovery period: 1.5 years")}
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 text-center shadow-md border border-orange-200">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">📈</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {t("높은 수익률", "High Returns")}
              </h3>
              <p className="text-gray-600">
                {t("연간 ROI: 67% ~ 100%", "Annual ROI: 67% ~ 100%")}
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center shadow-md border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {t("안정성", "Stability")}
              </h3>
              <p className="text-gray-600">
                {t("독점 시장과 정부 지원", "Monopoly market and government support")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 투자 단계별 자금 활용 계획 */}
      <Card className="bg-white shadow-xl">
        <CardContent className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
            📊 {t("투자 단계별 자금 활용 계획", "Phased Investment Fund Utilization Plan")}
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{t("1단계: 토지 확보 및 기반 시설", "Phase 1: Land Acquisition & Infrastructure")}</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>{t("투자금", "Investment")}:</strong> $220,000 (28%)</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• {t("토지 임대 보증금: $30,000", "Land rental deposit: $30,000")}</li>
                    <li>• {t("마장마술 경기장 조성: $140,000", "Dressage arena construction: $140,000")}</li>
                    <li>• {t("기본 인프라: $50,000", "Basic infrastructure: $50,000")}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{t("2단계: 관람 시설 및 공연 설비", "Phase 2: Viewing Facilities & Performance Equipment")}</h3>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>{t("투자금", "Investment")}:</strong> $350,000 (45%)</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• {t("관람석 (1,000석): $200,000", "Grandstand (1,000 seats): $200,000")}</li>
                    <li>• {t("마구간 및 말 관리 시설: $100,000", "Stables & horse facilities: $100,000")}</li>
                    <li>• {t("조명 및 음향 시스템: $50,000", "Lighting & sound system: $50,000")}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{t("3단계: 편의시설 및 운영 준비", "Phase 3: Convenience Facilities & Operations Preparation")}</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>{t("투자금", "Investment")}:</strong> $210,000 (27%)</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• {t("주차장 및 편의시설: $80,000", "Parking & convenience facilities: $80,000")}</li>
                    <li>• {t("운영 준비 비용: $80,000", "Operational preparation: $80,000")}</li>
                    <li>• {t("예비비: $50,000", "Contingency: $50,000")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}