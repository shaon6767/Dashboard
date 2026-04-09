import { RiRadioButtonLine } from "react-icons/ri";

export default function NotificationsPage() {
  const logs = [
    { id: 1, text: "New user registered", time: "Just now" },
    { id: 2, text: "Server backup completed", time: "2h ago" },
    { id: 3, text: "New sale: $49.00", time: "5h ago" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">
      <div className="p-4 border-b bg-slate-50/50">
        <h3 className="text-sm font-bold text-slate-800">Live Activity</h3>
      </div>
      <div className="p-4 space-y-4">
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3">
            <RiRadioButtonLine className="text-blue-500 mt-1" size={14} />
            <div>
              <p className="text-sm text-slate-700 font-medium">{log.text}</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-tighter">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}