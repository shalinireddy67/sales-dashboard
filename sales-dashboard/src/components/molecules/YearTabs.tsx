import { Button } from "@/components/atoms/Button";
import { YEARS, type Year } from "@/types/sales";

interface YearTabsProps {
  value: Year;
  onChange: (year: Year) => void;
}

export function YearTabs({ value, onChange }: YearTabsProps) {
  return (
    <div role="group" aria-label="Year" className="flex gap-2">
      {YEARS.map((year) => (
        <Button key={year} active={year === value} onClick={() => onChange(year)}>
          {year}
        </Button>
      ))}
    </div>
  );
}
