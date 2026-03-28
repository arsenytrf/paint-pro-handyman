"use client";

import { Shield, Clock, ThumbsUp, PaintBucket, Hammer, Heart } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: ThumbsUp,
    title: "Quality Work",
    description:
      "We prep right, use premium materials, and finish clean. No cutting corners — your space deserves our best.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description:
      "We show up when we say we will and get the job done on schedule. Your time matters.",
  },
  {
    icon: Shield,
    title: "Honest Pricing",
    description:
      "No hidden fees, no surprise charges. We give you a clear estimate upfront and stick to it.",
  },
  {
    icon: PaintBucket,
    title: "Full Service",
    description:
      "Painting, drywall, flooring, plumbing — we handle it all so you don't need five different contractors.",
  },
  {
    icon: Hammer,
    title: "Years of Experience",
    description:
      "We've done hundreds of projects across Palm Beach County. We know what works and what lasts.",
  },
  {
    icon: Heart,
    title: "We Care",
    description:
      "We treat every home like it's our own. Clean jobsite, careful work, respectful crew.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-stone-900 overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Photo background at 12% */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "url(https://images.craigslist.org/00303_jPij79Nn3xa_0CI0lM_600x450.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-900/80 to-stone-900/90"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Why Us"
            title="Why Choose Paint Pro"
            description="We're not just another handyman service. Here's what sets us apart."
            align="center"
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.08}>
              <div className="bg-stone-800/50 backdrop-blur-sm rounded-xl p-6 border border-stone-700/30 hover:border-terra-500/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-terra-500/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-terra-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight mb-2">
                  {reason.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
