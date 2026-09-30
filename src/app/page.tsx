import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Subtle Film Grain Noise Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Subtle Background Architectural Grid */}
      <div
        className="bg-grid-pattern fixed inset-0 pointer-events-none opacity-60 z-0"
        aria-hidden="true"
      />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#CEFF00] focus:text-black focus:font-mono focus:text-xs font-bold"
      >
        Skip to main content
      </a>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Contact & Footer Area */}
      <Contact />
    </SmoothScroll>
  );
}
