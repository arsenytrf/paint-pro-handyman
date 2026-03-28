"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function StickyPhone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:5617276224"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-terra-500 text-white px-5 py-3 shadow-xl font-bold uppercase tracking-wider text-sm lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          aria-label="Call now"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </motion.a>
      )}
    </AnimatePresence>
  );
}
