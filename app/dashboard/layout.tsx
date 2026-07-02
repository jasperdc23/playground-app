import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import SidebarNav from "@/components/sidebar-nav";
import Chatbot from "@/components/chatbot";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const hasLogo = fs.existsSync(path.join(process.cwd(), "public", "logo.png"));

  return (
    <div className="min-h-screen flex" style={{ background: "#0a0c12" }}>

      {/* Sidebar */}
      <aside className="w-[72px] shrink-0 flex flex-col items-center py-4 gap-2 z-20"
        style={{ background: "#0d1117", borderRight: "1px solid #1a2030" }}>

        {/* Logo mark */}
        <Link href="/dashboard" className="mb-3 flex items-center justify-center w-10 h-10">
          {hasLogo ? (
            <Image src="/logo.png" alt="Eplayment" width={36} height={36} className="object-contain" />
          ) : (
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <path d="M6 8h16l-4 5H6V8z" fill="#4ade80" />
              <path d="M6 14h10l-4 5H6v-5z" fill="#4ade80" opacity="0.7" />
              <path d="M6 20h6l-4 5H6v-5z" fill="#4ade80" opacity="0.4" />
              <path d="M10 28l8-10h6l-8 10h-6z" fill="#7c3aed" />
            </svg>
          )}
        </Link>

        <SidebarNav />

        {/* User at bottom */}
        <div className="mt-auto pt-2">
          <UserButton />
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-14 flex items-center justify-between px-6 shrink-0"
          style={{ background: "#0d1117", borderBottom: "1px solid #1a2030" }}>
          <div className="flex items-center gap-3">
            {hasLogo ? (
              <Image src="/logo.png" alt="Eplayment" width={120} height={28} className="object-contain" />
            ) : (
              <span className="font-bold text-white text-sm tracking-wide">
                E<span style={{ color: "#4ade80" }}>PLAYMENT</span>
                <span className="text-gray-500 font-normal ml-2 text-xs">AI Hub</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", color: "#4ade80" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {user?.firstName ?? "User"}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      <Chatbot />
    </div>
  );
}
