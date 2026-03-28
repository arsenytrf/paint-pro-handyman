"use client";

import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { company } from "@/data/company";

export default function ServiceAreas() {
  return (
    <section
      className="py-20 lg:py-28 bg-cream-50"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Where We Work"
            title="Serving Palm Beach County"
            description="Based in Lake Worth, we serve homeowners and businesses across the county."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {company.cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-cream-200 shadow-sm hover:border-terra-300 hover:shadow-md transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-terra-500 flex-shrink-0" />
                <span className="text-sm font-display font-medium text-stone-700">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
