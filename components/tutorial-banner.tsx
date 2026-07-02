"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function TutorialBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("eplayment_tutorial_seen");
    if (!seen) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem("eplayment_tutorial_seen", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="relative rounded-2xl p-5 flex items-center gap-5 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f1f14 0%, #111828 100%)", border: "1px solid rgba(74,222,128,0.25)" }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(74,222,128,0.08) 0%, transparent 60%)" }} />

      {/* Illustration */}
      <div className="shrink-0 w-14 h-14">
        <svg viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="26" fill="rgba(74,222,128,0.1)" />
          <path d="M18 28l6 6 14-14" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="28" r="16" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white text-sm">New here? Start with a quick tour</p>
        <p className="text-xs text-gray-400 mt-0.5">Learn how to pick the right AI tool for your task in 2 minutes.</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link href="/dashboard/tutorial/bots"
          className="px-4 py-2 rounded-xl text-xs font-semibold text-black transition-all hover:scale-105 active:scale-95"
          style={{ background: "#4ade80" }}>
          Start tour
        </Link>
        <button onClick={dismiss}
          className="p-2 rounded-xl text-gray-500 hover:text-gray-300 transition-colors"
          style={{ background: "#1a2030" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
