import Link from "next/link";

const tools = [
  {
    name: "Claude",
    maker: "Anthropic",
    color: "#e97317",
    bg: "rgba(233,115,23,0.07)",
    border: "rgba(233,115,23,0.2)",
    emoji: "🟠",
    tagline: "Best for reasoning, coding, and long-context analysis.",
    strengths: ["Reasoning & analysis", "Code generation & review", "Long documents (200k tokens)", "Tool use & agents", "Safety-focused by design"],
    bestFor: "Developers, analysts, writers — daily workhorse for complex tasks.",
    eplaymentTool: "/dashboard/claude-code",
    eplaymentLabel: "Setup Claude Code →",
  },
  {
    name: "Gemini",
    maker: "Google",
    color: "#4285f4",
    bg: "rgba(66,133,244,0.07)",
    border: "rgba(66,133,244,0.2)",
    emoji: "🔵",
    tagline: "Best for massive context windows and Google Workspace integration.",
    strengths: ["1M+ token context window", "Multimodal (images, video, audio)", "Google Docs / Drive integration", "Real-time web search", "Code execution"],
    bestFor: "Analyzing large files, processing media, anything in the Google ecosystem.",
    eplaymentTool: "/dashboard/gemini",
    eplaymentLabel: "Setup Gemini →",
  },
  {
    name: "ChatGPT",
    maker: "OpenAI",
    color: "#10a37f",
    bg: "rgba(16,163,127,0.07)",
    border: "rgba(16,163,127,0.2)",
    emoji: "🟢",
    tagline: "Most widely used AI assistant — great for general tasks and non-technical users.",
    strengths: ["General-purpose assistant", "Image generation (DALL-E)", "GPT-4o vision & voice", "Broad plugin ecosystem", "Familiar for most users"],
    bestFor: "Non-technical employees, quick drafts, image creation, general Q&A.",
    eplaymentTool: null,
    eplaymentLabel: null,
  },
  {
    name: "GitHub Copilot",
    maker: "GitHub / OpenAI",
    color: "#6e40c9",
    bg: "rgba(110,64,201,0.07)",
    border: "rgba(110,64,201,0.2)",
    emoji: "🟣",
    tagline: "Best AI coding assistant — lives inside your IDE with inline completions.",
    strengths: ["Inline code completions", "VS Code & JetBrains native", "Copilot Chat (/fix, /explain, /tests)", "PR summaries on GitHub", "Org-level admin controls"],
    bestFor: "Developers who want AI inside their editor without switching context.",
    eplaymentTool: "/dashboard/copilot",
    eplaymentLabel: "Setup Copilot →",
  },
  {
    name: "Perplexity",
    maker: "Perplexity AI",
    color: "#20b2aa",
    bg: "rgba(32,178,170,0.07)",
    border: "rgba(32,178,170,0.2)",
    emoji: "🩵",
    tagline: "AI-powered search with real-time citations — like a smarter Google.",
    strengths: ["Real-time web search", "Cited sources on every answer", "Research & fact-checking", "Follows news and trends", "Simple for non-technical users"],
    bestFor: "Quick research, fact-checking, following industry trends.",
    eplaymentTool: null,
    eplaymentLabel: null,
  },
  {
    name: "Cursor / Windsurf",
    maker: "Anysphere / Codeium",
    color: "#f43f5e",
    bg: "rgba(244,63,94,0.07)",
    border: "rgba(244,63,94,0.2)",
    emoji: "🔴",
    tagline: "AI-native code editors — entire IDE built around AI pair programming.",
    strengths: ["Composer: multi-file edits", "Codebase-aware context", "Tab to accept suggestions", "Built-in chat in editor", "Works with Claude & GPT-4"],
    bestFor: "Developers who want a fully AI-integrated coding environment.",
    eplaymentTool: null,
    eplaymentLabel: null,
  },
];

const comparison = [
  { feature: "Best for coding", claude: "✅", gemini: "✅", chatgpt: "✅", copilot: "🥇 IDE native" },
  { feature: "Large file analysis", claude: "✅ 200k", gemini: "🥇 1M+", chatgpt: "⚠️ 128k", copilot: "❌" },
  { feature: "Real-time web search", claude: "⚠️ Via tools", gemini: "✅", chatgpt: "✅", copilot: "❌" },
  { feature: "Image input", claude: "✅", gemini: "✅", chatgpt: "✅", copilot: "⚠️" },
  { feature: "API / SDK available", claude: "✅", gemini: "✅", chatgpt: "✅", copilot: "⚠️ Limited" },
  { feature: "Eplayment approved", claude: "✅", gemini: "✅ Work account", chatgpt: "✅ Pro", copilot: "✅ Org seat" },
];

export default function LearnToolsPage() {
  return (
    <div className="max-w-5xl space-y-10">

      {/* Header */}
      <div>
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors mb-4">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-widest"
            style={{ background: "rgba(232,121,249,0.1)", color: "#e879f9", border: "1px solid rgba(232,121,249,0.2)" }}>
            All Employees
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white">Learn AI Tools</h1>
        <p className="text-sm text-gray-400 mt-1">Compare Claude, Gemini, ChatGPT, Copilot, and more — know which tool to use for each job.</p>
      </div>

      {/* Tool cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="rounded-2xl p-5 flex flex-col gap-4"
            style={{ background: tool.bg, border: `1px solid ${tool.border}` }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{tool.emoji}</span>
                  <h3 className="font-bold text-white">{tool.name}</h3>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">by {tool.maker}</p>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">{tool.tagline}</p>
            <ul className="space-y-1.5">
              {tool.strengths.map((s) => (
                <li key={s} className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: tool.color }} />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2 space-y-2">
              <p className="text-xs text-gray-500 leading-relaxed"><span className="text-gray-400 font-medium">Best for: </span>{tool.bestFor}</p>
              {tool.eplaymentTool && (
                <Link href={tool.eplaymentTool}
                  className="inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                  style={{ color: tool.color }}>
                  {tool.eplaymentLabel}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">Quick Comparison</h2>
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #1f2937" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#0d1117", borderBottom: "1px solid #1f2937" }}>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Feature</th>
                  {["Claude", "Gemini", "ChatGPT", "Copilot"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} style={{ borderTop: i === 0 ? "none" : "1px solid #1f2937", background: i % 2 === 0 ? "#080c14" : "#0a0f18" }}>
                    <td className="px-4 py-3 text-gray-300 font-medium text-xs">{row.feature}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{row.claude}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{row.gemini}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{row.chatgpt}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{row.copilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
