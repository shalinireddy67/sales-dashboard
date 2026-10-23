import { NextResponse } from "next/server";
import { getMockSales } from "@/data/sales";
import { YEARS, type SalesResponse, type Year } from "@/types/sales";

export function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("year");
  const year = Number(raw) as Year;

  if (!YEARS.includes(year)) {
    return NextResponse.json(
      { error: `year must be one of ${YEARS.join(", ")}` },
      { status: 400 },
    );
  }

  const body: SalesResponse = {
    year,
    source: "Mock data modelled on the Kaggle Superstore Sales dataset",
    data: getMockSales(year),
  };
  return NextResponse.json(body);
}
