import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import TutorialBanner from "@/components/tutorial-banner";

const goals = [
  {
    href: "/dashboard/tutorial/bots",
    title: "Build a Bot",
    sub: "Discord · Slack · Web",
    color: "#818cf8",
    bg: "#13152a",
    border: "rgba(129,140,248,0.2)",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="rgba(129,140,248,0.08)" />
        <rect x="20" y="28" width="40" height="30" rx="8" fill="rgba(129,140,248,0.2)" stroke="#818cf8" strokeWidth="1.5" />
        <circle cx="32" cy="43" r="4" fill="#818cf8" />
        <circle cx="48" cy="43" r="4" fill="#818cf8" />
        <path d="M34 52h12" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 28v-6M40 28v-8M48 28v-6" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="20" r="2.5" fill="#818cf8" />
        <circle cx="40" cy="18" r="2.5" fill="#818cf8" />
        <circle cx="48" cy="20" r="2.5" fill="#818cf8" />
      </svg>
    ),
  },
  {
    href: "/dashboard/tutorial/images",
    title: "Generate Images",
    sub: "DALL-E · Midjourney · Firefly",
    color: "#f472b6",
    bg: "#1a1020",
    border: "rgba(244,114,182,0.2)",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="rgba(244,114,182,0.08)" />
        <rect x="16" y="22" width="48" height="36" rx="6" fill="rgba(244,114,182,0.15)" stroke="#f472b6" strokeWidth="1.5" />
        <circle cx="30" cy="33" r="5" fill="rgba(244,114,182,0.3)" stroke="#f472b6" strokeWidth="1.2" />
        <path d="M16 48l14-10 10 8 8-6 14 10" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 22l6-6M60 22l-2-4" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="54" cy="16" r="3" fill="#f472b6" opacity="0.5" />
      </svg>
    ),
  },
  {
    href: "/dashboard/tutorial/code",
    title: "Code with AI",
    sub: "Claude Code · Copilot · Cursor",
    color: "#4ade80",
    bg: "#0f1a12",
    border: "rgba(74,222,128,0.2)",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="rgba(74,222,128,0.08)" />
        <rect x="14" y="20" width="52" height="40" rx="6" fill="rgba(74,222,128,0.1)" stroke="#4ade80" strokeWidth="1.5" />
        <rect x="14" y="20" width="52" height="10" rx="6" fill="rgba(74,222,128,0.2)" />
        <circle cx="21" cy="25" r="2" fill="#4ade80" opacity="0.6" />
        <circle cx="28" cy="25" r="2" fill="#f59e0b" opacity="0.6" />
        <circle cx="35" cy="25" r="2" fill="#f472b6" opacity="0.6" />
        <path d="M22 40l-6 5 6 5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 38l4 14" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        <path d="M42 40l6 5-6 5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/dashboard/tutorial/howto",
    title: "How-to Guides",
    sub: "Step-by-step for any task",
    color: "#fbbf24",
    bg: "#1a1608",
    border: "rgba(251,191,36,0.2)",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="rgba(251,191,36,0.08)" />
        <rect x="22" y="16" width="36" height="48" rx="6" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" strokeWidth="1.5" />
        <path d="M30 28h20M30 35h20M30 42h14" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="52" cy="56" r="10" fill="#1a1608" stroke="#fbbf24" strokeWidth="1.5" />
        <path d="M52 51v6l3 3" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const tools = [
  { name: "Claude", maker: "Anthropic", color: "#e97317", href: "/dashboard/claude-code", emoji: "🟠", desc: "Reasoning & code" },
  { name: "Gemini", maker: "Google", color: "#4285f4", href: "/dashboard/gemini", emoji: "🔵", desc: "Large context" },
  { name: "ChatGPT", maker: "OpenAI", color: "#10a37f", href: "/dashboard/learn-tools", emoji: "🟢", desc: "General tasks" },
  { name: "Copilot", maker: "GitHub", color: "#6e40c9", href: "/dashboard/copilot", emoji: "🟣", desc: "IDE coding" },
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
    <div className="p-6 space-y-8 max-w-5xl mx-auto">

      {/* Welcome */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Hey, {name} 👋</h1>
          <p className="text-gray-500 text-sm mt-0.5">What do you want to do with AI today?</p>
        </div>
      </div>

      {/* Tutorial banner — shows once */}
      <TutorialBanner />

      {/* Goal cards */}
      <section>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Choose a goal</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {goals.map((g) => (
            <Link key={g.href} href={g.href}
              className="group rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: g.bg, border: `1px solid ${g.border}` }}>
              <div className="w-16 h-16">
                {g.illustration}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{g.title}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{g.sub}</p>
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
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Pick your AI tool</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {tools.map((t) => (
            <Link key={t.name} href={t.href}
              className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-150 hover:scale-[1.02]"
              style={{ background: "#0d1117", border: "1px solid #1a2030" }}>
              <span className="text-2xl">{t.emoji}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                <p className="text-[11px] text-gray-500">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tips strip */}
      <section>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Quick tips</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {tips.map((tip) => (
            <div key={tip.text} className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "#0d1117", border: "1px solid #1a2030" }}>
              <span className="text-lg shrink-0">{tip.icon}</span>
              <p className="text-xs text-gray-400 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
