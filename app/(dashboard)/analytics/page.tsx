"use client";

import { RiBarChartBoxLine, RiLineChartLine, RiPieChartLine } from "react-icons/ri";

export default function AnalyticsPage() {
  return (
    <div className="animate-in fade-in duration-700 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics Workspace</h1>
        <p className="text-slate-500">Deep dive into your user engagement and conversion metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-48 flex flex-col justify-center items-center text-slate-400 gap-2">
          <RiBarChartBoxLine size={40} className="text-blue-100" />
          <p className="text-sm font-medium">Engagement Graph</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-48 flex flex-col justify-center items-center text-slate-400 gap-2">
          <RiLineChartLine size={40} className="text-indigo-100" />
          <p className="text-sm font-medium">Retention Flow</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-48 flex flex-col justify-center items-center text-slate-400 gap-2">
          <RiPieChartLine size={40} className="text-purple-100" />
          <p className="text-sm font-medium">Traffic Sources</p>
        </div>
      </div>
    </div>
  );
}