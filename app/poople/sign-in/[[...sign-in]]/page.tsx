import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function PoopleSignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10" style={{ background: "#f0fdf4" }}>
      {/* Mascot + brand */}
      <div className="mb-6 text-center">
        <div className="text-7xl mb-3">💩</div>
        <h1 className="text-3xl font-extrabold" style={{ color: "#15803d" }}>Poople Maps</h1>
        <p className="text-gray-500 mt-1 text-base">Find the cleanest loo near you 🚽</p>
      </div>

      <SignIn
        routing="path"
        path="/poople/sign-in"
        signUpUrl="/poople/sign-up"
        fallbackRedirectUrl="/poople"
      />

      <p className="mt-6 text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/poople/sign-up" className="font-semibold" style={{ color: "#15803d" }}>
          Sign up free
        </Link>
      </p>
    </div>
  );
}
