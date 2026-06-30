"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-[#080808] relative overflow-hidden">
      <div className="ambient-orb-red opacity-25" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Customers" highlight="Say" subtitle="Real feedback from clients across Kampala." centered className="mb-14" />

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="double-bezel-outer"
            >
              <div className="double-bezel-inner p-8 md:p-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={14} weight="fill" className="text-[#D4AF37]" />
                  ))}
                </div>

                <blockquote className="text-white/75 text-lg md:text-xl leading-relaxed font-light mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C1121F] to-[#8C0D16] flex items-center justify-center text-white font-bold font-display text-sm shadow-lg shadow-[#C1121F]/20">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-[13px]">{testimonials[current].name}</div>
                    <div className="text-white/30 text-[11px] mt-0.5">{testimonials[current].role} &middot; {testimonials[current].location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-1">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-px rounded-full transition-all duration-400 ${i === current ? "w-8 bg-[#C1121F]" : "w-2 bg-white/15 hover:bg-white/30"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {[prev, next].map((fn, i) => (
                <button
                  key={i}
                  onClick={fn}
                  aria-label={i === 0 ? "Previous" : "Next"}
                  className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-[#C1121F]/40 hover:bg-[#C1121F]/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
                >
                  {i === 0 ? <CaretLeft size={14} weight="bold" /> : <CaretRight size={14} weight="bold" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
