"use client";

import Link from "next/link";
import {
  PaintBucket,
  Sun,
  Layers,
  Sparkles,
  Droplets,
  Ruler,
  DoorOpen,
  LayoutGrid,
  Wrench,
} from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  PaintBucket,
  Sun,
  Layers,
  Sparkles,
  Droplets,
  Ruler,
  DoorOpen,
  LayoutGrid,
  Wrench,
};

export default function ServiceShowcase() {
  return (
    <section
      className="py-20 lg:py-28 bg-cream-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="From painting to plumbing, we handle the work your home needs. Every project gets the same attention to detail."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || PaintBucket;
            return (
              <ScrollReveal key={service.slug} delay={index * 0.06}>
                <Link
                  href="/services"
                  className="group block bg-white rounded-xl p-6 border border-cream-200 hover:border-terra-300 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-terra-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-terra-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-terra-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-stone-900 mb-2 group-hover:text-terra-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-terra-500 hover:text-terra-600 font-display font-bold uppercase tracking-wider text-sm transition-colors duration-300"
            >
              View All Services
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
