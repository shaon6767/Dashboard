import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-black text-blue-600 tracking-tighter italic">
            SaaS.io
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Management made simple.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}