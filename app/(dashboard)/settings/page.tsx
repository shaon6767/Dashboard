"use client";

import { RiUserSettingsLine, RiNotificationBadgeLine, RiLockPasswordLine } from "react-icons/ri";

export default function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your account preferences and configurations.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        {/* Profile Section */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-blue-600">
            <RiUserSettingsLine size={20} />
            <h2 className="font-bold text-slate-800">Profile Information</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                <p className="p-2 bg-slate-50 border border-slate-100 rounded-lg mt-1 text-sm">Shawon Chowdhury</p>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                <p className="p-2 bg-slate-50 border border-slate-100 rounded-lg mt-1 text-sm">Chowdhuryshaon70@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-blue-600">
            <RiNotificationBadgeLine size={20} />
            <h2 className="font-bold text-slate-800">Notifications</h2>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-slate-600">Receive email updates</span>
            <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center px-1">
              <div className="w-3 h-3 bg-white rounded-full ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}