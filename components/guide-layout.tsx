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
  // Render inline code with backticks
  const parts = line.split(/`([^`]+)`/g);
  return (
    <span key={key}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code
            key={i}
            className="text-xs px-1.5 py-0.5 rounded font-mono"
            style={{ background: "rgba(255,255,255,0.08)", color: "#a5b4fc" }}
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
    <div className="max-w-3xl space-y-8 animate-fade-in">

      {/* Header */}
      <div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors mb-4"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-widest"
            style={{ background: `${badgeColor}18`, color: badgeColor, border: `1px solid ${badgeColor}30` }}
          >
            {badge}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-6"
            style={{
              background: s.warning ? "rgba(251,191,36,0.04)" : "#0d1117",
              border: s.warning ? "1px solid rgba(251,191,36,0.2)" : "1px solid #1f2937",
            }}
          >
            <div className="flex items-start gap-4">
              {/* Step number */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                style={{
                  background: s.warning ? "rgba(251,191,36,0.12)" : "rgba(99,102,241,0.12)",
                  color: s.warning ? "#fbbf24" : "#818cf8",
                }}
              >
                {s.step}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-white text-sm">{s.title}</h3>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      background: s.warning ? "rgba(251,191,36,0.1)" : "rgba(99,102,241,0.1)",
                      color: s.warning ? "#fbbf24" : "#818cf8",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <ul className="space-y-2">
                  {s.content.map((line, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                      <span>{renderLine(line, j)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
