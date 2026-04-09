"use client";

import React from "react";
import { 
  RiVipCrownLine, 
  RiMastercardFill, 
  RiDownload2Line, 
  RiInformationLine 
} from "react-icons/ri";
import { cn } from "@/lib/utils";

const invoices = [
  { id: "INV-001", date: "April 01, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-002", date: "March 01, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-003", date: "Feb 01, 2026", amount: "$49.00", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Billing & Subscription</h1>
        <p className="text-slate-500">Manage your plan, payment methods, and download invoices.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Plan & Usage */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Plan Card */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 text-white shadow-xl shadow-blue-100 relative overflow-hidden">
            <RiVipCrownLine className="absolute -right-4 -bottom-4 text-white/10 size-40 rotate-12" />
            <div className="relative z-10">
              <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                Current Plan
              </span>
              <h2 className="text-3xl font-black mt-4">Professional Plan</h2>
              <p className="text-blue-100/80 mt-1">Our most popular plan for scaling teams.</p>
              
              <div className="mt-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-blue-200 text-sm">/per month</span>
              </div>
              
              <button className="mt-8 bg-white text-slate-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>

          {/* Usage Meter */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="font-bold text-slate-800">Monthly Usage</h3>
                <p className="text-xs text-slate-400">Your cycle resets in 12 days</p>
              </div>
              <span className="text-sm font-bold text-slate-700">8.2 GB / 10 GB</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-[82%] rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-100">
              <RiInformationLine size={16} />
              <span>You have reached 82% of your storage limit.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Method */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Payment Method</h3>
            <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50/50">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                <RiMastercardFill size={24} className="text-rose-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-700">•••• 4242</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Expires 12/28</span>
              </div>
            </div>
            <button className="w-full mt-4 text-sm font-bold text-blue-600 hover:text-blue-700 py-2 border border-blue-100 rounded-xl hover:bg-blue-50 transition-all">
              Edit Method
            </button>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Billing History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Invoice ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{inv.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{inv.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-bold">{inv.amount}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <RiDownload2Line size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}