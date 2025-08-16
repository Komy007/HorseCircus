import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RevenueCalculator } from "./revenue-calculator";
import { RevenueChart } from "./revenue-chart";
import { useLanguage } from "@/contexts/language-context";

export function RevenueModel() {
  const { t } = useLanguage();

  const operatingCosts = [
    {
      item: t("인건비 (기수, 스태프)", "Labor (Riders, Staff)"),
      monthly: "$20,000",
      annual: "$240,000"
    },
    {
      item: t("마필 관리비", "Horse Care"),
      monthly: "$10,000",
      annual: "$120,000"
    },
    {
      item: t("공연장 임대료", "Venue Rent"),
      monthly: "$12,500",
      annual: "$150,000"
    },
    {
      item: t("조명/음향 운영비", "Lighting/Sound"),
      monthly: "$5,000",
      annual: "$60,000"
    },
    {
      item: t("마케팅 예산", "Marketing"),
      monthly: "$5,000",
      annual: "$60,000"
    },
    {
      item: t("예비비", "Reserve Fund"),
      monthly: "$5,000",
      annual: "$60,000"
    },
    {
      item: t("기타 (유틸리티, 세금)", "Utilities, Taxes"),
      monthly: "$7,500",
      annual: "$90,000"
    }
  ];

  const totalMonthlyCosts = 65000;
  const totalAnnualCosts = 780000;

  return (
    <section id="revenue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💰 {t("수익 모델 분석", "Revenue Model Analysis")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("체계적이고 투명한 수익 구조 분석", "Systematic and transparent revenue structure analysis")}
          </p>
        </div>

        {/* Revenue Calculator */}
        <RevenueCalculator />

        {/* Revenue Breakdown Chart */}
        <RevenueChart />

        {/* Operating Costs Table */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            💼 {t("운영비 상세 내역", "Operating Costs Breakdown")}
          </h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="pb-4 font-semibold text-gray-900">
                    {t("항목", "Item")}
                  </TableHead>
                  <TableHead className="pb-4 font-semibold text-gray-900 text-right">
                    {t("월간 비용", "Monthly Cost")}
                  </TableHead>
                  <TableHead className="pb-4 font-semibold text-gray-900 text-right">
                    {t("연간 비용", "Annual Cost")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operatingCosts.map((cost, index) => (
                  <TableRow key={index} className="border-b border-gray-100">
                    <TableCell className="py-3">{cost.item}</TableCell>
                    <TableCell className="py-3 text-right font-medium">{cost.monthly}</TableCell>
                    <TableCell className="py-3 text-right font-medium">{cost.annual}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-gray-50 font-bold">
                  <TableCell className="py-4">
                    {t("총 운영비", "Total Operating Costs")}
                  </TableCell>
                  <TableCell className="py-4 text-right text-red-600">
                    ${totalMonthlyCosts.toLocaleString()}
                  </TableCell>
                  <TableCell className="py-4 text-right text-red-600">
                    ${totalAnnualCosts.toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
