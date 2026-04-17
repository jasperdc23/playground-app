"use client";

import { useUser } from "@clerk/nextjs";
import Mascot from "./Mascot";

type Tab = "map" | "checkin" | "trivia" | "profile";

const tabs: { id: Tab; icon: string; label: string; desc: string }[] = [
  { id: "map", icon: "🗺️", label: "Map", desc: "Find restrooms" },
  { id: "checkin", icon: "💩", label: "Check In", desc: "Log your visit" },
  { id: "trivia", icon: "🧠", label: "Gut Tips", desc: "Health insights" },
  { id: "profile", icon: "👤", label: "Profile", desc: "Stats & badges" },
];

export default function SideNav({
  active,
  onChange,
  onFindNearby,
}: {
  active: Tab;
  onChange: (t: Tab) => void;
  onFindNearby: () => void;
}) {
  const { user } = useUser();
  const displayName = user?.firstName || user?.username || "Explorer";

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-gray-200 bg-white h-full overflow-y-auto">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-100">
        <Mascot size={40} expression="happy" />
        <div>
          <h1 className="text-lg font-extrabold text-gray-900">Poople Maps</h1>
          <p className="text-xs text-gray-400">Find. Rate. Conquer.</p>
        </div>
      </div>

      {/* Find Nearby CTA */}
      <div className="px-4 py-4 border-b border-gray-100">
        <button
          onClick={onFindNearby}
          className="w-full py-3.5 rounded-2xl font-extrabold text-sm text-white flex items-center justify-center gap-2 active:scale-[0.97] transition-transform shadow-md"
          style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
        >
          <span className="text-lg">📍</span>
          Find Nearby
        </button>
        <p className="text-xs text-gray-400 text-center mt-2">Scan your area for restrooms</p>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-3 space-y-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all"
            style={
              active === t.id
                ? { background: "#f0fdf4", color: "#15803d" }
                : { color: "#374151" }
            }
          >
            <span className="text-xl shrink-0">{t.icon}</span>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-bold leading-tight ${active === t.id ? "text-green-800" : "text-gray-800"}`}>{t.label}</p>
              <p className="text-xs text-gray-400 truncate">{t.desc}</p>
            </div>
            {active === t.id && <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#15803d" }} />}
          </button>
        ))}
      </nav>

      {/* User info at bottom */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {user?.imageUrl ? (
            <img src={user.imageUrl} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
          ) : (
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "#15803d" }}>
              {displayName[0].toUpperCase()}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{displayName}</p>
            <p className="text-xs text-gray-400">Level 3 · 350 XP 🔥</p>
          </div>
          <button
            onClick={() => onChange("profile")}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors"
          >
            ⚙️
          </button>
        </div>
      </div>
    </aside>
  );
}
