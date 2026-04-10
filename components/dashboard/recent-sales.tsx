"use client";

import React from "react";
import { RiMailSendLine } from "react-icons/ri";

const sales = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", initials: "OM", color: "bg-blue-50 text-blue-600" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", initials: "JL", color: "bg-emerald-50 text-emerald-600" },
  { name: "Isabella Nguyen", email: "isabella.n@email.com", amount: "+$299.00", initials: "IN", color: "bg-amber-50 text-amber-600" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00", initials: "WK", color: "bg-rose-50 text-rose-600" },
  { name: "Sofia Davis", email: "sofia.d@email.com", amount: "+$39.00", initials: "SD", color: "bg-indigo-50 text-indigo-600" },
];

export default function RecentSales() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm h-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight">Recent Sales</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">You made 265 sales this month.</p>
        </div>
        <div className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-400">
          <RiMailSendLine size={20} />
        </div>
      </div>

      <div className="space-y-6">
        {sales.map((sale, i) => (
          <div key={i} className="flex items-center justify-between group animate-entry" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs border border-slate-100 shadow-sm transition-transform group-hover:scale-110 ${sale.color}`}>
                {sale.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-none">{sale.name}</p>
                <p className="text-xs text-slate-400 mt-1">{sale.email}</p>
              </div>
            </div>
            <div className="text-sm font-black text-slate-900 tabular-nums">
              {sale.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}