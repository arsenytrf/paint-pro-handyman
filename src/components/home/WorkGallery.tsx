"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { company } from "@/data/company";

const galleryImages = [
  { src: company.images.work3, alt: "Interior painting project" },
  { src: company.images.work4, alt: "Drywall and texture work" },
  { src: company.images.work5, alt: "Exterior painting finish" },
  { src: company.images.work6, alt: "Cabinet painting detail" },
  { src: company.images.work7, alt: "Crown molding installation" },
  { src: company.images.work8, alt: "Flooring project completed" },
];

export default function WorkGallery() {
  return (
    <section
      className="py-20 lg:py-28 bg-cream-50"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Our Work"
            title="Recent Projects"
            description="Real work from real projects around Palm Beach County. No stock photos."
            align="center"
          />
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((img, index) => (
            <ScrollReveal key={img.src} delay={index * 0.08}>
              <div
                className={`relative overflow-hidden rounded-xl group ${
                  index === 0 || index === 5
                    ? "row-span-2 aspect-[3/4]"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
