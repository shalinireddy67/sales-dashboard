import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean };

export function Button({ active = false, className = "", ...props }: ButtonProps) {
  const tone = active
    ? "border-teal-700 bg-teal-700 text-white"
    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100";

  return (
    <button
      type="button"
      aria-pressed={active}
      className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${tone} ${className}`}
      {...props}
    />
  );
}
