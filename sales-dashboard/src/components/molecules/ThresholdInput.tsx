import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

interface ThresholdInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function ThresholdInput({ value, onChange }: ThresholdInputProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="threshold" className="text-sm text-slate-700">
        Minimum monthly sales ($)
      </label>
      <Input
        id="threshold"
        type="number"
        min={0}
        inputMode="numeric"
        placeholder="e.g. 50000"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value !== "" && <Button onClick={() => onChange("")}>Clear</Button>}
    </div>
  );
}
