import Link from "next/link";

/* ── Accurate Brand Logos ─────────────────────────────────────── */
function ClaudeLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="20" fill="#CC785C"/>
      <path d="M23.42 26.69h-1.8l-1.04-2.92h-4.72l-1.04 2.92h-1.75l4.19-11.38h1.97l4.19 11.38zm-3.32-4.38l-1.8-5.04-1.8 5.04h3.6z" fill="white"/>
      <path d="M25.6 13.31h1.72v9.32c0 2.5-1.2 3.87-3.5 4.17l-.25-1.44c1.42-.28 2.03-1.1 2.03-2.77v-9.28z" fill="white"/>
    </svg>
  );
}

function GeminiLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="20" fill="white"/>
      <defs>
        <linearGradient id="g1" x1="20" y1="5" x2="20" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1AA3FF"/>
          <stop offset="100%" stopColor="#0064E0"/>
        </linearGradient>
      </defs>
      {/* Gemini 4-pointed star */}
      <path d="M20 5C20 5 22.5 14.5 22.5 20C22.5 25.5 20 35 20 35C20 35 17.5 25.5 17.5 20C17.5 14.5 20 5 20 5Z" fill="url(#g1)"/>
      <path d="M5 20C5 20 14.5 17.5 20 17.5C25.5 17.5 35 20 35 20C35 20 25.5 22.5 20 22.5C14.5 22.5 5 20 5 20Z" fill="url(#g1)"/>
    </svg>
  );
}

function OpenAILogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="20" fill="#000000"/>
      <path d="M28.5 16.8a6.5 6.5 0 00-.4-5.3 6.7 6.7 0 00-7.2-3.2 6.6 6.6 0 00-4.4-2 6.7 6.7 0 00-6.2 4.6 6.6 6.6 0 00-2.3 3.2A6.7 6.7 0 009 21.5a6.6 6.6 0 00.4 5.3 6.7 6.7 0 007.2 3.2 6.5 6.5 0 004.4 1.9 6.7 6.7 0 006.2-4.6 6.6 6.6 0 002.3-3.2 6.7 6.7 0 00-1-7.3zM20 25a3.9 3.9 0 01-2.4-.8v.1l3.9-2.2a.7.7 0 00.3-.6v-5.5l1.7 1v.1A3.9 3.9 0 0120 25zm-7.7-3.6a3.9 3.9 0 01-.4-2.6v.1l3.9 2.2a.7.7 0 00.6 0l4.8-2.8v1.9l-3.9 2.2a3.9 3.9 0 01-5-1zm.5-8.5a3.9 3.9 0 012.4-.8v4.6a.7.7 0 00.3.6l4.8 2.8-1.7 1h-.1l-3.9-2.2a3.9 3.9 0 01-1.8-6zm12.4 3.5l-3.9-2.2a.7.7 0 00-.6 0l-4.8 2.8v-1.9l3.9-2.2a3.9 3.9 0 015.4 4.5zm-1 5.3v-4.6a.7.7 0 00-.3-.6L20 14.3l1.7-1h.1l3.9 2.2a3.9 3.9 0 01-.5 6.2z" fill="white"/>
    </svg>
  );
}

function CopilotLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <defs>
        <linearGradient id="cop1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#cop1)"/>
      {/* Copilot icon - simplified headset/visor */}
      <path d="M20 10C14.5 10 10 14.5 10 20c0 2.8 1.1 5.3 2.9 7.1.4.4.9.5 1.4.3l1.8-.7c.6-.2 1-.8 1-1.4v-1.5c0-.5-.3-1-.8-1.2l-1-.5c-.5-.2-.9-.7-.9-1.3 0-3.1 2.5-5.6 5.6-5.6s5.6 2.5 5.6 5.6c0 .6-.3 1.1-.8 1.3l-1 .5c-.5.2-.8.7-.8 1.2v1.5c0 .6.4 1.2 1 1.4l1.8.7c.5.2 1 .1 1.4-.3A10 10 0 0030 20c0-5.5-4.5-10-10-10z" fill="white" opacity="0.9"/>
      <rect x="16" y="24" width="8" height="2" rx="1" fill="white" opacity="0.7"/>
    </svg>
  );
}

function PerplexityLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="20" fill="#1C1C28"/>
      {/* Perplexity P-like mark */}
      <path d="M13 10h7.5l7 5.5-7 5.5H13V10z" fill="none" stroke="#20BDBE" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M13 21h7.5l7 5.5-7 5.5H13V21z" fill="none" stroke="#20BDBE" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="13" y1="10" x2="13" y2="32" stroke="#20BDBE" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20.5" y1="15.5" x2="20.5" y2="26.5" stroke="#20BDBE" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CursorLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="20" fill="#151515"/>
      {/* Cursor logo - stylized cursor/C shape */}
      <path d="M27 14L13 20l14 6V14z" fill="white"/>
      <path d="M21 20l-8 3.5" stroke="#151515" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="3" fill="#F43F5E"/>
    </svg>
  );
}

const tools = [
  {
    name: "Claude",
    maker: "Anthropic",
    Logo: ClaudeLogo,
    color: "#CC785C",
    bg: "rgba(204,120,92,0.08)",
    border: "rgba(204,120,92,0.2)",
    tagline: "Best for reasoning, coding, and long-context analysis.",
    strengths: ["Reasoning & analysis", "Code generation & review", "Long documents (200k tokens)", "Tool use & agents", "Safety-focused by design"],
    bestFor: "Developers, analysts, writers — daily workhorse for complex tasks.",
    eplaymentTool: "/dashboard/claude-code",
    eplaymentLabel: "Setup Claude Code",
  },
  {
    name: "Gemini",
    maker: "Google",
    Logo: GeminiLogo,
    color: "#1A73E8",
    bg: "rgba(26,115,232,0.07)",
    border: "rgba(26,115,232,0.18)",
    tagline: "Best for massive context windows and Google Workspace integration.",
    strengths: ["1M+ token context window", "Multimodal (images, video, audio)", "Google Docs / Drive integration", "Real-time web search", "Code execution"],
    bestFor: "Analyzing large files, processing media, anything in the Google ecosystem.",
    eplaymentTool: "/dashboard/gemini",
    eplaymentLabel: "Setup Gemini",
  },
  {
    name: "ChatGPT",
    maker: "OpenAI",
    Logo: OpenAILogo,
    color: "#10A37F",
    bg: "rgba(16,163,127,0.07)",
    border: "rgba(16,163,127,0.18)",
    tagline: "Most widely used AI assistant — great for general tasks and non-technical users.",
    strengths: ["General-purpose assistant", "Image generation (DALL-E)", "GPT-4o vision & voice", "Broad plugin ecosystem", "Familiar for most users"],
    bestFor: "Non-technical employees, quick drafts, image creation, general Q&A.",
    eplaymentTool: null,
    eplaymentLabel: null,
  },
  {
    name: "GitHub Copilot",
    maker: "GitHub / OpenAI",
    Logo: CopilotLogo,
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.07)",
    border: "rgba(124,58,237,0.18)",
    tagline: "Best AI coding assistant — lives inside your IDE with inline completions.",
    strengths: ["Inline code completions", "VS Code & JetBrains native", "Copilot Chat (/fix, /explain, /tests)", "PR summaries on GitHub", "Org-level admin controls"],
    bestFor: "Developers who want AI inside their editor without switching context.",
    eplaymentTool: "/dashboard/copilot",
    eplaymentLabel: "Setup Copilot",
  },
  {
    name: "Perplexity",
    maker: "Perplexity AI",
    Logo: PerplexityLogo,
    color: "#20BDBE",
    bg: "rgba(32,189,190,0.07)",
    border: "rgba(32,189,190,0.18)",
    tagline: "AI-powered search with real-time citations — like a smarter Google.",
    strengths: ["Real-time web search", "Cited sources on every answer", "Research & fact-checking", "Follows news and trends", "Simple for non-technical users"],
    bestFor: "Quick research, fact-checking, following industry trends.",
    eplaymentTool: null,
    eplaymentLabel: null,
  },
  {
    name: "Cursor / Windsurf",
    maker: "Anysphere / Codeium",
    Logo: CursorLogo,
    color: "#F43F5E",
    bg: "rgba(244,63,94,0.07)",
    border: "rgba(244,63,94,0.18)",
    tagline: "AI-native code editors — entire IDE built around AI pair programming.",
    strengths: ["Composer: multi-file edits", "Codebase-aware context", "Tab to accept suggestions", "Built-in chat in editor", "Works with Claude & GPT-4"],
    bestFor: "Developers who want a fully AI-integrated coding environment.",
    eplaymentTool: null,
    eplaymentLabel: null,
  },
];

