import type { SalesResponse, Year } from "@/types/sales";

// Empty string = same-origin /api/sales route. Set NEXT_PUBLIC_SALES_API_URL to use an external API.
const BASE_URL = process.env.NEXT_PUBLIC_SALES_API_URL ?? "";

export async function fetchSales(year: Year, signal?: AbortSignal): Promise<SalesResponse> {
  const res = await fetch(`${BASE_URL}/api/sales?year=${year}`, { signal });
  if (!res.ok) {
    throw new Error(`Could not load sales for ${year} (status ${res.status}).`);
  }
  return (await res.json()) as SalesResponse;
}
