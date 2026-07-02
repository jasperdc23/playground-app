import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Get your Anthropic API Key",
    content: [
      "Go to console.anthropic.com → API Keys → Create Key.",
      "Name it after your project (e.g. `eplayment-support-bot`).",
      "Store it as `ANTHROPIC_API_KEY` in your `.env` file. Never commit this.",
    ],
    tag: "Setup",
  },
  {
    step: "02",
    title: "Install the Anthropic SDK",
    content: [
      "**Node.js / Next.js:** `npm install @anthropic-ai/sdk`",
      "**Python:** `pip install anthropic`",
      "The SDK auto-reads `ANTHROPIC_API_KEY` from your environment — no manual config needed.",
    ],
    tag: "Install",
  },
  {
    step: "03",
    title: "Choose the Right Model",
    content: [
      "**claude-sonnet-5** — best reasoning and coding. Use as your default.",
      "**claude-haiku-4-5-20251001** — fastest and cheapest. Use for high-volume simple replies.",
      "**claude-opus-4-8** — most powerful. Reserve for the most complex analysis tasks.",
      "Always pin a specific model ID in production to avoid breaking changes.",
    ],
    tag: "Models",
  },
  {
    step: "04",
    title: "Write Your First Bot",
    content: [
      "Create a system prompt that defines your bot's role, tone, and limitations.",
      "Example: `You are an internal HR assistant for Eplayment. Answer questions about company policies only. Never share confidential data.`",
      "Send user messages in the `messages` array and stream the response for a fast feel.",
    ],
    tag: "Build",
  },
  {
    step: "05",
    title: "Add Tool Use (Function Calling)",
    content: [
      "Tools let your bot call internal APIs: look up policies, search the knowledge base, create tickets.",
      "Define tools with a name, description, and JSON Schema for inputs.",
      "Claude decides when to call a tool — you execute it and return the result.",
    ],
    tag: "Tool Use",
  },
  {
    step: "06",
    title: "Enable Prompt Caching",
    content: [
      "Prompt caching reduces costs up to 90% when your system prompt stays the same across requests.",
      "Add `cache_control: { type: 'ephemeral' }` to your system prompt content block.",
      "Essential for bots that serve many users with the same instructions.",
    ],
    tag: "Optimization",
  },
  {
    step: "07",
    title: "Deploy as a Slack or Web Bot",
    content: [
      "**Slack:** Use Bolt SDK — handle `app_mention` events and call your Claude API route.",
      "**Web:** Create a Next.js API route at `/api/chat` with `stream: true` for real-time output.",
      "Rate-limit per user, log all interactions, and register the bot in the AI Governance registry before go-live.",
    ],
    tag: "Deploy",
  },
  {
    step: "08",
    title: "Register with Governance",
    content: [
      "Before going live, register your bot: name, owner, system prompt summary, tools used, data accessed.",
      "All internal bots are reviewed annually.",
      "See the AI Governance module for the full registration process.",
    ],
    tag: "Compliance",
    warning: true,
  },
];

export default function SetupBotsPage() {
  return (
    <GuideLayout
      title="How to Setup Bots"
      subtitle="Build and deploy Claude-powered internal bots from scratch using the Anthropic SDK."
      badge="Developer"
      badgeColor="#818cf8"
      steps={steps}
    />
  );
}
