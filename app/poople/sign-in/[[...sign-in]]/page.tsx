import { SignIn } from "@clerk/nextjs";
import ArtBannerSlider from "@/components/poople/ArtBannerSlider";
import Link from "next/link";

export default function PoopleSignInPage() {
  return (
    <div className="min-h-screen flex" style={{ background: "#f0fdf4" }}>
      {/* Left — art banner (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 overflow-hidden">
        <ArtBannerSlider />
      </div>

      {/* Right — sign in form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 overflow-y-auto">
        {/* Mobile brand header */}
        <div className="lg:hidden mb-8 text-center">
          <div className="text-6xl mb-2">💩</div>
          <h1 className="text-3xl font-extrabold" style={{ color: "#15803d" }}>Poople Maps</h1>
          <p className="text-gray-500 mt-1">Find the cleanest loo near you 🚽</p>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">Welcome back</h2>
            <p className="text-gray-500 mt-1 text-sm">Sign in to find your nearest restroom 🚽</p>
          </div>

          <SignIn
            routing="path"
            path="/poople/sign-in"
            signUpUrl="/poople/sign-up"
            fallbackRedirectUrl="/poople"
          />

          <p className="mt-5 text-sm text-gray-500 text-center">
            New to Poople?{" "}
            <Link href="/poople/sign-up" className="font-semibold" style={{ color: "#15803d" }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
