import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "What is Gemini on Claude?",
    content: [
      "Claude can use Google Gemini as a tool via MCP, letting you run tasks on Gemini's strengths (large context, multimodal) from inside Claude Code.",
      "This is useful for: analyzing large documents, processing images/videos, and cross-checking answers between models.",
      "Think of it as Claude orchestrating Gemini — not replacing Claude with Gemini.",
    ],
    tag: "Overview",
  },
  {
    step: "02",
    title: "Get a Gemini API key",
    content: [
      "Go to aistudio.google.com → Get API Key → Create API key in new project.",
      "Store it as `GEMINI_API_KEY` in your `.env` file.",
      "Use your work Google account (`@eplayment.co`) — not a personal account.",
    ],
    tag: "Auth",
  },
  {
    step: "03",
    title: "Add Gemini MCP to Claude Code",
    content: [
      "In Claude Code settings, add a custom MCP server pointing to the Google Gemini MCP package.",
      "Set the `GEMINI_API_KEY` environment variable in the MCP server config.",
      "Once connected, Claude can delegate tasks to Gemini using tool calls.",
    ],
    tag: "MCP",
  },
  {
    step: "04",
    title: "When to use Gemini vs Claude",
    content: [
      "**Use Gemini for:** 1M+ token context windows, video/audio analysis, Google Workspace integration.",
      "**Use Claude for:** coding, reasoning, nuanced writing, tool use orchestration, security-sensitive tasks.",
      "For most internal tasks, Claude alone is sufficient. Use Gemini when you hit Claude's context limit or need multimodal input.",
    ],
    tag: "Best Practices",
  },
  {
    step: "05",
    title: "Google AI Studio for non-devs",
    content: [
      "Non-developers can use Gemini directly at aistudio.google.com without any setup.",
      "Upload a PDF, spreadsheet, or video and ask questions about it.",
      "Always follow the data classification guidelines before uploading company documents.",
    ],
    tag: "Non-Dev",
  },
  {
    step: "06",
    title: "Eplayment Usage Policy",
    content: [
      "Gemini API requests are processed by Google. Do not send confidential contracts, financial data, or customer PII.",
      "Use Gemini for internal knowledge, public documentation, and non-sensitive analysis only.",
      "All Gemini API usage must be done through company-approved API keys — not personal accounts.",
    ],
    tag: "Policy",
    warning: true,
  },
];

export default function GeminiPage() {
  return (
    <GuideLayout
      title="Gemini Setup"
      subtitle="Connect Google Gemini to Claude for large-context and multimodal AI tasks."
      badge="All Employees"
      badgeColor="#f472b6"
      steps={steps}
    />
  );
}
