import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales dashboard",
  description: "Yearly sales charts for 2022, 2023 and 2024",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
