"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react";

const services = [
  "Car Wash", "Wheel Alignment", "Wheel Balancing",
  "Tyre Fitting / Changing", "Machine Polish", "Pro Detailing",
  "Engine Wash", "Headlight Restoration", "Carpet Cleaning",
  "Fleet Washing", "Other",
];

const inputCls = "w-full bg-black/[0.015] border border-black/[0.08] hover:border-black/[0.14] focus:border-[#C1121F]/50 rounded-xl px-4 py-3 text-[13px] text-[#15140F] placeholder-black/25 focus:outline-none transition-all duration-300";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="double-bezel-outer h-full"
      >
        <div className="double-bezel-inner min-h-[420px] flex flex-col items-center justify-center gap-5 p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-[#C1121F]/8 flex items-center justify-center">
            <CheckCircle size={32} weight="light" className="text-[#C1121F]" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-[#15140F] mb-2">Message Received</h3>
            <p className="text-black/40 text-[13px] max-w-xs leading-relaxed">
              We will get back to you shortly. You can also reach us directly on 0745 782799.
            </p>
          </div>
          <button onClick={() => setSent(false)} className="px-5 py-2.5 border border-black/[0.08] hover:border-black/20 text-black/50 hover:text-[#15140F] text-[12px] rounded-xl transition-all">
            Send Another
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="double-bezel-outer">
      <div className="double-bezel-inner p-7 md:p-9 space-y-5">
        <div className="mb-7">
          <h3 className="font-display font-bold text-xl text-[#15140F]">Book a Service</h3>
          <p className="text-black/35 text-[12px] mt-1">We will confirm your booking within a few hours.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-[10px] text-black/30 uppercase tracking-[0.15em] mb-2">Full Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-[10px] text-black/30 uppercase tracking-[0.15em] mb-2">Phone Number</label>
            <input id="phone" name="phone" type="tel" required placeholder="07XX XXXXXX" className={inputCls} />
          </div>
        </div>

        <div>
          <label htmlFor="vehicle" className="block text-[10px] text-black/30 uppercase tracking-[0.15em] mb-2">Vehicle</label>
          <input id="vehicle" name="vehicle" type="text" placeholder="e.g. Toyota Land Cruiser, Mercedes C200" className={inputCls} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="block text-[10px] text-black/30 uppercase tracking-[0.15em] mb-2">Service Needed</label>
            <select id="service" name="service" required className={`${inputCls} appearance-none`}>
              <option value="">Select service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-[10px] text-black/30 uppercase tracking-[0.15em] mb-2">Preferred Date</label>
            <input id="date" name="date" type="date" className={inputCls} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-[10px] text-black/30 uppercase tracking-[0.15em] mb-2">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Any special requests..." className={`${inputCls} resize-none`} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group w-full flex items-center justify-center gap-3 py-4 bg-[#C1121F] hover:bg-[#A50F1A] disabled:opacity-50 text-white font-bold text-[13px] rounded-xl transition-all duration-300 active:scale-[0.99] shadow-lg shadow-[#C1121F]/15"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Send Booking Request
              <span className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <PaperPlaneTilt size={13} weight="fill" />
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
