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
    <div className="w-full p-6">
    <div className="flex gap-8">
    <div className="flex-1 min-w-0 space-y-8">

      {/* Back */}
      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs transition-colors"
        style={{ color: "var(--text3)" }}>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Hub
      </Link>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>{title}</h1>
        <p className="text-sm" style={{ color: "var(--text3)" }}>{subtitle}</p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="rounded-2xl overflow-hidden"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
            <div className="flex gap-5 p-6">
              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: `${color}18`, color }}>
                {i + 1}
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{step.body}</p>
                {step.tip && (
                  <div className="flex items-start gap-2 p-3 rounded-xl"
                    style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)" }}>
                    <span className="text-sm">💡</span>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>{step.tip}</p>
                  </div>
                )}
              </div>

              <div className="shrink-0 w-20 h-20 hidden sm:block">
                {step.illustration}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tool picker */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text3)" }}>Best tools for this</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <Link key={t.name} href={t.href}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text)" }}>
              <span>{t.emoji}</span>
              {t.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Security reminder */}
      <div className="flex items-start gap-3 p-4 rounded-2xl"
        style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
        <span className="text-lg shrink-0">🔒</span>
        <div>
          <p className="text-xs font-semibold text-red-500">Security reminder</p>
          <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text2)" }}>
            Never paste API keys, passwords, or customer data into any AI tool. When in doubt, check the{" "}
            <Link href="/dashboard/ai-security" className="text-red-500 underline">Security Guidelines</Link>.
          </p>
        </div>
      </div>

      {/* Next */}
      {nextHref && (
        <div className="flex justify-end">
          <Link href={nextHref}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: color }}>
            {nextLabel ?? "Next guide"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

    </div>{/* end flex-1 */}

    {/* Right sidebar */}
    <aside className="hidden xl:flex flex-col gap-4 w-60 shrink-0 pt-16">

      {/* Tools */}
      <div className="rounded-2xl p-4 sticky top-6" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text3)" }}>Recommended tools</p>
        <div className="space-y-1">
          {tools.map((t) => (
            <Link key={t.name} href={t.href}
              className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-colors hover:bg-[var(--bg3)]">
              <span className="text-base">{t.emoji}</span>
              <span className="text-xs font-medium" style={{ color: "var(--text2)" }}>{t.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Ask AI */}
      <div className="rounded-2xl p-4" style={{ background: "rgba(112,194,80,0.07)", border: "1px solid rgba(112,194,80,0.2)" }}>
        <p className="text-xs font-semibold mb-1" style={{ color: "#70C250" }}>💬 Need help?</p>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>
          Ask the AI assistant at the bottom right for step-by-step help.
        </p>
      </div>

    </aside>

    </div>{/* end flex row */}
    </div>
  );
}
