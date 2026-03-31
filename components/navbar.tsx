import { auth, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          Playground<span className="text-indigo-400">.</span>
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <div className="flex items-center gap-3">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full ring-2 ring-indigo-400"
                  />
                )}
                <span className="text-gray-300 text-sm hidden sm:block">
                  {session.user.name ?? session.user.email}
                </span>
              </div>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="text-sm bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg text-white font-medium"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
