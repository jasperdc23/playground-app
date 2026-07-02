import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eplayment AI Onboarding",
  description: "Your guide to safe, effective AI adoption at Eplayment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#22c55e",
          colorBackground: "#0d1117",
          colorInputBackground: "#111827",
          colorInputText: "#f9fafb",
          colorText: "#f9fafb",
          colorTextSecondary: "#d1d5db",
          colorNeutral: "#f9fafb",
          colorShimmer: "#374151",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-geist-sans)",
        },
        elements: {
          card: "shadow-2xl !bg-gray-900 border border-gray-700",
          headerTitle: "!text-white",
          headerSubtitle: "!text-gray-300",
          socialButtonsBlockButton: "!bg-gray-800 !border-gray-600 !text-white hover:!bg-gray-700",
          socialButtonsBlockButtonText: "!text-white !font-medium",
          dividerLine: "!bg-gray-700",
          dividerText: "!text-gray-400",
          formFieldLabel: "!text-gray-200 !font-medium",
          formFieldInput: "!bg-gray-800 !border-gray-600 !text-white placeholder:!text-gray-500 focus:!border-indigo-500",
          formButtonPrimary: "!bg-green-600 hover:!bg-green-500 !text-white !font-semibold",
          footerActionText: "!text-gray-400",
          footerActionLink: "!text-green-400 hover:!text-green-300 !font-medium",
          identityPreviewText: "!text-white",
          identityPreviewEditButtonIcon: "!text-green-400",
          formFieldSuccessText: "!text-green-400",
          formFieldErrorText: "!text-red-400",
          alertText: "!text-gray-200",
          otpCodeFieldInput: "!bg-gray-800 !border-gray-600 !text-white",
          formResendCodeLink: "!text-green-400",
        },
      }}
    >
      <html lang="en" className={`${geist.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
