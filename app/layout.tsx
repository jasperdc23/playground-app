import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes"; // eslint-disable-line @typescript-eslint/no-unused-vars

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playground App",
  description: "A Next.js playground with authentication",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#6366f1",
          colorBackground: "#0f1117",
          colorInputBackground: "#ffffff0d",
          colorInputText: "#ffffff",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-geist-sans)",
        },
        elements: {
          card: "shadow-2xl border border-white/10",
          formButtonPrimary: "bg-indigo-600 hover:bg-indigo-500 transition-all",
          footerActionLink: "text-indigo-400 hover:text-indigo-300",
        },
      }}
    >
      <html lang="en" className={`${geist.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col bg-[#030712] text-white">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
