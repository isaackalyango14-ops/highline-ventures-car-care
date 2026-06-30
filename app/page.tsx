import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/FAQ";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highline Ventures Car Care | Premium Car Wash & Wheel Services Uganda",
  description:
    "Uganda's premier automotive care center. Professional car wash, wheel alignment, wheel balancing, tyre services, and auto detailing in Kampala.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />

      {/* FAQ Section */}
      <section className="section-padding bg-[#141414]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common"
            highlight="Questions"
            subtitle="Everything you need to know before your visit."
            centered
            className="mb-12"
          />
          <FAQ />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
