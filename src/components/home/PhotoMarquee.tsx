"use client";

import { company } from "@/data/company";

const images = [
  company.images.work1,
  company.images.work2,
  company.images.work3,
  company.images.work4,
  company.images.work5,
  company.images.work6,
  company.images.work7,
  company.images.work8,
  company.images.work9,
  company.images.work10,
];

export default function PhotoMarquee() {
  return (
    <section className="py-8 bg-cream-100/50 overflow-hidden" aria-label="Photo gallery scroll">
      <div className="relative">
        <div className="flex animate-marquee gap-4" style={{ width: "max-content" }}>
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Paint Pro project ${(i % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
