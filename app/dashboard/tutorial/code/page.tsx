import TutorialLayout from "@/components/tutorial-layout";

export default function TutorialCodePage() {
  return (
    <TutorialLayout
      title="Code with AI"
      subtitle="Use Claude Code, GitHub Copilot, and Cursor to write, review, and debug code faster."
      color="#4ade80"
      nextHref="/dashboard/tutorial/howto"
      nextLabel="Next: How-to Guides"
      tools={[
        { name: "Claude Code", emoji: "🟠", href: "/dashboard/claude-code" },
        { name: "GitHub Copilot", emoji: "🟣", href: "/dashboard/copilot" },
        { name: "Claude Design", emoji: "🎨", href: "/dashboard/claude-design" },
      ]}
      steps={[
        {
          title: "Choose your coding AI",
          body: "Claude Code is best for large refactors, multi-file changes, and architecture decisions. GitHub Copilot is best for inline completions and staying in flow. Many developers use both.",
          tip: "Start with Copilot for day-to-day coding, add Claude Code when the task spans multiple files or needs planning.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(74,222,128,0.08)" />
              <rect x="14" y="20" width="52" height="40" rx="6" fill="rgba(74,222,128,0.1)" stroke="#4ade80" strokeWidth="1.5" />
              <rect x="14" y="20" width="52" height="10" rx="6" fill="rgba(74,222,128,0.2)" />
              <circle cx="21" cy="25" r="2" fill="#4ade80" opacity="0.6" />
              <circle cx="28" cy="25" r="2" fill="#f59e0b" opacity="0.6" />
              <path d="M22 40l-6 5 6 5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M42 40l6 5-6 5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Set up Claude Code CLI",
          body: "Run: npm install -g @anthropic-ai/claude-code — then type claude in your terminal. It opens a browser to authenticate. After that, run /init in any project to generate a CLAUDE.md file.",
          tip: "CLAUDE.md is your project's instruction manual for Claude — include your stack, key commands, and conventions.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(74,222,128,0.08)" />
              <rect x="14" y="26" width="52" height="28" rx="5" fill="#0d1117" stroke="#4ade80" strokeWidth="1.5" />
              <path d="M22 36l4 4-4 4" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 44h20" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              <circle cx="58" cy="32" r="3" fill="#4ade80" opacity="0.4" />
            </svg>
          ),
        },
        {
          title: "Install GitHub Copilot in VS Code",
          body: "Open VS Code → Extensions → search 'GitHub Copilot' → Install. Sign in with your @eplayment.co GitHub account. Copilot suggests code as you type — press Tab to accept.",
          tip: "Use Copilot Chat (Cmd+Shift+I) with /fix, /explain, and /tests commands for more control.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(74,222,128,0.08)" />
              <rect x="22" y="22" width="36" height="36" rx="8" fill="rgba(74,222,128,0.1)" stroke="#4ade80" strokeWidth="1.5" />
              <path d="M32 36c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.7 5.6-4.2 7H36.2C33.7 41.6 32 39 32 36z" stroke="#4ade80" strokeWidth="1.5" fill="none" />
              <path d="M36 46h8M38 50h4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: "Write better prompts for code",
          body: "Be specific about what you want: language, framework, constraints. Instead of 'fix this code', say 'Fix this TypeScript function — it should return null if the input is undefined, using the existing error handling pattern in this file.'",
          tip: "Attach relevant files with #file: in Claude Code or @workspace in Copilot Chat for better context.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(74,222,128,0.08)" />
              <path d="M28 30h24M28 37h18M28 44h22M28 51h14" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="56" cy="51" r="8" fill="#0d1117" stroke="#4ade80" strokeWidth="1.5" />
              <path d="M53 51l2 2 4-4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ]}
    />
  );
}
