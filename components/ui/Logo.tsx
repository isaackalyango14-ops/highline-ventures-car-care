import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Logo({ className, size = 36, color = "#D71920" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
      role="img"
      aria-label="Highline Ventures logo"
    >
      {/* Hexagon: flat top and bottom, uniform stroke, miter corners */}
      <polygon
        points="230,120 175,24.74 65,24.74 10,120 65,215.26 175,215.26"
        stroke={color}
        strokeWidth="14"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* H: left stem, square corners */}
      <path
        d="M65 56 V184"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* H crossbar continuing directly into V as one path: clean 90deg inside corner, no offset */}
      <path
        d="M65 120 H111 L139 184 L177 56"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}
