import TutorialLayout from "@/components/tutorial-layout";

export default function TutorialImagesPage() {
  return (
    <TutorialLayout
      title="Generate Images with AI"
      subtitle="Learn which AI tools create images, and how to write prompts that get great results."
      color="#f472b6"
      nextHref="/dashboard/tutorial/code"
      nextLabel="Next: Code with AI"
      tools={[
        { name: "ChatGPT + DALL-E", emoji: "🟢", href: "/dashboard/learn-tools" },
        { name: "Gemini", emoji: "🔵", href: "/dashboard/gemini" },
        { name: "Claude (vision)", emoji: "🟠", href: "/dashboard/claude-code" },
      ]}
      steps={[
        {
          title: "Pick the right tool",
          body: "For image generation: ChatGPT (DALL-E 3) and Adobe Firefly are the top choices. Claude and Gemini can analyze and describe images but don't generate them. Midjourney produces the highest-quality artistic images.",
          tip: "For work-safe, brand-consistent images, use Adobe Firefly — it's trained on licensed content.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(244,114,182,0.08)" />
              <rect x="16" y="22" width="48" height="36" rx="6" fill="rgba(244,114,182,0.12)" stroke="#f472b6" strokeWidth="1.5" />
              <circle cx="30" cy="33" r="5" fill="rgba(244,114,182,0.3)" stroke="#f472b6" strokeWidth="1.2" />
              <path d="M16 48l14-10 10 8 8-6 14 10" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Write a good prompt",
          body: "Be specific: describe the subject, style, lighting, and mood. Example: 'A minimalist tech office at night, purple and green neon lighting, empty chairs, cinematic, 4K.'",
          tip: "Add style keywords like 'minimalist', 'flat illustration', 'photorealistic', or 'isometric' to steer the output.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(244,114,182,0.08)" />
              <path d="M20 50l8-16 8 10 8-8 8 14" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="54" cy="26" r="6" fill="rgba(244,114,182,0.2)" stroke="#f472b6" strokeWidth="1.5" />
              <path d="M51 26l2 2 4-4" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Use AI to analyze existing images",
          body: "Claude and Gemini can read images you upload: extract text from screenshots, describe UI designs, identify issues in a photo, or summarize chart data. Just attach the image to your message.",
          tip: "This is great for extracting data from PDFs or screenshots without manual typing.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(244,114,182,0.08)" />
              <rect x="18" y="24" width="44" height="32" rx="5" fill="rgba(244,114,182,0.1)" stroke="#f472b6" strokeWidth="1.5" />
              <circle cx="38" cy="38" r="10" fill="none" stroke="#f472b6" strokeWidth="1.5" />
              <path d="M45 45l8 8" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
              <circle cx="38" cy="38" r="4" fill="#f472b6" opacity="0.4" />
            </svg>
          ),
        },
        {
          title: "Copyright and ownership",
          body: "AI-generated images have unclear copyright in many jurisdictions. For client work, use Adobe Firefly (commercially licensed) or check your legal team before using other tools.",
          tip: "Always disclose AI-generated visuals in internal presentations when asked.",
          illustration: (
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              <circle cx="40" cy="40" r="36" fill="rgba(244,114,182,0.08)" />
              <circle cx="40" cy="38" r="14" fill="none" stroke="#f472b6" strokeWidth="1.5" />
              <path d="M44 34a6 6 0 00-8 8" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M32 52l16-16" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
          ),
        },
      ]}
    />
  );
}
