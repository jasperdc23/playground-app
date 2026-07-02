import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Install Claude Code CLI",
    content: [
      "Requires Node.js 18+. Install globally via npm:",
      "`npm install -g @anthropic-ai/claude-code`",
      "Verify with `claude --version`. You should see the current version printed.",
    ],
    tag: "Setup",
  },
  {
    step: "02",
    title: "Authenticate with Anthropic",
    content: [
      "Run `claude` in your terminal. On first launch it will open a browser window to authenticate.",
      "Sign in with your Anthropic account (or your org's SSO if configured).",
      "Your API key is stored locally in `~/.claude/`. Never commit this to source control.",
    ],
    tag: "Auth",
  },
  {
    step: "03",
    title: "IDE Extension (VS Code / JetBrains)",
    content: [
      "Install the **Claude Code** extension from the VS Code marketplace or JetBrains plugin hub.",
      "Open any project and press `Cmd+Shift+P` → `Claude: Open` to start a session.",
      "The extension shares your CLI auth — no separate login needed.",
    ],
    tag: "IDE",
  },
  {
    step: "04",
    title: "Create a CLAUDE.md in your project",
    content: [
      "CLAUDE.md is Claude's project-level instructions file. Put it at the repo root.",
      "Include: stack overview, key commands (`npm run dev`, `npx prisma migrate dev`), conventions, and what NOT to do.",
      "Run `/init` inside Claude Code to auto-generate a starter CLAUDE.md from your codebase.",
    ],
    tag: "Config",
  },
  {
    step: "05",
    title: "Connect MCP Servers",
    content: [
      "MCP (Model Context Protocol) lets Claude talk to external tools: Figma, Linear, Notion, databases, etc.",
      "Add servers in Claude Code settings: `Settings → MCP Servers → Add`.",
      "Check the MCP directory at modelcontextprotocol.io for available integrations.",
    ],
    tag: "MCP",
  },
  {
    step: "06",
    title: "Eplayment Usage Policy",
    content: [
      "Only use Claude Code on company devices and approved projects.",
      "Do not paste customer PII, credentials, or unreleased product details into prompts.",
      "All Claude Code activity on org-managed accounts is subject to audit. See the Security module for details.",
    ],
    tag: "Policy",
    warning: true,
  },
];

export default function ClaudeCodePage() {
  return (
    <GuideLayout
      title="Claude Code"
      subtitle="Set up the Claude Code CLI and IDE extension for AI-assisted development."
      badge="Developer"
      badgeColor="#6366f1"
      steps={steps}
    />
  );
}
