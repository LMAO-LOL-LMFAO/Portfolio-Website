"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Server, BrainCircuit, Bot } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const projects = [
    {
      id: "homelab",
      num: "01",
      title: "Self-Hosted Homelab Infrastructure",
      category: "INFRASTRUCTURE & ORCHESTRATION",
      icon: Server,
      description:
        "A resilient bare-metal home server engineered on Proxmox VE. Employs rootless Podman containers to orchestrate a sovereign suite of privacy-first services: Jellyfin for media streaming, the *arr stack for automated acquisition, Immich for local photo/video vaulting, and Vaultwarden for zero-knowledge credential security.",
      tags: [
        "Proxmox VE",
        "Podman Containers",
        "Jellyfin",
        "The *arr Stack",
        "Immich",
        "Vaultwarden",
        "Linux",
        "Bash",
      ],
      terminalCode: {
        command: "podman ps --format 'table {{.Names}}\t{{.Status}}'",
        output: [
          "jellyfin         Up (healthy) 42 days",
          "immich-server    Up (healthy) 42 days",
          "vaultwarden      Up (healthy) 42 days",
          "arr-pipeline     Up (healthy) 42 days",
        ],
      },
    },
    {
      id: "llama-cpp",
      num: "02",
      title: "Local LLM Hosting with llama.cpp",
      category: "ARTIFICIAL INTELLIGENCE & INFERENCE",
      icon: BrainCircuit,
      description:
        "Hardware-accelerated local large language model hosting running on-premise using llama.cpp—the foundational C/C++ backend that Ollama is built on. Configured for quantized GGUF execution, low-latency token generation, and local API serving with 100% private prompt containment and zero third-party cloud telemetry.",
      tags: [
        "llama.cpp",
        "C++",
        "Python",
        "GGUF Quantization",
        "Local LLM Inference",
        "Zero-Cloud Privacy",
      ],
      terminalCode: {
        command: "./llama-server -m models/7B-Q4_K_M.gguf --ctx-size 8192",
        output: [
          "llama_init_from_file: model loaded successfully",
          "offloading layers to accelerator: [ACTIVE]",
          "HTTP server listening on 127.0.0.1:8080 (0.0ms cloud lag)",
        ],
      },
    },
    {
      id: "telegram-bot",
      num: "03",
      title: "Nightly Telegram AI Assistant",
      category: "AUTONOMOUS AGENTS & AUTOMATION",
      icon: Bot,
      description:
        "An autonomous conversational AI chatbot built with an OpenClaw backend and integrated directly into Telegram via the Bot API. Engineered to proactively message every single night with structured day recaps, scheduled check-ins, and contextual prompts without relying on closed hosted platforms.",
      tags: [
        "Telegram Bot API",
        "OpenClaw Backend",
        "Python",
        "Scheduled Automation",
        "Systemd Service",
      ],
      terminalCode: {
        command: "python3 -m openclaw.daemon --schedule '23:00'",
        output: [
          "[cron] cron trigger activated at 23:00:00 IST",
          "[openclaw] generating structured daily recap...",
          "[telegram] outgoing payload dispatched -> @arush [200 OK]",
        ],
      },
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#CEFF00] font-bold">
              [ 04 ]
            </span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {"// Featured Builds & Infrastructure"}
            </h2>
          </div>
          <span className="font-mono text-[11px] text-zinc-600 hidden sm:inline-block">
            3 ACTIVE PRODUCTION BUILDS
          </span>
        </div>

        {/* Section Subheading */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Systems running in <span className="text-[#CEFF00]">production</span>.
          </h3>
          <p className="mt-4 font-sans text-base text-zinc-400 leading-relaxed">
            Real deployments running on real hardware. Zero mockups, zero simulated metrics—just
            hardened self-hosted software and custom tooling built for daily use.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-10 sm:space-y-12">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.article
                key={proj.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: idx * 0.12 }}
                className="group relative p-6 sm:p-10 bg-[#0d0d12] border border-white/[0.09] hover:border-[#CEFF00]/60 transition-all duration-300"
              >
                {/* Camera frame coordinates & corner accent inspired by Areyoudami */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5 font-mono text-xs text-zinc-500">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-syne font-extrabold text-zinc-400 group-hover:text-[#CEFF00] transition-colors">
                      {proj.num}
                    </span>
                    <span className="text-zinc-600">{"//"}</span>
                    <span className="text-zinc-400 uppercase tracking-widest text-[11px]">
                      {proj.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] animate-pulse" />
                    <span className="text-[11px] text-[#CEFF00]">ONLINE</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-white/[0.03] border border-white/10 text-[#CEFF00] group-hover:border-[#CEFF00]/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-syne text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#CEFF00] transition-colors">
                        {proj.title}
                      </h4>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono bg-zinc-900/90 border border-white/10 text-zinc-300 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action link to user's GitHub profile */}
                    <div className="pt-4">
                      <a
                        href="https://github.com/LMAO-LOL-LMFAO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#CEFF00] text-black font-syne font-extrabold text-xs tracking-wider uppercase hover:bg-[#e0ff4d] transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(206,255,0,0.15)] group-hover:shadow-[0_0_20px_rgba(206,255,0,0.3)]"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>VIEW ON GITHUB</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Terminal Preview */}
                  <div className="lg:col-span-5">
                    <div className="rounded-none border border-white/10 bg-[#09090c] p-4 sm:p-5 font-mono text-xs text-zinc-400">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[10px] text-zinc-500">
                        <span>SYS_LOG // {proj.id.toUpperCase()}</span>
                        <span className="text-[#CEFF00]">PODMAN RUN</span>
                      </div>

                      <div className="space-y-2 text-[11px] overflow-x-auto">
                        <div className="text-zinc-200 flex items-center gap-2">
                          <span className="text-[#CEFF00]">$</span>
                          <span>{proj.terminalCode.command}</span>
                        </div>
                        <div className="pt-1 space-y-1 text-zinc-400 border-l border-white/10 pl-3">
                          {proj.terminalCode.output.map((line, lIdx) => (
                            <div key={lIdx} className="leading-relaxed">
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom Corner Tag */}
                <div className="absolute bottom-3 right-4 font-mono text-[9px] text-zinc-700 select-none hidden sm:block">
                  [ 50mm // EXP 0{idx + 1} ]
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
