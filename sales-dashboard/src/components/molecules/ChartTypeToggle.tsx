import { Button } from "@/components/atoms/Button";
import type { ChartType } from "@/types/sales";

const OPTIONS: { value: ChartType; label: string }[] = [
  { value: "bar", label: "Bar" },
  { value: "line", label: "Line" },
  { value: "pie", label: "Pie" },
];

interface ChartTypeToggleProps {
  value: ChartType;
  onChange: (type: ChartType) => void;
}

export function ChartTypeToggle({ value, onChange }: ChartTypeToggleProps) {
  return (
    <div role="group" aria-label="Chart type" className="flex gap-2">
      {OPTIONS.map((o) => (
        <Button key={o.value} active={o.value === value} onClick={() => onChange(o.value)}>
          {o.label}
        </Button>
      ))}
    </div>
  );
}
