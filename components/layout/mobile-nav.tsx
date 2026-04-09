"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  RiDashboardLine, 
  RiPieChartLine, 
  RiSettings4Line, 
  RiMenu2Line, 
  RiCloseLine, 
  RiStackLine 
} from "react-icons/ri";

const navItems = [
  { title: "Overview", href: "/", icon: RiDashboardLine },
  { title: "Analytics", href: "/analytics", icon: RiPieChartLine },
  { title: "Settings", href: "/settings", icon: RiSettings4Line },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer automatically when the user clicks a link and the path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        aria-label="Open Menu"
      >
        <RiMenu2Line size={24} />
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[50] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Content */}
      <div className={cn(
        "fixed top-0 left-0 bottom-0 w-72 bg-white z-[60] shadow-2xl transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <RiStackLine className="text-2xl text-blue-600" />
              <span className="font-bold text-xl tracking-tight text-slate-800">SaaS.io</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium",
                    isActive 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-100" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon size={22} />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200" />
            <div>
              <p className="text-sm font-bold text-slate-800">Admin User</p>
              <p className="text-xs text-slate-500">Free Tier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}