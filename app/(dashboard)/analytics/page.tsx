"use client";

import React from "react";
import { 
  RiBarChartBoxLine, 
  RiLineChartLine, 
  RiPieChartLine, 
  RiArrowRightUpLine,
  RiGroupLine,
  RiGlobalLine
} from "react-icons/ri";
import { cn } from "@/lib/utils";

export default function AnalyticsPage() {
  return (
    <div className="animate-entry space-y-8 pb-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Analytics Workspace</h1>
        <p className="text-slate-500 text-sm font-medium">Deep dive into your user engagement and conversion metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 1. Engagement Graph (Animated Bar Simulation) */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <RiBarChartBoxLine size={24} />
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">+24%</span>
          </div>
          <h3 className="font-bold text-slate-800">Engagement Graph</h3>
          <p className="text-xs text-slate-400 mb-6">Daily active interactions</p>
          
          <div className="flex items-end justify-between h-32 gap-1.5 px-1">
            {[40, 70, 50, 90, 60, 80, 45, 95].map((h, i) => (
              <div 
                key={i} 
                style={{ height: `${h}%` }}
                className="flex-1 bg-slate-100 rounded-full group-hover:bg-blue-600 transition-all duration-700 animate-entry"
                style={{ animationDelay: `${i * 50}ms`, height: `${h}%` }}
              >
                <div className="w-full h-1/2 bg-gradient-to-t from-white/0 to-white/20 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Retention Flow (Wave/Path Simulation) */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
              <RiLineChartLine size={24} />
            </div>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg border border-indigo-100">Steady</span>
          </div>
          <h3 className="font-bold text-slate-800">Retention Flow</h3>
          <p className="text-xs text-slate-400 mb-6">User churn vs retention</p>
          
          <div className="h-32 w-full relative overflow-hidden bg-slate-50 rounded-2xl flex items-center justify-center">
             {/* Simple CSS Wave Simulation */}
             <div className="absolute inset-0 flex items-center opacity-20">
                <div className="w-full h-[2px] bg-indigo-600 animate-pulse" />
             </div>
             <div className="flex gap-4 items-center relative z-10">
                <div className="flex flex-col items-center">
                    <RiGroupLine className="text-indigo-600 mb-1" size={20} />
                    <span className="text-[10px] font-black text-slate-600">88%</span>
                </div>
                <RiArrowRightUpLine className="text-indigo-300 animate-bounce" size={24} />
             </div>
          </div>
        </div>

        {/* 3. Traffic Sources (Doughnut Simulation) */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl">
              <RiPieChartLine size={24} />
            </div>
            <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                ))}
            </div>
          </div>
          <h3 className="font-bold text-slate-800">Traffic Sources</h3>
          <p className="text-xs text-slate-400 mb-6">Top performing channels</p>
          
          <div className="space-y-3">
             {[
                { label: "Direct", val: 65, color: "bg-blue-500" },
                { label: "Social", val: 25, color: "bg-rose-500" },
                { label: "Referral", val: 10, color: "bg-emerald-500" }
             ].map((source, i) => (
                <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <span>{source.label}</span>
                        <span>{source.val}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                            className={cn("h-full transition-all duration-1000", source.color)} 
                            style={{ width: `${source.val}%` }} 
                        />
                    </div>
                </div>
             ))}
          </div>
        </div>

      </div>

      {/* Global Audience Section (Filling more space) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                <RiGlobalLine size={24} />
            </div>
            <div>
                <h3 className="font-black text-slate-800 text-lg">Global Audience</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Active sessions by region</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['USA', 'Bangladesh', 'Germany', 'UK'].map((country, i) => (
                <div key={i} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
                    <p className="text-xs font-bold text-slate-400 mb-1">{country}</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-800">{(40 - i * 5)}%</span>
                        <span className="text-[10px] font-bold text-emerald-500">+2.4%</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}