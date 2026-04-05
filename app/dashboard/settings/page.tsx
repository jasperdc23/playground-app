import { currentUser } from "@clerk/nextjs/server";
import { UserProfile } from "@clerk/nextjs";

export default async function SettingsPage() {
  const user = await currentUser();

  return (
    <div className="max-w-3xl space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1 text-sm">Manage your account, security, and preferences</p>
      </div>

      {/* Account info */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "#111827", border: "1px solid #1f2937" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
          <h2 className="font-semibold text-white">Account Info</h2>
          <p className="text-xs text-gray-400 mt-0.5">Your current account details</p>
        </div>
        <div>
          {[
            { label: "Full Name",  value: user?.fullName ?? "—" },
            { label: "Email",      value: user?.emailAddresses[0]?.emailAddress ?? "—" },
            { label: "User ID",    value: user?.id ?? "—" },
            { label: "Verified",   value: user?.emailAddresses[0]?.verification?.status === "verified" ? "✅ Verified" : "❌ Not verified" },
            { label: "Auth Type",  value: user?.externalAccounts?.length ? user.externalAccounts[0].provider : "Email & Password" },
          ].map((row, i) => (
            <div key={row.label} className="flex items-center justify-between px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid #1f2937" }}>
              <span className="text-sm font-medium text-gray-400">{row.label}</span>
              <span className="text-sm font-semibold text-white truncate max-w-[260px]">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clerk profile */}
      <div className="space-y-3">
        <div>
          <h2 className="font-semibold text-white">Manage Profile</h2>
          <p className="text-sm text-gray-400 mt-0.5">Update your name, picture, password, and connected accounts.</p>
        </div>
        <UserProfile />
      </div>
    </div>
  );
}
