"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/lib/data";

function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [started, setStarted] = useState(false);
  if (inView && !started) setStarted(true);
  const count = useCounter(value, 2200, started);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="double-bezel-outer flex-1"
    >
      <div className="double-bezel-inner px-6 py-8 text-center">
        <div className="font-display font-black text-4xl md:text-5xl tracking-tight leading-none mb-2">
          <span className="gold-gradient">{count}</span>
          <span className="text-[#C1121F]">{suffix}</span>
        </div>
        <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 bg-[#080808] overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-orb-red opacity-40" style={{ left: "20%", top: "50%", transform: "translate(-50%,-50%)" }} />
      <div className="ambient-orb-gold opacity-60" style={{ right: "15%", top: "50%", transform: "translate(50%,-50%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-3">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
