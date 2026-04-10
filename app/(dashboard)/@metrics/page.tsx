"use client";

import { RiArrowUpSLine, RiArrowDownSLine, RiGroupLine, RiMoneyDollarCircleLine, RiShoppingBag3Line } from "react-icons/ri";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Revenue", value: "$45,231.89", change: "+12.5%", trend: "up", icon: RiMoneyDollarCircleLine, color: "text-blue-600", bg: "bg-blue-50", delay: "delay-100" },
  { label: "Active Users", value: "2,405", change: "+3.2%", trend: "up", icon: RiGroupLine, color: "text-emerald-600", bg: "bg-emerald-50", delay: "delay-200" },
  { label: "New Orders", value: "1,203", change: "-2.1%", trend: "down", icon: RiShoppingBag3Line, color: "text-amber-600", bg: "bg-amber-50", delay: "delay-300" },
];

export default function MetricsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className={cn(
            "animate-entry bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 opacity-0",
            stat.delay
          )}
        >
          <div className="flex justify-between items-start mb-4">
            <div className={cn("p-3 rounded-2xl", stat.bg, stat.color)}>
              <stat.icon size={24} />
            </div>
            <span className={cn(
              "text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-0.5 border",
              stat.trend === "up" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-red-50 text-red-700 border-red-100"
            )}>
              {stat.trend === "up" ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              {stat.change}
            </span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1 tabular-nums">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}