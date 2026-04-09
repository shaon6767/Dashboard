import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function DashboardLayout({
  children,
  metrics,
  notifications,
}: {
  children: React.ReactNode;
  metrics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-6">
          {/* Main Content Area */}
          <div className="w-full">
            {children}
          </div>

          {/* Parallel Routes Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {metrics}
            </div>
            <div className="lg:col-span-1">
              {notifications}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}