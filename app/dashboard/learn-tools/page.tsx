import Link from "next/link";

/* ── Brand SVG logos ──────────────────────────────────────────── */
function ClaudeLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="#D97706" />
      <path d="M13 27l4.5-14h1.2L20 19l1.3-6h1.2L27 27h-2l-1.2-4.5h-5.6L17 27h-2z" fill="white" />
      <ellipse cx="20" cy="14" rx="3.5" ry="3.5" fill="white" opacity="0.3" />
    </svg>
  );
}

function GeminiLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="white" />
      <path d="M20 6C20 6 26 13 26 20C26 27 20 34 20 34C20 34 14 27 14 20C14 13 20 6 20 6Z" fill="url(#gem-v)" />
      <path d="M6 20C6 20 13 14 20 14C27 14 34 20 34 20C34 20 27 26 20 26C13 26 6 20 6 20Z" fill="url(#gem-h)" />
      <defs>
        <linearGradient id="gem-v" x1="20" y1="6" x2="20" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9B72CB" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
        <linearGradient id="gem-h" x1="6" y1="20" x2="34" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EA4335" />
          <stop offset="50%" stopColor="#FBBC05" />
          <stop offset="100%" stopColor="#34A853" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ChatGPTLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="#10A37F" />
      <path d="M29.8 16.6a7.9 7.9 0 00-.5-6.5 8.1 8.1 0 00-8.7-3.9A8 8 0 0014.1 8a7.9 7.9 0 00-5.3 3.8 8.1 8.1 0 001 9.6 7.9 7.9 0 00.5 6.5 8.1 8.1 0 008.7 3.9 8 8 0 006.5 1.7 7.9 7.9 0 006.5-5.5 8.1 8.1 0 00-1-9.6 7.9 7.9 0 00-.2-.8zm-9.8 13.7a6 6 0 01-3.8-1.4l.2-.1 6.3-3.6a1 1 0 00.5-.9v-8.8l2.7 1.5v.1a6 6 0 01-5.9 13.2zm-12.8-5.5a6 6 0 01-.7-4 7.4 7.4 0 00.2.1l6.3 3.6a1 1 0 001 0l7.7-4.4v3a.1.1 0 010 .1L15.4 27a6 6 0 01-8.2-2.2zM6 15.2a6 6 0 013.1-2.6v7.4a1 1 0 00.5.9l7.7 4.4-2.7 1.5h-.1L8.2 23a6 6 0 01-2.2-7.8zm22.1 5.2L20.4 16l2.7-1.5h.1l6.3 3.6a6 6 0 01-.9 10.8v-7.4a1 1 0 00-.5-.1zm2.7-4.1l-.2-.1-6.3-3.6a1 1 0 00-1 0l-7.7 4.4v-3a.1.1 0 010-.1l6.3-3.6a6 6 0 018.9 6.3v.7z" fill="white" />
    </svg>
  );
}

function CopilotLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="#1B1F24" />
      <path d="M20 9C14 9 10 13.5 10 18.5c0 2.5 1 4.5 2.5 6 .5.5 1 1 1.5 1.3.2.2.4.1.4-.1v-2.5c0-.3-.1-.5-.4-.7-1.2-.8-2-2.2-2-3.8 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.7-.8 3.1-2 3.9-.3.2-.4.4-.4.7v2.5c0 .2.2.3.4.1.5-.3 1-.8 1.5-1.3C29 22.9 30 21 30 18.5 30 13.5 26 9 20 9z" fill="#2EA043" />
      <path d="M17 24.5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5v1zm0 3c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5v1z" fill="white" />
      <circle cx="17" cy="18" r="1.5" fill="white" />
      <circle cx="23" cy="18" r="1.5" fill="white" />
    </svg>
  );
}

function PerplexityLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="#1C1C1E" />
      <path d="M20 8l8 7v10l-8 7-8-7V15l8-7z" stroke="#20B2AA" strokeWidth="1.5" fill="none" />
      <path d="M12 15l8 7 8-7M20 22v8" stroke="#20B2AA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CursorLogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="#1C1C1E" />
      <path d="M14 10l16 10-16 10V10z" fill="none" stroke="#F43F5E" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 20l8 2" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const tools = [
  {
    name: "Claude",
    maker: "Anthropic",
    Logo: ClaudeLogo,
    color: "#D97706",
    bg: "rgba(217,119,6,0.07)",
    border: "rgba(217,119,6,0.18)",
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
    color: "#4285F4",
    bg: "rgba(66,133,244,0.07)",
    border: "rgba(66,133,244,0.18)",
    tagline: "Best for massive context windows and Google Workspace integration.",
    strengths: ["1M+ token context window", "Multimodal (images, video, audio)", "Google Docs / Drive integration", "Real-time web search", "Code execution"],
    bestFor: "Analyzing large files, processing media, anything in the Google ecosystem.",
    eplaymentTool: "/dashboard/gemini",
    eplaymentLabel: "Setup Gemini",
  },
  {
    name: "ChatGPT",
    maker: "OpenAI",
    Logo: ChatGPTLogo,
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
    color: "#2EA043",
    bg: "rgba(46,160,67,0.07)",
    border: "rgba(46,160,67,0.18)",
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
    color: "#20B2AA",
    bg: "rgba(32,178,170,0.07)",
    border: "rgba(32,178,170,0.18)",
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
    <div className="max-w-5xl space-y-10 animate-fade-in">

      {/* Header */}
      <div>
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs mb-4 transition-colors"
          style={{ color: "var(--text3)" }}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-2 mb-2">
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

      {/* Tool cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: tool.bg, border: `1px solid ${tool.border}` }}>

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
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text3)" }}>{row.claude}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text3)" }}>{row.gemini}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text3)" }}>{row.chatgpt}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--text3)" }}>{row.copilot}</td>
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
