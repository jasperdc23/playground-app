import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();
  const name = user?.fullName ?? user?.firstName ?? "there";
  const email = user?.emailAddresses[0]?.emailAddress;
  const image = user?.imageUrl;
  const provider = user?.externalAccounts?.[0]?.provider ?? "email";

  const stats = [
    { label: "Account Status", value: "Active",   sub: "All systems operational",  color: "text-green-400",  bg: "bg-green-400/10",  border: "border-green-400/20"  },
    { label: "Auth Provider",  value: provider === "email" ? "Email" : provider.charAt(0).toUpperCase() + provider.slice(1), sub: "Sign-in method", color: "text-indigo-300", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
    { label: "Member Since",   value: new Date(user?.createdAt ?? Date.now()).getFullYear().toString(), sub: "Account created", color: "text-violet-300", bg: "bg-violet-400/10", border: "border-violet-400/20" },
  ];

  return (
    <div className="max-w-4xl space-y-8 animate-fade-in">

      {/* Welcome banner */}
      <div className="rounded-2xl p-6 flex items-center gap-5 border border-white/[0.08]" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.10) 100%)" }}>
        {image ? (
          <img src={image} alt="avatar" className="w-14 h-14 rounded-2xl ring-2 ring-indigo-500/50 shrink-0" />
        ) : (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-xl font-bold shrink-0 text-white">
            {name[0]?.toUpperCase()}
          </div>
        )}
        <div>
          <h1 className="text-xl font-bold text-white">Good day, {name.split(" ")[0]} 👋</h1>
          <p className="text-gray-400 text-sm mt-0.5">{email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 border ${s.border} ${s.bg}`}>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">{s.label}</p>
            <p className={`text-2xl font-bold mt-2 ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="px-6 py-4 border-b border-white/[0.08]">
          <h2 className="font-semibold text-white">Quick Actions</h2>
          <p className="text-xs text-gray-500 mt-0.5">Common tasks at a glance</p>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "⚙️", label: "Settings",         desc: "Update profile and preferences",  href: "/dashboard/settings" },
            { icon: "🔐", label: "Security",          desc: "Manage password and sessions",    href: "/dashboard/settings" },
            { icon: "🏠", label: "Back to Home",      desc: "Return to the landing page",      href: "/"                   },
            { icon: "📊", label: "View Activity",     desc: "See your recent account activity", href: "/dashboard"          },
          ].map((item) => (
            <a key={item.label} href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/[0.07] transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="px-6 py-4 border-b border-white/[0.08]">
          <h2 className="font-semibold text-white">Recent Activity</h2>
          <p className="text-xs text-gray-500 mt-0.5">Your latest account events</p>
        </div>
        <div className="divide-y divide-white/[0.05]">
          {[
            { icon: "🔑", text: "Signed in successfully",      time: "Just now", color: "text-green-400"  },
            { icon: "✅", text: "Account verified by Clerk",    time: "Today",    color: "text-blue-400"   },
            { icon: "🗄️", text: "Database connected via Neon", time: "Today",    color: "text-violet-400" },
            { icon: "🚀", text: "App deployed on Vercel",       time: "Today",    color: "text-indigo-400" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.02] transition-colors">
              <span className="text-lg">{item.icon}</span>
              <p className="flex-1 text-sm text-gray-300">{item.text}</p>
              <span className={`text-xs font-medium ${item.color}`}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
