"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    bg: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
    art: (
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="text-[90px] leading-none drop-shadow-2xl">💩</div>
          <div className="absolute -top-3 -right-3 text-4xl animate-bounce">⭐</div>
          <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse">✨</div>
        </div>
        <div className="flex gap-1 text-yellow-400 text-3xl">★★★★★</div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
          <p className="text-white font-extrabold text-xl">The 5-Star Experience</p>
          <p className="text-green-200 text-sm mt-1">Not all restrooms are created equal.</p>
        </div>
      </div>
    ),
    tagline: "Rate Every Trip",
    sub: "Your reviews make the world a cleaner place 🌍",
  },
  {
    bg: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #3b82f6 100%)",
    art: (
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="text-[80px] leading-none">🗺️</div>
          <div className="absolute top-2 right-0 text-5xl animate-spin" style={{ animationDuration: "8s" }}>💩</div>
        </div>
        <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-2">
          <div className="flex flex-col items-center text-white">
            <span className="text-2xl">📍</span>
            <span className="text-xs">You</span>
          </div>
          <div className="flex-1 h-0.5 bg-white/30 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg animate-pulse">💨</div>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-2xl">🚽</span>
            <span className="text-xs">Throne</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white font-extrabold text-xl">The Quest Begins</p>
          <p className="text-blue-200 text-sm mt-1">95m to your nearest clean loo</p>
        </div>
      </div>
    ),
    tagline: "Find Your Throne",
    sub: "Real-time restroom radar 📡",
  },
  {
    bg: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)",
    art: (
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="text-[80px] leading-none">🏆</div>
          <div className="absolute -top-2 left-0 text-3xl">💩</div>
          <div className="absolute bottom-0 right-0 text-2xl">💩</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["🥇\nFlushKing\n820", "🥈\nYou\n350", "🥉\nLooLegend\n310"].map((item) => {
            const [medal, name, xp] = item.split("\n");
            return (
              <div key={name} className="bg-white/10 rounded-xl px-3 py-2 text-center text-white">
                <div className="text-2xl">{medal}</div>
                <div className="text-xs font-bold mt-0.5">{name}</div>
                <div className="text-xs text-orange-200">{xp} XP</div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <p className="text-white font-extrabold text-xl">Poop Royalty 👑</p>
          <p className="text-orange-200 text-sm mt-1">Climb the leaderboard. One flush at a time.</p>
        </div>
      </div>
    ),
    tagline: "Compete & Conquer",
    sub: "Weekly leaderboards. Real bragging rights. 🎖️",
  },
  {
    bg: "linear-gradient(135deg, #4a044e 0%, #7e22ce 50%, #a855f7 100%)",
    art: (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 items-end">
          <div className="flex flex-col items-center">
            <div className="text-5xl">💩</div>
            <div className="text-xs text-purple-200 mt-1">Mon</div>
            <div className="w-8 rounded-t-lg mt-1" style={{ height: 40, background: "rgba(255,255,255,0.2)" }} />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl">💩</div>
            <div className="text-xs text-purple-200 mt-1">Tue</div>
            <div className="w-8 rounded-t-lg mt-1" style={{ height: 60, background: "rgba(255,255,255,0.4)" }} />
          </div>
          <div className="flex flex-col items-center relative">
            <div className="absolute -top-3 text-xl animate-bounce">🔥</div>
            <div className="text-5xl">💩</div>
            <div className="text-xs text-purple-200 mt-1">Today</div>
            <div className="w-8 rounded-t-lg mt-1" style={{ height: 80, background: "rgba(255,255,255,0.6)" }} />
          </div>
        </div>
        <div className="text-center">
          <p className="text-white font-extrabold text-xl">Stay Regular 🔥</p>
          <p className="text-purple-200 text-sm mt-1">4-day streak! Your gut thanks you.</p>
        </div>
      </div>
    ),
    tagline: "Build Healthy Habits",
    sub: "Daily check-ins. XP rewards. Streak bonuses. 💪",
  },
];

export default function ArtBannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <div
      className="relative flex flex-col justify-between h-full p-10 transition-all duration-700"
      style={{ background: slide.bg }}
    >
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="text-4xl">💩</div>
        <div>
          <h1 className="text-2xl font-extrabold text-white">Poople Maps</h1>
          <p className="text-white/60 text-sm">Find. Rate. Conquer.</p>
        </div>
      </div>

      {/* Art */}
      <div className="flex-1 flex items-center justify-center py-8">
        {slide.art}
      </div>

      {/* Tagline */}
      <div>
        <h2 className="text-3xl font-extrabold text-white leading-tight">{slide.tagline}</h2>
        <p className="text-white/70 text-base mt-2">{slide.sub}</p>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background: i === current ? "white" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
