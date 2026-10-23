import type { ReactNode } from "react";

interface DashboardTemplateProps {
  title: string;
  subtitle: string;
  controls: ReactNode;
  stats: ReactNode;
  chart: ReactNode;
  table: ReactNode;
}

export function DashboardTemplate({ title, subtitle, controls, stats, chart, table }: DashboardTemplateProps) {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      </header>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">{controls}</div>
      {stats}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">{chart}</div>
        <div>{table}</div>
      </div>
    </main>
  );
}
