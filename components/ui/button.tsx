"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-2xl font-bold text-sm transition-all active:scale-95 disabled:opacity-50",
        variant === "primary" 
          ? "bg-blue-600 text-white shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200" 
          : "border border-slate-200 text-slate-600 hover:bg-slate-50",
        className
      )}
      {...props}
    />
  );
}