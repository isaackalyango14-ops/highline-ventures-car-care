"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Info } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { washPricingCar, washPricingSUV, extrasCar, extrasSUV } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

const featured = ["Pro Full House", "Full Valet", "Machine Polish+", "Pro Detailer"];

export default function PricingPage() {
  const [vehicleType, setVehicleType] = useState<"car" | "suv">("car");

  const washPricing = vehicleType === "car" ? washPricingCar : washPricingSUV;
  const extras = vehicleType === "car" ? extrasCar : extrasSUV;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl text-white mb-5"
          >
            Clear <span className="gold-gradient">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Transparent rates with no hidden charges. All prices in Ugandan Shillings (UGX).
          </motion.p>
        </div>
      </section>

      {/* Vehicle type toggle */}
      <section className="bg-[#0F0F0F] pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-[#141414] border border-white/10 rounded-2xl p-1.5 gap-1">
              <button
                onClick={() => setVehicleType("car")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  vehicleType === "car"
                    ? "bg-[#C1121F] text-white shadow-lg"
                    : "text-white/40 hover:text-white"
                }`}
              >
                Car / Sedan
              </button>
              <button
                onClick={() => setVehicleType("suv")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  vehicleType === "suv"
                    ? "bg-[#C1121F] text-white shadow-lg"
                    : "text-white/40 hover:text-white"
                }`}
              >
                SUV / Double Cab
              </button>
            </div>
          </div>

          {/* Main pricing */}
          <motion.div
            key={vehicleType}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeading
              title="Car Wash"
              highlight="Packages"
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
              {washPricing.map((item, i) => {
                const isFeatured = featured.includes(item.name);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative p-5 rounded-2xl border transition-all ${
                      isFeatured
                        ? "border-[#C1121F]/50 bg-gradient-to-br from-[#C1121F]/10 to-[#141414]"
                        : "border-white/5 bg-[#141414]"
                    }`}
                  >
                    {isFeatured && item.name === "Pro Detailer" && (
                      <div className="absolute -top-3 left-5">
                        <span className="px-3 py-1 bg-[#D4AF37] text-[#0F0F0F] text-[10px] font-bold rounded-full uppercase tracking-wider">
                          Premium
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle
                        size={16}
                        weight="fill"
                        className={isFeatured ? "text-[#C1121F]" : "text-white/20"}
                      />
                      <h3 className="font-medium text-white text-sm">{item.name}</h3>
                    </div>
                    <div className="font-display font-black text-2xl text-white">
                      {formatPrice(item.price)}
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 block w-full text-center py-2.5 rounded-xl text-xs font-semibold transition-all border border-white/10 hover:border-[#C1121F] text-white/50 hover:text-white"
                    >
                      Book This
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Extras */}
            <SectionHeading title="Add-On" highlight="Extras" className="mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {extras.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-5 bg-[#141414] border border-white/5 rounded-xl hover:border-[#D4AF37]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="text-white/70 text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="font-display font-bold text-[#D4AF37]">{formatPrice(item.price)}</span>
                </motion.div>
              ))}
            </div>

            {/* Wheel services note */}
            <div className="p-5 bg-[#141414] border border-[#D4AF37]/20 rounded-2xl flex gap-4">
              <Info size={20} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Wheel & Tyre Services</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Pricing for wheel alignment, wheel balancing, tyre fitting, and tyre changing varies by vehicle type and tyre size. Contact us directly on{" "}
                  <a href="tel:+256745782799" className="text-[#D4AF37] hover:underline">0745 782799</a>{" "}
                  for a custom quote.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#141414] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-white/50 mb-7">Pay easily with MTN Mobile Money or cash at our facility.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#C1121F] hover:bg-[#9A0E18] text-white font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              Book a Service
            </Link>
            <a
              href="tel:+256745782799"
              className="px-8 py-4 border border-white/20 hover:border-[#D4AF37] text-white font-semibold rounded-xl transition-all"
            >
              Call 0745 782799
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
