import Link from "next/link";
import { Phone, MapPin, WhatsappLogo, FacebookLogo, InstagramLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Logo from "@/components/ui/Logo";
import { businessLocation } from "@/lib/data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Car Wash & Detailing",
  "Wheel Alignment",
  "Wheel Balancing",
  "Tyre Fitting",
  "Machine Polish",
  "Engine Wash",
  "Headlight Restore",
  "Fleet Washing",
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.05]">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8C0D16] via-[#C1121F] to-[#8C0D16]" />
        <div className="ambient-orb-gold opacity-30" style={{ right: "10%", top: "50%", transform: "translateY(-50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white">Ready for Premium Car Care?</h2>
            <p className="text-white/60 mt-1 text-[13px]">Book your service or reach out directly.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+256745782799" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#C1121F] font-bold text-[13px] rounded-full hover:bg-white/90 transition-all active:scale-[0.98]">
              <Phone size={15} weight="fill" /> Call Now
            </a>
            <a href="https://wa.me/256792914253" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-black/20 border border-white/20 text-white font-bold text-[13px] rounded-full hover:bg-black/30 transition-all active:scale-[0.98]">
              <WhatsappLogo size={15} weight="fill" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center p-1.5">
                <Logo size={28} />
              </div>
              <div>
                <div className="text-white font-display font-bold text-[12px] tracking-[0.06em] uppercase">Highline Ventures</div>
                <div className="text-[#D4AF37] text-[8px] tracking-[0.25em] uppercase opacity-80">Car Care</div>
              </div>
            </div>
            <p className="text-white/30 text-[12px] leading-relaxed mb-6 max-w-[200px]">
              Uganda&apos;s premier automotive care center. Professional services with precision.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://facebook.com", icon: FacebookLogo, label: "Facebook" },
                { href: "https://instagram.com", icon: InstagramLogo, label: "Instagram" },
                { href: "https://wa.me/256792914253", icon: WhatsappLogo, label: "WhatsApp" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-xl border border-white/[0.06] hover:border-[#C1121F]/40 hover:bg-[#C1121F]/10 flex items-center justify-center text-white/30 hover:text-white transition-all duration-300">
                  <Icon size={14} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white/60 font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-2 text-white/30 hover:text-[#D4AF37] text-[12px] transition-colors group">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/60 font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="flex items-center gap-2 text-white/30 hover:text-[#D4AF37] text-[12px] transition-colors group">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/60 font-semibold text-[10px] tracking-[0.2em] uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+256745782799" className="flex items-start gap-3 group">
                  <Phone size={14} weight="fill" className="text-[#C1121F] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] text-white/20 uppercase tracking-widest">Phone</div>
                    <div className="text-white/50 group-hover:text-white text-[12px] transition-colors">0745 782799</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/256792914253" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <WhatsappLogo size={14} weight="fill" className="text-[#25D366] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] text-white/20 uppercase tracking-widest">WhatsApp / MoMo</div>
                    <div className="text-white/50 group-hover:text-white text-[12px] transition-colors">0792 914253</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={businessLocation.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin size={14} weight="fill" className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] text-white/20 uppercase tracking-widest">Location</div>
                    <div className="text-white/50 group-hover:text-white text-[12px] transition-colors">Get Directions</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="p-3.5 rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/3">
                  <div className="text-[9px] text-[#D4AF37]/60 uppercase tracking-widest mb-1">Pay with MoMo</div>
                  <div className="font-mono font-bold text-xl text-white tracking-widest">11204744</div>
                  <div className="text-[9px] text-white/20 mt-0.5">MTN *165*3#</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.04] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-[11px]">&copy; {new Date().getFullYear()} Highline Ventures Car Care. All rights reserved.</p>
          <p className="text-white/10 text-[11px]">Premium Automotive Services &middot; Uganda</p>
        </div>
      </div>
    </footer>
  );
}
