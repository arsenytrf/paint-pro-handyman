"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/shared/Button";
import { company } from "@/data/company";

export default function CtaBanner() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-stone-900 overflow-hidden"
      aria-label="Final call to action"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full bg-terra-500/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-terra-400 text-sm font-display uppercase tracking-widest font-bold mb-4">
            Let&apos;s Get Started
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[1.1] tracking-tight mb-4">
            Your Home Deserves the Best
          </h2>
          <p className="text-stone-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            From a fresh coat of paint to a full renovation &mdash; we do the
            work right so you can enjoy your space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="terra" href="/contact">
              Get Free Estimate
            </Button>
            <Button
              variant="outline"
              href={`tel:${company.phoneRaw}`}
              className="border-terra-500/50 text-terra-400 hover:bg-terra-500 hover:text-white"
            >
              Call {company.phone}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
