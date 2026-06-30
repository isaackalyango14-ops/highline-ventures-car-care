"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

const categories = [
  { key: "all", label: "All Services" },
  { key: "wash", label: "Wash & Clean" },
  { key: "wheel", label: "Wheel Services" },
  { key: "tyre", label: "Tyre Services" },
  { key: "detail", label: "Detailing" },
  { key: "interior", label: "Interior" },
];

export default function ServicesPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/workshop-interior.jpg"
            alt="Highline Ventures workshop"
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl text-[#15140F] mb-5"
          >
            Our <span className="gold-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-black/45 text-lg max-w-xl mx-auto"
          >
            Professional automotive care delivered with precision, using industry-grade equipment.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What We" highlight="Do" className="mb-10" />

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === cat.key
                    ? "bg-[#C1121F] text-white"
                    : "bg-black/[0.03] text-black/50 hover:text-[#15140F] hover:bg-black/[0.06]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipment showcase */}
      <section className="section-padding bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Professional"
            highlight="Equipment"
            subtitle="We invest in proper tools because quality results depend on it."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/wheel-balancer.jpg", label: "JohnBean 300L Wheel Balancer" },
              { src: "/images/tyre-changer.jpg", label: "Professional Tyre Changer" },
              { src: "/images/alignment-machine.jpg", label: "Hydraulic Alignment System" },
              { src: "/images/alignment-pit.jpg", label: "4-Post Alignment Pit" },
              { src: "/images/workshop-interior.jpg", label: "Full Workshop Bay" },
              { src: "/images/workshop-staff.jpg", label: "Trained Technicians" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
