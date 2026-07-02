import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Request Copilot access",
    content: [
      "GitHub Copilot is provisioned through your GitHub org. Ask your team lead or IT to assign you a seat.",
      "You'll receive an email from GitHub once your seat is activated.",
      "Copilot is available on: VS Code, JetBrains IDEs, Neovim, and GitHub.com.",
    ],
    tag: "Access",
  },
  {
    step: "02",
    title: "Install in VS Code",
    content: [
      "Open VS Code → Extensions → search `GitHub Copilot` → Install.",
      "Also install `GitHub Copilot Chat` for the chat panel.",
      "Sign in when prompted — use your `@eplayment.co` GitHub account.",
    ],
    tag: "VS Code",
  },
  {
    step: "03",
    title: "Configure Copilot settings",
    content: [
      "In VS Code settings, search `copilot` to adjust inline suggestions, languages, and keybindings.",
      "Disable Copilot for specific file types (e.g. `.env`, `*.key`) to avoid leaking secrets in suggestions.",
      "Enable `Copilot: Enable Auto Completions` only for file types you actively code in.",
    ],
    tag: "Config",
  },
  {
    step: "04",
    title: "Use Copilot Chat effectively",
    content: [
      "Open the Copilot Chat panel with `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac).",
      "Use `/explain` to understand a selected block, `/fix` to debug an error, `/tests` to generate tests.",
      "Attach files with `#file:path` or use `@workspace` to ask questions about the whole repo.",
    ],
    tag: "Chat",
  },
  {
    step: "05",
    title: "Copilot vs Claude Code — which to use?",
    content: [
      "**Copilot** is best for: inline completions, quick edits, staying in flow while coding.",
      "**Claude Code** is best for: large refactors, multi-file changes, architecture decisions, and MCP integrations.",
      "Many developers use both: Copilot for autocomplete, Claude Code for bigger asks.",
    ],
    tag: "Best Practices",
  },
  {
    step: "06",
    title: "Eplayment Usage Policy",
    content: [
      "Copilot sends code context to GitHub's servers. Do not use it on files containing API keys, passwords, or PII.",
      "Copilot suggestions are not guaranteed to be secure or correct — always review before committing.",
      "Org admins can see aggregate usage. Individual code is not reviewed by GitHub unless you opt in to feedback.",
    ],
    tag: "Policy",
    warning: true,
  },
];

export default function CopilotPage() {
  return (
    <GuideLayout
      title="GitHub Copilot"
      subtitle="Enable and configure GitHub Copilot for AI-assisted coding in VS Code."
      badge="Developer"
      badgeColor="#60a5fa"
      steps={steps}
    />
  );
}
