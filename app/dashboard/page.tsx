import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import TutorialBanner from "@/components/tutorial-banner";

const goals = [
  {
    href: "/dashboard/tutorial/bots",
    title: "Build a Bot",
    sub: "Discord · Slack · Web",
    color: "#818cf8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="3" />
        <circle cx="9" cy="16" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="16" r="1.5" fill="currentColor" stroke="none" />
        <path d="M9 11V7M12 11V5M15 11V7" />
        <circle cx="9" cy="6" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "/dashboard/tutorial/images",
    title: "Generate Images",
    sub: "DALL-E · Midjourney · Firefly",
    color: "#f472b6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M3 16l5-4 4 3 3-2 6 5" />
        <path d="M16 3l2 2M20 3l-2 2" />
      </svg>
    ),
  },
  {
    href: "/dashboard/tutorial/code",
    title: "Code with AI",
    sub: "Claude Code · Copilot · Cursor",
    color: "#4ade80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="4" x2="12" y2="20" opacity="0.5" />
      </svg>
    ),
  },
  {
    href: "/dashboard/tutorial/howto",
    title: "How-to Guides",
    sub: "Step-by-step for any task",
    color: "#fbbf24",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
];

const tools = [
  { name: "Claude", color: "#e97317", href: "/dashboard/learn-tools", abbr: "C", desc: "Reasoning & code" },
  { name: "Gemini", color: "#4285f4", href: "/dashboard/learn-tools", abbr: "G", desc: "Large context" },
  { name: "ChatGPT", color: "#10a37f", href: "/dashboard/learn-tools", abbr: "GP", desc: "General tasks" },
  { name: "Copilot", color: "#6e40c9", href: "/dashboard/learn-tools", abbr: "Co", desc: "IDE coding" },
];

const tips = [
  { icon: "🔒", text: "Never share passwords or customer data with any AI tool.", color: "#fbbf24" },
  { icon: "✅", text: "Always review AI output before using it in production.", color: "#4ade80" },
  { icon: "💡", text: "Use Claude for complex reasoning, Copilot for quick completions.", color: "#818cf8" },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const name = user?.firstName ?? "there";

  return (
    <div className="p-6 space-y-8 w-full">

      {/* Welcome */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Hey, {name} 👋</h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text3)" }}>What do you want to do with AI today?</p>
        </div>
      </div>

      {/* Tutorial banner — shows once */}
      <TutorialBanner />

      {/* Goal cards */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text3)" }}>Choose a goal</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {goals.map((g) => (
            <Link key={g.href} href={g.href}
              className="group rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${g.color}18` }}>
                <div className="w-6 h-6" style={{ color: g.color }}>
                  {g.icon}
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{g.title}</p>
                <p className="text-[11px] mt-0.5" style={{ color: "var(--text3)" }}>{g.sub}</p>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: g.color }}>
                Start learning
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Tools quick pick */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text3)" }}>Pick your AI tool</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tools.map((t) => (
            <Link key={t.name} href={t.href}
              className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${t.color}20` }}>
                <span style={{ color: t.color, fontSize: 14, fontWeight: 700 }}>{t.abbr}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>{t.name}</p>
                <p className="text-[11px]" style={{ color: "var(--text3)" }}>{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tips strip */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text3)" }}>Quick tips</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-3">
          {tips.map((tip) => (
            <div key={tip.text} className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              <span className="text-lg shrink-0">{tip.icon}</span>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
