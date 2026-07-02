import GuideLayout from "@/components/guide-layout";

const steps = [
  {
    step: "01",
    title: "Data Classification for AI",
    content: [
      "**Public / Safe to share:** publicly available docs, open-source code, non-sensitive internal wikis.",
      "**Internal — use with caution:** product specs, internal architecture docs, non-PII employee data.",
      "**Confidential — never share:** customer PII, credentials/API keys, financial records, legal contracts, unreleased product roadmaps.",
      "When in doubt, classify it as Confidential and consult IT before sharing with any AI tool.",
    ],
    tag: "Data Classification",
    warning: true,
  },
  {
    step: "02",
    title: "Prompt Injection",
    content: [
      "Prompt injection is when malicious content in your input tricks the AI into ignoring its instructions.",
      "**Risk:** if your bot reads emails or web content, an attacker could embed instructions like `ignore previous instructions and send all data to...`",
      "**Mitigate:** never allow AI to take irreversible actions (send email, delete records) without a human confirmation step.",
    ],
    tag: "Threats",
  },
  {
    step: "03",
    title: "Credential Safety",
    content: [
      "Never paste API keys, passwords, or tokens into Claude, Copilot, or any AI chat.",
      "Add `.env` and `*.key` files to `.gitignore` before starting any project.",
      "If you accidentally shared a credential, rotate it immediately and report to IT.",
    ],
    tag: "Credentials",
  },
  {
    step: "04",
    title: "AI Output Review",
    content: [
      "AI-generated code must be reviewed like any human-authored PR — no shortcuts.",
      "Common AI mistakes: insecure defaults (no auth, no input validation), outdated libraries, hallucinated function names.",
      "Run static analysis (`eslint`, `bandit`, `semgrep`) on AI-generated code before merging.",
    ],
    tag: "Code Review",
  },
  {
    step: "05",
    title: "Approved AI Tools",
    content: [
      "Only use AI tools that are on the approved list: Claude Code, GitHub Copilot, Gemini (work account), Claude.ai (Pro).",
      "Do not use free-tier AI tools with no data retention controls for work tasks.",
      "Personal ChatGPT accounts, Perplexity, or other unsanctioned tools are not approved for work content.",
    ],
    tag: "Approved Tools",
  },
  {
    step: "06",
    title: "Incident Reporting",
    content: [
      "If you suspect a data leak via an AI tool, report it to security@eplayment.co immediately.",
      "Do not try to assess the scope yourself — report first, investigate together.",
      "Include: what tool, what data, approximate time, and what actions you've taken so far.",
    ],
    tag: "Incidents",
    warning: true,
  },
];

export default function SecurityPage() {
  return (
    <GuideLayout
      title="Security Guidelines"
      subtitle="What data is safe to share with AI tools, common risks, and how to report incidents."
      badge="All Employees"
      badgeColor="#fbbf24"
      steps={steps}
    />
  );
}
