"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useSpring } from "framer-motion";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function CustomCursor() {
  const isClient = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for cursor follower
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  // Raw position for immediate inner dot
  const [rawPos, setRawPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!isClient) return;

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setRawPos({ x: e.clientX, y: e.clientY });

      setIsVisible(true);

      // Check if target or ancestor is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, textarea, select, [data-hover="true"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isClient]);

  if (!isClient || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#CEFF00] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 52 : 32,
          height: isHovered ? 52 : 32,
          backgroundColor: isHovered
            ? "rgba(206, 255, 0, 0.15)"
            : "rgba(206, 255, 0, 0.02)",
          borderColor: isHovered ? "#CEFF00" : "rgba(206, 255, 0, 0.6)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Center Precise Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#CEFF00] pointer-events-none"
        style={{
          transform: `translate3d(${rawPos.x - 3}px, ${rawPos.y - 3}px, 0)`,
          transition: "opacity 0.1s ease",
        }}
      />
    </div>
  );
}
