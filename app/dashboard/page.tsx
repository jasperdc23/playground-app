import { auth } from "@/auth";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth();

  const stats = [
    { label: "Account Status", value: "Active",   sub: "All systems operational", color: "text-green-400" },
    { label: "Auth Provider", value: session?.user?.image ? "OAuth" : "Email", sub: "Signed in method", color: "text-indigo-400" },
    { label: "Member Since",  value: "2026",       sub: "Account created",        color: "text-violet-400" },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      {/* Welcome */}
      <div className="flex items-center gap-5">
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt="avatar"
            width={64}
            height={64}
            className="rounded-2xl ring-2 ring-indigo-500/40"
          />
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-2xl font-bold shrink-0">
            {session?.user?.name?.[0]?.toUpperCase() ?? "U"}
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Good day, {session?.user?.name?.split(" ")[0] ?? "there"} 👋
          </h1>
          <p className="text-gray-400 mt-0.5">{session?.user?.email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`glass rounded-2xl p-5 space-y-1 animate-fade-in animate-delay-${(i + 1) * 100}`}
          >
            <p className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-500">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="glass rounded-2xl p-6 space-y-4">
        <h2 className="font-semibold text-white text-lg">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "⚙️", label: "Edit your profile", desc: "Update your name and preferences", href: "/dashboard/settings" },
            { icon: "🔐", label: "Security",           desc: "Manage your password and sessions",  href: "/dashboard/settings" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 p-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 hover:border-white/15 rounded-xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="glass rounded-2xl p-6 space-y-4">
        <h2 className="font-semibold text-white text-lg">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { icon: "🔑", text: "Signed in successfully",       time: "Just now"     },
            { icon: "✅", text: "Account created",               time: "Today"        },
            { icon: "🗄️", text: "Database connected via Neon",  time: "Today"        },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
              <span className="text-lg">{item.icon}</span>
              <p className="flex-1 text-sm text-gray-300">{item.text}</p>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
