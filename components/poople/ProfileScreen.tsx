"use client";

import { useState } from "react";
import { badges } from "./data";
import { useUser, useClerk } from "@clerk/nextjs";
import Mascot from "./Mascot";

const stats = [
  { label: "Check-ins", value: "47" },
  { label: "Reviews", value: "12" },
  { label: "Streak", value: "4 🔥" },
  { label: "Level", value: "3" },
];

type SubView = "main" | "settings";

export default function ProfileScreen() {
  const [view, setView] = useState<SubView>("main");
  const [notifs, setNotifs] = useState(true);
  const [location, setLocation] = useState(true);
  const [emails, setEmails] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();

  const displayName = user?.firstName || user?.username || "PoopMaster99";
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const avatar = user?.imageUrl;

  if (view === "settings") {
    return (
      <div className="flex flex-col h-full bg-[#f8faf5] overflow-y-auto">
        {/* Header */}
        <div className="px-5 pt-5 pb-4 shrink-0" style={{ background: "#15803d" }}>
          <div className="flex items-center gap-3">
            <button onClick={() => setView("main")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-lg">←</button>
            <h1 className="text-xl font-bold text-white">Settings</h1>
          </div>
        </div>

        <div className="px-4 py-5 space-y-6 pb-24">
          {/* Account section */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Account</p>
            <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
              <div className="flex items-center gap-4 px-4 py-4">
                {avatar ? (
                  <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <Mascot size={48} expression="happy" />
                )}
                <div>
                  <p className="font-bold text-gray-900 text-base">{displayName}</p>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </div>
              <button className="w-full text-left flex items-center justify-between px-4 py-4 hover:bg-gray-50">
                <span className="text-base text-gray-800">Edit Profile</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="w-full text-left flex items-center justify-between px-4 py-4 hover:bg-gray-50">
                <span className="text-base text-gray-800">Change Password</span>
                <span className="text-gray-400">›</span>
              </button>
            </div>
          </div>

          {/* Content section */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Content</p>
            <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
              <Toggle label="Push Notifications" value={notifs} onChange={setNotifs} />
              <Toggle label="Location Services" value={location} onChange={setLocation} />
              <Toggle label="Email Updates" value={emails} onChange={setEmails} />
              <button className="w-full text-left flex items-center justify-between px-4 py-4 hover:bg-gray-50">
                <span className="text-base text-gray-800">Review Visibility</span>
                <span className="text-sm text-gray-500">Public ›</span>
              </button>
              <button className="w-full text-left flex items-center justify-between px-4 py-4 hover:bg-gray-50">
                <span className="text-base text-gray-800">Language</span>
                <span className="text-sm text-gray-500">English ›</span>
              </button>
            </div>
          </div>

          {/* Security section */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Security</p>
            <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
              <button className="w-full text-left flex items-center justify-between px-4 py-4 hover:bg-gray-50">
                <span className="text-base text-gray-800">Two-Factor Authentication</span>
                <span className="text-sm font-semibold text-orange-500">Off ›</span>
              </button>
              <button className="w-full text-left flex items-center justify-between px-4 py-4 hover:bg-gray-50">
                <span className="text-base text-gray-800">Active Sessions</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="w-full text-left flex items-center justify-between px-4 py-4 hover:bg-gray-50">
                <span className="text-base text-gray-800">Privacy Policy</span>
                <span className="text-gray-400">›</span>
              </button>
            </div>
          </div>

          {/* Danger zone */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Account Actions</p>
            <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
              <button
                onClick={() => signOut({ redirectUrl: "/poople/sign-in" })}
                className="w-full text-left flex items-center gap-3 px-4 py-4 hover:bg-gray-50"
              >
                <span className="text-lg">🚪</span>
                <span className="text-base font-semibold text-red-500">Sign Out</span>
              </button>
              <button className="w-full text-left flex items-center gap-3 px-4 py-4 hover:bg-gray-50">
                <span className="text-lg">🗑️</span>
                <span className="text-base text-red-400">Delete Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f8faf5] overflow-y-auto">
      {/* Header */}
      <div className="px-5 pt-5 pb-6 shrink-0" style={{ background: "#15803d" }}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">My Profile</h1>
          <button
            onClick={() => setView("settings")}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl"
          >
            ⚙️
          </button>
        </div>
        <div className="flex items-center gap-4">
          {avatar ? (
            <img src={avatar} alt="avatar" className="w-16 h-16 rounded-full object-cover border-2 border-white/40" />
          ) : (
            <Mascot size={60} expression="cool" />
          )}
          <div>
            <h2 className="text-xl font-bold text-white">{displayName}</h2>
            <p className="text-green-200 text-sm">Toilet Tracker · Level 3</p>
          </div>
        </div>

        {/* XP Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-green-100 mb-1.5">
            <span>350 XP</span>
            <span>Level 4 at 500 XP</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "70%", background: "white" }} />
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-0 mx-4 -mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {stats.map((s, i) => (
          <div key={s.label} className={`py-4 text-center ${i < 3 ? "border-r border-gray-100" : ""}`}>
            <p className="text-xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="px-4 mt-5">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Badges</p>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-4 flex flex-col items-center text-center border border-gray-100"
              style={{ opacity: b.earned ? 1 : 0.4 }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-2" style={{ background: b.earned ? `${b.color}20` : "#f3f4f6" }}>
                {b.icon}
              </div>
              <p className="text-sm font-bold text-gray-900 leading-tight">{b.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
              {!b.earned && <p className="text-xs font-semibold mt-1 text-gray-400">Locked</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="mx-4 mt-5 mb-6 bg-white rounded-2xl border border-gray-100 p-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Weekly Leaderboard</p>
        {[
          { rank: 1, name: "FlushKing", xp: 820, medal: "🥇" },
          { rank: 2, name: displayName, xp: 350, medal: "🥈", me: true },
          { rank: 3, name: "CrownJewel", xp: 310, medal: "🥉" },
        ].map((u) => (
          <div
            key={u.rank}
            className="flex items-center gap-3 py-3 px-3 rounded-xl mb-1"
            style={{ background: u.me ? "#f0fdf4" : "transparent", border: u.me ? "1px solid #bbf7d0" : "1px solid transparent" }}
          >
            <span className="text-xl">{u.medal}</span>
            <div className="flex-1">
              <p className="text-base font-semibold text-gray-900">
                {u.name}{u.me && <span className="text-xs font-normal text-green-600 ml-1">(you)</span>}
              </p>
            </div>
            <span className="text-base font-bold" style={{ color: "#15803d" }}>{u.xp} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <span className="text-base text-gray-800">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className="relative w-12 h-6 rounded-full transition-colors"
        style={{ background: value ? "#15803d" : "#d1d5db" }}
      >
        <div
          className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
          style={{ left: value ? "calc(100% - 22px)" : 2 }}
        />
      </button>
    </div>
  );
}
