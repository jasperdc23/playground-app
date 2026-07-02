import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const testimonials = [
  {
    quote: "Eplayment's AI Onboarding platform helped me get up to speed with Claude Code in a single afternoon. It's genuinely changed how I work.",
    name: "Maria Santos",
    role: "Frontend Developer at Eplayment",
  },
  {
    quote: "The security guidelines saved our team from a major data leak. Every employee should go through this before using any AI tool.",
    name: "James Reyes",
    role: "Backend Engineer at Eplayment",
  },
  {
    quote: "I'm not a developer but the How-to Guides made it so easy to use AI for my reports and presentations. Highly recommended.",
    name: "Anna Cruz",
    role: "Marketing Manager at Eplayment",
  },
];

export default function SignInPage() {
  return (
    <main className="min-h-screen flex bg-white">

      {/* Left — form */}
      <div className="flex-1 flex flex-col px-10 py-8 max-w-[560px] min-h-screen">

        {/* Logo */}
        <div className="mb-10 flex items-center gap-3">
          <Image src="/ep-logomark.svg" alt="Eplayment" width={36} height={36} className="object-contain" />
          <Image src="/eplayment-logo.svg" alt="Eplayment" width={130} height={18} className="object-contain" style={{ filter: "invert(1) brightness(0)" }} />
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Sign In<br />
            <span className="text-gray-500 font-semibold">as Employee</span>
          </h1>
        </div>

        {/* Clerk form */}
        <div className="flex-1">
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none p-0 bg-transparent border-0 w-full",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton:
                  "border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl h-12 font-medium",
                socialButtonsBlockButtonText: "text-gray-700 font-medium",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-400 text-sm",
                formFieldLabel: "text-gray-700 font-semibold text-sm mb-1",
                formFieldInput:
                  "border border-gray-200 rounded-xl h-12 text-gray-900 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-gray-50 placeholder:text-gray-400",
                formButtonPrimary:
                  "bg-indigo-600 hover:bg-indigo-500 text-white font-semibold h-12 rounded-xl text-sm w-full shadow-md shadow-indigo-200 transition-all",
                footerActionLink: "text-indigo-600 font-semibold hover:text-indigo-500",
                footerActionText: "text-gray-500",
                identityPreviewText: "text-gray-800",
                identityPreviewEditButtonIcon: "text-indigo-500",
                formFieldSuccessText: "text-green-600",
                formFieldErrorText: "text-red-500 text-xs",
                alertText: "text-gray-700",
                otpCodeFieldInput: "border-gray-200 rounded-lg",
                formResendCodeLink: "text-indigo-600",
              },
            }}
          />
        </div>

        {/* Help note */}
        <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <p className="text-sm text-gray-500 leading-relaxed">
            If you have trouble accessing your account, kindly contact your{" "}
            <span className="font-semibold text-gray-700">admin company account</span>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center gap-5">
          {["About", "Terms & Conditions", "Privacy Policy"].map((l) => (
            <span key={l} className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Right — photo panel */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden rounded-l-3xl"
        style={{ background: "linear-gradient(160deg, #1a1040 0%, #2d1b69 40%, #1a3a2a 100%)" }}>

        {/* Gradient overlay blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #70C250 0%, transparent 65%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #6D5BD0 0%, transparent 65%)", transform: "translate(-20%, 20%)" }} />
        </div>

        {/* Employee illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <EmployeeIllustration />
        </div>

        {/* Bottom testimonial */}
        <div className="absolute bottom-0 left-0 right-0 p-8"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Top badge */}
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-xs font-semibold">AI Onboarding Platform</span>
          </div>
        </div>
      </div>

    </main>
  );
}

