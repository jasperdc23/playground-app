import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const modules = [
  {
    href: "/dashboard/ai-guidelines",
    title: "AI Guidelines",
    desc: "Company-wide policies for using AI tools responsibly — what's allowed, what's not, and best practices for every role.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "#22c55e",
    bg: "rgba(34,197,94,0.07)",
    border: "rgba(34,197,94,0.2)",
    glow: "rgba(34,197,94,0.15)",
    steps: ["Usage policies", "Do's and Don'ts", "Data handling", "Approved tools"],
  },
  {
    href: "/dashboard/ai-security",
    title: "AI Adoption Security",
    desc: "Security standards for AI integration — data classification, prompt injection risks, credential safety, and audit compliance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.2)",
    glow: "rgba(245,158,11,0.15)",
    steps: ["Data classification", "Prompt injection", "Credential safety", "Incident reporting"],
  },
  {
    href: "/dashboard/setup-bots",
    title: "How to Setup Bots",
    desc: "Step-by-step guide to building and deploying Claude-powered internal bots using the Anthropic SDK, tool use, and prompt caching.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "#818cf8",
    bg: "rgba(129,140,248,0.07)",
    border: "rgba(129,140,248,0.2)",
    glow: "rgba(129,140,248,0.15)",
    steps: ["Get API keys", "Install SDK", "Build with tool use", "Deploy to Slack/web"],
  },
  {
    href: "/dashboard/learn-tools",
    title: "Learn AI Tools",
    desc: "Compare and learn Claude, Gemini, ChatGPT, GitHub Copilot, and more — know which tool to use for each task.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "#e879f9",
    bg: "rgba(232,121,249,0.07)",
    border: "rgba(232,121,249,0.2)",
    glow: "rgba(232,121,249,0.15)",
    steps: ["Claude (Anthropic)", "Gemini (Google)", "ChatGPT (OpenAI)", "GitHub Copilot"],
  },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const name = user?.firstName ?? "there";

  return (
    <div className="max-w-5xl space-y-10">

      {/* Welcome */}
      <div className="space-y-1">
        <p className="text-sm font-medium" style={{ color: "#22c55e" }}>Good day, {name} 👋</p>
        <h1 className="text-3xl font-bold text-white">AI Learning Dashboard</h1>
        <p className="text-gray-400 text-sm">Pick a module below to get started with AI at Eplayment.</p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Modules", value: "4", color: "#22c55e" },
          { label: "AI Tools Covered", value: "6+", color: "#818cf8" },
          { label: "Security Topics", value: "6", color: "#f59e0b" },
          { label: "Setup Guides", value: "12+", color: "#e879f9" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl p-4" style={{ background: "#0d1117", border: "1px solid #1f2937" }}>
            <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Module blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {modules.map((mod) => (
          <Link
            key={mod.href}
            href={mod.href}
            className="group relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: mod.bg, border: `1px solid ${mod.border}` }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: `0 0 40px ${mod.glow}` }} />

            {/* Icon + arrow */}
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${mod.color}18`, color: mod.color }}>
                {mod.icon}
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                style={{ background: `${mod.color}20`, color: mod.color }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-bold text-white">{mod.title}</h3>
              <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{mod.desc}</p>
            </div>

            {/* Topic pills */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {mod.steps.map((s) => (
                <span key={s} className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                  style={{ background: `${mod.color}12`, color: mod.color, border: `1px solid ${mod.color}25` }}>
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
