"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const steps = [
  {
    title: "Welcome to Eplayment AI Hub! 👋",
    body: "This is your go-to place for learning how to use AI tools safely and effectively. Let's take a quick tour so you know exactly where everything is.",
    emoji: "🏠",
    position: "center",
    cta: null,
  },
  {
    title: "Your Learning Hub",
    body: "These 4 blocks are your starting points. Pick what you want to do — build a bot, generate images, write code with AI, or follow step-by-step guides.",
    emoji: "🎯",
    position: "top-center",
    cta: null,
  },
  {
    title: "Pick Your AI Tool",
    body: "Not sure which AI to use? This section shows you Claude, Gemini, ChatGPT, and Copilot — with a plain-English explanation of what each one is best for.",
    emoji: "⚡",
    position: "center",
    cta: null,
  },
  {
    title: "Sidebar Navigation",
    body: "Use the icons on the left to jump to any section: Home, AI Tools, Guidelines, Security, Bots, and Settings. Hover over them to see the label.",
    emoji: "🧭",
    position: "left",
    cta: null,
  },
  {
    title: "Security First 🔒",
    body: "Before using any AI tool for work, read the Security guidelines. It tells you exactly what you can and cannot share with AI — it only takes 3 minutes.",
    emoji: "🛡️",
    position: "center",
    cta: { label: "Read Security Guide", href: "/dashboard/ai-security" },
  },
  {
    title: "Your AI Assistant",
    body: "See the green button at the bottom right? That's your AI assistant. Ask it anything about AI tools, setup steps, or guidelines — anytime, on any page.",
    emoji: "💬",
    position: "bottom-right",
    cta: null,
  },
  {
    title: "You're all set! 🎉",
    body: "Start with the module that matches your first goal. Remember: you can always ask the AI assistant or come back to any guide. Take it one step at a time.",
    emoji: "🚀",
    position: "center",
    cta: { label: "Start Learning", href: "/dashboard/ai-guidelines" },
  },
];

const positionStyles: Record<string, React.CSSProperties> = {
  center:       { bottom: "50%", left: "50%", transform: "translate(-50%, 50%)" },
  "top-center": { top: "30%", left: "50%", transform: "translateX(-50%)" },
  left:         { top: "50%", left: "120px", transform: "translateY(-50%)" },
  "bottom-right": { bottom: "96px", right: "24px" },
};

export default function Tour() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const done = localStorage.getItem("ep_tour_done");
    const seenBanner = localStorage.getItem("eplayment_tutorial_seen");
    if (!done) {
      setTimeout(() => setVisible(true), 800);
      if (!seenBanner) localStorage.setItem("eplayment_tutorial_seen", "1");
    }
  }, []);

  function next() {
    if (step < steps.length - 1) setStep(step + 1);
    else finish();
  }
  function prev() { if (step > 0) setStep(step - 1); }
  function finish() {
    localStorage.setItem("ep_tour_done", "1");
    setVisible(false);
  }

  if (!visible) return null;

  const s = steps[step];

  return (
    <>
      {/* Dim overlay */}
      <div className="fixed inset-0 z-[9998] pointer-events-none"
        style={{ background: "rgba(0,0,0,0.5)" }} />

      {/* Floating card */}
      <div className="fixed z-[9999] w-80 animate-scale-in"
        style={positionStyles[s.position] ?? positionStyles.center}>
        <div className="rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>

          {/* Progress bar */}
          <div className="h-1 w-full" style={{ background: "var(--bg3)" }}>
            <div className="h-1 transition-all duration-500 rounded-full"
              style={{ width: `${((step + 1) / steps.length) * 100}%`, background: "linear-gradient(90deg,#70C250,#6D5BD0)" }} />
          </div>

          <div className="p-5">
            {/* Step count */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(112,194,80,0.12)", color: "#70C250" }}>
                Step {step + 1} of {steps.length}
              </span>
              <button onClick={finish} className="text-xs transition-colors"
                style={{ color: "var(--text3)" }}>
                Skip tour
              </button>
            </div>

            {/* Icon + title */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: "rgba(112,194,80,0.1)" }}>
                {s.emoji}
              </div>
              <h3 className="font-bold text-sm leading-snug mt-1.5" style={{ color: "var(--text)" }}>
                {s.title}
              </h3>
            </div>

            {/* Body */}
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text2)" }}>
              {s.body}
            </p>

            {/* CTA */}
            {s.cta && (
              <Link href={s.cta.href} onClick={finish}
                className="block text-center text-xs font-semibold py-2 px-4 rounded-xl mb-3 transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#70C250,#6D5BD0)", color: "white" }}>
                {s.cta.label}
              </Link>
            )}

            {/* Nav buttons */}
            <div className="flex items-center justify-between">
              <button onClick={prev} disabled={step === 0}
                className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg disabled:opacity-30 transition-all hover:opacity-80"
                style={{ background: "var(--bg3)", color: "var(--text2)" }}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              {/* Dots */}
              <div className="flex gap-1">
                {steps.map((_, i) => (
                  <button key={i} onClick={() => setStep(i)}
                    className="w-1.5 h-1.5 rounded-full transition-all"
                    style={{ background: i === step ? "#70C250" : "var(--border2, #374151)" }} />
                ))}
              </div>

              <button onClick={next}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-90 text-white"
                style={{ background: step === steps.length - 1 ? "linear-gradient(135deg,#70C250,#6D5BD0)" : "#6D5BD0" }}>
                {step === steps.length - 1 ? "Done 🎉" : "Next"}
                {step < steps.length - 1 && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Restart tour hint — only shown on last step */}
        {step === steps.length - 1 && (
          <p className="text-center text-xs mt-2" style={{ color: "var(--text3)" }}>
            You can restart the tour anytime from Settings
          </p>
        )}
      </div>
    </>
  );
}
