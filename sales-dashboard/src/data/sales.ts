import type { MonthlySales, Year } from "@/types/sales";

/**
 * Mock monthly sales (USD), shaped like the Kaggle "Superstore Sales" dataset
 * after grouping Order Date by month. Replace with real data when ready.
 */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SALES: Record<Year, number[]> = {
  2022: [14236, 4519, 55691, 28295, 23648, 34595, 33946, 27909, 81777, 31453, 78629, 69546],
  2023: [18174, 11951, 38726, 34195, 30132, 24797, 28765, 36898, 64595, 31405, 75972, 74919],
  2024: [18542, 22979, 51715, 38750, 56987, 40344, 39262, 31115, 73410, 59687, 79412, 96999],
};

export function getMockSales(year: Year): MonthlySales[] {
  return SALES[year].map((sales, i) => ({
    month: MONTHS[i],
    sales,
    orders: Math.round(sales / 410),
  }));
}
