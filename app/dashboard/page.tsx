import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();
  const name = user?.fullName ?? user?.firstName ?? "there";
  const email = user?.emailAddresses[0]?.emailAddress;
  const image = user?.imageUrl;
  const provider = user?.externalAccounts?.[0]?.provider ?? "email";

  const stats = [
    { label: "Account Status", value: "Active",   sub: "All systems operational",  valueColor: "#4ade80", borderColor: "#166534", bgColor: "rgba(74,222,128,0.08)"  },
    { label: "Auth Provider",  value: provider === "email" ? "Email" : provider.charAt(0).toUpperCase() + provider.slice(1), sub: "Sign-in method", valueColor: "#a5b4fc", borderColor: "#3730a3", bgColor: "rgba(165,180,252,0.08)" },
    { label: "Member Since",   value: new Date(user?.createdAt ?? Date.now()).getFullYear().toString(), sub: "Account created", valueColor: "#c4b5fd", borderColor: "#4c1d95", bgColor: "rgba(196,181,253,0.08)" },
  ];

  return (
    <div className="max-w-4xl space-y-6 animate-fade-in">

      {/* Welcome */}
      <div className="rounded-2xl p-6 flex items-center gap-4" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.12) 100%)", border: "1px solid rgba(99,102,241,0.3)" }}>
        {image ? (
          <img src={image} alt="avatar" className="w-14 h-14 rounded-2xl shrink-0" style={{ outline: "2px solid rgba(99,102,241,0.5)", outlineOffset: "2px" }} />
        ) : (
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 text-white" style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}>
            {name[0]?.toUpperCase()}
          </div>
        )}
        <div>
          <h1 className="text-xl font-bold text-white">Good day, {name.split(" ")[0]} 👋</h1>
          <p className="text-sm text-gray-300 mt-0.5">{email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl p-5" style={{ background: s.bgColor, border: `1px solid ${s.borderColor}` }}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{s.label}</p>
            <p className="text-2xl font-bold mt-2" style={{ color: s.valueColor }}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "#111827", border: "1px solid #1f2937" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
          <h2 className="font-semibold text-white">Quick Actions</h2>
          <p className="text-xs text-gray-400 mt-0.5">Common tasks at a glance</p>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "⚙️", label: "Settings",       desc: "Update profile and preferences",    href: "/dashboard/settings" },
            { icon: "🔐", label: "Security",        desc: "Manage password and sessions",      href: "/dashboard/settings" },
            { icon: "🏠", label: "Back to Home",    desc: "Return to the landing page",        href: "/"                   },
            { icon: "📊", label: "View Activity",   desc: "See your recent account activity",  href: "/dashboard"          },
          ].map((item) => (
            <a key={item.label} href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group active:scale-[0.98]"
              style={{ background: "#1f2937", border: "1px solid #374151" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#4f46e5")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#374151")}
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "#111827", border: "1px solid #1f2937" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
          <h2 className="font-semibold text-white">Recent Activity</h2>
          <p className="text-xs text-gray-400 mt-0.5">Your latest account events</p>
        </div>
        <div>
          {[
            { icon: "🔑", text: "Signed in successfully",       time: "Just now", timeColor: "#4ade80"  },
            { icon: "✅", text: "Account verified by Clerk",     time: "Today",    timeColor: "#60a5fa"  },
            { icon: "🗄️", text: "Database connected via Neon",  time: "Today",    timeColor: "#c4b5fd"  },
            { icon: "🚀", text: "App deployed on Vercel",        time: "Today",    timeColor: "#a5b4fc"  },
          ].map((item, i) => (
            <div key={item.text} className="flex items-center gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid #1f2937" }}>
              <span className="text-xl">{item.icon}</span>
              <p className="flex-1 text-sm font-medium text-gray-200">{item.text}</p>
              <span className="text-xs font-semibold" style={{ color: item.timeColor }}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
