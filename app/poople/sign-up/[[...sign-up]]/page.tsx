import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function PoopleSignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10" style={{ background: "#f0fdf4" }}>
      <div className="mb-6 text-center">
        <div className="text-7xl mb-3">💩</div>
        <h1 className="text-3xl font-extrabold" style={{ color: "#15803d" }}>Join Poople Maps</h1>
        <p className="text-gray-500 mt-1 text-base">Track, rate & conquer restrooms 🏆</p>
      </div>

      <SignUp
        routing="path"
        path="/poople/sign-up"
        signInUrl="/poople/sign-in"
        fallbackRedirectUrl="/poople"
      />

      <p className="mt-6 text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/poople/sign-in" className="font-semibold" style={{ color: "#15803d" }}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
