"use client";

import { useState } from "react";
import { type Toilet } from "./data";
import WriteReview from "./WriteReview";

const stars = (n: number) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

type Review = { user: string; avatar: string; rating: number; comment: string; time: string };

export default function DetailSheet({ toilet, onClose, onCheckIn }: { toilet: Toilet; onClose: () => void; onCheckIn: () => void }) {
  const [reviews, setReviews] = useState<Review[]>(toilet.reviews);
  const [showReview, setShowReview] = useState(false);

  function handleNewReview(r: Review) {
    setReviews((prev) => [r, ...prev]);
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center md:items-center"
        style={{ background: "rgba(0,0,0,0.4)" }}
        onClick={onClose}
      >
        <div
          className="bg-white rounded-t-3xl md:rounded-3xl overflow-y-auto w-full md:w-[520px] md:max-h-[85vh]"
          style={{ maxHeight: "90vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle (mobile) */}
          <div className="flex justify-center pt-3 pb-1 md:hidden">
            <div className="w-10 h-1 rounded-full bg-gray-300" />
          </div>

          {/* Header */}
          <div className="px-5 pt-3 pb-4 border-b border-gray-100">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">{toilet.name}</h2>
                <p className="text-sm text-gray-500 mt-0.5">{toilet.type}</p>
              </div>
              <button onClick={onClose} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0 text-lg">✕</button>
            </div>

            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <span className="text-base font-bold" style={{ color: "#f59e0b" }}>{stars(toilet.rating)}</span>
              <span className="text-base font-semibold text-gray-800">{toilet.rating}</span>
              <span className="text-gray-300">·</span>
              <span className="text-sm text-gray-600">🚶 {toilet.distance}</span>
              <span className="text-gray-300">·</span>
              <span className="text-sm text-gray-600">⏱ {toilet.walkTime}</span>
            </div>

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

          {/* Cleanliness */}
          <div className="px-5 py-4 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Cleanliness Score</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${(toilet.cleanliness / 5) * 100}%`, background: toilet.cleanliness >= 4 ? "#22c55e" : toilet.cleanliness >= 3 ? "#f59e0b" : "#ef4444" }} />
              </div>
              <span className="text-sm font-bold text-gray-700">{toilet.cleanliness}/5</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="px-5 py-4 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Amenities</p>
            <div className="flex flex-wrap gap-2">
              {toilet.amenities.map((a) => (
                <span key={a} className="text-sm px-3 py-1.5 rounded-full font-medium" style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  ✓ {a}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Reviews ({reviews.length})</p>
              <button
                onClick={() => setShowReview(true)}
                className="text-sm font-bold px-4 py-2 rounded-xl text-white active:scale-95 transition-transform"
                style={{ background: "#f59e0b" }}
              >
                ✍️ Write Review
              </button>
            </div>
            <div className="space-y-4">
              {reviews.map((r, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: "#15803d" }}>
                    {r.avatar}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl px-3 py-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-gray-900">{r.user}</span>
                      <span className="text-sm font-bold" style={{ color: "#f59e0b" }}>{stars(r.rating)}</span>
                      <span className="text-xs text-gray-400 ml-auto">{r.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{r.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad */}
          {toilet.adName && (
            <div className="mx-5 my-4 rounded-2xl p-4 flex items-center gap-3" style={{ background: "#fefce8", border: "1px solid #fef08a" }}>
              <div className="w-11 h-11 rounded-xl bg-yellow-200 flex items-center justify-center text-2xl">🍽️</div>
              <div className="flex-1">
                <p className="text-xs font-bold text-yellow-800">Sponsored · Nearby</p>
                <p className="text-sm font-semibold text-gray-900">{toilet.adName}</p>
                <p className="text-xs text-gray-600">{toilet.adDesc}</p>
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "#fef08a", color: "#854d0e" }}>{toilet.adTag}</span>
            </div>
          )}

          {/* CTAs */}
          <div className="px-5 pb-8 pt-2 flex gap-3">
            <button
              onClick={onCheckIn}
              className="flex-1 py-4 rounded-2xl text-white font-extrabold text-base active:scale-[0.97] transition-transform"
              style={{ background: "#15803d" }}
            >
              🚽 Check In Here
            </button>
            <button className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
              🗺️
            </button>
          </div>
        </div>
      </div>

      {showReview && (
        <WriteReview
          toilet={toilet}
          onClose={() => setShowReview(false)}
          onSubmit={handleNewReview}
        />
      )}
    </>
  );
}
