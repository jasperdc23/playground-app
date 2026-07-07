"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";

type Mode = "sign-in" | "sign-up";

interface AuthLayoutProps {
  mode: Mode;
  rightHeading: string;
  rightSub: string;
}

const clerkAppearance = {
  elements: {
    rootBox: "w-full",
    card: "shadow-none border-0 p-0 bg-transparent w-full",
    cardBox: "shadow-none border-0 w-full bg-transparent",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
    // Hide email/password form — show only social
    formFieldRow__emailAddress: "hidden",
    formFieldRow__password: "hidden",
    dividerRow: "hidden",
    formButtonPrimary: "hidden",
    footerActionText: "hidden",
    footerActionLink: "hidden",
    footer: "hidden",
    // Style the Google button to match our design
    socialButtonsBlockButton:
      "!w-full !flex !items-center !justify-center !gap-3 !h-14 !rounded-2xl !text-base !font-semibold !border !border-gray-200 !bg-white !text-gray-900 hover:!bg-gray-50 !shadow-none !transition-all",
    socialButtonsBlockButtonText: "!text-gray-900 !font-semibold !text-base",
    socialButtonsBlockButtonArrow: "hidden",
  },
};

export default function AuthLayout({ mode, rightHeading, rightSub }: AuthLayoutProps) {
  return (
    <main className="min-h-screen flex" style={{ background: "#e8ece8" }}>

      {/* ── Left panel ── */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[420px] bg-white rounded-3xl p-10 shadow-sm">

          {/* Logo */}
          <div className="mb-10">
            <Image src="/ep-logomark.svg" alt="Eplayment" width={40} height={40} className="object-contain" />
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">Welcome back</h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Sign in to your Eplayment account to access AI tools, guidelines, and team initiatives.
            </p>
          </div>

          {/* Clerk Google button */}
          <div className="clerk-google-only">
            {mode === "sign-in"
              ? <SignIn appearance={clerkAppearance} />
              : <SignUp appearance={clerkAppearance} />}
          </div>

          {/* Legal */}
          <p className="mt-5 text-sm text-gray-400 leading-relaxed">
            By continuing you agree to our{" "}
            <span className="text-green-600 cursor-pointer hover:underline">Terms</span>
            {" "}and{" "}
            <span className="text-green-600 cursor-pointer hover:underline">Privacy Policy</span>.
          </p>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            New here? Continuing with Google creates your account automatically.
          </p>

        </div>
      </div>

      {/* ── Right panel — animated artwork ── */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden" style={{ background: "#060810" }}>

        <div className="absolute auth-orb-1" style={{ width: 700, height: 700, top: -200, right: -150, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,91,208,0.4) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute auth-orb-2" style={{ width: 600, height: 600, bottom: -150, left: -100, borderRadius: "50%", background: "radial-gradient(circle, rgba(112,194,80,0.3) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute auth-orb-3" style={{ width: 350, height: 350, top: "40%", left: "30%", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,91,208,0.2) 0%, transparent 65%)", filter: "blur(40px)" }} />

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 900" fill="none" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 80 + 40} cy={row * 80 + 40} r="1.5" fill="rgba(255,255,255,0.05)" />
            ))
          )}
          <g style={{ transformOrigin: "560px 160px", animation: "authSpin 40s linear infinite" }}>
            <circle cx="560" cy="160" r="200" stroke="rgba(109,91,208,0.12)" strokeWidth="1" />
            <circle cx="560" cy="160" r="150" stroke="rgba(109,91,208,0.14)" strokeWidth="1" strokeDasharray="8 16" />
          </g>
          <g style={{ transformOrigin: "560px 160px", animation: "authSpinRev 28s linear infinite" }}>
            <circle cx="560" cy="160" r="100" stroke="rgba(109,91,208,0.2)" strokeWidth="1.5" strokeDasharray="4 12" />
          </g>
          <circle cx="560" cy="160" r="45" fill="rgba(109,91,208,0.1)" stroke="rgba(109,91,208,0.35)" strokeWidth="1.5" style={{ animation: "authPulse 4s ease-in-out infinite" }} />
          <circle cx="560" cy="160" r="10" fill="rgba(109,91,208,0.8)" style={{ animation: "authPulse 4s ease-in-out infinite" }} />
          <g style={{ transformOrigin: "100px 730px", animation: "authSpinRev 35s linear infinite" }}>
            <circle cx="100" cy="730" r="160" stroke="rgba(112,194,80,0.1)" strokeWidth="1" />
            <circle cx="100" cy="730" r="110" stroke="rgba(112,194,80,0.13)" strokeWidth="1" strokeDasharray="6 14" />
          </g>
          <circle cx="100" cy="730" r="55" fill="rgba(112,194,80,0.07)" stroke="rgba(112,194,80,0.3)" strokeWidth="1.5" style={{ animation: "authPulse 5s ease-in-out infinite 1s" }} />
          <circle cx="100" cy="730" r="12" fill="rgba(112,194,80,0.7)" style={{ animation: "authPulse 5s ease-in-out infinite 1s" }} />
          <g style={{ animation: "authFloat 6s ease-in-out infinite" }}>
            <polygon points="420,300 480,268 540,300 540,364 480,396 420,364" fill="rgba(109,91,208,0.07)" stroke="rgba(109,91,208,0.3)" strokeWidth="1.5" />
          </g>
          <g style={{ animation: "authFloat 7s ease-in-out infinite 2s" }}>
            <polygon points="150,410 210,378 270,410 270,474 210,506 150,474" fill="rgba(112,194,80,0.06)" stroke="rgba(112,194,80,0.25)" strokeWidth="1.5" />
          </g>
          <line x1="280" y1="0" x2="700" y2="520" stroke="rgba(109,91,208,0.05)" strokeWidth="1" />
          <line x1="0" y1="180" x2="480" y2="900" stroke="rgba(112,194,80,0.04)" strokeWidth="1" />
          <circle cx="320" cy="200" r="5" fill="#70C250" opacity="0.6" style={{ animation: "authFloat 4s ease-in-out infinite 0.5s" }} />
          <circle cx="480" cy="530" r="4" fill="#6D5BD0" opacity="0.7" style={{ animation: "authFloat 5s ease-in-out infinite 1.5s" }} />
          <circle cx="195" cy="355" r="3" fill="#70C250" opacity="0.5" style={{ animation: "authFloat 6s ease-in-out infinite 0.8s" }} />
          <circle cx="610" cy="660" r="5" fill="#6D5BD0" opacity="0.5" style={{ animation: "authFloat 4.5s ease-in-out infinite 2s" }} />
          <path d="M 28 78 L 28 28 L 78 28" stroke="rgba(112,194,80,0.35)" strokeWidth="1.5" fill="none" />
          <path d="M 672 822 L 672 872 L 622 872" stroke="rgba(109,91,208,0.35)" strokeWidth="1.5" fill="none" />
        </svg>

        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-wide">Eplayment · Internal Platform</span>
          </div>
        </div>

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

        <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
          <p className="text-white text-4xl font-bold leading-tight max-w-sm whitespace-pre-line">{rightHeading}</p>
          <p className="text-sm mt-3 max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{rightSub}</p>
        </div>
      </div>
    </main>
  );
}
