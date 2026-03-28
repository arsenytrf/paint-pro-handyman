import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/shared/Button";
import QuoteForm from "@/components/contact/QuoteForm";
import { company } from "@/data/company";
import { Phone, MapPin, Clock, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free estimate from Paint Pro Handyman Services in Lake Worth, FL. Painting, drywall, flooring, plumbing, and more. Call ${company.phone} or fill out our form.`,
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phoneRaw}`,
    highlight: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: company.location,
    href: undefined,
    highlight: false,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon-Sat: 7:00 AM - 6:00 PM",
    href: undefined,
    highlight: false,
  },
  {
    icon: Map,
    label: "Service Area",
    value: "All of Palm Beach County",
    href: undefined,
    highlight: false,
  },
];

const steps = [
  {
    number: "01",
    title: "You Reach Out",
    description: "Fill out the form or give us a call.",
  },
  {
    number: "02",
    title: "We Come Look",
    description: "Free on-site estimate. No pressure, no obligation.",
  },
  {
    number: "03",
    title: "We Get It Done",
    description: "On time, on budget. You walk through the finished work.",
  },
];

export default function ContactPage() {
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
                <span className="text-stone-900 font-semibold">Contact</span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block w-8 h-0.5 bg-terra-500 shrink-0 rounded-full"
              aria-hidden="true"
            />
            <span className="text-terra-500 uppercase tracking-widest text-sm font-bold font-display">
              Contact Us
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-stone-900 uppercase leading-[1.1] tracking-tight max-w-4xl">
            Let&apos;s Talk About Your Project
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-stone-600 max-w-2xl leading-relaxed">
            Fill out the form and we&apos;ll get back to you quickly. Or just
            give us a call &mdash; we answer.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CONTACT INFO + FORM                                              */}
      {/* ================================================================ */}
      <section
        className="bg-cream-50 py-16 lg:py-24"
        aria-labelledby="contact-form-heading"
      >
        <h2 id="contact-form-heading" className="sr-only">
          Contact Information and Estimate Form
        </h2>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left — Contact info */}
            <div className="lg:w-5/12 space-y-4">
              <ScrollReveal>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-900 mb-6">
                  Get in Touch
                </h3>
              </ScrollReveal>

              {contactInfo.map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 0.08}>
                  <div className="bg-white rounded-xl border border-cream-200 p-5 flex items-start gap-4 transition-all duration-300 hover:border-terra-300 hover:shadow-sm">
                    <div className="flex-shrink-0 w-11 h-11 bg-terra-50 rounded-lg flex items-center justify-center">
                      <item.icon
                        className="w-5 h-5 text-terra-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-display uppercase tracking-wider text-stone-400 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`font-semibold transition-colors duration-300 hover:text-terra-500 ${
                            item.highlight
                              ? "text-terra-500 text-xl font-display"
                              : "text-stone-900"
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-stone-900 font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Quick CTA */}
              <ScrollReveal delay={0.35}>
                <div className="bg-terra-500 rounded-xl p-5 mt-2">
                  <p className="text-white/80 text-sm mb-2">
                    Need help today?
                  </p>
                  <Button
                    variant="white"
                    href={`tel:${company.phoneRaw}`}
                    className="w-full"
                  >
                    Call {company.phone}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Quote form */}
            <div className="lg:w-7/12">
              <ScrollReveal delay={0.15}>
                <QuoteForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS                                                     */}
      {/* ================================================================ */}
      <section
        className="bg-white py-16 lg:py-24"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 lg:mb-16">
              <div className="flex items-center gap-3 justify-center mb-4">
                <span
                  className="inline-block w-8 h-0.5 bg-terra-500 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-terra-500 uppercase tracking-widest text-sm font-bold font-display">
                  How It Works
                </span>
              </div>
              <h2
                id="process-heading"
                className="font-display text-4xl lg:text-5xl font-bold uppercase leading-[1.1] tracking-tight text-stone-900"
              >
                What Happens Next
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.12}>
                <div className="text-center md:text-left">
                  <span
                    className="font-display text-6xl lg:text-7xl font-bold text-terra-500/15 leading-none block mb-3"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SERVICE AREAS                                                    */}
      {/* ================================================================ */}
      <section className="bg-stone-900 py-12 lg:py-16" aria-label="Service areas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-terra-400 text-sm font-display uppercase tracking-widest font-bold">
              Serving All of Palm Beach County
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {company.cities.map((city) => (
              <span
                key={city}
                className="text-xs bg-stone-800 text-stone-400 px-3 py-1.5 rounded-full border border-stone-700/50"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
