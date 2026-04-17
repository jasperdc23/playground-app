"use client";

import { useState } from "react";

const moods = [
  { emoji: "😌", label: "Smooth" },
  { emoji: "😤", label: "Tough" },
  { emoji: "⚡", label: "Quick" },
  { emoji: "🔥", label: "Spicy" },
  { emoji: "😴", label: "Relaxed" },
];

export default function CheckInScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState<"ask" | "mood" | "done">("ask");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  if (step === "ask") {
    return (
      <div className="flex flex-col h-full items-center justify-center px-6 text-center bg-[#f8faf5]">
        <div className="text-7xl mb-6">💩</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Have you pooped today?</h2>
        <p className="text-gray-500 text-sm mb-10">Your daily gut check-in. No shame, only gains.</p>
        <div className="w-full max-w-xs space-y-3">
          <button
            onClick={() => setStep("mood")}
            className="w-full py-4 rounded-2xl text-white font-bold text-base active:scale-[0.97] transition-transform"
            style={{ background: "#15803d" }}
          >
            ✅ Yes, I did it!
          </button>
          <button
            onClick={onDone}
            className="w-full py-4 rounded-2xl font-semibold text-sm text-gray-600 bg-white border border-gray-200 active:scale-[0.97] transition-transform"
          >
            Not yet today
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-6">🔥 3-day streak · Keep it going!</p>
      </div>
    );
  }

  if (step === "mood") {
    return (
      <div className="flex flex-col h-full items-center justify-center px-6 text-center bg-[#f8faf5]">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">How was the experience?</h2>
        <p className="text-gray-500 text-sm mb-8">Be honest. We're all friends here.</p>
        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => setSelectedMood(m.label)}
              className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border-2 transition-all active:scale-[0.95]"
              style={{
                borderColor: selectedMood === m.label ? "#15803d" : "#e5e7eb",
                background: selectedMood === m.label ? "#f0fdf4" : "white",
              }}
            >
              <span className="text-3xl">{m.emoji}</span>
              <span className="text-xs font-semibold text-gray-700">{m.label}</span>
            </button>
          ))}
        </div>
        <button
          onClick={() => setStep("done")}
          disabled={!selectedMood}
          className="w-full max-w-xs py-3.5 rounded-2xl text-white font-bold text-sm active:scale-[0.97] transition-all disabled:opacity-40"
          style={{ background: "#15803d" }}
        >
          Submit & Earn XP
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full items-center justify-center px-6 text-center bg-[#f8faf5]">
      <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6" style={{ background: "#dcfce7" }}>
        🏆
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">+50 XP Earned!</h2>
      <p className="text-gray-500 text-sm mb-2">Great job logging your {selectedMood?.toLowerCase()} session.</p>
      <p className="text-xs font-semibold mb-8" style={{ color: "#15803d" }}>🔥 4-day streak! Keep going!</p>

      {/* XP bar */}
      <div className="w-full max-w-xs mb-8">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Level 3 · Toilet Tracker</span>
          <span className="font-semibold" style={{ color: "#15803d" }}>350 / 500 XP</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: "70%", background: "#15803d" }} />
        </div>
      </div>

      <button
        onClick={onDone}
        className="w-full max-w-xs py-3.5 rounded-2xl text-white font-bold text-sm active:scale-[0.97] transition-transform"
        style={{ background: "#15803d" }}
      >
        Back to Map
      </button>
    </div>
  );
}
