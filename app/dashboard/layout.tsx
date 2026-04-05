import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import DashboardNav from "@/components/dashboard-nav";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();

  return (
    <div className="min-h-screen flex" style={{ background: "#030712" }}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 flex flex-col" style={{ background: "#0d1117", borderRight: "1px solid #1f2937" }}>
        {/* Logo */}
        <div className="h-16 flex items-center px-5" style={{ borderBottom: "1px solid #1f2937" }}>
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            Playground<span className="text-indigo-400">.</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-3 mb-2">Menu</p>
          <DashboardNav />
        </nav>

        {/* User */}
        <div className="p-3" style={{ borderTop: "1px solid #1f2937" }}>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors">
            <UserButton />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {user?.fullName ?? user?.firstName ?? "User"}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8" style={{ background: "#0a0f1a", borderBottom: "1px solid #1f2937" }}>
          <div>
            <p className="text-sm font-semibold text-white">
              Welcome back, {user?.firstName ?? "User"}
            </p>
            <p className="text-xs text-gray-400">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-green-400">Connected</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
