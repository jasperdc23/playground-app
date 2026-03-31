import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl w-full text-center space-y-6 py-24">
        <div className="animate-fade-in inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium mb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Now live on Vercel
        </div>

        <h1 className="animate-fade-in animate-delay-100 text-6xl sm:text-7xl font-bold tracking-tight leading-tight">
          Build something{" "}
          <span className="gradient-text">amazing</span>
        </h1>

        <p className="animate-fade-in animate-delay-200 text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          A full-stack Next.js playground with authentication, a free PostgreSQL
          database, and instant Vercel deployment.
        </p>

        <div className="animate-fade-in animate-delay-300 flex items-center justify-center gap-4 pt-4 flex-wrap">
          <Link
            href="/sign-up"
            className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all duration-200 px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-indigo-900/40 hover:shadow-indigo-900/60"
          >
            Get started free
          </Link>
          <Link
            href="/sign-in"
            className="text-gray-200 hover:text-white transition-all duration-200 px-8 py-3.5 rounded-xl font-semibold text-lg border border-white/10 hover:border-white/25 hover:bg-white/5 active:scale-95"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Feature cards */}
      <div className="relative max-w-4xl w-full grid grid-cols-1 sm:grid-cols-3 gap-5 pb-24">
        {[
          { title: "Authentication", desc: "GitHub, Google, or email & password — all handled securely.", icon: "🔐", delay: "animate-delay-100" },
          { title: "Free Database",  desc: "PostgreSQL on Neon with Prisma ORM. Zero cost to start.",    icon: "🗄️", delay: "animate-delay-200" },
          { title: "Auto Deploy",    desc: "Live on Vercel with automatic deployments on every push.",    icon: "🚀", delay: "animate-delay-300" },
        ].map((f) => (
          <div
            key={f.title}
            className={`animate-fade-in ${f.delay} glass rounded-2xl p-6 space-y-3 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 cursor-default`}
          >
            <div className="text-3xl">{f.icon}</div>
            <h3 className="font-semibold text-white text-lg">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
