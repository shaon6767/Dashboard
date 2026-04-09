export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Deep Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-40 bg-white rounded-2xl border border-slate-200 p-6">
          <p className="text-slate-400">User Growth Chart Placeholder</p>
        </div>
        <div className="h-40 bg-white rounded-2xl border border-slate-200 p-6">
          <p className="text-slate-400">Retention Rate Placeholder</p>
        </div>
      </div>
    </div>
  );
}