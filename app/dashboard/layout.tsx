import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import SidebarNav from "@/components/sidebar-nav";
import Chatbot from "@/components/chatbot";
import ThemeToggle from "@/components/theme-toggle";
import Tour from "@/components/tour";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>

      {/* Sidebar */}
      <aside className="w-20 shrink-0 flex flex-col items-center py-5 gap-3 z-20"
        style={{ background: "var(--bg2)", borderRight: "1px solid var(--border)" }}>

        {/* EP Logomark — bigger */}
        <Link href="/dashboard" className="mb-4 flex items-center justify-center w-12 h-12 p-1">
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
        <header className="h-14 flex items-center justify-between px-8 shrink-0"
          style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3">
            <Image src="/eplayment-logo.svg" alt="Eplayment" width={140} height={20} className="object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium" style={{ color: "var(--text3)" }}>
              {user?.firstName ?? "User"}
            </span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" title="Connected" />
          </div>
        </header>

        {/* Content — proper padding */}
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>

      <Chatbot />
      <Tour />
    </div>
  );
}
