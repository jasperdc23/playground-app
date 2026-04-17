"use client";

import { badges } from "./data";

const stats = [
  { label: "Check-ins", value: "47" },
  { label: "Reviews", value: "12" },
  { label: "Streak", value: "4 🔥" },
  { label: "Level", value: "3" },
];

export default function ProfileScreen() {
  return (
    <div className="flex flex-col h-full bg-[#f8faf5] overflow-y-auto">
      {/* Header */}
      <div className="px-4 pt-4 pb-6" style={{ background: "#15803d" }}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl border-2 border-white/40">
            💩
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">PoopMaster99</h1>
            <p className="text-green-200 text-sm">Toilet Tracker · Level 3</p>
          </div>
        </div>

        {/* XP Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-green-100 mb-1.5">
            <span>350 XP</span>
            <span>Level 4 at 500 XP</span>
          </div>
          <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "70%", background: "white" }} />
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-0 mx-4 -mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {stats.map((s, i) => (
          <div key={s.label} className={`py-3 text-center ${i < 3 ? "border-r border-gray-100" : ""}`}>
            <p className="text-lg font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="px-4 mt-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Badges</p>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-3 flex flex-col items-center text-center border border-gray-100"
              style={{ opacity: b.earned ? 1 : 0.4 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2" style={{ background: b.earned ? `${b.color}20` : "#f3f4f6" }}>
                {b.icon}
              </div>
              <p className="text-xs font-bold text-gray-900 leading-tight">{b.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
              {!b.earned && <p className="text-xs font-semibold mt-1" style={{ color: "#9ca3af" }}>Locked</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard teaser */}
      <div className="mx-4 mt-5 mb-6 bg-white rounded-2xl border border-gray-100 p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Weekly Leaderboard</p>
        {[
          { rank: 1, name: "FlushKing", xp: 820, medal: "🥇" },
          { rank: 2, name: "PoopMaster99", xp: 350, medal: "🥈", me: true },
          { rank: 3, name: "CrownJewel", xp: 310, medal: "🥉" },
        ].map((u) => (
          <div
            key={u.rank}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl mb-1"
            style={{ background: u.me ? "#f0fdf4" : "transparent", border: u.me ? "1px solid #bbf7d0" : "1px solid transparent" }}
          >
            <span className="text-lg">{u.medal}</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{u.name}{u.me && <span className="text-xs font-normal text-green-600 ml-1">(you)</span>}</p>
            </div>
            <span className="text-sm font-bold" style={{ color: "#15803d" }}>{u.xp} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
}
