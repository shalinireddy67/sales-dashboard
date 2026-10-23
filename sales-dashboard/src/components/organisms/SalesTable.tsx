import { formatCurrency } from "@/lib/format";
import type { MonthlySales } from "@/types/sales";

export function SalesTable({ data }: { data: MonthlySales[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-slate-200 text-slate-600">
          <tr>
            <th className="py-2 pr-4 font-medium">Month</th>
            <th className="py-2 pr-4 text-right font-medium">Sales</th>
            <th className="py-2 text-right font-medium">Orders</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m) => (
            <tr key={m.month} className="border-b border-slate-100">
              <td className="py-2 pr-4">{m.month}</td>
              <td className="py-2 pr-4 text-right">{formatCurrency(m.sales)}</td>
              <td className="py-2 text-right">{m.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
