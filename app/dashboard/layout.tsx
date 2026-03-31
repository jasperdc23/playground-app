import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DashboardNav from "@/components/dashboard-nav";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-white/[0.03] border-r border-white/8 flex flex-col animate-slide-left">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/8">
          <Link href="/" className="text-xl font-bold text-white">
            Playground<span className="text-indigo-400">.</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          <DashboardNav />
        </nav>

        {/* User */}
        <div className="p-4 border-t border-white/8">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full ring-2 ring-indigo-500/30"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">
                {session.user.name?.[0]?.toUpperCase() ?? session.user.email?.[0]?.toUpperCase()}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{session.user.name ?? "User"}</p>
              <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
            </div>
            <form action={async () => { "use server"; await signOut({ redirectTo: "/" }); }}>
              <button type="submit" title="Sign out" className="text-gray-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="h-16 border-b border-white/8 flex items-center px-8 bg-white/[0.02]">
          <DashboardHeader />
        </div>
        <div className="flex-1 p-8 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <div />
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-gray-400">Connected to Neon</span>
      </div>
    </div>
  );
}
