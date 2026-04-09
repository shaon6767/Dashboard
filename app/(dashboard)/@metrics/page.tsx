import { cn } from "@/lib/utils";
import { RiArrowUpSLine, RiGroupLine, RiMoneyDollarCircleLine, RiShoppingBag3Line } from "react-icons/ri";

const stats = [
  { label: "Revenue", value: "$12,430", change: "+14%", icon: RiMoneyDollarCircleLine },
  { label: "Users", value: "1,240", change: "+5%", icon: RiGroupLine },
  { label: "Orders", value: "432", change: "+12%", icon: RiShoppingBag3Line },
];

export default function MetricsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <stat.icon size={22} />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg flex items-center">
              <RiArrowUpSLine /> {stat.change}
            </span>
          </div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
}