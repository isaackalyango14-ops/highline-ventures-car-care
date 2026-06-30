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
      {/* Small H, upper left */}
      <path
        d="M27 30 V44 M27 37 H37 M37 30 V44"
        stroke={color}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Connecting line from H down to V */}
      <path d="M32 44 L40 56" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Large V */}
      <path
        d="M30 50 L50 82 L70 50"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
