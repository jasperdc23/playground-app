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
    <div className="min-h-screen flex">
      <aside className="w-64 shrink-0 bg-white/[0.03] border-r border-white/8 flex flex-col animate-slide-left">
        <div className="h-16 flex items-center px-6 border-b border-white/8">
          <Link href="/" className="text-xl font-bold text-white">
            Playground<span className="text-indigo-400">.</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <DashboardNav />
        </nav>

        <div className="p-4 border-t border-white/8">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
            <UserButton />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.fullName ?? user?.emailAddresses[0]?.emailAddress}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <div className="h-16 border-b border-white/8 flex items-center justify-end px-8 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-400">Connected to Neon</span>
          </div>
        </div>
        <div className="flex-1 p-8 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}
