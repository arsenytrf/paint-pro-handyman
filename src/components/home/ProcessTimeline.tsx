"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { Phone, ClipboardList, Paintbrush, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "You Call or Text",
    description:
      "Tell us what you need done. We'll ask a few questions and set up a time to look at the job.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Free Estimate",
    description:
      "We come out, look at the space, and give you an honest price. No pressure, no hidden costs.",
  },
  {
    icon: Paintbrush,
    number: "03",
    title: "We Get to Work",
    description:
      "We show up on time with everything we need. Clean prep, quality materials, careful execution.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Walk Through & Done",
    description:
      "We walk you through the finished work. If something's not right, we fix it before we leave.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      className="py-20 lg:py-28 bg-cream-100/50"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="How It Works"
            title="Simple Process"
            description="From first call to finished project. No runaround, no delays."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.12}>
              <div className="relative text-center">
                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-cream-400/50"
                    aria-hidden="true"
                  />
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md border border-cream-200 mb-6">
                  <step.icon className="w-8 h-8 text-terra-500" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-terra-500 text-white text-xs font-display font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
