"use client";

import React from "react";
import Link from "next/link";
import { RiLoginCircleLine } from "react-icons/ri";

export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
      <div className="flex items-center gap-2 mb-6">
        <RiLoginCircleLine className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-slate-800">Welcome Back</h2>
      </div>
      
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
          <input 
            type="email" 
            placeholder="admin@saas.io"
            className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
          />
        </div>
        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
          Sign In
        </button>
      </form>
      
      <p className="text-center text-sm text-slate-500 mt-6">
        Don't have an account? <Link href="/register" className="text-blue-600 font-bold hover:underline">Register</Link>
      </p>
    </div>
  );
}