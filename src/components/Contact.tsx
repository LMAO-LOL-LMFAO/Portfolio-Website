"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, CornerDownLeft, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: "arush@arch:~$ whoami",
      output: "arush gupta — linux-native builder who self-hosts everything.",
    },
    {
      command: "arush@arch:~$ cat /etc/os-release | grep PRETTY_NAME",
      output: 'PRETTY_NAME="Arch Linux"',
    },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let reply = "";
    if (cmd === "help") {
      reply = "Available commands: whoami, uptime, skills, projects, contact, clear";
    } else if (cmd === "whoami") {
      reply = "Arush Gupta — Linux-native builder who self-hosts everything. Based in India.";
    } else if (cmd === "uptime") {
      reply = "homelab: up 42 days, 16 hours, 21 mins. Load average: 0.12, 0.08, 0.05.";
    } else if (cmd === "skills") {
      reply = "Arch Linux, Proxmox VE, Podman, llama.cpp, Jellyfin, *arr stack, Immich, Vaultwarden, Python, Bash, Java.";
    } else if (cmd === "projects") {
      reply = "1. Homelab Infrastructure  2. Local LLM Hosting (llama.cpp)  3. Nightly Telegram Bot (OpenClaw).";
    } else if (cmd === "contact") {
      reply = "GitHub: github.com/LMAO-LOL-LMFAO | LinkedIn: linkedin.com/in/arush-gupta-2832a9287";
    } else if (cmd === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else {
      reply = `bash: command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { command: `arush@arch:~$ ${cmd}`, output: reply }]);
    setTerminalInput("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <footer id="contact" className="relative pt-24 sm:pt-32 pb-12 bg-[#08080a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#CEFF00] font-bold">
              [ 05 ]
            </span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {"// Connection & Handshake"}
            </h2>
          </div>
          <span className="font-mono text-[11px] text-zinc-600 hidden sm:inline-block">
            STDOUT // 200 OK
          </span>
        </div>

        {/* Big "Let's talk" Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-24"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 font-mono text-xs text-[#CEFF00] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO TRANSMIT</span>
            </div>
            <h2 className="font-syne text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.88]">
              LET&apos;S <span className="text-[#CEFF00]">TALK.</span>
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Open to discussions on bare-metal self-hosting, Linux workflows,
              local AI acceleration, or collaborative engineering.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <a
              href="https://github.com/LMAO-LOL-LMFAO"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#0f0f14] border border-white/10 hover:border-[#CEFF00] transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-[#CEFF00]" />
                <div>
                  <div className="font-syne font-bold text-white text-base">
                    GitHub
                  </div>
                  <div className="font-mono text-xs text-zinc-400">
                    @LMAO-LOL-LMFAO
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#CEFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/arush-gupta-2832a9287/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#0f0f14] border border-white/10 hover:border-[#CEFF00] transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-[#CEFF00]" />
                <div>
                  <div className="font-syne font-bold text-white text-base">
                    LinkedIn
                  </div>
                  <div className="font-mono text-xs text-zinc-400">
                    Arush Gupta
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#CEFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Linux Interactive Terminal Element */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="mb-16 border border-white/10 bg-[#0a0a0d] p-4 sm:p-6"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#CEFF00]" />
              <span className="font-bold text-zinc-200">Terminal Shell v5.2</span>
              <span className="text-zinc-600">{"// arch-linux-zen"}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-zinc-500">
              <span className="hidden sm:inline">Try:</span>
              <button
                onClick={() => setTerminalInput("whoami")}
                className="px-1.5 py-0.5 bg-zinc-900 border border-white/10 hover:text-[#CEFF00]"
              >
                whoami
              </button>
              <button
                onClick={() => setTerminalInput("uptime")}
                className="px-1.5 py-0.5 bg-zinc-900 border border-white/10 hover:text-[#CEFF00]"
              >
                uptime
              </button>
              <button
                onClick={() => setTerminalInput("skills")}
                className="px-1.5 py-0.5 bg-zinc-900 border border-white/10 hover:text-[#CEFF00]"
              >
                skills
              </button>
              <button
                onClick={() => setTerminalInput("clear")}
                className="px-1.5 py-0.5 bg-zinc-900 border border-white/10 hover:text-red-400"
              >
                clear
              </button>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {terminalHistory.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="text-[#CEFF00]">{item.command}</div>
                <div className="text-zinc-300 pl-3 border-l border-white/10">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
              <span className="text-[#CEFF00] shrink-0">arush@arch:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type a command (e.g. 'skills', 'help', 'uptime')..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-zinc-600"
              />
              <button
                type="submit"
                aria-label="Execute command"
                className="p-1 text-zinc-500 hover:text-[#CEFF00]"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300 font-bold">© 2026 Arush Gupta</span>
            <span>—</span>
            <span>Linux-native builder who self-hosts everything.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-zinc-600">ARCH LINUX // PROXMOX</span>
            <button
              onClick={scrollToTop}
              className="text-zinc-400 hover:text-[#CEFF00] transition-colors flex items-center gap-1"
            >
              <span>[ TOP ↑ ]</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
