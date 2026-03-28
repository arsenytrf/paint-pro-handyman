"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Phone,
  MapPin,
  PaintBucket,
  Layers,
  Sparkles,
  Wrench,
  Ruler,
  DoorOpen,
  ChevronRight,
} from "lucide-react";
import { company } from "@/data/company";

const navLinks = [
  { label: "Home", href: "/", num: "01" },
  { label: "Services", href: "/services", num: "02" },
  { label: "About", href: "/about", num: "03" },
  { label: "Contact", href: "/contact", num: "04" },
];

const quickServices = [
  { icon: PaintBucket, label: "Painting" },
  { icon: Layers, label: "Drywall" },
  { icon: Sparkles, label: "Texture" },
  { icon: Ruler, label: "Molding" },
  { icon: DoorOpen, label: "Doors" },
  { icon: Wrench, label: "Plumbing" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.15 } },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    transition: { type: "tween" as const, duration: 0.3, ease: "easeIn" as const },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.05, duration: 0.4, ease: "easeOut" as const },
  }),
};

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileDrawer({
  open,
  onClose,
  pathname,
}: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[59] bg-black/40 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            className="fixed inset-y-0 right-0 z-[60] w-full sm:w-[420px] bg-cream-50 flex flex-col overflow-y-auto"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-6 pb-4">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-1.5 select-none"
              >
                <span className="font-display text-xl font-bold uppercase tracking-tight text-terra-500">
                  Paint Pro
                </span>
                <span className="font-display text-xl font-bold uppercase tracking-tight text-stone-800">
                  Handyman
                </span>
              </Link>
              <motion.button
                onClick={onClose}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-cream-300 hover:border-terra-500 hover:bg-terra-50 transition-colors duration-300"
                aria-label="Close menu"
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5 text-stone-700" />
              </motion.button>
            </div>

            <div className="mx-8 h-px bg-gradient-to-r from-terra-500 via-terra-300/40 to-transparent" />

            {/* Main Navigation */}
            <motion.nav
              className="px-8 pt-10 pb-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-center gap-5 py-5 border-b border-cream-300/50 transition-colors duration-300 ${
                        isActive ? "border-terra-500/30" : ""
                      }`}
                    >
                      <span
                        className={`font-display text-sm tracking-wider ${
                          isActive ? "text-terra-500" : "text-cream-500"
                        }`}
                      >
                        {link.num}
                      </span>

                      <span
                        className={`font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "text-terra-500"
                            : "text-stone-800 group-hover:text-terra-500"
                        }`}
                      >
                        {link.label}
                      </span>

                      <ChevronRight
                        className={`ml-auto h-6 w-6 transition-all duration-300 ${
                          isActive
                            ? "text-terra-500 translate-x-0"
                            : "text-cream-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-terra-500"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Quick Services Grid */}
            <div className="px-8 pb-6">
              <motion.p
                className="text-[10px] font-display uppercase tracking-[0.25em] text-stone-400 mb-3"
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                Our Services
              </motion.p>
              <div className="grid grid-cols-3 gap-2">
                {quickServices.map((svc, i) => (
                  <motion.div
                    key={svc.label}
                    custom={i + 1}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="group flex flex-col items-center gap-2 py-3 px-2 rounded-lg border border-cream-300/50 hover:border-terra-500/40 hover:bg-terra-50 transition-all duration-300"
                    >
                      <svc.icon className="h-5 w-5 text-stone-400 group-hover:text-terra-500 transition-colors duration-300" />
                      <span className="text-[10px] font-display uppercase tracking-wider text-stone-500 group-hover:text-stone-800 text-center transition-colors duration-300 leading-tight">
                        {svc.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="px-8 pt-6 pb-4 space-y-3">
              <motion.a
                href="tel:5617276224"
                className="flex items-center gap-4 group"
                custom={9}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <div className="w-10 h-10 bg-terra-50 rounded-lg flex items-center justify-center group-hover:bg-terra-500 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-terra-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-stone-800 font-bold text-sm">
                    {company.phone}
                  </p>
                  <p className="text-stone-400 text-[10px] uppercase tracking-wider">
                    Tap to call
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4"
                custom={10}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <div className="w-10 h-10 bg-cream-200/50 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-stone-400" />
                </div>
                <div>
                  <p className="text-stone-600 text-xs">
                    {company.serviceArea}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex-1" />

            {/* Bottom CTA */}
            <div className="px-8 pb-8 pt-4 space-y-4">
              <motion.div
                custom={12}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="group relative block w-full text-center rounded-full bg-terra-500 hover:bg-terra-600 text-white font-display font-bold uppercase tracking-wider px-6 py-4 text-lg transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative">Get Free Estimate</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
