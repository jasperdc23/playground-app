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

  useEffect(() => {
    const stored = localStorage.getItem("ep-theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
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
    colorBackground: "#0d1117",
    colorInputBackground: "#111827",
    colorText: "#f9fafb",
    colorTextSecondary: "#9ca3af",
    colorNeutral: "#374151",
    colorPrimary: "#70C250",
    borderRadius: "12px",
  } : {
    colorBackground: "#ffffff",
    colorInputBackground: "#f8fafc",
    colorText: "#111827",
    colorTextSecondary: "#6b7280",
    colorNeutral: "#d1d5db",
    colorPrimary: "#16a34a",
    borderRadius: "12px",
  };

  const clerkElements = {
    rootBox: "w-full",
    card: "shadow-none p-0 border-0 w-full",
    cardBox: "w-full shadow-none border-0",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
    socialButtonsBlockButton: dark
      ? "!border !border-white/10 !text-gray-200 hover:!bg-white/5 !rounded-xl !h-12 !font-medium"
      : "!border !border-gray-200 !text-gray-700 hover:!bg-gray-50 !rounded-xl !h-12 !font-medium",
    dividerLine: dark ? "!bg-white/10" : "!bg-gray-200",
    dividerText: dark ? "!text-gray-500" : "!text-gray-400",
    formFieldLabel: dark ? "!text-gray-300 !font-semibold !text-sm" : "!text-gray-700 !font-semibold !text-sm",
    formFieldInput: dark
      ? "!border !border-white/10 !rounded-xl !h-12 !text-white !bg-[#111827] placeholder:!text-gray-500"
      : "!border !border-gray-200 !rounded-xl !h-12 !text-gray-900 !bg-white placeholder:!text-gray-400",
    formButtonPrimary: dark
      ? "!bg-[#70C250] hover:!bg-[#5ea83d] !text-white !font-semibold !h-12 !rounded-xl"
      : "!bg-gray-900 hover:!bg-gray-800 !text-white !font-semibold !h-12 !rounded-xl",
    footerActionLink: "!text-green-500 !font-semibold hover:!text-green-400",
    footerActionText: dark ? "!text-gray-400" : "!text-gray-500",
    footer: dark ? "!bg-[#0d1117] !border-t !border-white/5" : "!bg-white !border-t !border-gray-100",
    identityPreviewText: dark ? "!text-gray-200" : "!text-gray-800",
    formFieldSuccessText: "!text-green-500",
    formFieldErrorText: "!text-red-400 !text-xs",
    alertText: dark ? "!text-gray-300" : "!text-gray-700",
    formResendCodeLink: "!text-green-500",
  };

  const bg = dark ? "#0a0c12" : "#f4f6fb";
  const textPrimary = dark ? "#f9fafb" : "#111827";
  const textMuted = dark ? "#6b7280" : "#9ca3af";
  const borderColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";

  return (
    <main className="min-h-screen flex transition-colors duration-300" style={{ background: bg }}>

      {/* ── Left panel ── */}
      <div className="flex-1 flex flex-col px-10 py-8 max-w-[520px] min-h-screen">

        {/* Logo + theme toggle */}
        <div className="flex items-center justify-between mb-10">
          <Image src="/ep-logomark.svg" alt="Eplayment" width={36} height={36} className="object-contain" />

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

        {/* Clerk form — no wrapper, form is its own surface */}
        <div className="flex-1" data-auth-theme={dark ? "dark" : "light"}>
          {mode === "sign-in" ? (
            <SignIn appearance={{ variables: clerkVars, elements: clerkElements }} />
          ) : (
            <SignUp appearance={{ variables: clerkVars, elements: clerkElements }} />
          )}
        </div>

        {/* Help note */}
        <div className="mt-5 p-4 rounded-2xl" style={{ background: dark ? "rgba(255,255,255,0.03)" : "#f0f2f8", border: `1px solid ${borderColor}` }}>
          <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
            Having trouble?{" "}
            <span className="font-semibold" style={{ color: textPrimary }}>Contact your company admin</span> for access.
          </p>
        </div>

        {/* Footer links */}
        <div className="mt-5 flex items-center gap-5">
          {["About", "Terms & Conditions", "Privacy Policy"].map((l) => (
            <span key={l} className="text-xs cursor-pointer transition-colors" style={{ color: textMuted }}>{l}</span>
          ))}
        </div>
      </div>

      {/* ── Right panel — animated generative artwork ── */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden" style={{ background: "#060810" }}>

        {/* Animated glow orbs */}
        <div className="absolute auth-orb-1" style={{ width: 700, height: 700, top: -200, right: -150, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,91,208,0.4) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute auth-orb-2" style={{ width: 600, height: 600, bottom: -150, left: -100, borderRadius: "50%", background: "radial-gradient(circle, rgba(112,194,80,0.3) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute auth-orb-3" style={{ width: 350, height: 350, top: "40%", left: "30%", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,91,208,0.25) 0%, transparent 65%)", filter: "blur(40px)" }} />

        {/* SVG geometric artwork */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 900" fill="none" preserveAspectRatio="xMidYMid slice">

          {/* Grid dots */}
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => (
              <circle key={`${row}-${col}`}
                cx={col * 80 + 40} cy={row * 80 + 40} r="1.5"
                fill="rgba(255,255,255,0.06)" />
            ))
          )}

          {/* Rotating ring group — purple top-right */}
          <g style={{ transformOrigin: "560px 160px", animation: "authSpin 40s linear infinite" }}>
            <circle cx="560" cy="160" r="200" stroke="rgba(109,91,208,0.12)" strokeWidth="1" />
            <circle cx="560" cy="160" r="150" stroke="rgba(109,91,208,0.15)" strokeWidth="1" strokeDasharray="8 16" />
          </g>
          <g style={{ transformOrigin: "560px 160px", animation: "authSpinRev 30s linear infinite" }}>
            <circle cx="560" cy="160" r="100" stroke="rgba(109,91,208,0.2)" strokeWidth="1.5" strokeDasharray="4 12" />
          </g>
          <circle cx="560" cy="160" r="45" fill="rgba(109,91,208,0.1)" stroke="rgba(109,91,208,0.35)" strokeWidth="1.5" style={{ animation: "authPulse 4s ease-in-out infinite" }} />
          <circle cx="560" cy="160" r="10" fill="rgba(109,91,208,0.7)" style={{ animation: "authPulse 4s ease-in-out infinite" }} />

          {/* Rotating ring group — green bottom-left */}
          <g style={{ transformOrigin: "100px 730px", animation: "authSpinRev 35s linear infinite" }}>
            <circle cx="100" cy="730" r="160" stroke="rgba(112,194,80,0.1)" strokeWidth="1" />
            <circle cx="100" cy="730" r="110" stroke="rgba(112,194,80,0.14)" strokeWidth="1" strokeDasharray="6 14" />
          </g>
          <circle cx="100" cy="730" r="55" fill="rgba(112,194,80,0.07)" stroke="rgba(112,194,80,0.3)" strokeWidth="1.5" style={{ animation: "authPulse 5s ease-in-out infinite 1s" }} />
          <circle cx="100" cy="730" r="12" fill="rgba(112,194,80,0.6)" style={{ animation: "authPulse 5s ease-in-out infinite 1s" }} />

          {/* Floating hexagon — purple, center */}
          <g style={{ animation: "authFloat 6s ease-in-out infinite" }}>
            <polygon points="420,300 480,268 540,300 540,364 480,396 420,364"
              fill="rgba(109,91,208,0.07)" stroke="rgba(109,91,208,0.3)" strokeWidth="1.5" />
            <polygon points="432,316 480,289 528,316 528,348 480,375 432,348"
              fill="none" stroke="rgba(109,91,208,0.15)" strokeWidth="1" />
          </g>

          {/* Floating hexagon — green, left */}
          <g style={{ animation: "authFloat 7s ease-in-out infinite 2s" }}>
            <polygon points="150,410 210,378 270,410 270,474 210,506 150,474"
              fill="rgba(112,194,80,0.06)" stroke="rgba(112,194,80,0.25)" strokeWidth="1.5" />
          </g>

          {/* Diagonal streaks */}
          <line x1="280" y1="0" x2="700" y2="520" stroke="rgba(109,91,208,0.06)" strokeWidth="1" />
          <line x1="0" y1="180" x2="480" y2="900" stroke="rgba(112,194,80,0.05)" strokeWidth="1" />
          <line x1="560" y1="0" x2="0" y2="720" stroke="rgba(109,91,208,0.04)" strokeWidth="1" />

          {/* Floating accent dots */}
          <circle cx="320" cy="200" r="5" fill="#70C250" opacity="0.6" style={{ animation: "authFloat 4s ease-in-out infinite 0.5s" }} />
          <circle cx="480" cy="530" r="4" fill="#6D5BD0" opacity="0.7" style={{ animation: "authFloat 5s ease-in-out infinite 1.5s" }} />
          <circle cx="195" cy="355" r="3" fill="#70C250" opacity="0.5" style={{ animation: "authFloat 6s ease-in-out infinite 0.8s" }} />
          <circle cx="610" cy="660" r="5" fill="#6D5BD0" opacity="0.5" style={{ animation: "authFloat 4.5s ease-in-out infinite 2s" }} />
          <circle cx="145" cy="575" r="3.5" fill="#70C250" opacity="0.45" style={{ animation: "authFloat 7s ease-in-out infinite 1s" }} />
          <circle cx="390" cy="790" r="3" fill="#6D5BD0" opacity="0.55" style={{ animation: "authFloat 5.5s ease-in-out infinite 3s" }} />

          {/* Corner brackets */}
          <path d="M 28 78 L 28 28 L 78 28" stroke="rgba(112,194,80,0.35)" strokeWidth="1.5" fill="none" />
          <path d="M 672 822 L 672 872 L 622 872" stroke="rgba(109,91,208,0.35)" strokeWidth="1.5" fill="none" />

          {/* Floating pill tags */}
          <g style={{ animation: "authFloat 8s ease-in-out infinite 1s" }}>
            <rect x="235" y="125" width="90" height="26" rx="13" fill="rgba(109,91,208,0.12)" stroke="rgba(109,91,208,0.25)" strokeWidth="1" />
          </g>
          <g style={{ animation: "authFloat 7s ease-in-out infinite 2.5s" }}>
            <rect x="415" y="695" width="110" height="26" rx="13" fill="rgba(112,194,80,0.1)" stroke="rgba(112,194,80,0.22)" strokeWidth="1" />
          </g>
          <g style={{ animation: "authFloat 6s ease-in-out infinite 0.3s" }}>
            <rect x="490" y="455" width="70" height="22" rx="11" fill="rgba(109,91,208,0.1)" stroke="rgba(109,91,208,0.2)" strokeWidth="1" />
          </g>
        </svg>

        {/* Top badge */}
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-wide">Eplayment · Internal Platform</span>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="absolute top-1/3 right-10 z-10 space-y-3" style={{ animation: "authFloat 8s ease-in-out infinite 1s" }}>
          <div className="px-4 py-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(109,91,208,0.3)" }}>
            <p className="text-2xl font-bold text-white">6+</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>AI initiatives live</p>
          </div>
          <div className="px-4 py-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(112,194,80,0.3)" }}>
            <p className="text-2xl font-bold" style={{ color: "#70C250" }}>4</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>AI tools covered</p>
          </div>
        </div>

        {/* Bottom headline */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
          <p className="text-white text-4xl font-bold leading-tight max-w-sm whitespace-pre-line">{rightHeading}</p>
          <p className="text-sm mt-3 max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{rightSub}</p>
        </div>
      </div>
    </main>
  );
}
