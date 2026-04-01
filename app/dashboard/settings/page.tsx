import { currentUser } from "@clerk/nextjs/server";
import { UserProfile } from "@clerk/nextjs";

export default async function SettingsPage() {
  const user = await currentUser();

  return (
    <div className="max-w-3xl space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1 text-sm">Manage your account, security and preferences</p>
      </div>

      {/* Account summary */}
      <div className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="px-6 py-4 border-b border-white/[0.08]">
          <h2 className="font-semibold text-white flex items-center gap-2">
            <span className="text-indigo-400">ℹ️</span> Account Info
          </h2>
        </div>
        <div className="divide-y divide-white/[0.05]">
          {[
            { label: "Name",      value: user?.fullName ?? "—" },
            { label: "Email",     value: user?.emailAddresses[0]?.emailAddress ?? "—" },
            { label: "User ID",   value: user?.id ?? "—" },
            { label: "Verified",  value: user?.emailAddresses[0]?.verification?.status === "verified" ? "✅ Verified" : "❌ Not verified" },
            { label: "Auth Type", value: user?.externalAccounts?.length ? user.externalAccounts[0].provider : "Email & Password" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between px-6 py-3.5">
              <span className="text-sm text-gray-400">{row.label}</span>
              <span className="text-sm text-white font-medium truncate max-w-[260px]">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clerk profile manager */}
      <div className="space-y-3">
        <h2 className="font-semibold text-white flex items-center gap-2">
          <span className="text-indigo-400">👤</span> Manage Profile
        </h2>
        <p className="text-sm text-gray-400">Update your name, profile picture, password, and connected accounts.</p>
        <UserProfile />
      </div>
    </div>
  );
}
