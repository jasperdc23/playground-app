import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          Playground<span className="text-indigo-400">.</span>
        </Link>

        <div className="flex items-center gap-4">
          {userId ? (
            <>
              <Link href="/dashboard" className="text-sm text-gray-300 hover:text-white transition">
                Dashboard
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <Link href="/sign-in" className="text-sm text-gray-300 hover:text-white transition">
                Sign in
              </Link>
              <Link href="/sign-up" className="text-sm bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg text-white font-medium">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
