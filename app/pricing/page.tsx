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
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl text-[#15140F] mb-5"
          >
            Clear <span className="gold-gradient">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-black/45 text-lg max-w-xl mx-auto"
          >
            Transparent rates with no hidden charges. All prices in Ugandan Shillings (UGX).
          </motion.p>
        </div>
      </section>

      {/* Vehicle type toggle */}
      <section className="bg-white pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-[#FAFAF8] border border-black/[0.06] rounded-2xl p-1.5 gap-1">
              <button
                onClick={() => setVehicleType("car")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  vehicleType === "car"
                    ? "bg-[#C1121F] text-white shadow-lg"
                    : "text-black/40 hover:text-[#15140F]"
                }`}
              >
                Car / Sedan
              </button>
              <button
                onClick={() => setVehicleType("suv")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  vehicleType === "suv"
                    ? "bg-[#C1121F] text-white shadow-lg"
                    : "text-black/40 hover:text-[#15140F]"
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
            <SectionHeading title="Car Wash" highlight="Packages" className="mb-8" />

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
                        ? "border-[#C1121F]/40 bg-gradient-to-br from-[#C1121F]/6 to-[#FAFAF8]"
                        : "border-black/[0.05] bg-[#FAFAF8]"
                    }`}
                  >
                    {isFeatured && item.name === "Pro Detailer" && (
                      <div className="absolute -top-3 left-5">
                        <span className="px-3 py-1 bg-[#B8860C] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                          Premium
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle size={16} weight="fill" className={isFeatured ? "text-[#C1121F]" : "text-black/15"} />
                      <h3 className="font-medium text-[#15140F] text-sm">{item.name}</h3>
                    </div>
                    <div className="font-display font-black text-2xl text-[#15140F]">
                      {formatPrice(item.price)}
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 block w-full text-center py-2.5 rounded-xl text-xs font-semibold transition-all border border-black/[0.08] hover:border-[#C1121F] text-black/50 hover:text-[#15140F]"
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
                  className="flex items-center justify-between p-5 bg-[#FAFAF8] border border-black/[0.05] rounded-xl hover:border-[#B8860C]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#B8860C]" />
                    <span className="text-black/60 text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="font-display font-bold text-[#B8860C]">{formatPrice(item.price)}</span>
                </motion.div>
              ))}
            </div>

            {/* Wheel services note */}
            <div className="p-5 bg-[#FAFAF8] border border-[#B8860C]/15 rounded-2xl flex gap-4">
              <Info size={20} className="text-[#B8860C] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[#15140F] font-semibold text-sm mb-1">Wheel & Tyre Services</h4>
                <p className="text-black/50 text-sm leading-relaxed">
                  Pricing for wheel alignment, wheel balancing, tyre fitting, and tyre changing varies by vehicle type and tyre size. Contact us directly on{" "}
                  <a href="tel:+256745782799" className="text-[#B8860C] hover:underline">0745 782799</a>{" "}
                  for a custom quote.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FAFAF8] border-t border-black/[0.05]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#15140F] mb-4">Ready to Book?</h2>
          <p className="text-black/45 mb-7">Pay easily with MTN Mobile Money or cash at our facility.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#C1121F] hover:bg-[#A50F1A] text-white font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              Book a Service
            </Link>
            <a
              href="tel:+256745782799"
              className="px-8 py-4 border border-black/10 hover:border-[#B8860C] text-[#15140F] font-semibold rounded-xl transition-all"
            >
              Call 0745 782799
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
