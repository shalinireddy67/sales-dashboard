import { StatCard } from "@/components/molecules/StatCard";
import { formatCurrency } from "@/lib/format";
import type { MonthlySales } from "@/types/sales";

interface StatsGridProps {
  data: MonthlySales[];
  shownCount: number;
}

export function StatsGrid({ data, shownCount }: StatsGridProps) {
  const total = data.reduce((sum, m) => sum + m.sales, 0);
  const best = data.reduce((a, b) => (b.sales > a.sales ? b : a), data[0]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total sales" value={formatCurrency(total)} />
      <StatCard label="Average per month" value={formatCurrency(total / data.length)} />
      <StatCard label="Best month" value={best.month} hint={formatCurrency(best.sales)} />
      <StatCard label="Months shown" value={`${shownCount} of ${data.length}`} />
    </div>
  );
}
