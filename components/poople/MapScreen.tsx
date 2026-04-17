"use client";

import { toilets, type Toilet } from "./data";

const stars = (n: number) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

export default function MapScreen({ onSelect }: { onSelect: (t: Toilet) => void }) {
  return (
    <div className="flex flex-col h-full bg-[#f8faf5]">
      {/* Header */}
      <div className="px-4 pt-4 pb-2" style={{ background: "#15803d" }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-xl font-bold text-white">Poople Maps 💩</h1>
            <p className="text-green-200 text-xs mt-0.5">5 restrooms found nearby</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-sm">🔔</span>
          </div>
        </div>
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 mb-3">
          <span className="text-gray-400">🔍</span>
          <span className="text-gray-400 text-sm flex-1">Search restrooms near you...</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "#dcfce7", color: "#15803d" }}>Near Me</span>
        </div>
      </div>

      {/* Mock Map */}
      <div className="relative mx-4 mt-3 rounded-2xl overflow-hidden" style={{ height: 200, background: "#e8f4e8" }}>
        {/* Street grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#c8e6c9 1px, transparent 1px), linear-gradient(90deg, #c8e6c9 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          {/* Roads */}
          <div className="absolute" style={{ top: "45%", left: 0, right: 0, height: 8, background: "#b0bec5", opacity: 0.6 }} />
          <div className="absolute" style={{ left: "50%", top: 0, bottom: 0, width: 8, background: "#b0bec5", opacity: 0.6 }} />
          <div className="absolute" style={{ top: "70%", left: 0, right: 0, height: 5, background: "#b0bec5", opacity: 0.4 }} />
          {/* You are here */}
          <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
            <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 whitespace-nowrap">You</div>
          </div>
          {/* Toilet markers */}
          {toilets.map((t) => (
            <button
              key={t.id}
              onClick={() => onSelect(t)}
              className="absolute flex flex-col items-center"
              style={{ left: `${t.x}%`, top: `${t.y}%`, transform: "translate(-50%,-100%)" }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md text-sm border-2 border-white ${t.occupied ? "bg-orange-400" : t.rating >= 4.2 ? "bg-green-500" : t.rating >= 3.8 ? "bg-yellow-500" : "bg-red-400"}`}>
                {t.occupied ? "🔴" : "🚽"}
              </div>
              <div className="w-0.5 h-2 bg-gray-500 mx-auto" />
            </button>
          ))}
        </div>
        {/* Map legend */}
        <div className="absolute bottom-2 right-2 bg-white/90 rounded-lg px-2 py-1 flex gap-2">
          <span className="text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />Clean</span>
          <span className="text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />Busy</span>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar">
        {["All", "⭐ 4.0+", "🚶 Walking", "♿ Accessible", "🆓 Free"].map((f) => (
          <button key={f} className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium border transition-all ${f === "All" ? "text-white border-transparent" : "text-gray-600 bg-white border-gray-200"}`}
            style={f === "All" ? { background: "#15803d" } : {}}>
            {f}
          </button>
        ))}
      </div>

      {/* Toilet cards list */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Nearby Restrooms</p>
        {toilets.map((t, i) => (
          <button
            key={t.id}
            onClick={() => onSelect(t)}
            className="w-full text-left bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl" style={{ background: i % 2 === 0 ? "#dcfce7" : "#dbeafe" }}>
                {t.type === "Shopping Mall" ? "🏬" : t.type === "Gas Station" ? "⛽" : "🍔"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm leading-tight">{t.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t.type}</p>
                  </div>
                  {t.occupied && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0" style={{ background: "#fff7ed", color: "#ea580c" }}>
                      Occupied
                    </span>
                  )}
                </div>
                {/* Rating + distance */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-bold" style={{ color: "#f59e0b" }}>{stars(t.rating)}</span>
                  <span className="text-xs font-semibold text-gray-700">{t.rating}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-600">🚶 {t.distance}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-600">⏱ {t.walkTime}</span>
                </div>
                {/* Preview review */}
                <div className="mt-2 bg-gray-50 rounded-lg px-2.5 py-1.5">
                  <p className="text-xs text-gray-600 italic truncate">"{t.reviews[0].comment}"</p>
                  <p className="text-xs text-gray-400 mt-0.5">— {t.reviews[0].user}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
