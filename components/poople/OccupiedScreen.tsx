"use client";

import { type Toilet } from "./data";

export default function OccupiedScreen({ toilet, onBack }: { toilet: Toilet; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-[#f8faf5] items-center justify-center px-6 text-center">
      {/* Animated icon */}
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full flex items-center justify-center text-6xl" style={{ background: "#fff7ed", animation: "pulse 2s infinite" }}>
          🚽
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-sm font-bold border-2 border-white">
          !
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Occupied!</h2>
      <p className="text-gray-500 text-sm mb-1 font-medium">{toilet.name}</p>
      <p className="text-gray-400 text-sm mb-8">Someone's in there. Estimated wait: ~2 min</p>

      {/* Wait time bar */}
      <div className="w-full max-w-xs mb-8">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Wait time</span>
          <span className="font-semibold text-orange-500">~2 min</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: "35%", background: "#f97316" }} />
        </div>
      </div>

      {/* Ad while waiting */}
      {toilet.adName && (
        <div className="w-full max-w-xs rounded-2xl p-4 mb-6 text-left" style={{ background: "#fefce8", border: "1px solid #fef08a" }}>
          <p className="text-xs font-bold text-yellow-700 mb-1">⏳ While you wait…</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-200 flex items-center justify-center text-xl">🍽️</div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{toilet.adName}</p>
              <p className="text-xs text-gray-600">{toilet.adDesc}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: "#15803d" }}>{toilet.adTag}</p>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="w-full max-w-xs space-y-3">
        <button
          className="w-full py-3.5 rounded-2xl font-bold text-sm text-white active:scale-[0.97] transition-transform"
          style={{ background: "#15803d" }}
        >
          🔔 Notify me when free
        </button>
        <button
          onClick={onBack}
          className="w-full py-3.5 rounded-2xl font-semibold text-sm text-gray-600 bg-white border border-gray-200 active:scale-[0.97] transition-transform"
        >
          ← Find another restroom
        </button>
      </div>
    </div>
  );
}
