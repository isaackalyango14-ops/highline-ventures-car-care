import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, highlight, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-[1.05] tracking-tight">
        {title}{" "}
        {highlight && <span className="gold-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-white/40 text-[14px] leading-relaxed max-w-md", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
      <div className={cn("mt-5 flex items-center gap-1", centered && "justify-center")}>
        <div className="h-px w-10 bg-[#C1121F]" />
        <div className="h-px w-3 bg-[#D4AF37]" />
        <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
      </div>
    </div>
  );
}