function EmployeeIllustration() {
  return (
    <svg viewBox="0 0 400 500" fill="none" className="w-[380px] h-[460px]" xmlns="http://www.w3.org/2000/svg">
      {/* Desk / surface */}
      <ellipse cx="200" cy="430" rx="160" ry="18" fill="rgba(255,255,255,0.08)" />

      {/* Chair back */}
      <rect x="148" y="280" width="104" height="130" rx="16" fill="#1e1060" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

      {/* Body */}
      <rect x="155" y="230" width="90" height="100" rx="20" fill="#f0c8a0" />

      {/* Shirt */}
      <path d="M148 290 Q155 270 200 265 Q245 270 252 290 L258 380 Q200 390 142 380 Z" fill="#4ade80" />
      {/* Shirt collar */}
      <path d="M185 265 L200 285 L215 265" stroke="white" strokeWidth="2" fill="none" />

      {/* Blazer */}
      <path d="M148 295 L130 400 Q165 412 200 410 Q235 412 270 400 L252 295 Q235 310 215 305 L200 330 L185 305 Q165 310 148 295Z" fill="#2d1b69" />
      <path d="M148 295 L160 350 L185 305" fill="#251554" />
      <path d="M252 295 L240 350 L215 305" fill="#251554" />

      {/* Neck */}
      <rect x="190" y="220" width="20" height="30" rx="8" fill="#f0c8a0" />

      {/* Head */}
      <ellipse cx="200" cy="185" rx="52" ry="58" fill="#f0c8a0" />

      {/* Hair */}
      <path d="M148 175 Q152 110 200 108 Q248 110 252 175 Q245 140 200 138 Q155 140 148 175Z" fill="#2d1a0e" />
      <path d="M148 175 Q144 195 150 210 Q148 185 148 175Z" fill="#2d1a0e" />
      <path d="M252 175 Q256 195 250 210 Q252 185 252 175Z" fill="#2d1a0e" />
      {/* Long hair sides */}
      <path d="M148 175 Q136 220 142 260 Q148 200 155 185Z" fill="#2d1a0e" />
      <path d="M252 175 Q264 220 258 260 Q252 200 245 185Z" fill="#2d1a0e" />

      {/* Glasses */}
      <rect x="166" y="183" width="28" height="18" rx="8" fill="none" stroke="#555" strokeWidth="2.5" />
      <rect x="206" y="183" width="28" height="18" rx="8" fill="none" stroke="#555" strokeWidth="2.5" />
      <path d="M194 192 H206" stroke="#555" strokeWidth="2" />
      <path d="M162 192 Q158 188 155 190" stroke="#555" strokeWidth="2" strokeLinecap="round" />
      <path d="M238 192 Q242 188 245 190" stroke="#555" strokeWidth="2" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="180" cy="192" rx="5" ry="6" fill="#2d1a0e" />
      <ellipse cx="220" cy="192" rx="5" ry="6" fill="#2d1a0e" />
      <ellipse cx="182" cy="190" rx="2" ry="2.5" fill="white" opacity="0.5" />
      <ellipse cx="222" cy="190" rx="2" ry="2.5" fill="white" opacity="0.5" />

      {/* Smile */}
      <path d="M186 210 Q200 222 214 210" stroke="#c07840" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Arms */}
      {/* Left arm */}
      <path d="M155 300 Q120 330 118 370" stroke="#2d1b69" strokeWidth="22" strokeLinecap="round" />
      <path d="M155 300 Q120 330 118 370" stroke="#f0c8a0" strokeWidth="16" strokeLinecap="round" />
      {/* Right arm */}
      <path d="M245 300 Q280 330 282 370" stroke="#2d1b69" strokeWidth="22" strokeLinecap="round" />
      <path d="M245 300 Q280 330 282 370" stroke="#f0c8a0" strokeWidth="16" strokeLinecap="round" />

      {/* Laptop */}
      <rect x="130" y="360" width="140" height="90" rx="8" fill="#1a1040" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <rect x="136" y="366" width="128" height="78" rx="5" fill="#0d0825" />
      {/* Screen content */}
      <rect x="144" y="373" width="60" height="6" rx="3" fill="#4ade80" opacity="0.8" />
      <rect x="144" y="383" width="90" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="144" y="391" width="75" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="144" y="399" width="85" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="144" y="407" width="50" height="4" rx="2" fill="#6D5BD0" opacity="0.8" />
      {/* Code lines right side */}
      <rect x="220" y="373" width="36" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="220" y="381" width="28" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="220" y="389" width="34" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      {/* Laptop base */}
      <rect x="118" y="448" width="164" height="10" rx="5" fill="#0d0825" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Floating bubbles */}
      <g opacity="0.9">
        <rect x="270" y="150" width="110" height="44" rx="12" fill="white" />
        <text x="278" y="167" fontSize="9" fill="#374151" fontFamily="sans-serif" fontWeight="600">🤖 AI Assistant</text>
        <text x="278" y="181" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Ready to help!</text>
      </g>
      <g opacity="0.85">
        <rect x="18" y="220" width="100" height="40" rx="12" fill="#4ade80" />
        <text x="26" y="236" fontSize="8" fill="#14532d" fontFamily="sans-serif" fontWeight="700">✅ Module done!</text>
        <text x="26" y="250" fontSize="7.5" fill="#166534" fontFamily="sans-serif">Claude Code Setup</text>
      </g>
      <g opacity="0.8">
        <rect x="282" y="230" width="96" height="40" rx="12" fill="#6D5BD0" />
        <text x="290" y="246" fontSize="8" fill="white" fontFamily="sans-serif" fontWeight="600">🔒 Secure</text>
        <text x="290" y="259" fontSize="7.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">AI Guidelines</text>
      </g>
    </svg>
  );
}

function TestimonialCarousel({ testimonials }: { testimonials: typeof testimonials }) {
  return (
    <div>
      <p className="text-white text-lg font-semibold leading-snug max-w-sm">
        &ldquo;{testimonials[0].quote}&rdquo;
      </p>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-sm">{testimonials[0].name}</p>
          <p className="text-white/60 text-xs">{testimonials[0].role}</p>
        </div>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
              <span className="text-white/70 text-xs">{i === 0 ? "←" : "→"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
