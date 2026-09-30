"use client";

interface MarqueeProps {
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ reverse = false, className = "" }: MarqueeProps) {
  const items = [
    "ARCH LINUX",
    "PROXMOX VE",
    "PODMAN CONTAINERS",
    "LLAMA.CPP",
    "JELLYFIN",
    "IMMICH",
    "VAULTWARDEN",
    "*ARR STACK",
    "PYTHON",
    "BASH SCRIPTING",
    "JAVA",
    "OPENCLAW",
    "C++",
    "LOCAL AI",
  ];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-white/[0.08] bg-[#0c0c10] py-4 sm:py-5 select-none ${className}`}
    >
      {/* Subtle edge fades for smooth blending */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#08080a] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#08080a] to-transparent z-10" />

      <div
        className={reverse ? "animate-marquee-right" : "animate-marquee-left"}
      >
        {/* Double content array to ensure seamless infinite looping */}
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5 whitespace-nowrap"
          >
            <span className="font-syne font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight text-zinc-300 hover:text-[#CEFF00] transition-colors duration-200">
              {item}
            </span>
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#CEFF00] rounded-none rotate-45 inline-block opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
