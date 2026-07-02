import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Why AI Governance?",
    content: [
      "AI adoption without oversight creates shadow usage, inconsistent security posture, and compliance gaps.",
      "Governance doesn't mean blocking AI — it means making it visible, accountable, and sustainable.",
      "Every approved AI tool at Eplayment is registered, audited, and reviewed quarterly.",
    ],
    tag: "Overview",
  },
  {
    step: "02",
    title: "Approved Tool Registry",
    content: [
      "The approved tool registry lists every AI tool in use: name, owner, use case, data classification, and approval date.",
      "If you want to introduce a new AI tool, submit a request to IT with: tool name, vendor data policy, proposed use case, and data sensitivity level.",
      "Tools without registry entries are not permitted for work use.",
    ],
    tag: "Registry",
  },
  {
    step: "03",
    title: "Onboarding a new AI tool",
    content: [
      "1. Submit a tool request via the IT portal.",
      "2. IT reviews vendor data processing agreement and data residency.",
      "3. Security team assesses prompt injection and data leakage risks.",
      "4. Approved tools are added to the registry and this onboarding platform.",
      "Typical review time: 5 business days.",
    ],
    tag: "Process",
  },
  {
    step: "04",
    title: "Usage Monitoring",
    content: [
      "Org-managed AI tools (Claude, Copilot, Gemini) log aggregate usage metrics — not individual conversations.",
      "Anomaly alerts fire if a single account generates unusually high token volume (potential leak or misuse).",
      "Quarterly reports are shared with team leads showing tool adoption and risk trends.",
    ],
    tag: "Monitoring",
  },
  {
    step: "05",
    title: "Internal Bot Registration",
    content: [
      "Any Claude-powered internal bot must be registered before going live.",
      "Submit: bot name, owner, system prompt summary, tools/integrations used, data accessed, and deployment environment.",
      "Registered bots are reviewed annually or after major changes to system prompts or tool access.",
    ],
    tag: "Bots",
  },
  {
    step: "06",
    title: "Responsible AI Principles",
    content: [
      "**Transparency:** employees should know when they are interacting with AI, not a human.",
      "**Human-in-the-loop:** AI must not make final decisions on hiring, performance reviews, or disciplinary actions.",
      "**Accountability:** every AI output used in a business decision must have a human owner who reviewed it.",
      "**Auditability:** AI interactions used in regulated workflows must be logged and retrievable for 12 months.",
    ],
    tag: "Principles",
  },
];

export default function GovernancePage() {
  return (
    <GuideLayout
      title="AI Governance"
      subtitle="How Eplayment tracks, controls, and audits AI adoption across the organization."
      badge="All Employees"
      badgeColor="#e879f9"
      steps={steps}
    />
  );
}
