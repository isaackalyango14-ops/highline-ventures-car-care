import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Logo({ className, size = 36, color = "#C1121F" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
      role="img"
      aria-label="Highline Ventures logo"
    >
      <polygon
        points="50,4 91,27 91,73 50,96 9,73 9,27"
        stroke={color}
        strokeWidth="5"
        fill="none"
      />
      {/* lowercase h - tall ascender, arch, short leg */}
      <path
        d="M28 16 V80 M28 44 Q28 36 38 36 Q46 36 46 44 V80"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* V - bold, overlapping from h's leg to top-right corner */}
      <path
        d="M46 44 L58 82 L82 18"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
