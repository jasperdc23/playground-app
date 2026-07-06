"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SignIn, SignUp } from "@clerk/nextjs";

type Mode = "sign-in" | "sign-up";

interface AuthLayoutProps {
  mode: Mode;
  heading: string;
  subheading: string;
  rightHeading: string;
  rightSub: string;
}

export default function AuthLayout({ mode, heading, subheading, rightHeading, rightSub }: AuthLayoutProps) {
  const [dark, setDark] = useState(true);

  /* sync with html[data-theme] on mount, then toggle independently */
  useEffect(() => {
    const stored = localStorage.getItem("ep-theme");
    setDark(stored ? stored === "dark" : true);
  }, []);

  function toggle() {
    setDark(d => {
      const next = !d;
      localStorage.setItem("ep-theme", next ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      return next;
    });
  }

  const clerkVars = dark ? {
    colorBackground: "transparent",
    colorInputBackground: "#111827",
    colorText: "#f9fafb",
    colorTextSecondary: "#9ca3af",
    colorNeutral: "#1f2937",
    colorPrimary: "#70C250",
    borderRadius: "14px",
  } : {
    colorBackground: "transparent",
    colorInputBackground: "#f8fafc",
    colorText: "#111827",
    colorTextSecondary: "#6b7280",
    colorNeutral: "#e5e7eb",
    colorPrimary: "#16a34a",
    borderRadius: "14px",
  };

  const clerkElements = {
    rootBox: "w-full",
    card: "shadow-none p-0 bg-transparent border-0 w-full",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
    socialButtonsBlockButton: dark
      ? "border border-white/10 text-gray-200 hover:bg-white/5 rounded-xl h-12 font-medium"
      : "border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl h-12 font-medium",
    socialButtonsBlockButtonText: dark ? "text-gray-200 font-medium" : "text-gray-700 font-medium",
    dividerLine: dark ? "bg-white/10" : "bg-gray-200",
    dividerText: dark ? "text-gray-500 text-sm" : "text-gray-400 text-sm",
    formFieldLabel: dark ? "text-gray-300 font-semibold text-sm" : "text-gray-700 font-semibold text-sm",
    formFieldInput: dark
      ? "border border-white/10 rounded-xl h-12 text-white text-sm bg-[#111827] placeholder:text-gray-500 focus:border-green-500"
      : "border border-gray-200 rounded-xl h-12 text-gray-900 text-sm bg-white placeholder:text-gray-400 focus:border-green-500",
    formButtonPrimary: dark
      ? "bg-[#70C250] hover:bg-[#5ea83d] text-white font-semibold h-12 rounded-xl text-sm w-full"
      : "bg-gray-900 hover:bg-gray-800 text-white font-semibold h-12 rounded-xl text-sm w-full",
    footerActionLink: "text-green-500 font-semibold hover:text-green-400",
    footerActionText: dark ? "text-gray-500" : "text-gray-500",
    identityPreviewText: dark ? "text-gray-200" : "text-gray-800",
    identityPreviewEditButtonIcon: "text-green-500",
    formFieldSuccessText: "text-green-500",
    formFieldErrorText: "text-red-400 text-xs",
    alertText: dark ? "text-gray-300" : "text-gray-700",
    otpCodeFieldInput: dark ? "border-white/10 rounded-lg" : "border-gray-200 rounded-lg",
    formResendCodeLink: "text-green-500",
  };

  const bg = dark ? "#0a0c12" : "#f4f6fb";
  const cardBg = dark ? "#0d1117" : "#ffffff";
  const textPrimary = dark ? "#f9fafb" : "#111827";
  const textMuted = dark ? "#6b7280" : "#9ca3af";
  const borderColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";

  return (
    <main className="min-h-screen flex transition-colors duration-300" style={{ background: bg }}>

      {/* ── Left panel ── */}
      <div className="flex-1 flex flex-col px-10 py-8 max-w-[520px] min-h-screen">

        {/* Logo + theme toggle */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Image src="/ep-logomark.svg" alt="Eplayment" width={36} height={36} className="object-contain"
              style={{ filter: dark ? "brightness(0) invert(1)" : "brightness(0) saturate(100%)" }} />
          </div>

          {/* Theme toggle */}
          <button onClick={toggle}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-105"
            style={{ background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)", color: dark ? "#9ca3af" : "#6b7280", border: `1px solid ${borderColor}` }}>
            {dark ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Light mode
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                Dark mode
              </>
            )}
          </button>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold leading-tight" style={{ color: textPrimary }}>{heading}</h1>
          <p className="text-sm mt-1" style={{ color: textMuted }}>{subheading}</p>
        </div>

        {/* Clerk form */}
        <div className="flex-1 rounded-2xl overflow-hidden" data-auth-theme={dark ? "dark" : "light"}
          style={{ background: cardBg, border: `1px solid ${borderColor}` }}>
          {mode === "sign-in" ? (
            <SignIn appearance={{ variables: clerkVars, elements: clerkElements }} />
          ) : (
            <SignUp appearance={{ variables: clerkVars, elements: clerkElements }} />
          )}
        </div>

        {/* Help note */}
        <div className="mt-5 p-4 rounded-2xl" style={{ background: dark ? "rgba(255,255,255,0.03)" : "#f8fafc", border: `1px solid ${borderColor}` }}>
          <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
            Having trouble?{" "}
            <span className="font-semibold" style={{ color: textPrimary }}>Contact your company admin</span> for access.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center gap-5">
          {["About", "Terms & Conditions", "Privacy Policy"].map((l) => (
            <span key={l} className="text-xs cursor-pointer transition-colors" style={{ color: textMuted }}>{l}</span>
          ))}
        </div>
      </div>

      {/* ── Right panel — generative artwork ── */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden" style={{ background: "#0a0c12" }}>

        {/* Radial glow layers */}
        <div className="absolute" style={{ width: 600, height: 600, top: -100, right: -100, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,91,208,0.35) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute" style={{ width: 500, height: 500, bottom: -80, left: -60, borderRadius: "50%", background: "radial-gradient(circle, rgba(112,194,80,0.25) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute" style={{ width: 300, height: 300, top: "45%", left: "35%", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,91,208,0.2) 0%, transparent 70%)", filter: "blur(40px)" }} />

        {/* SVG geometric artwork */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 900" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Grid dots */}
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 80 + 40} cy={row * 80 + 40} r="1.5"
                fill={`rgba(255,255,255,${Math.random() > 0.5 ? 0.08 : 0.04})`} />
            ))
          )}

          {/* Large outer rings */}
          <circle cx="560" cy="160" r="180" stroke="rgba(109,91,208,0.18)" strokeWidth="1" />
          <circle cx="560" cy="160" r="130" stroke="rgba(109,91,208,0.12)" strokeWidth="1" />
          <circle cx="560" cy="160" r="80" stroke="rgba(109,91,208,0.2)" strokeWidth="1.5" />
          <circle cx="560" cy="160" r="40" fill="rgba(109,91,208,0.12)" stroke="rgba(109,91,208,0.3)" strokeWidth="1.5" />

          {/* Green ring cluster bottom-left */}
          <circle cx="100" cy="720" r="140" stroke="rgba(112,194,80,0.15)" strokeWidth="1" />
          <circle cx="100" cy="720" r="90" stroke="rgba(112,194,80,0.12)" strokeWidth="1" />
          <circle cx="100" cy="720" r="45" fill="rgba(112,194,80,0.08)" stroke="rgba(112,194,80,0.25)" strokeWidth="1.5" />

          {/* Hexagon-ish polygon — purple */}
          <polygon points="420,300 480,270 540,300 540,360 480,390 420,360"
            fill="rgba(109,91,208,0.06)" stroke="rgba(109,91,208,0.25)" strokeWidth="1.5" />
          <polygon points="430,312 480,286 530,312 530,352 480,378 430,352"
            fill="rgba(109,91,208,0.04)" stroke="rgba(109,91,208,0.15)" strokeWidth="1" />

          {/* Hexagon — green */}
          <polygon points="160,420 220,390 280,420 280,480 220,510 160,480"
            fill="rgba(112,194,80,0.05)" stroke="rgba(112,194,80,0.2)" strokeWidth="1.5" />

          {/* Diagonal lines */}
          <line x1="300" y1="0" x2="700" y2="500" stroke="rgba(109,91,208,0.07)" strokeWidth="1" />
          <line x1="0" y1="200" x2="500" y2="900" stroke="rgba(112,194,80,0.06)" strokeWidth="1" />
          <line x1="600" y1="0" x2="0" y2="700" stroke="rgba(109,91,208,0.05)" strokeWidth="1" />

          {/* Small accent circles scattered */}
          <circle cx="320" cy="200" r="6" fill="rgba(112,194,80,0.5)" />
          <circle cx="480" cy="520" r="4" fill="rgba(109,91,208,0.6)" />
          <circle cx="200" cy="350" r="3" fill="rgba(112,194,80,0.4)" />
          <circle cx="600" cy="650" r="5" fill="rgba(109,91,208,0.4)" />
          <circle cx="140" cy="580" r="4" fill="rgba(112,194,80,0.35)" />
          <circle cx="380" cy="780" r="3" fill="rgba(109,91,208,0.5)" />

          {/* Corner bracket — top left */}
          <path d="M 30 80 L 30 30 L 80 30" stroke="rgba(112,194,80,0.3)" strokeWidth="1.5" fill="none" />
          {/* Corner bracket — bottom right */}
          <path d="M 670 820 L 670 870 L 620 870" stroke="rgba(109,91,208,0.3)" strokeWidth="1.5" fill="none" />

          {/* Floating pill shapes */}
          <rect x="240" y="130" width="80" height="24" rx="12" fill="rgba(109,91,208,0.1)" stroke="rgba(109,91,208,0.2)" strokeWidth="1" />
          <rect x="420" y="700" width="100" height="24" rx="12" fill="rgba(112,194,80,0.08)" stroke="rgba(112,194,80,0.2)" strokeWidth="1" />
          <rect x="500" y="460" width="60" height="20" rx="10" fill="rgba(109,91,208,0.08)" stroke="rgba(109,91,208,0.18)" strokeWidth="1" />
        </svg>

        {/* Top badge */}
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-wide">Eplayment · Internal Platform</span>
          </div>
        </div>

        {/* Floating stats cards */}
        <div className="absolute top-1/3 right-10 z-10 space-y-3">
          <div className="px-4 py-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(109,91,208,0.3)" }}>
            <p className="text-2xl font-bold text-white">6+</p>
            <p className="text-xs text-white/50 mt-0.5">AI initiatives live</p>
          </div>
          <div className="px-4 py-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(112,194,80,0.3)" }}>
            <p className="text-2xl font-bold" style={{ color: "#70C250" }}>4</p>
            <p className="text-xs text-white/50 mt-0.5">AI tools covered</p>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
          <p className="text-white text-4xl font-bold leading-tight max-w-sm whitespace-pre-line">{rightHeading}</p>
          <p className="text-sm mt-3 max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{rightSub}</p>
        </div>

      </div>
    </main>
  );
}
