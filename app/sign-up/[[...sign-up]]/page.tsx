import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4" style={{ background: "#030712" }}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[120px]" style={{ background: "rgba(139,92,246,0.12)" }} />
      </div>

      <div className="relative w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <SignUp />
      </div>
    </main>
  );
}
