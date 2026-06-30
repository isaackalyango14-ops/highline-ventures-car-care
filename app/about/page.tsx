"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, CheckCircle } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  { icon: Target, title: "Precision", desc: "Every detail matters. We approach every vehicle with surgical precision." },
  { icon: Heart, title: "Passion", desc: "We genuinely care about cars and the people who drive them." },
  { icon: CheckCircle, title: "Integrity", desc: "Transparent pricing, honest advice, and work we stand behind." },
];

const milestones = [
  { year: "2021", event: "Highline Ventures Car Care founded in Kampala." },
  { year: "2022", event: "Expanded to full wheel services with professional alignment equipment." },
  { year: "2023", event: "Introduced JohnBean 300L precision wheel balancer and Pro Detailing services." },
  { year: "2024", event: "Over 1,000 vehicles serviced. Launched fleet washing for corporate clients." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#0F0F0F]">
        <div className="absolute inset-0">
          <Image
            src="/images/facility-front.jpg"
            alt="Highline Ventures facility"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F]/70 to-[#0F0F0F]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl text-white mb-5"
          >
            About <span className="gold-gradient">Highline Ventures</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Uganda&apos;s premium destination for professional automotive care.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Our" highlight="Story" className="mb-7" />
              <div className="space-y-4 text-white/60 text-base leading-relaxed">
                <p>
                  Highline Ventures Car Care was born from a simple belief: every vehicle deserves to be treated with the same precision and respect that premium automotive brands are known for.
                </p>
                <p>
                  Founded in Kampala, Uganda, we set out to build a service center that combined professional-grade equipment with genuine attention to detail. What started as a car wash has grown into a full-service automotive care center offering everything from wheel alignment and balancing to machine polishing and pro detailing.
                </p>
                <p>
                  Today, Highline Ventures is trusted by individual car owners, fleet managers, and automotive enthusiasts across Uganda. Our team of trained technicians handles every vehicle with expertise, whether it is a daily commuter or a luxury SUV.
                </p>
                <p>
                  We invest in proper equipment because we know the difference it makes. Our JohnBean 300L balancer, computerised alignment system, and professional tyre changers deliver results that cheaper alternatives simply cannot match.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src="/images/workshop-staff.jpg" alt="Highline Ventures team" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="/images/wheel-balancer.jpg" alt="JohnBean wheel balancer" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="/images/alignment-pit.jpg" alt="Wheel alignment system" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-[#0F0F0F] border border-[#C1121F]/20 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C1121F]/15 flex items-center justify-center mb-5">
                <Target size={24} weight="duotone" className="text-[#C1121F]" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Our Mission</h3>
              <p className="text-white/50 leading-relaxed">
                To deliver premium automotive care services that exceed expectations in quality, speed, and value. We exist to protect your investment, enhance your vehicle&apos;s performance, and make every car owner feel like their vehicle matters.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-5">
                <Eye size={24} weight="duotone" className="text-[#D4AF37]" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Our Vision</h3>
              <p className="text-white/50 leading-relaxed">
                To become East Africa&apos;s most trusted name in automotive care, known for combining European-standard equipment with the warmth and efficiency that Ugandan service is famous for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our" highlight="Values" centered className="mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 bg-[#141414] rounded-2xl border border-white/5"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C1121F]/10 flex items-center justify-center mb-5">
                    <Icon size={28} weight="duotone" className="text-[#D4AF37]" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#141414]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our" highlight="Journey" centered className="mb-12" />
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="font-display font-bold text-sm text-[#D4AF37]">{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-[#C1121F] ring-4 ring-[#0F0F0F]" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed pt-0.5">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
