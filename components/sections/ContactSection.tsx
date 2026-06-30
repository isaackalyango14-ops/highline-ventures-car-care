"use client";

import { motion } from "framer-motion";
import { Phone, WhatsappLogo, MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { businessLocation } from "@/lib/data";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0745 782799",
    href: "tel:+256745782799",
    color: "text-[#C1121F]",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "0792 914253",
    href: "https://wa.me/256792914253",
    color: "text-[#25D366]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Get Directions",
    href: businessLocation.googleMapsUrl,
    color: "text-[#D4AF37]",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Open Daily",
    href: null,
    color: "text-[#C1121F]",
  },
  {
    icon: CurrencyDollar,
    label: "MoMo Payment",
    value: "MTN: 0792914253",
    href: null,
    color: "text-[#D4AF37]",
  },
];

export default function ContactSection() {
  return (
    <section className="section-padding bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Book a service, ask a question, or get a custom quote."
          centered
          className="mb-14"
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 bg-[#141414] border border-white/5 rounded-xl hover:border-[#C1121F]/30 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} weight="fill" className={info.color} />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-widest">{info.label}</div>
                    <div className="text-white font-medium text-sm mt-0.5">{info.value}</div>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={info.label} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            {/* MoMo box */}
            <div className="p-5 bg-[#141414] border border-[#D4AF37]/20 rounded-xl">
              <div className="text-xs text-[#D4AF37] uppercase tracking-widest mb-2">Pay with MoMo</div>
              <div className="font-mono font-bold text-2xl text-white tracking-widest">11204744</div>
              <div className="text-xs text-white/30 mt-1">Dial *165*3# on MTN</div>
            </div>

            {/* Map */}
            <a
              href={businessLocation.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 h-48 bg-[#141414] relative transition-colors group"
            >
              <iframe
                src={businessLocation.embedUrl}
                className="w-full h-full opacity-70 group-hover:opacity-90 transition-opacity pointer-events-none"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Highline Ventures location"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl" />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#0F0F0F]/90 backdrop-blur-sm rounded-lg text-[11px] text-white/70 font-medium">
                Open in Google Maps
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
