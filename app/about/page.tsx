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
  { phase: "Launch", event: "Highline Ventures Car Care opened its doors in Kampala with a dedicated car wash bay." },
  { phase: "Equipment", event: "Invested in a JohnBean 300L wheel balancer and computerised alignment system." },
  { phase: "Expansion", event: "Added Pro Detailing, machine polish, and full tyre services to the lineup." },
  { phase: "Today", event: "Over 1,000 vehicles serviced in our first year, with a growing base of returning customers." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="/images/facility-front.jpg"
            alt="Highline Ventures facility"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl text-[#15140F] mb-5"
          >
            About <span className="gold-gradient">Highline Ventures</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-black/45 text-lg max-w-2xl mx-auto"
          >
            Uganda&apos;s premium destination for professional automotive care.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Our" highlight="Story" className="mb-7" />
              <div className="space-y-4 text-black/55 text-base leading-relaxed">
                <p>
                  Highline Ventures Car Care was born from a simple belief: every vehicle deserves to be treated with the same precision and respect that premium automotive brands are known for.
                </p>
                <p>
                  In just our first year in Kampala, Uganda, we have built a service center that combines professional-grade equipment with genuine attention to detail. What started as a car wash has already grown into a full-service automotive care center offering everything from wheel alignment and balancing to machine polishing and pro detailing.
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
              <div className="double-bezel-outer">
                <div className="double-bezel-inner relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/workshop-staff.jpg" alt="Highline Ventures team" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="double-bezel-outer">
                  <div className="double-bezel-inner relative aspect-square overflow-hidden">
                    <Image src="/images/wheel-balancer.jpg" alt="JohnBean wheel balancer" fill className="object-cover" sizes="25vw" />
                  </div>
                </div>
                <div className="double-bezel-outer">
                  <div className="double-bezel-inner relative aspect-square overflow-hidden">
                    <Image src="/images/alignment-pit.jpg" alt="Wheel alignment system" fill className="object-cover" sizes="25vw" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-[#C1121F]/15 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C1121F]/10 flex items-center justify-center mb-5">
                <Target size={24} weight="duotone" className="text-[#C1121F]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#15140F] mb-3">Our Mission</h3>
              <p className="text-black/50 leading-relaxed">
                To deliver premium automotive care services that exceed expectations in quality, speed, and value. We exist to protect your investment, enhance your vehicle&apos;s performance, and make every car owner feel like their vehicle matters.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white border border-[#B8860C]/15 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B8860C]/10 flex items-center justify-center mb-5">
                <Eye size={24} weight="duotone" className="text-[#B8860C]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#15140F] mb-3">Our Vision</h3>
              <p className="text-black/50 leading-relaxed">
                To become East Africa&apos;s most trusted name in automotive care, known for combining European-standard equipment with the warmth and efficiency that Ugandan service is famous for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
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
                  className="text-center p-8 bg-[#FAFAF8] rounded-2xl border border-black/[0.05]"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C1121F]/8 flex items-center justify-center mb-5">
                    <Icon size={28} weight="duotone" className="text-[#B8860C]" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#15140F] mb-3">{v.title}</h3>
                  <p className="text-black/45 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our First" highlight="Year" centered className="mb-12" />
          <div className="relative">
            <div className="absolute left-20 top-0 bottom-0 w-px bg-black/10" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="font-display font-bold text-sm text-[#B8860C]">{m.phase}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-[#C1121F] ring-4 ring-[#FAFAF8]" />
                  </div>
                  <p className="text-black/55 text-sm leading-relaxed pt-0.5">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
