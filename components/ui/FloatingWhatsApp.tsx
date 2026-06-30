"use client";

import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/256792914253?text=Hello%20Highline%20Ventures%2C%20I%20would%20like%20to%20book%20a%20service."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30"
    >
      <WhatsappLogo size={28} weight="fill" className="text-white" />
    </motion.a>
  );
}
