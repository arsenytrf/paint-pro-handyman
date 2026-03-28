"use client";
import { useEffect, useRef, type MutableRefObject } from "react";

type GsapCallback = (
  gsap: typeof import("gsap").default,
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger,
  el: HTMLElement
) => void;

export function useGsapScroll<T extends HTMLElement>(
  callback: GsapCallback,
  deps: React.DependencyList = []
): MutableRefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ctx: { revert: () => void } | undefined;

    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        callback(gsap, ScrollTrigger, el!);
      }, el!);
    }

    init();

    return () => {
      ctx?.revert();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
