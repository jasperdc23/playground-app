"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const pages = [
  { title: "Home", desc: "Dashboard overview", href: "/dashboard", tags: "home dashboard" },
  { title: "Learn AI Tools", desc: "Claude, Gemini, ChatGPT, Copilot", href: "/dashboard/learn-tools", tags: "ai tools learn" },
  { title: "AI Guidelines", desc: "Company AI usage guidelines", href: "/dashboard/ai-guidelines", tags: "guidelines rules policy" },
  { title: "AI Security", desc: "Security best practices", href: "/dashboard/ai-security", tags: "security privacy data" },
  { title: "Setup Bots", desc: "Build Discord, Slack, Web bots", href: "/dashboard/setup-bots", tags: "bots discord slack" },
  { title: "Settings", desc: "Account and profile settings", href: "/dashboard/settings", tags: "settings account profile" },
  { title: "Build a Bot", desc: "Step-by-step bot setup guide", href: "/dashboard/tutorial/bots", tags: "bot tutorial guide" },
  { title: "Generate Images", desc: "AI image generation tutorial", href: "/dashboard/tutorial/images", tags: "image generation dalle midjourney" },
  { title: "Code with AI", desc: "Claude Code, Copilot, Cursor", href: "/dashboard/tutorial/code", tags: "code coding copilot cursor" },
  { title: "How-to Guides", desc: "General AI task guides", href: "/dashboard/tutorial/howto", tags: "howto guide tutorial" },
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.length > 0
    ? pages.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.toLowerCase().includes(query.toLowerCase())
      )
    : pages.slice(0, 5);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(v => !v); }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <>
      {/* Search trigger */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm"
        style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text3)" }}
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <span className="hidden sm:inline">Search modules...</span>
        <kbd className="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded font-mono" style={{ background: "var(--border)", color: "var(--text3)" }}>⌘K</kbd>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
            onClick={e => e.stopPropagation()}>

            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text3)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search modules, guides, tools..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "var(--text)" }}
                onKeyDown={e => {
                  if (e.key === "Enter" && results[0]) go(results[0].href);
                }}
              />
              <kbd className="text-[10px] px-1.5 py-0.5 rounded font-mono" style={{ background: "var(--bg3)", color: "var(--text3)" }}>ESC</kbd>
            </div>

            {/* Results */}
            <div className="py-2 max-h-72 overflow-y-auto">
              {results.length === 0 ? (
                <p className="text-center text-sm py-8" style={{ color: "var(--text3)" }}>No results for &ldquo;{query}&rdquo;</p>
              ) : (
                results.map((r) => (
                  <button key={r.href} onClick={() => go(r.href)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--bg3)]">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "var(--bg3)" }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text3)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{r.title}</p>
                      <p className="text-xs truncate" style={{ color: "var(--text3)" }}>{r.desc}</p>
                    </div>
                    <svg className="w-3.5 h-3.5 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text3)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
