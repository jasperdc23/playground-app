import { ClerkProvider } from "@clerk/nextjs";

export default function PoopleLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#15803d",
          colorBackground: "#ffffff",
          colorInputBackground: "#f9fafb",
          colorInputText: "#111827",
          colorText: "#111827",
          colorTextSecondary: "#6b7280",
          borderRadius: "0.75rem",
        },
        elements: {
          card: "shadow-xl border border-gray-100",
          formButtonPrimary: "!bg-green-700 hover:!bg-green-600 !text-white",
          footerActionLink: "!text-green-700",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
