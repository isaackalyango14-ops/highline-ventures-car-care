"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Wrench, Clock, CurrencyDollar, UsersThree, ShieldCheck } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  { icon: Wrench, title: "Pro Equipment", desc: "JohnBean balancer, computerised alignment, industrial tyre changers." },
  { icon: UsersThree, title: "Trained Team", desc: "Experienced technicians handling every vehicle type with care." },
  { icon: Clock, title: "Fast Service", desc: "Streamlined processes. Minimal wait, maximum quality." },
  { icon: CurrencyDollar, title: "Clear Pricing", desc: "No hidden costs. What you see is exactly what you pay." },
  { icon: ShieldCheck, title: "Quality Check", desc: "Every job is inspected before handover. We own our work." },
  { icon: Trophy, title: "VIP Treatment", desc: "First call to key handover — every customer is treated like a priority." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#060606] relative overflow-hidden">
      <div className="ambient-orb-red opacity-20" style={{ left: "5%", bottom: "10%" }} />
      <div className="ambient-orb-gold opacity-30" style={{ right: "5%", top: "10%" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Image with Double-Bezel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="double-bezel-outer">
              <div className="double-bezel-inner overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/workshop-staff.jpg"
                  alt="Highline Ventures professional team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -right-5 md:bottom-8 md:right-8"
            >
              <div className="double-bezel-outer">
                <div className="double-bezel-inner px-6 py-5 text-center">
                  <div className="font-display font-black text-3xl gold-gradient leading-none">1K+</div>
                  <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] mt-1.5">Vehicles Served</div>
                </div>
              </div>
            </motion.div>

            {/* Gold accent corner */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-3xl border border-[#D4AF37]/10 pointer-events-none" />
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              title="Why Customers Choose"
              highlight="Highline"
              subtitle="Professional equipment. Genuine attention to detail. Every time."
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="group p-4 rounded-2xl border border-white/[0.05] hover:border-[#C1121F]/20 hover:bg-white/[0.02] transition-all duration-500"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#C1121F]/10 flex items-center justify-center mb-3 group-hover:bg-[#C1121F]/18 transition-colors">
                      <Icon size={18} weight="light" className="text-[#C1121F]" />
                    </div>
                    <h4 className="font-semibold text-white text-[13px] mb-1">{r.title}</h4>
                    <p className="text-white/35 text-[12px] leading-relaxed">{r.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
