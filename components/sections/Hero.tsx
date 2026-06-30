"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Phone, ArrowRight, CheckCircle, CaretDown } from "@phosphor-icons/react";

const badges = [
  "Professional Equipment",
  "Fast Turnaround",
  "Mobile Money Accepted",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/facility-panorama.jpg"
          alt="Highline Ventures Car Care facility"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </motion.div>

      {/* Geometric accent — vertical red stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C1121F] to-transparent z-10" />

      {/* Gold diagonal line accent */}
      <div className="absolute right-[28%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent z-10 hidden xl:block" />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-28 pb-20">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full text-[11px] text-white/60 tracking-wide uppercase">
                <CheckCircle size={11} weight="fill" className="text-[#D4AF37]" />
                {b}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-black leading-[0.95] tracking-tight">
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white">Premium</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white">Car Care</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl gold-gradient mt-1">in Uganda.</span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="origin-left my-7 flex items-center gap-2"
          >
            <div className="h-px w-12 bg-[#C1121F]" />
            <div className="h-px w-4 bg-[#D4AF37]" />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-white/55 leading-relaxed max-w-lg"
          >
            Car Wash · Wheel Alignment · Wheel Balancing · Tyre Services · Auto Detailing
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C1121F] hover:bg-[#A50F1A] text-white font-bold text-sm rounded-xl transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#C1121F]/25"
            >
              Book a Service
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="tel:+256745782799"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/15 hover:border-[#D4AF37]/60 bg-white/3 hover:bg-white/6 backdrop-blur-sm text-white font-semibold text-sm rounded-xl transition-all duration-200"
            >
              <Phone size={16} weight="fill" className="text-[#D4AF37]" />
              0745 782799
            </a>
          </motion.div>

          {/* Info strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <div className="flex items-center gap-2 text-xs text-white/35">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              Open Daily
            </div>
            <div className="hidden sm:block h-3 w-px bg-white/10" />
            <span className="text-xs text-white/35">Kampala, Uganda</span>
            <div className="hidden sm:block h-3 w-px bg-white/10" />
            <span className="text-xs text-white/35">MoMo: 11204744</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue — just an arrow, no text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <CaretDown size={20} weight="bold" className="text-white/20" />
        </motion.div>
      </motion.div>

      {/* Right panel image — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-0 top-0 bottom-0 w-[28%] hidden xl:block z-0 overflow-hidden"
      >
        <Image
          src="/images/wheel-balancer.jpg"
          alt="JohnBean professional wheel balancer"
          fill
          className="object-cover object-center opacity-25"
          sizes="28vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
      </motion.div>
    </section>
  );
}
