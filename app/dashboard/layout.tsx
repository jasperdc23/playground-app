import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import SidebarNav from "@/components/sidebar-nav";
import Chatbot from "@/components/chatbot";
import ThemeToggle from "@/components/theme-toggle";
import Tour from "@/components/tour";
import Search from "@/components/search";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>

      {/* Sidebar — desktop only */}
      <aside className="hidden md:flex w-[72px] shrink-0 flex-col items-center py-5 gap-3 z-20"
        style={{ background: "var(--bg2)", borderRight: "1px solid var(--border)" }}>

        {/* EP Logomark */}
        <Link href="/dashboard" className="mb-4 flex items-center justify-center" style={{ width: 44, height: 44 }}>
          <Image src="/ep-logomark.svg" alt="Eplayment" width={44} height={44} className="object-contain" />
        </Link>

        <SidebarNav />

        <div className="mt-auto flex flex-col items-center gap-3 pb-1">
          <ThemeToggle />
          <UserButton />
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Top bar */}
        <header className="h-14 flex items-center justify-between px-4 md:px-8 shrink-0"
          style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)" }}>

          {/* Mobile: EP logo + hamburger area / Desktop: just search */}
          <div className="flex items-center gap-3">
            {/* Mobile logo */}
            <Link href="/dashboard" className="md:hidden flex items-center" style={{ width: 36, height: 36 }}>
              <Image src="/ep-logomark.svg" alt="Eplayment" width={36} height={36} className="object-contain" />
            </Link>
            <Search />
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm font-medium" style={{ color: "var(--text3)" }}>
              {user?.firstName ?? "User"}
            </span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" title="Connected" />
            {/* Mobile theme toggle */}
            <div className="md:hidden"><ThemeToggle /></div>
            <UserButton />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-8 pb-24 md:pb-8">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around px-2 py-2"
        style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <MobileNavItem href="/dashboard" label="Home" icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        } />
        <MobileNavItem href="/dashboard/learn-tools" label="Tools" icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        } />
        <MobileNavItem href="/dashboard/ai-guidelines" label="Guide" icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        } />
        <MobileNavItem href="/dashboard/ai-security" label="Security" icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        } />
        <MobileNavItem href="/dashboard/settings" label="Settings" icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        } />
      </nav>

      <Chatbot />
      <Tour />
    </div>
  );
}

function MobileNavItem({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href}
      className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors"
      style={{ color: "var(--text3)" }}>
      {icon}
      <span className="text-[9px] font-semibold uppercase tracking-wider">{label}</span>
    </a>
  );
}
