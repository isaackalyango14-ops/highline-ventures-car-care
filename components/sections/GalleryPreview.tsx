"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MagnifyingGlassPlus } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";

const previewImages = [
  { src: "/images/facility-panorama.jpg", alt: "Highline Ventures facility", span: "col-span-2" },
  { src: "/images/wheel-balancer.jpg", alt: "JohnBean wheel balancer", span: "" },
  { src: "/images/tyre-changer.jpg", alt: "Tyre changer machine", span: "" },
  { src: "/images/alignment-pit.jpg", alt: "Wheel alignment system", span: "" },
  { src: "/images/workshop-interior.jpg", alt: "Workshop interior", span: "" },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Inside Our"
            highlight="Facility"
            subtitle="State-of-the-art equipment and a professional workspace."
          />
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-sm text-[#B8860C] hover:text-[#15140F] transition-colors font-medium flex-shrink-0"
          >
            Full Gallery
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {previewImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span} ${i === 0 ? "aspect-[16/9]" : "aspect-square"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <MagnifyingGlassPlus
                  size={32}
                  weight="bold"
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
