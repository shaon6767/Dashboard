"use client";

import React, { useState } from "react";
import { RiArrowUpSLine, RiPulseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

// 1. Define the different datasets
const datasets = {
  "1W": [
    { label: "Mon", value: 30 }, { label: "Tue", value: 45 }, { label: "Wed", value: 25 },
    { label: "Thu", value: 60 }, { label: "Fri", value: 85 }, { label: "Sat", value: 40 },
    { label: "Sun", value: 35 }
  ],
  "1M": [
    { label: "W1", value: 40 }, { label: "W2", value: 75 }, 
    { label: "W3", value: 50 }, { label: "W4", value: 90 }
  ],
  "1Y": [
    { label: "Jan", value: 45 }, { label: "Feb", value: 52 }, { label: "Mar", value: 48 },
    { label: "Apr", value: 61 }, { label: "May", value: 55 }, { label: "Jun", value: 67 },
    { label: "Jul", value: 73 }, { label: "Aug", value: 60 }, { label: "Sep", value: 81 },
    { label: "Oct", value: 85 }, { label: "Nov", value: 92 }, { label: "Dec", value: 98 }
  ]
};

type TimeRange = keyof typeof datasets;

export default function OverviewChart() {
  const [range, setRange] = useState<TimeRange>("1Y");
  const currentData = datasets[range];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-start mb-10">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <RiPulseLine size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800 tracking-tight">Revenue Stream</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Showing data for {range === "1Y" ? "Fiscal Year" : range === "1M" ? "Current Month" : "Last 7 Days"}
            </p>
          </div>
        </div>
        
        {/* Toggle Buttons */}
        <div className="flex gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200">
          {(Object.keys(datasets) as TimeRange[]).map((t) => (
            <button 
              key={t} 
              onClick={() => setRange(t)}
              className={cn(
                "px-4 py-1.5 text-[10px] font-black rounded-lg transition-all cursor-pointer",
                range === t 
                  ? "bg-white text-blue-600 shadow-sm border border-slate-200" 
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="flex-1 flex items-end justify-between gap-2 px-2 relative min-h-[220px]">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-full border-t border-slate-100 border-dashed" />
          ))}
        </div>

        {/* Dynamic Bars */}
        {currentData.map((item, i) => (
          <div key={`${range}-${item.label}`} className="flex-1 flex flex-col items-center group gap-4 relative z-10">
            <div className="relative w-full flex items-end justify-center h-48">
              {/* Tooltip */}
              <div className="absolute -top-12 bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none font-black shadow-xl -translate-y-2 group-hover:translate-y-0">
                ${item.value}k
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
              </div>
              
              {/* Animated Bar */}
              <div 
                style={{ height: `${item.value}%` }}
                className={cn(
                  "w-full rounded-full transition-all duration-700 ease-out animate-entry",
                  // Highlight logic: highlight the last item in the set
                  i === currentData.length - 1 
                    ? "bg-blue-600 shadow-lg shadow-blue-100" 
                    : "bg-slate-100 group-hover:bg-blue-200",
                  // Adjust width based on how many bars are visible
                  range === "1Y" ? "max-w-[12px]" : range === "1M" ? "max-w-[40px]" : "max-w-[24px]"
                )}
              />
            </div>
            
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-tighter transition-colors",
              i === currentData.length - 1 ? "text-blue-600" : "text-slate-400"
            )}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-slate-800 tabular-nums">
            ${currentData.reduce((acc, curr) => acc + curr.value, 0).toLocaleString()}k
          </span>
          <span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            <RiArrowUpSLine /> +8%
          </span>
        </div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total for this period</p>
      </div>
    </div>
  );
}