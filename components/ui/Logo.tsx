import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 36 }: LogoProps) {
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
        stroke="#C1121F"
        strokeWidth="5"
        fill="none"
      />
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontFamily="var(--font-outfit), sans-serif"
        fontWeight="800"
        fontSize="38"
        fill="#C1121F"
      >
        HV
      </text>
    </svg>
  );
}
