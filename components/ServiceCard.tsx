import { motion } from "framer-motion";
import {
  Shower, ArrowsLeftRight, Gauge, Circle, Sparkle, Star,
  Flashlight, Broom, Truck, Clock, ArrowRight,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Shower, ArrowsLeftRight, Gauge, Circle, Sparkle, Star,
  Flashlight, Broom, Truck,
};

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? Circle;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="double-bezel-outer group h-full"
    >
      <div className="double-bezel-inner p-6 flex flex-col gap-4 h-full hover:bg-[#FAFAF8] transition-colors duration-500">
        <div className="flex items-start justify-between">
          <div className="w-11 h-11 rounded-xl bg-[#C1121F]/8 flex items-center justify-center group-hover:bg-[#C1121F]/14 transition-colors duration-300">
            <Icon size={21} weight="light" className="text-[#B8860C]" />
          </div>
          <span className="flex items-center gap-1 text-[10px] text-black/30 bg-black/[0.02] px-2.5 py-1 rounded-full border border-black/[0.05]">
            <Clock size={10} /> {service.duration}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="font-display font-bold text-[17px] text-[#15140F] mb-2">{service.title}</h3>
          <p className="text-black/40 text-[13px] leading-relaxed mb-4">{service.description}</p>
          <ul className="space-y-1.5">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[11px] text-black/35">
                <div className="w-px h-3 bg-[#C1121F]/50 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="group/btn flex items-center gap-2 text-[12px] font-semibold text-[#B8860C] hover:text-[#15140F] transition-colors w-fit pt-2 border-t border-black/[0.05]"
        >
          Book Now
          <span className="w-5 h-5 rounded-full border border-[#B8860C]/30 group-hover/btn:border-black/25 flex items-center justify-center transition-colors">
            <ArrowRight size={10} weight="bold" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
