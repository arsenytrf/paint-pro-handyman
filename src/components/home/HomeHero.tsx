"use client";

import { useRef, useEffect } from "react";
import Button from "@/components/shared/Button";
import HeroForm from "@/components/home/HeroForm";
import { company } from "@/data/company";

export default function HomeHero() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let cleanup: (() => void) | undefined;

    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;

      const targets = [
        labelRef.current,
        line1Ref.current,
        line2Ref.current,
        subtitleRef.current,
        buttonsRef.current,
        formRef.current,
      ];

      gsap.set(targets, { opacity: 0, y: 30 });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          line1Ref.current,
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )
        .to(
          line2Ref.current,
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.35",
        )
        .to(
          subtitleRef.current,
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.25",
        )
        .to(
          buttonsRef.current,
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2",
        )
        .to(
          formRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        );

      cleanup = () => {
        tl.kill();
      };
    }

    init();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #FDF9F0 0%, #FAEBE4 30%, #F5EADA 60%, #FEF3D6 100%)",
          }}
        />
        {/* Photo overlay at 12% */}
        <div
          className="absolute inset-0 opacity-[0.12] animate-ken-burns"
          style={{
            backgroundImage: `url(${company.images.work3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-terra-500/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left content */}
          <div className="lg:w-7/12">
            <span
              ref={labelRef}
              className="inline-block text-terra-500 text-xs sm:text-sm uppercase tracking-widest font-bold font-display mb-6"
            >
              Professional Painting &amp; Handyman &mdash; Lake Worth, FL
            </span>

            <h1 className="font-display font-bold uppercase leading-[0.9] mb-6">
              <span
                ref={line1Ref}
                className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-stone-900"
              >
                Quality
              </span>
              <span
                ref={line2Ref}
                className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-terra-500"
              >
                Craftsmanship.
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-stone-600 text-lg sm:text-xl max-w-xl leading-relaxed mb-8"
            >
              From fresh paint to finished floors. Drywall, molding, plumbing
              &mdash; we handle every detail so your home looks its best.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button variant="terra" href="/contact">
                Get Free Estimate
              </Button>
              <Button
                variant="outline"
                href={`tel:${company.phoneRaw}`}
              >
                Call {company.phone}
              </Button>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={formRef} className="w-full lg:w-5/12 mt-12 lg:mt-0">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
