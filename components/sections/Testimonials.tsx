"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Customers" highlight="Say" subtitle="Real feedback from clients across Kampala." centered className="mb-14" />

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="double-bezel-outer"
          >
            <div className="double-bezel-inner p-10 md:p-12 text-center flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} weight="regular" className="text-black/15" />
                ))}
              </div>
              <h3 className="font-display font-bold text-lg text-[#15140F]">No reviews yet</h3>
              <p className="text-black/40 text-[13px] leading-relaxed max-w-sm">
                We&apos;re just getting started — be among the first to share your experience with Highline Ventures Car Care.
              </p>
              <a
                href="https://wa.me/256792914253?text=Hi%2C%20I%27d%20like%20to%20leave%20a%20review%20for%20Highline%20Ventures."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-2.5 bg-[#C1121F] hover:bg-[#A50F1A] text-white text-[12px] font-semibold rounded-xl transition-colors"
              >
                Leave a Review
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
