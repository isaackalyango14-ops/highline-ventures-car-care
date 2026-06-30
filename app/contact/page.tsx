import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, WhatsappLogo, MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: "Book a car wash, wheel alignment, detailing, or any automotive service at Highline Ventures Car Care in Kampala, Uganda.",
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0745 782799", href: "tel:+256745782799", color: "text-[#C1121F]" },
  { icon: WhatsappLogo, label: "WhatsApp", value: "0792 914253", href: "https://wa.me/256792914253", color: "text-[#25D366]" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: null, color: "text-[#D4AF37]" },
  { icon: Clock, label: "Hours", value: "Open Daily", href: null, color: "text-[#C1121F]" },
  { icon: CurrencyDollar, label: "Payment", value: "Cash / MTN MoMo", href: null, color: "text-[#D4AF37]" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-5">
            Book a <span className="gold-gradient">Service</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Reach out to book, ask a question, or get a custom quote for your vehicle.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-[#141414] border border-white/5 hover:border-[#C1121F]/30 rounded-xl transition-colors">
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

              {/* MoMo */}
              <div className="p-5 bg-[#141414] border border-[#D4AF37]/20 rounded-xl">
                <div className="text-xs text-[#D4AF37] uppercase tracking-widest mb-2">Pay with MoMo</div>
                <div className="font-mono font-bold text-2xl text-white tracking-widest">11204744</div>
                <div className="text-xs text-white/30 mt-1">Dial *165*3# on MTN</div>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+256745782799"
                  className="flex items-center justify-center gap-2 py-3 bg-[#C1121F] hover:bg-[#9A0E18] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <Phone size={16} weight="fill" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/256792914253?text=Hello%20Highline%20Ventures%2C%20I%20want%20to%20book%20a%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#1fba59] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-white/5 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127672.57997967!2d32.5821!3d0.3476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjAnNTEuNiJOIDMywrAzNCc1NS42IkU!5e0!3m2!1sen!2sug!4v1620000000000!5m2!1sen!2sug"
                  className="w-full h-full opacity-70"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Highline Ventures location map"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#141414]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Quick" highlight="Answers" centered className="mb-12" />
          <FAQ />
        </div>
      </section>
    </>
  );
}
