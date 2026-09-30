import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arush Gupta — Linux-Native Builder Who Self-Hosts Everything",
  description:
    "Portfolio of Arush Gupta. Linux-native builder who daily-drives Arch Linux, self-hosts homelab infrastructure (Proxmox, Podman, Jellyfin, Immich), and runs local LLMs with llama.cpp.",
  keywords: [
    "Arush Gupta",
    "Linux",
    "Arch Linux",
    "Self-Hosting",
    "Homelab",
    "Proxmox",
    "Podman",
    "llama.cpp",
    "Local LLM",
    "Jellyfin",
    "Immich",
    "Vaultwarden",
  ],
  authors: [{ name: "Arush Gupta", url: "https://github.com/LMAO-LOL-LMFAO" }],
  creator: "Arush Gupta",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Arush Gupta — Linux-Native Builder Who Self-Hosts Everything",
    description:
      "Linux-native builder who daily-drives Arch Linux and self-hosts everything: Proxmox, Podman, Jellyfin, and local LLMs via llama.cpp.",
    type: "website",
    locale: "en_US",
    siteName: "Arush Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arush Gupta — Linux-Native Builder",
    description:
      "Linux-native builder who daily-drives Arch Linux, self-hosts homelab services, and runs local AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arush Gupta",
    jobTitle: "Linux-Native Builder & Systems Developer",
    description:
      "Linux-native builder who daily-drives Arch Linux and self-hosts everything on bare-metal infrastructure.",
    sameAs: [
      "https://github.com/LMAO-LOL-LMFAO",
      "https://www.linkedin.com/in/arush-gupta-2832a9287/?isSelfProfile=true",
    ],
    knowsAbout: [
      "Arch Linux",
      "Proxmox VE",
      "Podman",
      "llama.cpp",
      "Python",
      "Bash",
      "Java",
      "Jellyfin",
      "Immich",
      "Vaultwarden",
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#08080a] text-[#f4f4f5] selection:bg-[#CEFF00] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
