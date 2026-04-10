"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RiDashboardLine, RiPieChartLine, RiSettings4Line, RiStackLine } from "react-icons/ri";

const navItems = [
  { title: "Overview", href: "/", icon: RiDashboardLine },
  { title: "Analytics", href: "/analytics", icon: RiPieChartLine },
  { title: "Settings", href: "/settings", icon: RiSettings4Line },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-100 h-screen sticky top-0">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 rotate-3">
          <RiStackLine className="text-2xl text-white -rotate-3" />
        </div>
        <h2 className="text-xl font-black tracking-tighter text-slate-800">SaaS<span className="text-blue-600">.io</span></h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-2xl group relative overflow-hidden",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-[1.02]" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              <item.icon className={cn("text-xl", isActive ? "text-white" : "group-hover:scale-110")} />
              <span className="font-bold text-sm">{item.title}</span>
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-[shimmer_2s_infinite]" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}