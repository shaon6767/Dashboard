import OverviewChart from "@/components/dashboard/overview-chart";
import RecentSales from "@/components/dashboard/recent-sales";

export default function DashboardOverview() {
  return (
    <div className="space-y-8 pb-10">
      {/* Top Metrics are already there via parallel routing/slots */}

      {/* Main Grid: Chart + Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <OverviewChart />
        </div>
        <div>
          <RecentSales />
        </div>
      </div>
      
      {/* Your existing Recent Activity Table can go below here */}
    </div>
  );
}