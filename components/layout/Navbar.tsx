"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* Floating pill navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between gap-4 px-4 py-2.5 rounded-full transition-all duration-500 w-full max-w-4xl",
            scrolled
              ? "bg-[#080808]/90 backdrop-blur-2xl border border-white/[0.07] shadow-2xl shadow-black/40"
              : "bg-[#080808]/50 backdrop-blur-xl border border-white/[0.05]"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Highline Ventures">
            <div className="relative w-9 h-9 rounded-xl bg-white/95 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 p-1.5">
              <Logo size={26} />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="text-white font-display font-bold text-[12px] tracking-[0.06em] uppercase">Highline Ventures</div>
              <div className="text-[#D4AF37] font-sans text-[8px] tracking-[0.25em] uppercase mt-0.5 opacity-80">Car Care</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-[12.5px] font-medium tracking-wide rounded-full transition-all duration-300",
                    pathname === link.href
                      ? "text-white bg-white/8"
                      : "text-white/45 hover:text-white/80 hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-white/6 border border-white/8"
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="tel:+256745782799" className="flex items-center gap-1.5 text-[12px] text-white/35 hover:text-white/70 transition-colors">
              <Phone size={12} weight="fill" />
              0745 782799
            </a>
            <Link
              href="/contact"
              className="group flex items-center gap-2 pl-4 pr-2 py-2 bg-[#C1121F] hover:bg-[#A50F1A] text-white text-[12.5px] font-bold rounded-full transition-all duration-300 active:scale-[0.97] shadow-lg shadow-[#C1121F]/25"
            >
              Book Service
              <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] relative"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="block w-5 h-px bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="block w-5 h-px bg-white origin-center"
            />
          </button>
        </motion.nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-3xl flex flex-col"
          >
            <div className="flex flex-col flex-1 justify-center px-8">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between py-4 text-4xl font-display font-black border-b border-white/[0.06] transition-colors",
                        pathname === link.href ? "text-[#D4AF37]" : "text-white/70 hover:text-white"
                      )}
                    >
                      {link.label}
                      {pathname === link.href && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-3 mt-10"
              >
                <a href="tel:+256745782799" className="flex items-center justify-center gap-2 py-4 border border-white/10 text-white font-semibold text-base rounded-2xl">
                  <Phone size={16} weight="fill" /> Call 0745 782799
                </a>
                <Link href="/contact" className="flex items-center justify-center py-4 bg-[#C1121F] text-white font-bold text-base rounded-2xl shadow-xl shadow-[#C1121F]/20">
                  Book a Service
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
