"use client";

type Tab = "map" | "checkin" | "trivia" | "profile";

const tabs: { id: Tab; icon: string; label: string }[] = [
  { id: "map", icon: "🗺️", label: "Map" },
  { id: "checkin", icon: "💩", label: "Check In" },
  { id: "trivia", icon: "🧠", label: "Tips" },
  { id: "profile", icon: "👤", label: "Profile" },
];

export default function BottomNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex border-t border-gray-200 bg-white">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition-all active:scale-95"
        >
          <span className="text-xl leading-none">{t.icon}</span>
          <span
            className="text-xs font-semibold"
            style={{ color: active === t.id ? "#15803d" : "#9ca3af" }}
          >
            {t.label}
          </span>
          {active === t.id && (
            <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: "#15803d" }} />
          )}
        </button>
      ))}
    </div>
  );
}
