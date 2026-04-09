"use client";

import { RiSearchLine, RiNotification3Line, RiUserLine, RiMenu2Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-white/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg">
          <RiMenu2Line size={20} />
        </button>
        <div className="relative w-64 lg:w-96 hidden sm:block">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search everything..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors relative">
          <RiNotification3Line size={22} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-6 w-[1px] bg-slate-200 mx-2" />
        
        <button className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-all">
          <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
            <RiUserLine size={18} />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-bold text-slate-700 leading-none">Admin</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Online</p>
          </div>
        </button>
      </div>
    </header>
  );
}