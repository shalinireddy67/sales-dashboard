"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/atoms/Card";
import { ChartTypeToggle } from "@/components/molecules/ChartTypeToggle";
import { ThresholdInput } from "@/components/molecules/ThresholdInput";
import { YearTabs } from "@/components/molecules/YearTabs";
import { SalesChart } from "@/components/organisms/SalesChart";
import { SalesTable } from "@/components/organisms/SalesTable";
import { StatsGrid } from "@/components/organisms/StatsGrid";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { fetchSales } from "@/lib/api";
import type { ChartType, SalesResponse, Year } from "@/types/sales";

export function DashboardView() {
  const [year, setYear] = useState<Year>(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState("");
  const [sales, setSales] = useState<SalesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setError(null);
    fetchSales(year, controller.signal)
      .then(setSales)
      .catch((e: Error) => {
        if (e.name !== "AbortError") setError(e.message);
      });
    return () => controller.abort();
  }, [year]);

  const filtered = useMemo(() => {
    if (!sales) return [];
    const min = Number(threshold);
    return threshold === "" || Number.isNaN(min)
      ? sales.data
      : sales.data.filter((m) => m.sales >= min);
  }, [sales, threshold]);

  return (
    <DashboardTemplate
      title="Sales dashboard"
      subtitle={sales ? sales.source : "Loading sales data…"}
      controls={
        <>
          <YearTabs value={year} onChange={setYear} />
          <ChartTypeToggle value={chartType} onChange={setChartType} />
          <ThresholdInput value={threshold} onChange={setThreshold} />
        </>
      }
      stats={
        error ? (
          <p role="alert" className="text-sm text-red-700">{error}</p>
        ) : sales ? (
          <StatsGrid data={sales.data} shownCount={filtered.length} />
        ) : null
      }
      chart={
        <Card title={`Monthly sales, ${year}`}>
          {sales ? (
            <SalesChart type={chartType} data={filtered} />
          ) : (
            <p className="py-20 text-center text-sm text-slate-600">Loading…</p>
          )}
        </Card>
      }
      table={
        <Card title="Details">
          {sales && filtered.length > 0 ? (
            <SalesTable data={filtered} />
          ) : (
            <p className="text-sm text-slate-600">Nothing to show.</p>
          )}
        </Card>
      }
    />
  );
}
