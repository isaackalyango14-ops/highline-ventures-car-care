import GalleryGrid from "@/components/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See our facility, equipment, and work. Professional automotive care in Kampala, Uganda.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-4xl md:text-6xl text-[#15140F] mb-5">
            Our <span className="gold-gradient">Gallery</span>
          </h1>
          <p className="text-black/45 text-lg max-w-xl mx-auto">
            Take a look inside Highline Ventures. Professional equipment, clean workspace, exceptional results.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
