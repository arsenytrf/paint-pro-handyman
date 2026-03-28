"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/cn";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 40,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    let cleanup: (() => void) | undefined;

    async function init() {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!el) return;

      gsap.set(el, { opacity: 0, y });

      const tween = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      });

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }

    init();

    return () => {
      cleanup?.();
    };
  }, [delay, y, once]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
