"use client";

export default function Mascot({ size = 48, expression = "happy", className = "" }: {
  size?: number;
  expression?: "happy" | "wink" | "surprised" | "sleeping" | "cool";
  className?: string;
}) {
  const faces: Record<string, string> = {
    happy: "😄",
    wink: "😉",
    surprised: "😮",
    sleeping: "😴",
    cool: "😎",
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Poop body */}
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="32" cy="44" rx="22" ry="14" fill="#7c4a1e" />
        <ellipse cx="32" cy="40" rx="18" ry="16" fill="#8B5E3C" />
        <ellipse cx="32" cy="34" rx="14" ry="13" fill="#9E6B40" />
        {/* Swirl top */}
        <ellipse cx="32" cy="24" rx="10" ry="10" fill="#B07C4D" />
        <ellipse cx="32" cy="18" rx="7" ry="7" fill="#C49060" />
        <ellipse cx="32" cy="13" rx="4.5" ry="4.5" fill="#D4A06A" />
        {/* Shine */}
        <ellipse cx="26" cy="22" rx="3" ry="2" fill="white" opacity="0.25" transform="rotate(-20 26 22)" />
      </svg>
      {/* Face overlay */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: size * 0.22 }}>
        <span style={{ fontSize: size * 0.28, lineHeight: 1 }}>{faces[expression]}</span>
      </div>
    </div>
  );
}
