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
      style={{ background: "var(--bg2)", border: "1px solid rgba(112,194,80,0.3)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(112,194,80,0.06) 0%, transparent 60%)" }} />

      <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(112,194,80,0.12)" }}>
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M9 12l2 2 4-4" stroke="#70C250" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="9" stroke="#70C250" strokeWidth={1.5} />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>New here? Start with a quick tour</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>Learn how to pick the right AI tool for your task in 2 minutes.</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link href="/dashboard/tutorial/bots"
          className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
          style={{ background: "#70C250" }}>
          Start tour
        </Link>
        <button onClick={dismiss}
          className="p-2 rounded-xl transition-colors"
          style={{ background: "var(--bg3)", color: "var(--text3)" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
