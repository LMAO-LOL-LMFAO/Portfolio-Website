"use client";

import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, TerminalSquare, CheckCircle2 } from "lucide-react";
import Marquee from "./Marquee";

export default function Skills() {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      index: "01",
      icon: Code2,
      tag: "CORE LOGIC",
      description: "Foundational programming and scripting languages powering tools, automation, and web interfaces.",
      skills: [
        { name: "Python", status: "Active", note: "Automation, Telegram bot backend & tooling" },
        { name: "Bash Scripting", status: "Active", note: "System administration, dotfiles & container provisioning" },
        { name: "Java", status: "Proficient", note: "Object-oriented software development & algorithms" },
        { name: "C++", status: "Basic", note: "Low-level system mechanics & foundational logic" },
        { name: "HTML / CSS", status: "Learning Full Stack", note: "Modern layout architectures & responsive design" },
      ],
    },
    {
      id: "infra",
      title: "Self-Hosting & Infra",
      index: "02",
      icon: Server,
      tag: "ON-PREM LAB",
      description: "Complete sovereign bare-metal homelab infrastructure running isolated rootless containers and private services.",
      skills: [
        { name: "Proxmox VE", status: "Hypervisor", note: "Type-1 bare-metal VM & LXC container orchestration" },
        { name: "Podman Containers", status: "Rootless", note: "Daemonless, secure OCI container architecture" },
        { name: "Jellyfin", status: "Deployed", note: "Personal zero-telemetry media streaming server" },
        { name: "The *arr Stack", status: "Automated", note: "Automated media indexing & acquisition pipelines" },
        { name: "Immich", status: "Production", note: "High-performance private photo & video backup" },
        { name: "Vaultwarden", status: "Encrypted", note: "Self-hosted zero-knowledge password vault" },
      ],
    },
    {
      id: "ai-tooling",
      title: "AI & Tooling",
      index: "03",
      icon: BrainCircuit,
      tag: "LOCAL INFERENCE",
      description: "Running local language models on bare metal and architecting autonomous assistant backends.",
      skills: [
        { name: "llama.cpp", status: "Core Engine", note: "The foundational C/C++ backend that Ollama is built on" },
        { name: "OpenClaw Backend", status: "Integrated", note: "Custom AI engine powering nightly Telegram chatbot" },
        { name: "Telegram Bot API", status: "Automated", note: "Nightly automated conversational check-ins" },
        { name: "Git & Version Control", status: "Daily", note: "Branching, repository maintenance & workflows" },
        { name: "Linux CLI Utilities", status: "Native", note: "tmux, SSH, systemd, rsync, curl, cron" },
      ],
    },
    {
      id: "os",
      title: "Operating System",
      index: "04",
      icon: TerminalSquare,
      tag: "DAILY DRIVER",
      description: "Deep Linux-native workflow configured for raw speed, minimal overhead, and complete operational transparency.",
      skills: [
        { name: "Arch Linux", status: "Daily Driver", note: "Primary operating system with rolling updates & zen kernel" },
        { name: "Linux Ecosystem", status: "Native", note: "Process isolation, systemd services & storage primitives" },
        { name: "Bash Environment", status: "Configured", note: "Custom shell scripts, aliases & terminal keybindings" },
        { name: "Rootless Security", status: "Enforced", note: "Unprivileged user namespaces & container hardening" },
      ],
    },
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
    <section id="skills" className="relative py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
      {/* Infinite scrolling marquee placed directly at top of skills */}
      <div className="mb-16 sm:mb-24">
        <Marquee />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#CEFF00] font-bold">
              [ 03 ]
            </span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {"// Technical Arsenal & Infrastructure"}
            </h2>
          </div>
          <span className="font-mono text-[11px] text-zinc-600 hidden sm:inline-block">
            4 ARCHITECTURAL CATEGORIES
          </span>
        </div>

        {/* Section Subheading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built from scratch. <span className="text-[#CEFF00]">Hosted on-prem.</span>
          </h3>
          <p className="mt-4 font-sans text-base text-zinc-400 leading-relaxed">
            Every layer of my stack—from low-level bash automation to containerized microservices and
            hardware-accelerated LLMs—is tailored for sovereignty, efficiency, and zero cloud dependency.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-6 sm:p-8 bg-[#0d0d12] border border-white/[0.08] hover:border-[#CEFF00]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Corner indicator */}
                <div className="absolute top-4 right-4 font-mono text-[11px] text-zinc-600 group-hover:text-[#CEFF00] transition-colors">
                  [{cat.index}]
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-white/[0.04] border border-white/10 text-[#CEFF00] group-hover:bg-[#CEFF00]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        {cat.tag}
                      </div>
                      <h4 className="font-syne text-xl sm:text-2xl font-bold text-white group-hover:text-[#CEFF00] transition-colors">
                        {cat.title}
                      </h4>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List Items */}
                  <div className="space-y-3 font-mono text-xs">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" />
                          <span className="font-bold text-zinc-200">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="text-zinc-500 font-sans hidden sm:inline">
                            {skill.note}
                          </span>
                          <span className="px-2 py-0.5 bg-zinc-900 border border-white/10 text-zinc-400 rounded-none text-[10px]">
                            {skill.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-600">
                  <span>{"// VERIFIED & OPERATIONAL"}</span>
                  <span className="text-[#CEFF00] opacity-0 group-hover:opacity-100 transition-opacity">
                    READY →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
