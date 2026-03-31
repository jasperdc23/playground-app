import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 pt-16">
      {/* Hero */}
      <div className="max-w-4xl w-full text-center space-y-6 py-24">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-indigo-400 text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Now live on Vercel
        </div>

        <h1 className="text-6xl font-bold tracking-tight leading-tight">
          Build something{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            amazing
          </span>
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          A full-stack Next.js playground with authentication, a free PostgreSQL
          database, and instant Vercel deployment.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/sign-up"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-3 rounded-xl font-semibold text-lg"
          >
            Get started free
          </Link>
          <Link
            href="/sign-in"
            className="text-gray-300 hover:text-white transition px-8 py-3 rounded-xl font-semibold text-lg border border-white/10 hover:border-white/20"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-3 gap-6 pb-24">
        {[
          {
            title: "Authentication",
            desc: "Sign in with GitHub, Google, or email and password.",
            icon: "🔐",
          },
          {
            title: "Database",
            desc: "Free PostgreSQL on Neon with Prisma ORM.",
            icon: "🗄️",
          },
          {
            title: "Deployed",
            desc: "Live on Vercel with automatic deployments on every push.",
            icon: "🚀",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/8 transition"
          >
            <div className="text-3xl">{f.icon}</div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
