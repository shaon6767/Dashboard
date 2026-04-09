import Link from "next/link";
import { RiHome4Line } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 text-center">
      <span className="text-blue-600 font-black text-9xl">404</span>
      <h2 className="text-2xl font-bold text-slate-800 mt-4">Lost in the Clouds?</h2>
      <p className="text-slate-500 mt-2 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved to another department.</p>
      <Link href="/dashboard" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
        <RiHome4Line size={20} />
        Return to Dashboard
      </Link>
    </div>
  );
}