"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Cpu, HardDrive, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const nameFirst = "ARUSH";
  const nameLast = "GUPTA.";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-white/[0.08] overflow-hidden">
      {/* Editorial corner crosshairs & coordinates */}
      <div className="absolute top-6 left-6 text-zinc-600 font-mono text-[10px] select-none hidden sm:block">
        + 00:01:42 // LAT 20.5937° N
      </div>
      <div className="absolute top-6 right-6 text-zinc-600 font-mono text-[10px] select-none hidden sm:flex items-center gap-2">
        <span className="border border-white/10 px-1.5 py-0.5">[ 35mm ]</span>
        <span className="border border-white/10 px-1.5 py-0.5 text-[#CEFF00]">[ 50mm ]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Editorial Metadata Line */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#CEFF00]/10 border border-[#CEFF00]/30 text-[#CEFF00] font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] animate-ping" />
              SYSTEM ACTIVE
            </span>
            <span className="text-zinc-500">{"//"}</span>
            <span className="text-zinc-400">DAILY-DRIVE ARCH LINUX</span>
          </div>

          <div className="text-zinc-400 text-xs sm:text-sm font-mono flex items-center gap-2">
            <span className="text-zinc-500">LOC:</span>
            <span className="text-white font-medium">Based in India</span>
            <span className="text-zinc-600 font-mono text-xs">[2026]</span>
          </div>
        </motion.div>

        {/* Massive Editorial Name */}
        <div className="relative my-2 select-none overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* First Name */}
            <div className="overflow-hidden leading-[0.83]">
              <div className="flex">
                {nameFirst.split("").map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    variants={letterVariants}
                    className="inline-block text-6xl sm:text-8xl md:text-9xl lg:text-[12vw] font-syne font-extrabold tracking-tighter text-white hover:text-[#CEFF00] transition-colors duration-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Last Name with Accent Dot */}
            <div className="overflow-hidden leading-[0.83]">
              <div className="flex">
                {nameLast.split("").map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    variants={letterVariants}
                    className={`inline-block text-6xl sm:text-8xl md:text-9xl lg:text-[12vw] font-syne font-extrabold tracking-tighter ${
                      letter === "."
                        ? "text-[#CEFF00] font-black"
                        : "text-zinc-100 hover:text-[#CEFF00] transition-colors duration-300"
                    }`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tagline & Grid Info */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Tagline + CTA Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-[#CEFF00] pl-4 sm:pl-6 py-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-syne font-bold text-zinc-100 leading-snug">
                Linux-native builder who{" "}
                <span className="text-[#CEFF00] underline decoration-[#CEFF00]/40 underline-offset-4">
                  self-hosts everything
                </span>
                .
              </h2>
              <p className="mt-3 text-sm sm:text-base font-sans text-zinc-400 max-w-xl leading-relaxed">
                Architecting sovereign bare-metal homelabs, orchestrating Podman containers,
                and running local quantized LLMs on llama.cpp. Zero third-party cloud reliance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/LMAO-LOL-LMFAO"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#CEFF00] text-black font-syne font-extrabold text-sm tracking-wide transition-all duration-200 hover:bg-[#e0ff4d] hover:shadow-[0_0_25px_rgba(206,255,0,0.35)] active:scale-[0.98]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB PROFILE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/arush-gupta-2832a9287/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-900 border border-white/15 text-zinc-100 font-syne font-bold text-sm tracking-wide hover:border-[#CEFF00]/60 hover:text-[#CEFF00] transition-all duration-200 active:scale-[0.98]"
              >
                <LinkedinIcon className="w-4 h-4 text-[#CEFF00]" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-3.5 font-mono text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <span>[ View Systems ↓ ]</span>
              </a>
            </div>
          </div>

          {/* Linux Neofetch / Terminal Telemetry Box */}
          <div className="lg:col-span-5">
            <div className="rounded-none border border-white/10 bg-[#0d0d11]/80 backdrop-blur-md p-4 sm:p-5 shadow-2xl relative">
              {/* Window header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CEFF00]/80" />
                  <span className="ml-2 text-zinc-400 text-[11px]">arush@archlinux:~</span>
                </div>
                <span className="text-[10px] text-zinc-500">bash 5.2</span>
              </div>

              {/* Terminal command & Neofetch output */}
              <div className="font-mono text-xs space-y-2 text-zinc-300">
                <div className="flex items-center gap-2 text-zinc-100">
                  <span className="text-[#CEFF00]">arush@arch:~$</span>
                  <span className="text-white">neofetch --stdout</span>
                </div>

                <div className="pt-2 grid grid-cols-1 gap-1 text-[11px] text-zinc-400">
                  <div className="flex items-center justify-between border-b border-white/5 py-1">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Terminal className="w-3 h-3 text-[#CEFF00]" /> OS
                    </span>
                    <span className="text-zinc-200 font-semibold">Arch Linux x86_64</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/5 py-1">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Cpu className="w-3 h-3 text-[#CEFF00]" /> Kernel
                    </span>
                    <span className="text-zinc-200 font-semibold">6.x-zen (Linux-native)</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/5 py-1">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <HardDrive className="w-3 h-3 text-[#CEFF00]" /> Homelab
                    </span>
                    <span className="text-zinc-200 font-semibold">Proxmox VE + Podman</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/5 py-1">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <ShieldCheck className="w-3 h-3 text-[#CEFF00]" /> AI Engine
                    </span>
                    <span className="text-zinc-200 font-semibold">llama.cpp on-premise</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-zinc-500 flex items-center justify-between">
                  <span>Containers: Rootless</span>
                  <span className="text-[#CEFF00] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] inline-block" />
                    Uptime: 99.9%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom ticker bar / section divider line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <div>{"// 01 ARCH-ROOTLESS // HARDWARE ACCELERATED"}</div>
        <div className="hidden sm:block">SCROLL TO DISCOVER SYSTEMS</div>
        <div>[ STATUS: READY ]</div>
      </div>
    </section>
  );
}
