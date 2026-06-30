"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { businessLocation } from "@/lib/data";

const badges = ["Professional Equipment", "Fast Turnaround", "Mobile Money Accepted"];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
      <div className="ambient-orb-gold opacity-70" style={{ left: "-10%", top: "10%" }} />
      <div className="ambient-orb-red opacity-50" style={{ right: "-5%", bottom: "0%" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-7"
            >
              {badges.map((b) => (
                <span key={b} className="flex items-center gap-1.5 px-3 py-1.5 bg-black/[0.03] border border-black/[0.06] rounded-full text-[11px] text-black/50 tracking-wide uppercase">
                  <CheckCircle size={11} weight="fill" className="text-[#B8860C]" />
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display font-black leading-[0.97] tracking-tight">
                <span className="block text-5xl md:text-6xl lg:text-7xl text-[#15140F]">Highline</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl text-[#15140F]">Ventures</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl gold-gradient mt-1">Car Care.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="origin-left my-7 flex items-center gap-2"
            >
              <div className="h-px w-12 bg-[#C1121F]" />
              <div className="h-px w-4 bg-[#B8860C]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-black/45 leading-relaxed max-w-md"
            >
              Car Wash &middot; Wheel Alignment &middot; Wheel Balancing &middot; Tyre Services &middot; Auto Detailing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C1121F] hover:bg-[#A50F1A] text-white font-bold text-sm rounded-xl transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#C1121F]/15"
              >
                Book a Service
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+256745782799"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-black/10 hover:border-[#B8860C]/50 text-[#15140F] font-semibold text-sm rounded-xl transition-all duration-200"
              >
                <Phone size={16} weight="fill" className="text-[#B8860C]" />
                0745 782799
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-11 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              <div className="flex items-center gap-2 text-xs text-black/35">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                Open Daily
              </div>
              <div className="hidden sm:block h-3 w-px bg-black/10" />
              <a href={businessLocation.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-black/35 hover:text-[#B8860C] transition-colors">
                {businessLocation.address}
              </a>
              <div className="hidden sm:block h-3 w-px bg-black/10" />
              <span className="text-xs text-black/35">MoMo: 11204744</span>
            </motion.div>
          </div>

          {/* Right: bezeled photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="double-bezel-outer"
          >
            <div className="double-bezel-inner relative overflow-hidden aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src="/images/facility-front.jpg"
                alt="Highline Ventures Car Care facility"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
