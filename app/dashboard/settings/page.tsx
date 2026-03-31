import { auth } from "@/auth";
import Image from "next/image";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1 text-sm">Manage your account preferences</p>
      </div>

      {/* Profile */}
      <div className="glass rounded-2xl p-6 space-y-5">
        <h2 className="font-semibold text-white flex items-center gap-2">
          <span className="text-indigo-400">👤</span> Profile
        </h2>
        <div className="flex items-center gap-4">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="avatar"
              width={64}
              height={64}
              className="rounded-2xl ring-2 ring-indigo-500/40"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-2xl font-bold">
              {session?.user?.name?.[0]?.toUpperCase() ?? "U"}
            </div>
          )}
          <div>
            <p className="font-medium text-white">{session?.user?.name ?? "No name set"}</p>
            <p className="text-sm text-gray-400">{session?.user?.email}</p>
            <p className="text-xs text-gray-500 mt-1">
              {session?.user?.image ? "OAuth account — managed by your provider" : "Email account"}
            </p>
          </div>
        </div>
      </div>

      {/* Account info */}
      <div className="glass rounded-2xl p-6 space-y-4">
        <h2 className="font-semibold text-white flex items-center gap-2">
          <span className="text-indigo-400">ℹ️</span> Account Info
        </h2>
        <div className="space-y-3">
          {[
            { label: "Name",      value: session?.user?.name   ?? "—" },
            { label: "Email",     value: session?.user?.email  ?? "—" },
            { label: "User ID",   value: session?.user?.id     ?? "—" },
            { label: "Auth Type", value: session?.user?.image ? "OAuth (GitHub / Google)" : "Email & Password" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
              <span className="text-sm text-gray-400">{row.label}</span>
              <span className="text-sm text-white font-medium truncate max-w-[240px]">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Danger */}
      <div className="glass rounded-2xl p-6 space-y-4 border-red-500/10">
        <h2 className="font-semibold text-red-400 flex items-center gap-2">
          <span>⚠️</span> Danger Zone
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white font-medium">Sign out of all sessions</p>
            <p className="text-xs text-gray-500 mt-0.5">You will be redirected to the login page</p>
          </div>
          <form action={async () => {
            "use server";
            const { signOut } = await import("@/auth");
            await signOut({ redirectTo: "/" });
          }}>
            <button
              type="submit"
              className="text-sm bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 px-4 py-2 rounded-lg transition-all duration-200 active:scale-95"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
