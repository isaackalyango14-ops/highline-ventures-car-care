"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
            open === i ? "border-[#C1121F]/40 bg-[#1a1a1a]" : "border-white/5 bg-[#141414]"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-medium text-white text-sm md:text-base">{faq.question}</span>
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
              {open === i ? (
                <Minus size={14} weight="bold" className="text-[#C1121F]" />
              ) : (
                <Plus size={14} weight="bold" className="text-white/40" />
              )}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
