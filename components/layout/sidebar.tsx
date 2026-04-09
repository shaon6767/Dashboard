"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  RiDashboardLine, 
  RiPieChartLine, 
  RiSettings4Line, 
  RiStackLine,
  RiShieldUserLine
} from "react-icons/ri";

const navItems = [
  { title: "Overview", href: "/", icon: RiDashboardLine },
  { title: "Analytics", href: "/analytics", icon: RiPieChartLine },
  { title: "Settings", href: "/settings", icon: RiSettings4Line },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r h-screen sticky top-0 shadow-sm">
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
          <RiStackLine className="text-2xl text-white" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-800">SaaS.io</h2>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className={cn("text-xl", isActive ? "text-white" : "group-hover:text-blue-600")} />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t bg-slate-50/50">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-white border border-slate-100 shadow-sm">
          <div className="w-9 h-9 rounded-lg bg-linear-to-tr from-blue-600 to-indigo-400 flex items-center justify-center text-white">
            <RiShieldUserLine size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-700">Admin Account</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600">Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
}