const comparison = [
  { feature: "Best for coding",       claude: "✅",      gemini: "✅",           chatgpt: "✅",    copilot: "🥇 IDE native" },
  { feature: "Large file analysis",   claude: "✅ 200k", gemini: "🥇 1M+",       chatgpt: "⚠️ 128k", copilot: "❌" },
  { feature: "Real-time web search",  claude: "⚠️ MCP",  gemini: "✅",           chatgpt: "✅",    copilot: "❌" },
  { feature: "Image input",           claude: "✅",      gemini: "✅",           chatgpt: "✅",    copilot: "⚠️" },
  { feature: "API / SDK",             claude: "✅",      gemini: "✅",           chatgpt: "✅",    copilot: "⚠️" },
  { feature: "Eplayment approved",    claude: "✅",      gemini: "✅ Work acc.", chatgpt: "✅ Pro", copilot: "✅ Org seat" },
];

export default function LearnToolsPage() {
  return (
    <div className="w-full space-y-8 animate-fade-in">

      {/* Header */}
      <div>
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs mb-4 transition-colors"
          style={{ color: "var(--text3)" }}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(109,91,208,0.12)", color: "#9b80f0", border: "1px solid rgba(109,91,208,0.2)" }}>
            All Employees
          </span>
        </div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Learn AI Tools</h1>
        <p className="text-sm mt-1" style={{ color: "var(--text2)" }}>
          Compare Claude, Gemini, ChatGPT, Copilot, and more — know which tool to use for each job.
        </p>
      </div>

      {/* Tool cards — responsive grid, fills full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: "var(--bg2)", border: `1px solid ${tool.border}` }}>

            <div className="flex items-center gap-3">
              <tool.Logo />
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{tool.name}</p>
                <p className="text-xs" style={{ color: "var(--text3)" }}>by {tool.maker}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>{tool.tagline}</p>

            <ul className="space-y-1.5">
              {tool.strengths.map((s) => (
                <li key={s} className="flex items-center gap-2 text-xs" style={{ color: "var(--text2)" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: tool.color }} />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-2 pt-1">
              <p className="text-xs leading-relaxed" style={{ color: "var(--text3)" }}>
                <span className="font-semibold" style={{ color: "var(--text2)" }}>Best for: </span>
                {tool.bestFor}
              </p>
              {tool.eplaymentTool && (
                <Link href={tool.eplaymentTool}
                  className="inline-flex items-center gap-1 text-xs font-semibold transition-all hover:gap-1.5"
                  style={{ color: tool.color }}>
                  {tool.eplaymentLabel}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div>
        <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text)" }}>Quick Comparison</h2>
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)" }}>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text3)" }}>Feature</th>
                  {["Claude","Gemini","ChatGPT","Copilot"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text3)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} style={{ borderTop: i === 0 ? "none" : "1px solid var(--border)", background: i % 2 === 0 ? "var(--bg)" : "var(--bg2)" }}>
                    <td className="px-4 py-3 text-xs font-medium" style={{ color: "var(--text2)" }}>{row.feature}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text2)" }}>{row.claude}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text2)" }}>{row.gemini}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text2)" }}>{row.chatgpt}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text2)" }}>{row.copilot}</td>
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
