"use client";

import { type Toilet } from "./data";

const stars = (n: number) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

export default function DetailSheet({ toilet, onClose, onCheckIn }: { toilet: Toilet; onClose: () => void; onCheckIn: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end" style={{ background: "rgba(0,0,0,0.4)" }} onClick={onClose}>
      <div
        className="bg-white rounded-t-3xl overflow-y-auto"
        style={{ maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="px-5 pt-2 pb-4 border-b border-gray-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{toilet.name}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{toilet.type}</p>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">✕</button>
          </div>

          {/* Rating row */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-sm font-bold" style={{ color: "#f59e0b" }}>{stars(toilet.rating)}</span>
            <span className="text-sm font-semibold text-gray-800">{toilet.rating}</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-600">🚶 {toilet.distance}</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-600">⏱ {toilet.walkTime}</span>
          </div>

          {/* Status badge */}
          {toilet.occupied ? (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ background: "#fff7ed", color: "#ea580c" }}>
              🔴 Currently Occupied
            </div>
          ) : (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ background: "#f0fdf4", color: "#16a34a" }}>
              🟢 Available Now
            </div>
          )}
        </div>

        {/* Description */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">{toilet.description}</p>
        </div>

        {/* Cleanliness meter */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Cleanliness Score</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${(toilet.cleanliness / 5) * 100}%`, background: toilet.cleanliness >= 4 ? "#22c55e" : toilet.cleanliness >= 3 ? "#f59e0b" : "#ef4444" }} />
            </div>
            <span className="text-sm font-bold text-gray-700">{toilet.cleanliness}/5</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Amenities</p>
          <div className="flex flex-wrap gap-2">
            {toilet.amenities.map((a) => (
              <span key={a} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }}>
                ✓ {a}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Reviews</p>
          <div className="space-y-3">
            {toilet.reviews.map((r, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: "#15803d" }}>
                  {r.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-800">{r.user}</span>
                    <span className="text-xs font-bold" style={{ color: "#f59e0b" }}>{stars(r.rating)}</span>
                    <span className="text-xs text-gray-400 ml-auto">{r.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5">{r.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ad card */}
        {toilet.adName && (
          <div className="mx-5 my-4 rounded-2xl p-4 flex items-center gap-3" style={{ background: "#fefce8", border: "1px solid #fef08a" }}>
            <div className="w-10 h-10 rounded-xl bg-yellow-200 flex items-center justify-center text-xl">🍽️</div>
            <div className="flex-1">
              <p className="text-xs font-bold text-yellow-800">Sponsored · Nearby</p>
              <p className="text-sm font-semibold text-gray-900">{toilet.adName}</p>
              <p className="text-xs text-gray-600">{toilet.adDesc}</p>
            </div>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "#fef08a", color: "#854d0e" }}>{toilet.adTag}</span>
          </div>
        )}

        {/* CTA */}
        <div className="px-5 pb-8 pt-2 flex gap-3">
          <button
            onClick={onCheckIn}
            className="flex-1 py-3.5 rounded-2xl text-white font-bold text-sm active:scale-[0.97] transition-transform"
            style={{ background: "#15803d" }}
          >
            🚽 Check In Here
          </button>
          <button className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
            <span className="text-xl">🗺️</span>
          </button>
        </div>
      </div>
    </div>
  );
}
