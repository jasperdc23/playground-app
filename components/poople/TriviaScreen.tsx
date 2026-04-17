"use client";

import { useState } from "react";
import { triviaCards } from "./data";

export default function TriviaScreen() {
  const [index, setIndex] = useState(0);
  const card = triviaCards[index];

  return (
    <div className="flex flex-col h-full bg-[#f8faf5]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3" style={{ background: "#15803d" }}>
        <h1 className="text-xl font-bold text-white">Gut Health Tips 🧠</h1>
        <p className="text-green-200 text-xs mt-0.5">Swipe through daily facts</p>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 py-4">
        {triviaCards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-full transition-all"
            style={{
              width: i === index ? 24 : 8,
              height: 8,
              background: i === index ? "#15803d" : "#d1d5db",
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div className="flex-1 px-4 pb-4 flex flex-col">
        <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="text-6xl mb-4 text-center">{card.emoji}</div>
          <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">{card.title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">{card.fact}</p>
          <div className="mt-4 rounded-2xl px-4 py-3 flex items-start gap-3" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
            <span className="text-lg">💡</span>
            <p className="text-sm font-medium text-green-800">{card.tip}</p>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setIndex(Math.max(0, index - 1))}
            disabled={index === 0}
            className="flex-1 py-3.5 rounded-2xl font-semibold text-sm text-gray-600 bg-white border border-gray-200 active:scale-[0.97] transition-all disabled:opacity-30"
          >
            ← Previous
          </button>
          <button
            onClick={() => setIndex(Math.min(triviaCards.length - 1, index + 1))}
            disabled={index === triviaCards.length - 1}
            className="flex-1 py-3.5 rounded-2xl text-white font-semibold text-sm active:scale-[0.97] transition-all disabled:opacity-30"
            style={{ background: "#15803d" }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
