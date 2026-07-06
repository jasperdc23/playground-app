"use client";

import { UserProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function UserProfileThemed() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    function check() {
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    }
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <UserProfile
      appearance={{
        baseTheme: undefined,
        variables: dark ? {
          colorBackground: "#1a1a2e",
          colorInputBackground: "#0f172a",
          colorText: "#f8fafc",
          colorTextSecondary: "#94a3b8",
          colorNeutral: "#334155",
          colorPrimary: "#70C250",
          borderRadius: "12px",
        } : {
          colorBackground: "#ffffff",
          colorInputBackground: "#f8fafc",
          colorText: "#0f172a",
          colorTextSecondary: "#64748b",
          colorNeutral: "#e2e8f0",
          colorPrimary: "#70C250",
          borderRadius: "12px",
        },
        elements: {
          rootBox: "w-full",
          card: "shadow-none border-0 rounded-2xl w-full",
          navbar: dark
            ? "bg-[#111827] border-r border-[#1f2937]"
            : "bg-[#f8fafc] border-r border-[#e2e8f0]",
          navbarButton: dark ? "text-slate-300" : "text-slate-600",
          navbarButtonActive: "text-[#70C250]",
          pageScrollBox: "p-0",
          profileSectionTitle: dark ? "text-white font-semibold" : "text-slate-900 font-semibold",
          profileSectionTitleText: dark ? "text-white" : "text-slate-900",
          profileSectionContent: dark ? "text-slate-300" : "text-slate-700",
          formFieldInput: dark
            ? "bg-[#0f172a] border-[#1f2937] text-white rounded-xl"
            : "bg-white border-slate-200 text-slate-900 rounded-xl",
          formButtonPrimary: "bg-[#70C250] hover:bg-[#5ea83d] text-white rounded-xl font-semibold",
          badge: dark ? "bg-[#1f2937] text-slate-300" : "bg-slate-100 text-slate-600",
          avatarBox: "rounded-xl",
        },
      }}
    />
  );
}
