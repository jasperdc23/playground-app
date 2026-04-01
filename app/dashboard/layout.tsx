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
    <div className="min-h-screen flex bg-[#030712]">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 flex flex-col border-r border-white/[0.08]" style={{ background: "rgba(255,255,255,0.02)" }}>
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-white/[0.08]">
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            Playground<span className="text-indigo-400">.</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3">
          <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest px-3 mb-2">Menu</p>
          <DashboardNav />
        </nav>

        {/* User */}
        <div className="p-3 border-t border-white/[0.08]">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors cursor-default">
            <UserButton />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.fullName ?? user?.firstName ?? "User"}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/[0.08]" style={{ background: "rgba(255,255,255,0.01)" }}>
          <div>
            <p className="text-sm font-semibold text-white">
              {user?.fullName ? `Welcome back, ${user.fullName.split(" ")[0]}` : "Dashboard"}
            </p>
            <p className="text-xs text-gray-500">{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-400">Connected</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
