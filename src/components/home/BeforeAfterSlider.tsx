"use client";

import { useState, useRef, useCallback } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { company } from "@/data/company";

interface SliderItemProps {
  before: string;
  after: string;
  label: string;
}

function SliderItem({ before, after, label }: SliderItemProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition],
  );

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none shadow-lg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-label={`Before and after comparison: ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
      >
        {/* After image (background) */}
        <img
          src={after}
          alt={`After: ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt={`Before: ${label}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center animate-slider-pulse">
            <svg
              className="w-5 h-5 text-terra-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l-3 3 3 3M16 9l3 3-3 3"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-stone-900/70 backdrop-blur-sm text-white text-xs font-display uppercase tracking-wider px-3 py-1.5 rounded-full z-20">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-terra-500/90 backdrop-blur-sm text-white text-xs font-display uppercase tracking-wider px-3 py-1.5 rounded-full z-20">
          After
        </div>
      </div>
      <p className="text-center text-sm text-stone-500 font-display">{label}</p>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const pairs = [
    {
      before: company.images.work1,
      after: company.images.work2,
      label: "Fresh Interior Paint Job",
    },
    {
      before: company.images.work9,
      after: company.images.work10,
      label: "Wall Texture & Paint Finish",
    },
  ];

  return (
    <section
      className="relative py-20 lg:py-28 bg-cream-100/50"
      aria-labelledby="before-after-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="See the Difference"
            title="Before & After"
            description="Drag the slider to see the transformation. Real projects, real results."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pairs.map((pair, index) => (
            <ScrollReveal key={pair.label} delay={index * 0.15}>
              <SliderItem
                before={pair.before}
                after={pair.after}
                label={pair.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
