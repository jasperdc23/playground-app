import TutorialLayout from "@/components/tutorial-layout";

export default function TutorialHowtoPage() {
  return (
    <TutorialLayout
      title="How-to Guides"
      subtitle="Step-by-step walkthroughs for common AI tasks — from writing to research to automation."
      color="#fbbf24"
      tools={[
        { name: "Claude", emoji: "🟠", href: "/dashboard/claude-code" },
        { name: "Gemini", emoji: "🔵", href: "/dashboard/gemini" },
        { name: "ChatGPT", emoji: "🟢", href: "/dashboard/learn-tools" },
      ]}
      steps={[
        {
          title: "Summarize a long document",
          body: "Upload a PDF or paste text, then ask: 'Summarize this in 5 bullet points for a non-technical audience.' Claude handles up to 200k tokens — about 150,000 words. Gemini handles even more.",
          tip: "For recurring summaries (weekly reports, meeting notes), create a saved prompt template so you don't rewrite it each time.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(251,191,36,0.08)" />
              <rect x="22" y="16" width="36" height="48" rx="6" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M30 28h20M30 35h20M30 42h14" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M30 52l4-4 4 4 4-4 4 4" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Draft and improve writing",
          body: "Paste your draft and ask: 'Rewrite this to be more concise and professional, keeping the same key points.' Or ask Claude to write from scratch with a clear brief: audience, tone, length, purpose.",
          tip: "For important documents, ask Claude to write it, then ask 'What's weak about this draft?' — it will identify gaps you can fix.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(251,191,36,0.08)" />
              <path d="M20 56l6-6 6 4 8-12 8 8 6-4" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 28h24M28 35h16" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="54" cy="24" r="7" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M54 21v4M52 25h4" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: "Research a topic quickly",
          body: "Use Perplexity or Gemini for research with live web access. Ask Claude for analysis and synthesis of information you paste in. Example workflow: Perplexity finds sources → Claude summarizes and extracts key insights.",
          tip: "Gemini with Google Search can find recent information. Claude is better at reasoning over what you give it.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(251,191,36,0.08)" />
              <circle cx="36" cy="36" r="12" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M45 45l10 10" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
              <circle cx="36" cy="36" r="5" fill="rgba(251,191,36,0.2)" />
            </svg>
          ),
        },
        {
          title: "Automate repetitive tasks",
          body: "AI can handle: formatting data, converting between file formats (CSV to JSON), writing regex, generating test data, and translating content. Describe the input and desired output clearly.",
          tip: "For data tasks, paste a small sample and ask Claude to write the transformation code — then run it yourself rather than having AI process sensitive data.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(251,191,36,0.08)" />
              <path d="M24 28h32M24 40h32M24 52h32" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
              <circle cx="40" cy="40" r="12" fill="#0a0c12" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M36 40l3 3 5-6" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ]}
    />
  );
}
