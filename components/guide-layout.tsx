import Link from "next/link";

interface Step {
  step: string;
  title: string;
  content: string[];
  tag: string;
  warning?: boolean;
}

interface GuideLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  steps: Step[];
}

function renderLine(line: string, key: number) {
  const parts = line.split(/`([^`]+)`/g);
  return (
    <span key={key}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code
            key={i}
            className="text-xs px-1.5 py-0.5 rounded font-mono"
            style={{ background: "var(--bg3)", color: "#6D5BD0", border: "1px solid var(--border)" }}
          >
            {part}
          </code>
        ) : (
          <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
        )
      )}
    </span>
  );
}

export default function GuideLayout({ title, subtitle, badge, badgeColor, steps }: GuideLayoutProps) {
  return (
    <div className="w-full animate-fade-in">
    <div className="flex gap-8">
    <div className="flex-1 min-w-0 space-y-8">

      {/* Header */}
      <div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs transition-colors mb-4"
          style={{ color: "var(--text3)" }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-widest"
            style={{ background: `${badgeColor}18`, color: badgeColor, border: `1px solid ${badgeColor}30` }}
          >
            {badge}
          </span>
        </div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>{title}</h1>
        <p className="text-sm mt-1" style={{ color: "var(--text3)" }}>{subtitle}</p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-6"
            style={{
              background: s.warning ? "rgba(251,191,36,0.05)" : "var(--bg2)",
              border: s.warning ? "1px solid rgba(251,191,36,0.25)" : "1px solid var(--border)",
            }}
          >
            <div className="flex items-start gap-4">
              {/* Step number */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                style={{
                  background: s.warning ? "rgba(251,191,36,0.12)" : "rgba(109,91,208,0.12)",
                  color: s.warning ? "#d97706" : "#6D5BD0",
                }}
              >
                {s.step}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>{s.title}</h3>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      background: s.warning ? "rgba(251,191,36,0.1)" : "rgba(109,91,208,0.1)",
                      color: s.warning ? "#d97706" : "#6D5BD0",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <ul className="space-y-2">
                  {s.content.map((line, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--text3)" }} />
                      <span>{renderLine(line, j)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>{/* end flex-1 */}

    {/* Right sidebar — quick nav + tips */}
    <aside className="hidden xl:flex flex-col gap-4 w-64 shrink-0 pt-[72px]">

      {/* Steps index */}
      <div className="rounded-2xl p-4 sticky top-6" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text3)" }}>Steps</p>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg"
              style={{ background: "transparent" }}>
              <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{ background: s.warning ? "rgba(251,191,36,0.12)" : "rgba(109,91,208,0.12)", color: s.warning ? "#d97706" : "#6D5BD0" }}>
                {i + 1}
              </span>
              <span className="text-xs truncate" style={{ color: "var(--text2)" }}>{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security tip */}
      <div className="rounded-2xl p-4" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">🔒</span>
          <p className="text-xs font-semibold text-red-500">Security reminder</p>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>
          Never paste API keys, passwords, or customer data into any AI tool.
        </p>
        <Link href="/dashboard/ai-security" className="text-xs font-semibold text-red-500 mt-2 inline-block hover:underline">
          Read security guide →
        </Link>
      </div>

      {/* Ask AI */}
      <div className="rounded-2xl p-4" style={{ background: "rgba(112,194,80,0.07)", border: "1px solid rgba(112,194,80,0.2)" }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">💬</span>
          <p className="text-xs font-semibold" style={{ color: "#70C250" }}>Need help?</p>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>
          Ask the AI assistant at the bottom-right for step-by-step help on anything in this guide.
        </p>
      </div>

    </aside>

    </div>{/* end flex row */}
    </div>
  );
}
