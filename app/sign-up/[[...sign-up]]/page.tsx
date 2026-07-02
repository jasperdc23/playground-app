import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex bg-white">

      {/* Left — form */}
      <div className="flex-1 flex flex-col px-10 py-8 max-w-[560px] min-h-screen">

        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/eplayment-logo.svg"
            alt="Eplayment"
            width={160}
            height={22}
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Create Account<br />
            <span className="text-gray-500 font-semibold">as Employee</span>
          </h1>
        </div>

        {/* Clerk form */}
        <div className="flex-1">
          <SignUp
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

      {/* Right — visual panel */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden rounded-l-3xl"
        style={{ background: "linear-gradient(160deg, #1a1040 0%, #2d1b69 40%, #1a3a2a 100%)" }}>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #70C250 0%, transparent 65%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #6D5BD0 0%, transparent 65%)", transform: "translate(-20%, 20%)" }} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <TeamIllustration />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)" }}>
          <p className="text-white text-lg font-semibold leading-snug max-w-sm">
            &ldquo;Join your team on the AI Onboarding platform and start learning the right way.&rdquo;
          </p>
          <p className="text-white/60 text-sm mt-2">Eplayment · Internal Platform</p>
        </div>

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

function TeamIllustration() {
  return (
    <svg viewBox="0 0 400 420" fill="none" className="w-[360px] h-[400px]">
      {/* Person 1 - left */}
      <ellipse cx="110" cy="380" rx="70" ry="10" fill="rgba(255,255,255,0.06)" />
      <rect x="86" y="230" width="48" height="90" rx="14" fill="#6D5BD0" />
      <ellipse cx="110" cy="205" rx="28" ry="30" fill="#f5c9a0" />
      <path d="M86 260 Q70 280 68 320" stroke="#6D5BD0" strokeWidth="14" strokeLinecap="round" />
      <path d="M134 260 Q150 280 152 320" stroke="#6D5BD0" strokeWidth="14" strokeLinecap="round" />
      <path d="M82 200 Q84 168 110 166 Q136 168 138 200 Q132 178 110 177 Q88 178 82 200Z" fill="#2d1a0e" />
      <ellipse cx="100" cy="205" rx="4" ry="4.5" fill="#2d1a0e" />
      <ellipse cx="120" cy="205" rx="4" ry="4.5" fill="#2d1a0e" />
      <path d="M103 218 Q110 225 117 218" stroke="#c07840" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Person 2 - center (main) */}
      <ellipse cx="200" cy="385" rx="80" ry="12" fill="rgba(255,255,255,0.08)" />
      <rect x="170" y="240" width="60" height="100" rx="16" fill="#4ade80" />
      <path d="M163 265 L140 390 Q200 402 260 390 L237 265 Q220 278 200 275 Q180 278 163 265Z" fill="#2d1b69" />
      <rect x="193" y="226" width="14" height="22" rx="6" fill="#f5c9a0" />
      <ellipse cx="200" cy="198" rx="36" ry="40" fill="#f5c9a0" />
      <path d="M164 190 Q167 148 200 146 Q233 148 236 190 Q230 162 200 160 Q170 162 164 190Z" fill="#1a0a00" />
      <path d="M164 190 Q158 208 163 225 Q162 198 164 190Z" fill="#1a0a00" />
      <path d="M236 190 Q242 208 237 225 Q238 198 236 190Z" fill="#1a0a00" />
      <ellipse cx="187" cy="198" rx="5" ry="6" fill="#1a0a00" />
      <ellipse cx="213" cy="198" rx="5" ry="6" fill="#1a0a00" />
      <path d="M191 215 Q200 224 209 215" stroke="#b06030" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M163 270 Q145 295 143 340" stroke="#2d1b69" strokeWidth="18" strokeLinecap="round" />
      <path d="M163 270 Q145 295 143 340" stroke="#f5c9a0" strokeWidth="12" strokeLinecap="round" />
      <path d="M237 270 Q255 295 257 340" stroke="#2d1b69" strokeWidth="18" strokeLinecap="round" />
      <path d="M237 270 Q255 295 257 340" stroke="#f5c9a0" strokeWidth="12" strokeLinecap="round" />

      {/* Person 3 - right */}
      <ellipse cx="290" cy="380" rx="70" ry="10" fill="rgba(255,255,255,0.06)" />
      <rect x="266" y="230" width="48" height="90" rx="14" fill="#70C250" />
      <ellipse cx="290" cy="205" rx="28" ry="30" fill="#f0d0b0" />
      <path d="M266 260 Q250 280 248 320" stroke="#70C250" strokeWidth="14" strokeLinecap="round" />
      <path d="M314 260 Q330 280 332 320" stroke="#70C250" strokeWidth="14" strokeLinecap="round" />
      <path d="M262 192 Q265 162 290 160 Q315 162 318 192 Q312 172 290 171 Q268 172 262 192Z" fill="#5a3010" />
      <ellipse cx="280" cy="206" rx="4" ry="4.5" fill="#2d1a0e" />
      <ellipse cx="300" cy="206" rx="4" ry="4.5" fill="#2d1a0e" />
      <path d="M283 219 Q290 226 297 219" stroke="#c07840" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Stars / sparkles */}
      <g fill="#fbbf24" opacity="0.9">
        <polygon points="60,100 63,110 73,110 65,116 68,126 60,120 52,126 55,116 47,110 57,110" transform="scale(0.7) translate(20,60)" />
        <polygon points="340,80 343,90 353,90 345,96 348,106 340,100 332,106 335,96 327,90 337,90" transform="scale(0.6) translate(230,40)" />
        <polygon points="360,200 362,208 370,208 364,213 366,221 360,216 354,221 356,213 350,208 358,208" transform="scale(0.5) translate(380,200)" />
      </g>

      {/* Floating badge */}
      <rect x="50" y="130" width="120" height="46" rx="14" fill="white" opacity="0.95" />
      <text x="60" y="150" fontSize="9" fill="#374151" fontFamily="sans-serif" fontWeight="700">🚀 AI Onboarding</text>
      <text x="60" y="166" fontSize="8" fill="#6b7280" fontFamily="sans-serif">3 modules available</text>

      <rect x="230" y="120" width="110" height="46" rx="14" fill="#4ade80" opacity="0.95" />
      <text x="240" y="140" fontSize="9" fill="#14532d" fontFamily="sans-serif" fontWeight="700">✅ All set!</text>
      <text x="240" y="155" fontSize="8" fill="#166534" fontFamily="sans-serif">Security certified</text>
    </svg>
  );
}
