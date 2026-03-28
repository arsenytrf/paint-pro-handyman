import type { Metadata } from "next";
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
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/shared/Button";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional painting, drywall, flooring, plumbing, and handyman services in Lake Worth and Palm Beach County. Free estimates. Call (561) 727-6224.",
};

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

const serviceImages: Record<string, string> = {
  "interior-painting": company.images.work1,
  "exterior-painting": company.images.work5,
  drywall: company.images.work3,
  "texture-popcorn": company.images.work4,
  "wood-staining": company.images.work6,
  "baseboard-crown": company.images.work7,
  "door-installation": company.images.work8,
  flooring: company.images.work9,
  plumbing: company.images.work10,
};

export default function ServicesPage() {
  return (
    <>
      {/* ================================================================ */}
      {/* PAGE HERO                                                        */}
      {/* ================================================================ */}
      <section className="relative bg-cream-100/50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 gradient-mesh-warm"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-stone-900 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="text-stone-300">/</span>
              </li>
              <li>
                <span className="text-stone-900 font-semibold">Services</span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block w-8 h-0.5 bg-terra-500 shrink-0 rounded-full"
              aria-hidden="true"
            />
            <span className="text-terra-500 uppercase tracking-widest text-sm font-bold font-display">
              What We Do
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-stone-900 uppercase leading-[1.1] tracking-tight max-w-4xl">
            Our Full Range of Services
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-stone-600 max-w-2xl leading-relaxed">
            From paint to plumbing, we handle everything your home needs.
            One call, one crew, one clean result.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SERVICES GRID                                                    */}
      {/* ================================================================ */}
      <section
        className="bg-cream-50 py-16 lg:py-24"
        aria-labelledby="services-grid-heading"
      >
        <h2 id="services-grid-heading" className="sr-only">
          All Services
        </h2>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            const number = String(index + 1).padStart(2, "0");
            const imageUrl = serviceImages[service.slug];
            const Icon = iconMap[service.icon] || PaintBucket;

            return (
              <ScrollReveal key={service.slug}>
                <div
                  className={`border-b border-cream-200 py-16 lg:py-24 ${
                    index === 0 ? "pt-0 lg:pt-0" : ""
                  } ${
                    index === services.length - 1
                      ? "border-b-0 pb-0 lg:pb-0"
                      : ""
                  }`}
                >
                  <div
                    className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${
                      isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    {/* Image */}
                    <div className="lg:w-1/2">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-200 shadow-lg">
                        <img
                          src={imageUrl}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="font-display text-7xl lg:text-8xl font-bold text-terra-500/15 leading-none"
                          aria-hidden="true"
                        >
                          {number}
                        </span>
                        <div className="w-12 h-12 bg-terra-50 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-terra-500" />
                        </div>
                      </div>
                      <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight text-stone-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-lg">
                        {service.description}
                      </p>
                      <Button variant="outline" href="/contact">
                        Get a Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA BANNER                                                       */}
      {/* ================================================================ */}
      <section
        className="relative bg-terra-500 overflow-hidden"
        aria-label="Call to action"
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[1.1] tracking-tight mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about it. We&apos;ll come out, look at the job, and give
              you an honest price. Free estimates, always.
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
