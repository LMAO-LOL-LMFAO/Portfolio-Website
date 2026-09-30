"use client";

import { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", num: "01" },
    { name: "Skills", href: "#skills", num: "02" },
    { name: "Projects", href: "#projects", num: "03" },
    { name: "Contact", href: "#contact", num: "04" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080a]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Badge inspired by Areyoudami editorial branding */}
          <a
            href="#"
            className="group flex items-center gap-2.5 bg-[#CEFF00] text-black px-3.5 py-1.5 rounded-none font-bold text-xs sm:text-sm tracking-tight transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(206,255,0,0.25)]"
          >
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="font-syne font-extrabold tracking-wide uppercase">
              Arush Gupta.
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-1.5 text-zinc-400 hover:text-[#CEFF00] transition-colors py-1"
              >
                <span className="text-[10px] text-zinc-600 group-hover:text-[#CEFF00]/70 transition-colors">
                  [{link.num}]
                </span>
                <span className="uppercase">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Terminal / Status Badge on Right */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/[0.02] text-[11px] font-mono text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-[#CEFF00]" />
              <span className="text-zinc-500">arush@arch:~$</span>
              <span className="inline-block w-1.5 h-3 bg-[#CEFF00] animate-pulse" />
            </div>

            <a
              href="https://github.com/LMAO-LOL-LMFAO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 text-xs font-mono text-zinc-300 hover:text-[#CEFF00] border border-white/10 hover:border-[#CEFF00]/40 transition-colors"
            >
              <span>GH</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-zinc-300 hover:text-[#CEFF00] border border-white/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#CEFF00]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08080a]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12 border-b border-white/10">
          <nav className="flex flex-col gap-6">
            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
              {"// Navigation"}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-2xl font-syne font-bold text-zinc-200 hover:text-[#CEFF00] border-b border-white/5 pb-3 transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-zinc-500">
                  [{link.num}]
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6">
            <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
              <span>OS: Arch Linux x86_64 // Zen Kernel</span>
            </div>
            <div className="flex gap-4 font-mono text-xs">
              <a
                href="https://github.com/LMAO-LOL-LMFAO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center bg-zinc-900 border border-white/10 text-zinc-200 hover:border-[#CEFF00]"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/arush-gupta-2832a9287/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center bg-[#CEFF00] text-black font-bold"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
