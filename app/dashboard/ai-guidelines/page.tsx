import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Purpose of These Guidelines",
    content: [
      "These guidelines exist to help every Eplayment employee use AI tools effectively, responsibly, and safely.",
      "They apply to all AI tools — Claude, ChatGPT, Gemini, Copilot, and any future tools adopted by the company.",
      "Following these guidelines protects you, your team, and our clients.",
    ],
    tag: "Overview",
  },
  {
    step: "02",
    title: "What You Can Do with AI",
    content: [
      "**Writing & communication:** drafting emails, summarizing documents, writing reports.",
      "**Coding:** generating boilerplate, debugging, writing tests, code reviews.",
      "**Research:** summarizing public articles, comparing options, brainstorming.",
      "**Design:** generating UI mockups, writing copy, creating diagrams.",
    ],
    tag: "Allowed Uses",
  },
  {
    step: "03",
    title: "What You Must NOT Do",
    content: [
      "Never share customer PII (names, emails, IDs) with any AI tool.",
      "Never paste API keys, passwords, or secret tokens into AI prompts.",
      "Never use AI to make final HR, legal, or financial decisions without human review.",
      "Never use unapproved AI tools on company data — see the approved tools list.",
    ],
    tag: "Prohibited",
    warning: true,
  },
  {
    step: "04",
    title: "AI Output Must Be Reviewed",
    content: [
      "AI can hallucinate — it can confidently produce incorrect facts, broken code, or flawed logic.",
      "Every AI output used in a business decision, codebase, or client deliverable must be reviewed by a human.",
      "You are accountable for any AI-generated content you publish or submit.",
    ],
    tag: "Accountability",
  },
  {
    step: "05",
    title: "Transparency with Clients and Colleagues",
    content: [
      "If a deliverable was significantly AI-assisted, disclose this to your team lead.",
      "Never represent AI-generated content as entirely your own original work in formal contexts.",
      "When interacting with internal bots, employees should know they're talking to AI — not a human.",
    ],
    tag: "Transparency",
  },
  {
    step: "06",
    title: "Staying Up to Date",
    content: [
      "AI tools evolve fast. These guidelines are reviewed quarterly.",
      "When a new AI tool is approved or a policy changes, you'll be notified via the company communication channel.",
      "If you're unsure whether a use case is allowed, ask IT before proceeding.",
    ],
    tag: "Updates",
  },
];

export default function AIGuidelinesPage() {
  return (
    <GuideLayout
      title="AI Guidelines"
      subtitle="Company-wide policies for using AI tools responsibly at Eplayment."
      badge="All Employees"
      badgeColor="#22c55e"
      steps={steps}
    />
  );
}
