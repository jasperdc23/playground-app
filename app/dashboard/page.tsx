import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 pt-16">
      <div className="max-w-2xl w-full text-center space-y-6 py-24">
        <div className="flex justify-center">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt="avatar"
              width={80}
              height={80}
              className="rounded-full ring-4 ring-indigo-500/30"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold">
              {session.user.name?.[0] ?? session.user.email?.[0]}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            Welcome, {session.user.name ?? "there"}!
          </h1>
          <p className="text-gray-400 mt-2">{session.user.email}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-3">
          <h2 className="font-semibold text-lg">You&apos;re signed in</h2>
          <p className="text-gray-400 text-sm">
            This is your dashboard. Start building your app here.
          </p>
        </div>
      </div>
    </main>
  );
}
