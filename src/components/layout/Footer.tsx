import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { company } from "@/data/company";

const serviceLinks = [
  { label: "Interior Painting", href: "/services" },
  { label: "Exterior Painting", href: "/services" },
  { label: "Drywall & Texture", href: "/services" },
  { label: "Crown Molding", href: "/services" },
  { label: "Flooring", href: "/services" },
  { label: "Plumbing Repairs", href: "/services" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-terra-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-1.5 select-none">
              <span className="font-display text-xl font-bold uppercase tracking-tight text-terra-500">
                Paint Pro
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-tight text-white">
                Handyman
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-stone-500">
              Professional painting and handyman services in Lake Worth and Palm
              Beach County.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-terra-400 transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-terra-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-5">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h4>

            <a
              href="tel:5617276224"
              className="flex items-center gap-3 text-sm hover:text-terra-400 transition-colors duration-300"
            >
              <Phone className="h-4 w-4 text-terra-500 flex-shrink-0" />
              {company.phone}
            </a>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 text-terra-500 flex-shrink-0 mt-0.5" />
              <span>{company.location}</span>
            </div>

            {/* Service area tags */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-stone-600 mb-3">
                Service Areas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {company.cities.map((city) => (
                  <span
                    key={city}
                    className="text-[11px] bg-stone-800 text-stone-500 px-2 py-1 rounded"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/50">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>&copy; 2026 Paint Pro Handyman Services. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://epageusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-terra-400 transition-colors duration-300"
            >
              ePageUSA.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
