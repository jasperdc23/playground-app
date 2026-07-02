import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import SidebarNav from "@/components/sidebar-nav";
import Chatbot from "@/components/chatbot";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  return (
    <div className="min-h-screen flex" style={{ background: "#0a0c12" }}>

      {/* Sidebar */}
      <aside className="w-[72px] shrink-0 flex flex-col items-center py-4 gap-2 z-20"
        style={{ background: "#0d1117", borderRight: "1px solid #1a2030" }}>

        {/* Logo mark */}
        <Link href="/dashboard" className="mb-3 flex items-center justify-center w-10 h-10">
          <Image src="/eplayment-logo.svg" alt="Eplayment" width={28} height={28} className="object-contain" />
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
            <Image src="/eplayment-logo.svg" alt="Eplayment" width={130} height={18} className="object-contain" />
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
