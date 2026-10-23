"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCurrency } from "@/lib/format";
import type { ChartType, MonthlySales } from "@/types/sales";

const COLORS = [
  "#0f766e", "#0369a1", "#b45309", "#7c3aed", "#be123c", "#4d7c0f",
  "#0e7490", "#a21caf", "#c2410c", "#1d4ed8", "#15803d", "#475569",
];

interface SalesChartProps {
  type: ChartType;
  data: MonthlySales[];
}

const tooltipFormatter = (value: number) => formatCurrency(value);
const axisFormatter = (value: number) => `$${value / 1000}k`;

export function SalesChart({ type, data }: SalesChartProps) {
  if (data.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-slate-600">
        No months reach that amount. Lower the minimum to see results.
      </p>
    );
  }

  return (
    <div className="h-80 w-full" role="img" aria-label={`${type} chart of monthly sales`}>
      <ResponsiveContainer width="100%" height="100%">
        {type === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={axisFormatter} />
            <Tooltip formatter={tooltipFormatter} />
            <Bar dataKey="sales" fill="#0f766e" radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : type === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={axisFormatter} />
            <Tooltip formatter={tooltipFormatter} />
            <Line type="monotone" dataKey="sales" stroke="#0f766e" strokeWidth={2} dot />
          </LineChart>
        ) : (
          <PieChart>
            <Tooltip formatter={tooltipFormatter} />
            <Pie data={data} dataKey="sales" nameKey="month" outerRadius={120} label>
              {data.map((m, i) => (
                <Cell key={m.month} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
