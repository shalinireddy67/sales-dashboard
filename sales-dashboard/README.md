# Sales Dashboard

A small Next.js 15 app that shows monthly sales for 2022, 2023 and 2024 with switchable charts (bar, line, pie), a minimum-sales filter, and a details table.

## What I built

- **Dashboard page** at `/dashboard` (the home page redirects there). I created the empty page first, then added the components inside it.
- **Atomic structure** for the UI:
  - `atoms`: Button, Input, Card
  - `molecules`: YearTabs, ChartTypeToggle, ThresholdInput, StatCard
  - `organisms`: SalesChart (Recharts), StatsGrid, SalesTable
  - `templates`: DashboardTemplate (the page layout, no data)
  - `features/dashboard/DashboardView.tsx`: holds the state and wires everything together
- **Mock data** in `src/data/sales.ts`, shaped like the Kaggle *Superstore Sales* dataset after grouping orders by month. The numbers are mock values, not a direct export.
- **API integration:** the dashboard loads data with `fetch` from `/api/sales?year=2024` (`src/app/api/sales/route.ts`). To use a real API, set `NEXT_PUBLIC_SALES_API_URL` (see below).
- **Enhancements done:**
  - Custom filter: type a minimum monthly sales amount to hide smaller months from the charts and table.
  - Multiple chart types: Bar, Line and Pie buttons using Recharts.

## Tech

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, Recharts.

## Setup

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other commands: `npm run build`, `npm start`, `npm run lint`.

## Use a real API or Kaggle data

1. Download a sales CSV from Kaggle (for example *Superstore Sales*), group it by month for each year, and expose it from your own API.
2. Return JSON in this shape from `GET /api/sales?year=2024`:
   ```json
   { "year": 2024, "source": "My API", "data": [{ "month": "Jan", "sales": 18542, "orders": 45 }] }
   ```
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SALES_API_URL` to your API's base URL. Your API must allow CORS from the app.

## Project structure

```
src/
  app/            routes: /dashboard, /api/sales
  components/     atoms, molecules, organisms, templates
  features/       dashboard state and wiring
  data/           mock sales
  lib/            api client, formatting
  types/          shared types
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Sales dashboard with Next.js 15"
git branch -M main
git remote add origin https://github.com/<your-username>/sales-dashboard.git
git push -u origin main
```
