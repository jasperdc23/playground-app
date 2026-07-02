import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Connect Figma MCP to Claude Code",
    content: [
      "In Claude Code, open Settings → MCP Servers → Add Server.",
      "Select **Figma** from the claude.ai connectors list and authenticate with your Figma account.",
      "Once connected, Claude can read your Figma files and generate code from them.",
    ],
    tag: "MCP",
  },
  {
    step: "02",
    title: "Get design context from a Figma file",
    content: [
      "Copy a Figma node URL: right-click a frame → Copy link to selection.",
      "In Claude Code, paste the URL and ask: `Implement this design in my project`.",
      "Claude will read the design, match it to your existing components, and generate production-ready code.",
    ],
    tag: "Design → Code",
  },
  {
    step: "03",
    title: "Generate designs from code",
    content: [
      "You can push existing pages into Figma: tell Claude `Take this page and build it in Figma`.",
      "Claude will discover your design system tokens and assemble the screen using your real variables.",
      "This keeps Figma in sync with your production UI.",
    ],
    tag: "Code → Design",
  },
  {
    step: "04",
    title: "Set up design system rules",
    content: [
      "Run the `/figma-create-design-system-rules` skill inside Claude Code.",
      "This generates custom rules for your codebase so Claude always uses your tokens instead of hardcoded values.",
      "Store the generated `.claude/design-system-rules.md` in your repo.",
    ],
    tag: "Design System",
  },
  {
    step: "05",
    title: "Code Connect (component mapping)",
    content: [
      "Code Connect maps Figma components to your actual codebase components.",
      "Run `/figma-code-connect` to generate `.figma.ts` mapping files.",
      "Once published, Figma Dev Mode shows real code snippets instead of auto-generated output.",
    ],
    tag: "Code Connect",
  },
  {
    step: "06",
    title: "Eplayment Usage Policy",
    content: [
      "Only connect Figma projects that are under your team's workspace — not client or partner workspaces.",
      "Do not share Figma files containing unreleased features with external AI services.",
      "Design exports are subject to the same data classification rules as code.",
    ],
    tag: "Policy",
    warning: true,
  },
];

export default function ClaudeDesignPage() {
  return (
    <GuideLayout
      title="Claude Design"
      subtitle="Connect Figma to Claude and translate designs to code — and back."
      badge="Developer"
      badgeColor="#a78bfa"
      steps={steps}
    />
  );
}
