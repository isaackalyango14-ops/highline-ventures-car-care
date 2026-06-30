"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shower, ArrowsLeftRight, Gauge, Sparkle, Star, ArrowRight } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  {
    icon: Shower,
    title: "Car Wash",
    desc: "From Wash & Go to comprehensive Full Valet. Every surface treated with precision.",
    tag: "From UGX 10,000",
    size: "lg:col-span-2",
    accent: "#C1121F",
  },
  {
    icon: ArrowsLeftRight,
    title: "Wheel Alignment",
    desc: "Computerised 4-wheel alignment. Restore perfect handling.",
    tag: "Custom Quote",
    size: "",
    accent: "#D4AF37",
  },
  {
    icon: Gauge,
    title: "Wheel Balancing",
    desc: "JohnBean 300L precision. Eliminate vibration, extend tyre life.",
    tag: "Custom Quote",
    size: "",
    accent: "#C1121F",
  },
  {
    icon: Sparkle,
    title: "Machine Polish",
    desc: "Paint correction and machine polishing. Showroom-level finish.",
    tag: "From UGX 130,000",
    size: "",
    accent: "#D4AF37",
  },
  {
    icon: Star,
    title: "Pro Detailing",
    desc: "The ultimate inside-out transformation. Our most premium package.",
    tag: "From UGX 290,000",
    size: "lg:col-span-2",
    accent: "#C1121F",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-[#FAFAF8] relative overflow-hidden">
      <div className="ambient-orb-red opacity-30" style={{ right: "-5%", top: "30%" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading title="What We" highlight="Offer" subtitle="Nine services. One standard. Exceptional." />
          <Link href="/services" className="group flex items-center gap-2 text-[13px] text-[#B8860C] hover:text-[#15140F] transition-colors font-semibold flex-shrink-0">
            View All Services
            <span className="w-6 h-6 rounded-full border border-[#B8860C]/30 group-hover:border-black/30 flex items-center justify-center transition-colors">
              <ArrowRight size={11} weight="bold" />
            </span>
          </Link>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`double-bezel-outer group cursor-pointer ${card.size}`}
              >
                <div className="double-bezel-inner p-6 h-full flex flex-col gap-4 hover:bg-[#F7F6F2] transition-colors duration-500 min-h-[180px]">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${card.accent}18` }}
                    >
                      <Icon size={20} weight="light" style={{ color: card.accent }} />
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                      style={{ background: `${card.accent}15`, color: card.accent }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-[17px] text-[#15140F] mb-1.5">{card.title}</h3>
                    <p className="text-black/40 text-[13px] leading-relaxed">{card.desc}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="flex items-center gap-1.5 text-[12px] font-semibold transition-colors duration-300 w-fit"
                    style={{ color: card.accent }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book Now
                    <ArrowRight size={12} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
