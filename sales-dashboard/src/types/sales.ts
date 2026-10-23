export const YEARS = [2022, 2023, 2024] as const;
export type Year = (typeof YEARS)[number];

export type ChartType = "bar" | "line" | "pie";

export interface MonthlySales {
  month: string;
  sales: number;
  orders: number;
}

export interface SalesResponse {
  year: Year;
  source: string;
  data: MonthlySales[];
}
