"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

type Status = "Live" | "Beta" | "In Progress" | "Planned";
type Platform = "Claude" | "Gemini" | "ChatGPT" | "Copilot" | "Other";
type Category = "Product" | "Dev Tools" | "Design" | "Operations" | "Security" | "HR & Admin" | "Marketing";

interface Initiative {
  id: string;
  name: string;
  description: string;
  platform: Platform;
  status: Status;
  category: Category;
  addedBy: string;
  link?: string;
  date: string;
}

const SEED: Initiative[] = [
  {
    id: "1",
    name: "PIXEL Product Expert",
    description: "Claude-powered assistant with deep context about PIXEL for Creators — product features, FAQs, roadmap, and knowledge base. Helps the team answer product questions instantly.",
    platform: "Claude",
    status: "Live",
    category: "Product",
    addedBy: "Product Team",
    link: "https://pixelforcreators.com",
    date: "2026-06-01",
  },
  {
    id: "2",
    name: "PIXEL Design System",
    description: "Claude-powered design assistant trained on PIXEL's branding, component library, and visual language. Generates on-brand copy, color suggestions, and design direction.",
    platform: "Claude",
    status: "Live",
    category: "Design",
    addedBy: "Design Team",
    date: "2026-06-10",
  },
  {
    id: "3",
    name: "Ely & Echo Image Generation",
    description: "AI image generation pipeline for PIXEL's mascots Ely and Echo. Produces consistent, on-brand character illustrations for campaigns, docs, and UI assets.",
    platform: "Other",
    status: "Beta",
    category: "Design",
    addedBy: "Creative Team",
    date: "2026-06-15",
  },
  {
    id: "4",
    name: "Dev Security Scanner",
    description: "AI-powered security analysis tool that scans pull requests and codebases for vulnerabilities, secrets exposure, and compliance issues before code ships.",
    platform: "Claude",
    status: "Beta",
    category: "Security",
    addedBy: "Engineering",
    date: "2026-06-20",
  },
  {
    id: "5",
    name: "Product Owner Bot",
    description: "Slack bot connected to Jira that lets the PO team ask quick questions about tickets, sprint status, blockers, and priorities — no context switching needed.",
    platform: "Claude",
    status: "In Progress",
    category: "Operations",
    addedBy: "Product Team",
    date: "2026-06-25",
  },
  {
    id: "6",
    name: "Product Manager Bot",
    description: "PM-focused Jira assistant for quick ticket lookups, sprint summaries, and roadmap queries. Answers in plain English so PMs stay in flow.",
    platform: "Claude",
    status: "In Progress",
    category: "Operations",
    addedBy: "Product Team",
    date: "2026-06-28",
  },
];

const STATUS_CONFIG: Record<Status, { color: string; bg: string; dot: string }> = {
  "Live":        { color: "#16a34a", bg: "rgba(22,163,74,0.1)",   dot: "#16a34a" },
  "Beta":        { color: "#d97706", bg: "rgba(217,119,6,0.1)",   dot: "#d97706" },
  "In Progress": { color: "#6D5BD0", bg: "rgba(109,91,208,0.1)",  dot: "#6D5BD0" },
  "Planned":     { color: "#6b7280", bg: "rgba(107,114,128,0.1)", dot: "#6b7280" },
};

const PLATFORM_CONFIG: Record<Platform, { color: string; bg: string; label: string }> = {
  "Claude":  { color: "#CC785C", bg: "rgba(204,120,92,0.12)",  label: "Claude" },
  "Gemini":  { color: "#1A73E8", bg: "rgba(26,115,232,0.12)",  label: "Gemini" },
  "ChatGPT": { color: "#10A37F", bg: "rgba(16,163,127,0.12)", label: "ChatGPT" },
  "Copilot": { color: "#7C3AED", bg: "rgba(124,58,237,0.12)",  label: "Copilot" },
  "Other":   { color: "#6b7280", bg: "rgba(107,114,128,0.12)", label: "Other" },
};

const PLATFORMS: Platform[]  = ["Claude", "Gemini", "ChatGPT", "Copilot", "Other"];
const STATUSES: Status[]      = ["Live", "Beta", "In Progress", "Planned"];
const CATEGORIES: Category[]  = ["Product", "Dev Tools", "Design", "Operations", "Security", "HR & Admin", "Marketing"];

const STORAGE_KEY = "ep_ai_initiatives";

function Portal({ children }: { children: React.ReactNode }) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { ref.current = document.body; setMounted(true); }, []);
  return mounted && ref.current ? createPortal(children, ref.current) : null;
}

function load(): Initiative[] {
  if (typeof window === "undefined") return SEED;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : SEED;
  } catch { return SEED; }
}

