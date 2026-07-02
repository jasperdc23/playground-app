import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Get your Anthropic API key",
    content: [
      "Go to console.anthropic.com → API Keys → Create Key.",
      "Name it after your project (e.g. `eplayment-hr-bot`).",
      "Store it in your project's `.env` as `ANTHROPIC_API_KEY`. Never commit this file.",
    ],
    tag: "Auth",
  },
  {
    step: "02",
    title: "Install the Anthropic SDK",
    content: [
      "**Node.js:** `npm install @anthropic-ai/sdk`",
      "**Python:** `pip install anthropic`",
      "Import and initialize: `const client = new Anthropic()` — it reads `ANTHROPIC_API_KEY` from env automatically.",
    ],
    tag: "SDK",
  },
  {
    step: "03",
    title: "Pick the right model",
    content: [
      "**claude-sonnet-5** — best for complex reasoning, code, and analysis. Default choice.",
      "**claude-haiku-4-5-20251001** — fastest and cheapest, good for high-volume simple tasks.",
      "**claude-opus-4-8** — most powerful, use for the hardest problems only.",
      "Always pin a specific model ID in production so updates don't break your bot.",
    ],
    tag: "Models",
  },
  {
    step: "04",
    title: "Enable prompt caching",
    content: [
      "Prompt caching cuts costs by up to 90% on repeated system prompts.",
      "Add `cache_control: { type: 'ephemeral' }` to your system prompt content block.",
      "Cache TTL is 5 minutes. Ideal for bots that serve many users with the same instructions.",
    ],
    tag: "Optimization",
  },
  {
    step: "05",
    title: "Add tool use (function calling)",
    content: [
      "Tools let Claude call your internal APIs: look up HR data, search docs, create tickets, etc.",
      "Define tools in the `tools` array with a name, description, and JSON Schema for inputs.",
      "Claude decides when to call a tool — you execute it and return the result in a `tool_result` message.",
    ],
    tag: "Tool Use",
  },
  {
    step: "06",
    title: "Deploy as a Slack or web bot",
    content: [
      "**Slack:** Use Bolt SDK + your Claude bot as the handler for app_mention or message events.",
      "**Web:** Wrap in a Next.js API route at `/api/chat` with streaming via `stream: true`.",
      "Rate-limit per user and log every interaction for audit purposes (see Governance module).",
    ],
    tag: "Deploy",
  },
  {
    step: "07",
    title: "Eplayment Usage Policy",
    content: [
      "All internal bots must be registered in the AI Governance registry before going live.",
      "Bots must not store raw conversation logs containing PII beyond 30 days.",
      "System prompts are considered internal documentation — store them in version control.",
    ],
    tag: "Policy",
    warning: true,
  },
];

export default function ClaudeBotsPage() {
  return (
    <GuideLayout
      title="Claude-Powered Bots"
      subtitle="Build internal AI assistants using the Anthropic SDK with tool use and prompt caching."
      badge="Developer"
      badgeColor="#34d399"
      steps={steps}
    />
  );
}
