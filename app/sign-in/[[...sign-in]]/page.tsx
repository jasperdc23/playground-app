import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex" style={{ background: "#080c14" }}>

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #0d1520 0%, #0a1a0e 50%, #0d1520 100%)" }}>

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Logo */}
        <div className="relative">
          <EplaymentLogo />
        </div>

        {/* Center content */}
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Internal Platform
          </div>
          <h2 className="text-4xl font-bold text-white leading-tight">
            AI Onboarding<br />
            <span style={{ color: "#4ade80" }}>for Eplayment</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Your centralized guide to AI tools, security guidelines, and responsible adoption across the organization.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Claude Code", "Claude Design", "Copilot", "Gemini", "AI Security", "Governance"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Eplayment. Internal use only.</p>
        </div>
      </div>

      {/* Right panel — auth */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">

        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <EplaymentLogo />
        </div>

        <div className="w-full max-w-md space-y-6">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
            <p className="text-sm text-gray-400 mt-1">Sign in to your Eplayment account</p>
          </div>

          <SignIn />
        </div>
      </div>

    </main>
  );
}

function EplaymentLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Icon mark */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 8h16l-4 5H6V8z" fill="#22c55e" />
        <path d="M6 14h10l-4 5H6v-5z" fill="#22c55e" opacity="0.7" />
        <path d="M6 20h6l-4 5H6v-5z" fill="#22c55e" opacity="0.4" />
        <path d="M10 28l8-10h6l-8 10h-6z" fill="#7c3aed" />
      </svg>
      {/* Wordmark */}
      <div>
        <span className="text-xl font-bold tracking-tight text-white">E<span style={{ color: "#22c55e" }}>PLAYMENT</span></span>
      </div>
    </div>
  );
}
