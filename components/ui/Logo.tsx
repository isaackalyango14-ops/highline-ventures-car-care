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
      {/* H - thin, left side, full height */}
      <path
        d="M30 22 V78 M30 50 H50 M50 22 V50"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* V - bold, overlapping from H crossbar to top-right corner */}
      <path
        d="M50 50 L62 82 L80 20"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
