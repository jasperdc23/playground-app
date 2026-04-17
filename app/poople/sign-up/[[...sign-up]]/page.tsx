import { SignUp } from "@clerk/nextjs";
import ArtBannerSlider from "@/components/poople/ArtBannerSlider";
import Link from "next/link";

export default function PoopleSignUpPage() {
  return (
    <div className="min-h-screen flex" style={{ background: "#f0fdf4" }}>
      {/* Left — art banner (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 overflow-hidden">
        <ArtBannerSlider />
      </div>

      {/* Right — sign up form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 overflow-y-auto">
        {/* Mobile brand header */}
        <div className="lg:hidden mb-8 text-center">
          <div className="text-6xl mb-2">💩</div>
          <h1 className="text-3xl font-extrabold" style={{ color: "#15803d" }}>Poople Maps</h1>
          <p className="text-gray-500 mt-1">Find the cleanest loo near you 🚽</p>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">Create your account</h2>
            <p className="text-gray-500 mt-1 text-sm">Join thousands of Poopleers worldwide 🌍</p>
          </div>

          <SignUp
            routing="path"
            path="/poople/sign-up"
            signInUrl="/poople/sign-in"
            fallbackRedirectUrl="/poople"
          />

          <p className="mt-5 text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link href="/poople/sign-in" className="font-semibold" style={{ color: "#15803d" }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
