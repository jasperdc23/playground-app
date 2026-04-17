"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { toilets, type Toilet } from "./data";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

const stars = (n: number) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

export default function FindNearby({ onClose, onSelect }: { onClose: () => void; onSelect: (t: Toilet) => void }) {
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState<Toilet[]>([]);
  const [selected, setSelected] = useState<Toilet | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate GPS + scan loading
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setLoading(false);
          setFound(toilets);
          return 100;
        }
        return p + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#f8faf5]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 shrink-0 border-b border-gray-200 bg-white shadow-sm">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-xl"
        >
          ✕
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-extrabold text-gray-900">Find Nearby Restrooms</h2>
          <p className="text-sm text-gray-500">
            {loading ? `Scanning area... ${progress}%` : `${found.length} restrooms found near you`}
          </p>
        </div>
        {!loading && (
          <span className="text-sm font-semibold px-3 py-1.5 rounded-full" style={{ background: "#dcfce7", color: "#15803d" }}>
            📍 Live
          </span>
        )}
      </div>

      {/* Loading screen */}
      {loading && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8">
          <div className="relative w-32 h-32">
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#15803d" }} />
            <div className="absolute inset-4 rounded-full animate-ping opacity-30" style={{ background: "#15803d", animationDelay: "0.3s" }} />
            <div className="absolute inset-8 rounded-full flex items-center justify-center text-5xl" style={{ background: "#dcfce7" }}>
              📍
            </div>
          </div>
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Locating restrooms...</span>
              <span className="font-bold" style={{ color: "#15803d" }}>{progress}%</span>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${progress}%`, background: "#15803d" }}
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center">Using your location to find the nearest clean restrooms 🚽</p>
        </div>
      )}

      {/* Map + results */}
      {!loading && (
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar — results list */}
          <div className="w-80 shrink-0 overflow-y-auto border-r border-gray-200 bg-white hidden md:flex flex-col">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nearby Results</p>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
              {found.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelected(t)}
                  className="w-full text-left px-4 py-4 hover:bg-gray-50 transition-colors"
                  style={{ background: selected?.id === t.id ? "#f0fdf4" : undefined }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-2xl" style={{ background: "#f0fdf4" }}>
                      {t.type === "Shopping Mall" ? "🏬" : t.type === "Gas Station" ? "⛽" : "🍔"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.type}</p>
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span className="text-xs font-bold" style={{ color: "#f59e0b" }}>{stars(t.rating)}</span>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs text-gray-600">🚶 {t.distance}</span>
                        {t.occupied && <span className="text-xs font-semibold text-orange-500">· Occupied</span>}
                      </div>
                    </div>
                  </div>
                  {selected?.id === t.id && (
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelect(t); onClose(); }}
                      className="mt-3 w-full py-2.5 rounded-xl text-white text-sm font-bold active:scale-95 transition-transform"
                      style={{ background: "#15803d" }}
                    >
                      🧭 Navigate Here
                    </button>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 relative">
            <LeafletMap toilets={found} onSelect={(t) => setSelected(t)} expanded />

            {/* Mobile bottom sheet */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-64 overflow-y-auto z-[1000]">
              <div className="flex justify-center pt-3 mb-2">
                <div className="w-10 h-1 rounded-full bg-gray-300" />
              </div>
              <div className="px-4 pb-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Nearby Results</p>
              </div>
              <div className="divide-y divide-gray-50">
                {found.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => { onSelect(t); onClose(); }}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50"
                  >
                    <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-xl" style={{ background: "#f0fdf4" }}>
                      {t.type === "Shopping Mall" ? "🏬" : t.type === "Gas Station" ? "⛽" : "🍔"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">{t.name}</p>
                      <p className="text-xs text-gray-500">🚶 {t.distance} · ⭐ {t.rating}</p>
                    </div>
                    <span className="text-sm font-bold shrink-0" style={{ color: "#15803d" }}>Go →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
