"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Server,
  Headphones,
  Flame,
  Gamepad2,
  Tv,
  Waves,
  Film,
  Sparkles,
} from "lucide-react";

export default function About() {
  const hobbies = [
    { name: "Cooking", icon: Flame, note: "Culinary craft & flavor experiments" },
    { name: "Audiophile", icon: Headphones, note: "Hi-Fi acoustic fidelity & gear" },
    { name: "Gaming", icon: Gamepad2, note: "Strategy & competitive titles" },
    { name: "Football", icon: Tv, note: "Pitch tactics & weekend matches" },
    { name: "Swimming", icon: Waves, note: "Endurance, laps & mental reset" },
    { name: "Video Editing", icon: Film, note: "Pacing, color grading & visual rhythm" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#CEFF00] font-bold">
              [ 02 ]
            </span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {"// Philosophy & Background"}
            </h2>
          </div>
          <span className="font-mono text-[11px] text-zinc-600 hidden sm:inline-block">
            ARCH // ZEN // SOVEREIGN
          </span>
        </div>

        {/* Big Editorial Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
        >
          <div className="lg:col-span-8 space-y-6">
            <p className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 leading-tight">
              I am a Linux-native builder who daily-drives{" "}
              <span className="text-[#CEFF00]">Arch Linux</span> and self-hosts
              my entire digital world.
            </p>

            <p className="font-sans text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
              From bare-metal Proxmox hypervisors and rootless Podman containers to
              private llama.cpp inference engines, I reject proprietary black boxes in
              favor of open-source sovereignty, complete data ownership, and transparent
              system architecture.
            </p>

            <p className="font-sans text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
              Beyond the terminal, I channel the same obsessive dedication into cooking,
              fine-tuning audiophile sound equipment, gaming, football, swimming, and video
              editing.
            </p>
          </div>

          {/* Quick Core Spec Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 border border-white/10 bg-[#0e0e12] hover:border-[#CEFF00]/40 transition-colors">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-2">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-[#CEFF00]" /> DAILY DRIVER
                </span>
                <span className="text-[#CEFF00]">[PRIMARY]</span>
              </div>
              <div className="font-syne font-bold text-lg text-zinc-200">
                Arch Linux
              </div>
              <p className="mt-1 font-sans text-xs text-zinc-400 leading-normal">
                Minimal rolling-release installation running custom dotfiles, custom bash
                automation, and zen kernel for maximum responsiveness.
              </p>
            </div>

            <div className="p-5 border border-white/10 bg-[#0e0e12] hover:border-[#CEFF00]/40 transition-colors">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-2">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <Server className="w-3.5 h-3.5 text-[#CEFF00]" /> INFRASTRUCTURE
                </span>
                <span className="text-[#CEFF00]">[100% SELF-HOSTED]</span>
              </div>
              <div className="font-syne font-bold text-lg text-zinc-200">
                Bare-Metal Homelab
              </div>
              <p className="mt-1 font-sans text-xs text-zinc-400 leading-normal">
                Proxmox hypervisor hosting Podman rootless containers: Jellyfin, *arr stack,
                Immich, Vaultwarden, and llama.cpp local LLM inference.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hobbies / Pursuits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs text-[#CEFF00] flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFF-SCREEN PURSUITS</span>
              </div>
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-zinc-100">
                Beyond the Terminal
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              {"// Creative passions & physical endurance"}
            </p>
          </div>

          {/* Grid of Hobbies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={hobby.name}
                  className="group relative p-5 bg-[#0d0d11] border border-white/[0.08] hover:border-[#CEFF00]/50 hover:bg-[#121217] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 bg-white/[0.03] border border-white/5 text-[#CEFF00] group-hover:scale-110 group-hover:border-[#CEFF00]/30 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      [HOBBY]
                    </span>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-syne font-bold text-base text-zinc-200 group-hover:text-[#CEFF00] transition-colors">
                      {hobby.name}
                    </h4>
                    <p className="mt-1 font-sans text-xs text-zinc-400">
                      {hobby.note}
                    </p>
                  </div>

                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[9px] text-[#CEFF00]">
                    +
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
