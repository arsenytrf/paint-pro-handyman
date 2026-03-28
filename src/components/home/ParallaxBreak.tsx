"use client";

import Button from "@/components/shared/Button";
import { company } from "@/data/company";

export default function ParallaxBreak() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" aria-label="Call to action">
      {/* Photo background at 15% */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${company.images.work5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Warm overlay */}
      <div
        className="absolute inset-0 bg-terra-600/85"
        aria-hidden="true"
      />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[1.1] tracking-tight mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
          Get a free estimate today. We&apos;ll come out, look at the job, and
          give you an honest price.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="white" href="/contact">
            Get Free Estimate
          </Button>
          <Button
            variant="outline"
            href={`tel:${company.phoneRaw}`}
            className="border-white/40 text-white hover:bg-white/10 hover:text-white"
          >
            Call {company.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