function save(items: Initiative[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
}

/* ── blank form ──────────────────────────────────────────── */
const BLANK = { name: "", description: "", platform: "Claude" as Platform, status: "In Progress" as Status, category: "Product" as Category, addedBy: "", link: "" };

export default function AIInitiativesPage() {
  const [items, setItems]         = useState<Initiative[]>([]);
  const [filter, setFilter]       = useState<Platform | "All">("All");
  const [statusFilter, setStatus] = useState<Status | "All">("All");
  const [search, setSearch]       = useState("");
  const [modal, setModal]         = useState(false);
  const [form, setForm]           = useState(BLANK);
  const [saving, setSaving]       = useState(false);
  const [viewItem, setViewItem]   = useState<Initiative | null>(null);
  const [toast, setToast]         = useState<string | null>(null);

  useEffect(() => { setItems(load()); }, []);

  const filtered = items.filter(i => {
    if (filter !== "All" && i.platform !== filter) return false;
    if (statusFilter !== "All" && i.status !== statusFilter) return false;
    if (search && !i.name.toLowerCase().includes(search.toLowerCase()) && !i.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      const next: Initiative[] = [
        { ...form, id: Date.now().toString(), date: new Date().toISOString().split("T")[0] },
        ...items,
      ];
      setItems(next);
      save(next);
      setModal(false);
      setForm(BLANK);
      setSaving(false);
      setToast(form.name);
      setTimeout(() => setToast(null), 3500);
    }, 400);
  }

  const counts = {
    all: items.length,
    live: items.filter(i => i.status === "Live").length,
    inProgress: items.filter(i => i.status === "In Progress" || i.status === "Beta").length,
  };

  return (
    <div className="w-full space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(109,91,208,0.12)", color: "#6D5BD0", border: "1px solid rgba(109,91,208,0.2)" }}>
              Company-wide
            </span>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>AI Initiatives</h1>
          <p className="text-sm mt-1" style={{ color: "var(--text3)" }}>
            Tools and automations our team is building with AI — share yours too.
          </p>
        </div>
        <button onClick={() => setModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0 transition-all hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #70C250, #6D5BD0)" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Initiative
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total initiatives", value: counts.all, color: "#6D5BD0", bg: "rgba(109,91,208,0.08)" },
          { label: "Live & deployed",   value: counts.live, color: "#16a34a", bg: "rgba(22,163,74,0.08)" },
          { label: "In development",    value: counts.inProgress, color: "#d97706", bg: "rgba(217,119,6,0.08)" },
        ].map(s => (
          <div key={s.label} className="rounded-2xl p-4" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
            <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters + search */}
      <div className="space-y-3">

        {/* Search + Status dropdown row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 flex-1 px-3.5 py-2.5 rounded-xl" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text3)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search initiatives..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--text)" }} />
            {search && (
              <button onClick={() => setSearch("")} style={{ color: "var(--text3)" }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Status dropdown */}
          <div className="relative shrink-0">
            <label className="absolute -top-2 left-3 text-[10px] font-bold uppercase tracking-wider px-1 z-10"
              style={{ background: "var(--bg)", color: "var(--text3)" }}>Status</label>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl"
              style={{ background: "var(--bg2)", border: `1px solid ${statusFilter !== "All" ? STATUS_CONFIG[statusFilter as Status]?.dot + "55" : "var(--border)"}`, minWidth: 160 }}>
              {statusFilter !== "All" ? (
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: STATUS_CONFIG[statusFilter as Status]?.dot }} />
              ) : (
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text3)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
              )}
              <select
                value={statusFilter}
                onChange={e => setStatus(e.target.value as Status | "All")}
                className="flex-1 bg-transparent outline-none text-sm font-medium appearance-none cursor-pointer"
                style={{ color: statusFilter !== "All" ? STATUS_CONFIG[statusFilter as Status]?.color : "var(--text2)" }}>
                <option value="All">All statuses</option>
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text3)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Platform pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-wider shrink-0" style={{ color: "var(--text3)" }}>Platform:</span>
          {(["All", ...PLATFORMS] as const).map(p => {
            const active = filter === p;
            const pc = p !== "All" ? PLATFORM_CONFIG[p] : null;
            return (
              <button key={p} onClick={() => setFilter(p)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105"
                style={active
                  ? { background: pc ? pc.bg : "rgba(109,91,208,0.15)", color: pc ? pc.color : "#6D5BD0", border: `1px solid ${pc ? pc.color + "50" : "rgba(109,91,208,0.4)"}` }
                  : { background: "var(--bg2)", color: "var(--text3)", border: "1px solid var(--border)" }}>
                {pc && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: active ? pc.color : "var(--text3)" }} />}
                {p === "All" ? "All" : p}
              </button>
            );
          })}

          {/* Clear — only when any filter active */}
          {(filter !== "All" || statusFilter !== "All" || search) && (
            <button
              onClick={() => { setFilter("All"); setStatus("All"); setSearch(""); }}
              className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all"
              style={{ background: "rgba(239,68,68,0.08)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filters
            </button>
          )}
        </div>

      </div>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16" style={{ color: "var(--text3)" }}>
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold" style={{ color: "var(--text2)" }}>No initiatives found</p>
          <p className="text-sm mt-1">Try adjusting filters or add the first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(item => {
            const sc = STATUS_CONFIG[item.status];
            const pc = PLATFORM_CONFIG[item.platform];
            return (
              <div key={item.id}
                className="rounded-2xl p-5 flex flex-col gap-3 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
                onClick={() => setViewItem(item)}>

                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: sc.bg, color: sc.color }}>
                      <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ background: sc.dot, verticalAlign: "middle" }} />
                      {item.status}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: pc.bg, color: pc.color }}>
                      {pc.label}
                    </span>
                  </div>
                  <span className="text-[10px] shrink-0 mt-0.5" style={{ color: "var(--text3)" }}>{item.date}</span>
                </div>

                {/* Name + desc */}
                <div>
                  <h3 className="font-bold text-sm leading-snug" style={{ color: "var(--text)" }}>{item.name}</h3>
                  <p className="text-xs mt-1.5 leading-relaxed line-clamp-2" style={{ color: "var(--text3)" }}>{item.description}</p>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-1">
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "var(--bg3)", color: "var(--text3)" }}>
                    {item.category}
                  </span>
                  <span className="text-[10px]" style={{ color: "var(--text3)" }}>by {item.addedBy}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Add modal ──────────────────────────────────────── */}
      {modal && (
      <Portal>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setModal(false)}>
          <div className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
            onClick={e => e.stopPropagation()}>

            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <h2 className="font-bold text-base" style={{ color: "var(--text)" }}>Add AI Initiative</h2>
                <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>Share a tool or automation you&apos;re building with AI</p>
              </div>
              <button onClick={() => setModal(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "var(--bg3)", color: "var(--text3)" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text2)" }}>Initiative name *</label>
                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. PIXEL Product Expert"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text2)" }}>Description *</label>
                <textarea required value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  placeholder="What does this tool do? Who does it help?"
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text2)" }}>AI Platform *</label>
                  <select value={form.platform} onChange={e => setForm(f => ({ ...f, platform: e.target.value as Platform }))}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }}>
                    {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text2)" }}>Status *</label>
                  <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Status }))}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }}>
                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text2)" }}>Category *</label>
                  <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as Category }))}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text2)" }}>Added by *</label>
                  <input required value={form.addedBy} onChange={e => setForm(f => ({ ...f, addedBy: e.target.value }))}
                    placeholder="Your name or team"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text2)" }}>Link <span style={{ color: "var(--text3)" }}>(optional)</span></label>
                <input value={form.link} onChange={e => setForm(f => ({ ...f, link: e.target.value }))}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }} />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setModal(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  style={{ background: "var(--bg3)", color: "var(--text2)", border: "1px solid var(--border)" }}>
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #70C250, #6D5BD0)" }}>
                  {saving ? "Adding…" : "Add Initiative"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </Portal>
      )}

      {/* ── Detail modal ───────────────────────────────────── */}
      {viewItem && (
      <Portal>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setViewItem(null)}>
          <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
            onClick={e => e.stopPropagation()}>

            <div className="px-6 py-5">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: STATUS_CONFIG[viewItem.status].bg, color: STATUS_CONFIG[viewItem.status].color }}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full mr-1 animate-pulse" style={{ background: STATUS_CONFIG[viewItem.status].dot, verticalAlign: "middle" }} />
                  {viewItem.status}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: PLATFORM_CONFIG[viewItem.platform].bg, color: PLATFORM_CONFIG[viewItem.platform].color }}>
                  {viewItem.platform}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "var(--bg3)", color: "var(--text3)" }}>
                  {viewItem.category}
                </span>
              </div>

              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>{viewItem.name}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{viewItem.description}</p>

              <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
                <div>
                  <p className="text-xs" style={{ color: "var(--text3)" }}>Added by <span className="font-semibold" style={{ color: "var(--text2)" }}>{viewItem.addedBy}</span></p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text3)" }}>{viewItem.date}</p>
                </div>
                <div className="flex gap-2">
                  {viewItem.link && (
                    <a href={viewItem.link} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      style={{ background: "var(--bg3)", color: "var(--text2)", border: "1px solid var(--border)" }}>
                      View link ↗
                    </a>
                  )}
                  <button onClick={() => setViewItem(null)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold text-white transition-all"
                    style={{ background: "#6D5BD0" }}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Portal>
      )}

      {/* ── Snackbar ───────────────────────────────────────── */}
      <Portal>
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-300"
          style={{
            transform: `translateX(-50%) translateY(${toast ? "0" : "120%"})`,
            opacity: toast ? 1 : 0,
            pointerEvents: toast ? "auto" : "none",
          }}>
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl"
            style={{ background: "#1a1a2e", border: "1px solid rgba(112,194,80,0.3)", minWidth: 260 }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(112,194,80,0.15)" }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="#70C250" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{toast} added!</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>Initiative is now live on the board.</p>
            </div>
          </div>
        </div>
      </Portal>

    </div>
  );
}
