"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { type Toilet } from "./data";

export default function WriteReview({ toilet, onClose, onSubmit }: {
  toilet: Toilet;
  onClose: () => void;
  onSubmit: (review: { user: string; avatar: string; rating: number; comment: string; time: string }) => void;
}) {
  const { user } = useUser();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const displayName = user?.firstName || user?.username || "Anonymous";
  const avatar = displayName[0].toUpperCase();

  function handleSubmit() {
    if (!rating || !comment.trim()) return;
    onSubmit({
      user: displayName,
      avatar,
      rating,
      comment: comment.trim(),
      time: "Just now",
    });
    setSubmitted(true);
    setTimeout(onClose, 1800);
  }

  const labels = ["", "Terrible 😱", "Bad 😕", "Okay 😐", "Good 😊", "Amazing! 🤩"];

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose}>
      <div
        className="bg-white w-full md:w-[480px] md:rounded-3xl rounded-t-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900">Write a Review</h3>
            <p className="text-sm text-gray-500">{toilet.name}</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">✕</button>
        </div>

        {submitted ? (
          <div className="py-16 flex flex-col items-center text-center px-6">
            <div className="text-6xl mb-4">🎉</div>
            <h4 className="text-xl font-extrabold text-gray-900">Review Submitted!</h4>
            <p className="text-gray-500 text-sm mt-2">Thanks for helping the Poople community, {displayName}!</p>
          </div>
        ) : (
          <div className="px-5 py-5 space-y-5">
            {/* Reviewer info */}
            <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
              {user?.imageUrl ? (
                <img src={user.imageUrl} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base" style={{ background: "#15803d" }}>
                  {avatar}
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-900 text-sm">{displayName}</p>
                <p className="text-xs text-gray-500">Posting as yourself</p>
              </div>
            </div>

            {/* Star rating */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Your Rating</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    onMouseEnter={() => setHover(s)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(s)}
                    className="text-4xl transition-transform hover:scale-110 active:scale-95"
                    style={{ color: s <= (hover || rating) ? "#f59e0b" : "#e5e7eb" }}
                  >
                    ★
                  </button>
                ))}
              </div>
              {(hover || rating) > 0 && (
                <p className="text-sm font-semibold mt-2" style={{ color: "#f59e0b" }}>{labels[hover || rating]}</p>
              )}
            </div>

            {/* Comment */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Your Experience</p>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell others what to expect — cleanliness, smell, wait time, secret treasures..."
                rows={4}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none resize-none"
                style={{ background: "#f9fafb" }}
              />
              <p className="text-xs text-gray-400 mt-1 text-right">{comment.length}/280</p>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={!rating || !comment.trim()}
              className="w-full py-4 rounded-2xl text-white font-extrabold text-base active:scale-[0.97] transition-all disabled:opacity-40"
              style={{ background: "#15803d" }}
            >
              Submit Review ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
