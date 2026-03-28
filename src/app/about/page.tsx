import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Clock, ThumbsUp, PaintBucket, MapPin } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/shared/Button";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Paint Pro Handyman Services — professional painting and handyman work in Lake Worth and Palm Beach County. Quality craftsmanship, honest pricing.",
};

const values = [
  {
    icon: ThumbsUp,
    title: "Quality First",
    description:
      "We never rush a job. Proper prep, premium materials, clean finish. We'd rather take extra time than deliver something we're not proud of.",
  },
  {
    icon: Shield,
    title: "Honest & Fair",
    description:
      "The price we quote is the price you pay. No surprise add-ons, no inflated estimates. We earn trust by being straight with people.",
  },
  {
    icon: Clock,
    title: "Reliable",
    description:
      "We show up on time, every time. If something comes up, we communicate immediately. Your schedule matters to us.",
  },
  {
    icon: PaintBucket,
    title: "Versatile",
    description:
      "From a simple paint job to a full renovation — we've got the skills and tools to handle it. One crew, one call.",
  },
];

export default function AboutPage() {
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
                <span className="text-stone-900 font-semibold">About</span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block w-8 h-0.5 bg-terra-500 shrink-0 rounded-full"
              aria-hidden="true"
            />
            <span className="text-terra-500 uppercase tracking-widest text-sm font-bold font-display">
              About Us
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-stone-900 uppercase leading-[1.1] tracking-tight max-w-4xl">
            Built on Hard Work &amp; Honest Results
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-stone-600 max-w-2xl leading-relaxed">
            We&apos;re a hands-on crew that takes pride in every project we
            touch. No sales teams, no middlemen &mdash; just skilled tradespeople
            doing quality work.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* OUR STORY                                                        */}
      {/* ================================================================ */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
            {/* Image */}
            <ScrollReveal className="lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={company.images.work2}
                  alt="Paint Pro Handyman at work"
                  className="w-full h-full object-cover"
                />
                {/* Accent border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terra-500 via-amber-500 to-terra-500" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={0.15} className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block w-8 h-0.5 bg-terra-500 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-terra-500 uppercase tracking-widest text-sm font-bold font-display">
                  Our Story
                </span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-stone-900 uppercase tracking-tight leading-tight mb-6">
                Doing It Right, the First Time
              </h2>

              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Paint Pro Handyman Services started with a simple idea: do
                  quality work at a fair price, and treat every home like our
                  own. Based in Lake Worth, we&apos;ve been serving homeowners
                  and businesses across Palm Beach County for years.
                </p>
                <p>
                  We&apos;re not a franchise. We&apos;re not a faceless
                  corporation. We&apos;re a small, skilled crew that takes pride
                  in craftsmanship. When you hire us, you get the people who
                  actually do the work &mdash; no subcontractors, no surprises.
                </p>
                <p>
                  Whether it&apos;s a fresh interior paint job, drywall repair,
                  new flooring, or fixing a leaky faucet &mdash; we bring the
                  same level of care and attention to every project, big or
                  small.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-stone-500">
                <MapPin className="w-4 h-4 text-terra-500" />
                <span>
                  Proudly serving {company.location} &amp; all of{" "}
                  {company.serviceArea}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* VALUES                                                           */}
      {/* ================================================================ */}
      <section
        className="relative bg-stone-900 py-20 lg:py-28 overflow-hidden"
        aria-labelledby="values-heading"
      >
        {/* Photo background at 12% */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url(${company.images.work7})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-stone-900/85"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 lg:mb-16">
              <div className="flex items-center gap-3 justify-center mb-4">
                <span
                  className="inline-block w-8 h-0.5 bg-terra-500 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-terra-400 uppercase tracking-widest text-sm font-bold font-display">
                  Our Values
                </span>
              </div>
              <h2
                id="values-heading"
                className="font-display text-4xl lg:text-5xl font-bold text-white uppercase leading-[1.1] tracking-tight"
              >
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="bg-stone-800/50 backdrop-blur-sm rounded-xl p-8 border border-stone-700/30 h-full">
                  <div className="w-12 h-12 bg-terra-500/10 rounded-lg flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-terra-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WORK PHOTOS ROW                                                  */}
      {/* ================================================================ */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                company.images.work1,
                company.images.work4,
                company.images.work8,
                company.images.work10,
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Project photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
              Ready to get started? Reach out for a free estimate. We&apos;d
              love to help with your next project.
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
