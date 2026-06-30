"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, CaretLeft, CaretRight, MagnifyingGlassPlus } from "@phosphor-icons/react";
import { galleryImages } from "@/lib/data";

const categories = ["All", "Facility", "Workshop", "Equipment"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const prevImage = () => {
    if (lightbox === null) return;
    setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
  };

  const nextImage = () => {
    if (lightbox === null) return;
    setLightbox(lightbox === filtered.length - 1 ? 0 : lightbox + 1);
  };

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === cat
                ? "bg-[#C1121F] text-white"
                : "bg-black/[0.03] text-black/50 hover:text-[#15140F] hover:bg-black/[0.06]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(i)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <MagnifyingGlassPlus
                  size={28}
                  weight="bold"
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-xs text-white">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={20} weight="bold" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
              className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-[#C1121F] flex items-center justify-center text-white transition-colors z-10"
            >
              <CaretLeft size={20} weight="bold" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={900}
                className="object-contain w-full h-full max-h-[85vh]"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
              className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-[#C1121F] flex items-center justify-center text-white transition-colors z-10"
            >
              <CaretRight size={20} weight="bold" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/60 text-sm">{filtered[lightbox].alt}</p>
              <p className="text-white/30 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
