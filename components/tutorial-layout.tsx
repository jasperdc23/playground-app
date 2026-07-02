import Link from "next/link";

interface TutorialStep {
  title: string;
  body: string;
  tip?: string;
  illustration: React.ReactNode;
}

interface TutorialLayoutProps {
  title: string;
  subtitle: string;
  color: string;
  steps: TutorialStep[];
  tools: { name: string; emoji: string; href: string }[];
  nextHref?: string;
  nextLabel?: string;
}

export default function TutorialLayout({ title, subtitle, color, steps, tools, nextHref, nextLabel }: TutorialLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">

      {/* Back */}
      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Hub
      </Link>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "#0d1117", border: "1px solid #1a2030" }}>
            <div className="flex gap-5 p-6">
              {/* Number */}
              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: `${color}18`, color }}>
                {i + 1}
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.body}</p>
                {step.tip && (
                  <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)" }}>
                    <span className="text-sm">💡</span>
                    <p className="text-xs text-yellow-300/80 leading-relaxed">{step.tip}</p>
                  </div>
                )}
              </div>

              {/* Illustration */}
              <div className="shrink-0 w-20 h-20 hidden sm:block">
                {step.illustration}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tool picker */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Best tools for this</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <Link key={t.name} href={t.href}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:scale-105"
              style={{ background: "#0d1117", border: "1px solid #1a2030" }}>
              <span>{t.emoji}</span>
              {t.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Security reminder */}
      <div className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
        <span className="text-lg shrink-0">🔒</span>
        <div>
          <p className="text-xs font-semibold text-red-300">Security reminder</p>
          <p className="text-xs text-gray-400 mt-0.5">Never paste API keys, passwords, or customer data into any AI tool. When in doubt, check the <Link href="/dashboard/ai-security" className="text-red-300 underline">Security Guidelines</Link>.</p>
        </div>
      </div>

      {/* Next */}
      {nextHref && (
        <div className="flex justify-end">
          <Link href={nextHref}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all hover:scale-105"
            style={{ background: color }}>
            {nextLabel ?? "Next guide"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

    </div>
  );
}
