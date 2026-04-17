"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { toilets as allToilets, type Toilet } from "./data";
import Mascot from "./Mascot";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

type Filter = "All" | "⭐ 4.0+" | "🚶 Walking" | "♿ Accessible" | "🆓 Free";

const FILTERS: Filter[] = ["All", "⭐ 4.0+", "🚶 Walking", "♿ Accessible", "🆓 Free"];

function applyFilter(toilets: Toilet[], filter: Filter): Toilet[] {
  switch (filter) {
    case "⭐ 4.0+":
      return toilets.filter((t) => t.rating >= 4.0);
    case "🚶 Walking":
      return toilets.filter((t) => parseInt(t.distance) <= 300);
    case "♿ Accessible":
      return toilets.filter((t) => t.amenities.includes("Wheelchair Access"));
    case "🆓 Free":
      return toilets.filter((t) => !t.amenities.includes("Paid"));
    default:
      return toilets;
  }
}

const stars = (n: number) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

export default function MapScreen({
  onSelect,
  onNotifOpen,
  unreadCount,
  onFindNearby,
}: {
  onSelect: (t: Toilet) => void;
  onNotifOpen: () => void;
  unreadCount: number;
  onFindNearby?: () => void;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [mapExpanded, setMapExpanded] = useState(false);
  const filtered = applyFilter(allToilets, filter);

  if (mapExpanded) {
    return (
      <div className="flex flex-col h-full">
        {/* Expanded map header */}
        <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{ background: "#15803d" }}>
          <button
            onClick={() => setMapExpanded(false)}
            className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-lg"
          >
            ←
          </button>
          <h2 className="text-base font-bold text-white flex-1">Map View</h2>
          <span className="text-green-200 text-sm">{filtered.length} restrooms</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <LeafletMap toilets={filtered} onSelect={onSelect} expanded />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f8faf5]">
      {/* Header */}
      <div className="px-5 pt-5 pb-3 shrink-0" style={{ background: "#15803d" }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Mascot size={44} expression="happy" />
            <div>
              <h1 className="text-2xl font-extrabold text-white leading-tight">Poople Maps</h1>
              <p className="text-green-200 text-sm mt-0.5">{filtered.length} restrooms nearby</p>
            </div>
          </div>
          <button
            onClick={onNotifOpen}
            className="relative w-11 h-11 rounded-full bg-white/20 flex items-center justify-center"
          >
            <span className="text-xl">🔔</span>
            {unreadCount > 0 && (
              <div className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{unreadCount}</span>
              </div>
            )}
          </button>
        </div>
        {/* Search + Find Nearby */}
        <div className="flex gap-2 mb-1">
          <div className="flex-1 flex items-center gap-2 bg-white rounded-2xl px-4 py-3">
            <span className="text-gray-400 text-lg">🔍</span>
            <span className="text-gray-400 text-base flex-1">Search restrooms...</span>
          </div>
          {onFindNearby && (
            <button
              onClick={onFindNearby}
              className="md:hidden shrink-0 flex items-center gap-1.5 px-4 py-3 rounded-2xl font-bold text-sm text-white active:scale-95 transition-transform"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
            >
              📍 Nearby
            </button>
          )}
        </div>
      </div>

      {/* Map preview */}
      <div className="mx-4 mt-4 rounded-2xl overflow-hidden shadow-sm border border-gray-200 shrink-0" style={{ height: 200 }}>
        <LeafletMap toilets={filtered} onSelect={onSelect} expanded={false} />
        {/* Expand button */}
        <button
          onClick={() => setMapExpanded(true)}
          className="absolute z-[1000] bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-200 shadow flex items-center gap-1.5 active:scale-95 transition-transform"
          style={{ position: "relative", marginTop: -36, marginLeft: 8 }}
        >
          ⛶ Expand Map
        </button>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar shrink-0">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="text-sm px-4 py-2 rounded-full whitespace-nowrap font-semibold border transition-all active:scale-95"
            style={
              f === filter
                ? { background: "#15803d", color: "white", borderColor: "#15803d" }
                : { background: "white", color: "#374151", borderColor: "#e5e7eb" }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 space-y-3">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {filter === "All" ? "Nearby Restrooms" : `Filtered: ${filter}`} · {filtered.length} results
        </p>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Mascot size={64} expression="surprised" className="mx-auto mb-3" />
            <p className="font-semibold text-gray-500 text-base">No restrooms match this filter</p>
            <p className="text-sm mt-1">Try a different category</p>
          </div>
        )}

        {filtered.map((t, i) => (
          <button
            key={t.id}
            onClick={() => onSelect(t)}
            className="w-full text-left bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-3xl" style={{ background: i % 2 === 0 ? "#dcfce7" : "#dbeafe" }}>
                {t.type === "Shopping Mall" ? "🏬" : t.type === "Gas Station" ? "⛽" : "🍔"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-gray-900 text-base leading-tight">{t.name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{t.type}</p>
                  </div>
                  {t.occupied ? (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0" style={{ background: "#fff7ed", color: "#ea580c" }}>
                      Occupied
                    </span>
                  ) : (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                      Free
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-sm font-bold" style={{ color: "#f59e0b" }}>{stars(t.rating)}</span>
                  <span className="text-sm font-bold text-gray-700">{t.rating}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-sm text-gray-600">🚶 {t.distance}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-sm text-gray-600">⏱ {t.walkTime}</span>
                </div>
                <div className="mt-2.5 bg-gray-50 rounded-xl px-3 py-2">
                  <p className="text-sm text-gray-600 italic truncate">"{t.reviews[0].comment}"</p>
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
