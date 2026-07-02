import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex bg-white">

      {/* Left — form */}
      <div className="flex-1 flex flex-col px-10 py-8 max-w-[520px] min-h-screen">

        {/* Logo */}
        <div className="mb-10 flex items-center gap-3">
          <Image src="/ep-logomark.svg" alt="Eplayment" width={36} height={36} className="object-contain" />
          <Image src="/eplayment-logo.svg" alt="Eplayment" width={130} height={18} className="object-contain"
            style={{ filter: "brightness(0) saturate(100%)" }} />
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Welcome back
          </h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to your Eplayment account</p>
        </div>

        {/* Clerk form */}
        <div className="flex-1">
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none p-0 bg-transparent border-0 w-full",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton:
                  "border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl h-12 font-medium",
                socialButtonsBlockButtonText: "text-gray-700 font-medium",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-400 text-sm",
                formFieldLabel: "text-gray-700 font-semibold text-sm mb-1",
                formFieldInput:
                  "border border-gray-200 rounded-xl h-12 text-gray-900 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-100 bg-white placeholder:text-gray-400",
                formButtonPrimary:
                  "bg-gray-900 hover:bg-gray-800 text-white font-semibold h-12 rounded-xl text-sm w-full transition-all",
                footerActionLink: "text-green-600 font-semibold hover:text-green-500",
                footerActionText: "text-gray-500",
                identityPreviewText: "text-gray-800",
                identityPreviewEditButtonIcon: "text-green-500",
                formFieldSuccessText: "text-green-600",
                formFieldErrorText: "text-red-500 text-xs",
                alertText: "text-gray-700",
                otpCodeFieldInput: "border-gray-200 rounded-lg",
                formResendCodeLink: "text-green-600",
              },
            }}
          />
        </div>

        {/* Help note */}
        <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <p className="text-sm text-gray-500 leading-relaxed">
            Having trouble?{" "}
            <span className="font-semibold text-gray-700">Contact your company admin</span> for access.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center gap-5">
          {["About", "Terms & Conditions", "Privacy Policy"].map((l) => (
            <span key={l} className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Right — photo panel */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">

        {/* Photo */}
        <Image
          src="/employee-photo.jpg"
          alt="Employee"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark gradient overlay — bottom */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />

        {/* Top badge */}
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-wide">Eplayment · Internal Platform</span>
          </div>
        </div>

        {/* Bottom text — big statement */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
          <p className="text-white text-4xl font-bold leading-tight max-w-sm">
            Learn AI<br />the right way.
          </p>
          <p className="text-white/60 text-sm mt-3 max-w-xs leading-relaxed">
            Your company hub for AI tools, security guidelines, and best practices.
          </p>
        </div>

      </div>

    </main>
  );
}
