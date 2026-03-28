"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 9, suffix: "", label: "Services Offered" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-stone-900 py-12 lg:py-16"
      aria-label="Stats"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center",
                index < stats.length - 1 &&
                  "md:border-r md:border-stone-700/50",
              )}
            >
              <p className="font-display text-4xl lg:text-5xl font-bold text-terra-400 mb-1">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="text-stone-400 text-sm font-display uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
