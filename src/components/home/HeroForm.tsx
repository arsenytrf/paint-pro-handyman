"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function HeroForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_gotcha")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(company.formAction, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "relative bg-white/95 backdrop-blur-xl rounded-2xl border border-cream-300/50 p-8 shadow-xl",
          "flex flex-col items-center justify-center text-center min-h-[480px]",
        )}
      >
        <div
          className="w-16 h-16 bg-terra-50 rounded-full flex items-center justify-center mb-6"
          aria-hidden="true"
        >
          <svg
            className="w-8 h-8 text-terra-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-stone-900 uppercase mb-2">
          Request Received!
        </h3>
        <p className="text-stone-500 text-sm max-w-xs">
          We got your info and will reach out shortly. Check your phone for a
          call or text from our team.
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl border border-cream-300/50 p-8 shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-display text-xl font-bold text-stone-900 uppercase tracking-wide">
          Get Your Free Estimate
        </h3>
        <p className="text-stone-500 text-sm mt-1">
          Tell us about your project. We respond fast.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="absolute opacity-0 pointer-events-none h-0 w-0"
          aria-hidden="true"
        />

        {/* Service Type */}
        <div>
          <label
            htmlFor="hero-service"
            className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
          >
            Service Needed
          </label>
          <select
            id="hero-service"
            name="service"
            required
            defaultValue=""
            className="w-full bg-cream-100/80 border border-cream-300 text-stone-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terra-500 focus:ring-1 focus:ring-terra-500 transition-colors duration-300 appearance-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="interior-painting">Interior Painting</option>
            <option value="exterior-painting">Exterior Painting</option>
            <option value="drywall">Drywall Install / Repair</option>
            <option value="texture-popcorn">Texture / Popcorn Removal</option>
            <option value="wood-staining">Wood Staining / Waterproofing</option>
            <option value="baseboard-crown">Baseboard / Crown Molding</option>
            <option value="door-install">Door Installation</option>
            <option value="flooring">Laminate / Wood Flooring</option>
            <option value="plumbing">Plumbing Repairs</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Project Date */}
        <div>
          <label
            htmlFor="hero-date"
            className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
          >
            Preferred Date
          </label>
          <input
            id="hero-date"
            name="date"
            type="date"
            className="w-full bg-cream-100/80 border border-cream-300 text-stone-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terra-500 focus:ring-1 focus:ring-terra-500 transition-colors duration-300 min-h-[46px] [-webkit-appearance:none] [color-scheme:light]"
          />
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="hero-name"
            className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
          >
            Your Name
          </label>
          <input
            id="hero-name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            autoComplete="name"
            className="w-full bg-cream-100/80 border border-cream-300 text-stone-800 placeholder:text-stone-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terra-500 focus:ring-1 focus:ring-terra-500 transition-colors duration-300"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="hero-phone"
            className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            required
            placeholder="(561) 555-0123"
            autoComplete="tel"
            className="w-full bg-cream-100/80 border border-cream-300 text-stone-800 placeholder:text-stone-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terra-500 focus:ring-1 focus:ring-terra-500 transition-colors duration-300"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-terra-500 text-white font-display uppercase tracking-wider font-semibold text-sm rounded-full px-8 py-3.5 hover:bg-terra-600 active:bg-terra-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Request Free Estimate"}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center" role="alert">
            Something went wrong. Please call us at {company.phone} instead.
          </p>
        )}
      </form>

      <div className="mt-5 flex items-center justify-center gap-5 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5 text-amber-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Fast Response
        </span>
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5 text-terra-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Free Estimate
        </span>
      </div>
    </div>
  );
}
