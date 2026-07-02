import TutorialLayout from "@/components/tutorial-layout";

export default function TutorialBotsPage() {
  return (
    <TutorialLayout
      title="Build a Bot"
      subtitle="Set up an AI-powered bot for Discord, Slack, or your website — step by step."
      color="#818cf8"
      nextHref="/dashboard/tutorial/images"
      nextLabel="Next: Generate Images"
      tools={[
        { name: "Claude API", emoji: "🟠", href: "/dashboard/setup-bots" },
        { name: "Claude Bots Guide", emoji: "🤖", href: "/dashboard/claude-bots" },
      ]}
      steps={[
        {
          title: "Pick your platform",
          body: "Decide where your bot will live: Discord, Slack, or a web app. Each has its own SDK but the AI logic is the same for all three.",
          tip: "For internal tools at Eplayment, Slack bots are easiest to deploy — your team is already there.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(129,140,248,0.08)" />
              <rect x="20" y="25" width="40" height="30" rx="8" fill="rgba(129,140,248,0.15)" stroke="#818cf8" strokeWidth="1.5" />
              <circle cx="32" cy="40" r="4" fill="#818cf8" />
              <circle cx="48" cy="40" r="4" fill="#818cf8" />
              <path d="M34 50h12" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: "Get your Anthropic API key",
          body: "Go to console.anthropic.com → API Keys → Create Key. Store it as ANTHROPIC_API_KEY in your .env file. Never commit this to git.",
          tip: "Name your key after the project so you can track usage per bot in the Anthropic console.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(129,140,248,0.08)" />
              <rect x="22" y="32" width="36" height="22" rx="5" fill="rgba(129,140,248,0.15)" stroke="#818cf8" strokeWidth="1.5" />
              <circle cx="40" cy="36" r="5" fill="none" stroke="#818cf8" strokeWidth="1.5" />
              <rect x="36" y="40" width="8" height="10" rx="2" fill="#818cf8" opacity="0.7" />
              <path d="M28 26l4-6M52 26l-4-6" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: "Write a system prompt",
          body: "The system prompt defines your bot's personality, role, and limits. Be specific: 'You are an internal HR assistant for Eplayment. Only answer questions about company policies.'",
          tip: "Short, clear system prompts perform better than long ones. Tell the bot what it IS and what it should NOT do.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(129,140,248,0.08)" />
              <rect x="16" y="20" width="48" height="40" rx="6" fill="rgba(129,140,248,0.1)" stroke="#818cf8" strokeWidth="1.5" />
              <path d="M24 32h32M24 39h24M24 46h16" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: "Connect to your platform",
          body: "For Slack: use the Bolt SDK and handle app_mention events. For Discord: use discord.js and listen for message events. Your bot calls Claude on each message and replies with the response.",
          tip: "Add rate limiting per user to prevent accidental abuse and keep your API costs under control.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(129,140,248,0.08)" />
              <circle cx="24" cy="40" r="8" fill="rgba(129,140,248,0.2)" stroke="#818cf8" strokeWidth="1.5" />
              <circle cx="56" cy="40" r="8" fill="rgba(129,140,248,0.2)" stroke="#818cf8" strokeWidth="1.5" />
              <path d="M32 40h12" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
              <path d="M38 36l4 4-4 4" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Register your bot with Governance",
          body: "Before going live, register the bot in the AI Governance registry: bot name, owner, system prompt summary, tools used, data accessed. See the Governance guide.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(129,140,248,0.08)" />
              <path d="M28 40l8 8 16-16" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="40" cy="40" r="18" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" />
            </svg>
          ),
        },
      ]}
    />
  );
}
