import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import StickyPhone from "@/components/layout/StickyPhone";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: {
    template: "%s | Paint Pro Handyman Services",
    default:
      "Paint Pro Handyman Services | Painting & Repairs — Lake Worth, FL",
  },
  description:
    "Professional painting and handyman services in Lake Worth and Palm Beach County. Drywall, painting, flooring, plumbing, and more. Call (561) 727-6224 for a free estimate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap"
        />
      </head>
      <body className="font-body antialiased bg-cream-50 text-stone-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-terra-500 focus:text-white focus:font-display focus:font-semibold focus:text-sm focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <LenisProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyPhone />
          <BackToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
