"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, MapPin } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;

      setScrolled(currentY > 50);

      if (currentY > 200 && goingDown) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top Info Bar */}
        <div
          className={`hidden md:block overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          }`}
        >
          <div className="bg-stone-900">
            <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-xs text-cream-400 tracking-wide">
              <a
                href="tel:5617276224"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300"
              >
                <Phone className="h-3 w-3" />
                <span>(561) 727-6224</span>
              </a>

              <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest">
                <span>Free Estimates</span>
              </div>

              <div className="flex items-center gap-2 text-cream-500">
                <MapPin className="h-3 w-3" />
                <span>Lake Worth &middot; Palm Beach County</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <nav
          className={`transition-all duration-300 border-b ${
            scrolled
              ? "bg-cream-50/95 backdrop-blur-md border-cream-300/50 shadow-sm"
              : "bg-cream-50/80 backdrop-blur-sm border-cream-200/30"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 select-none">
              <span className="font-display text-xl font-bold uppercase tracking-tight text-terra-500">
                Paint Pro
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-tight text-stone-800">
                Handyman
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "text-stone-900"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-terra-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex rounded-full bg-terra-500 hover:bg-terra-600 text-white font-bold uppercase tracking-wider px-6 py-2.5 text-sm transition-colors duration-300"
              >
                Get Free Estimate
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden p-2 text-stone-800 hover:text-terra-500 transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
