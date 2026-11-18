import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Golden Prime home"
    >
      <Image
        src="/golden-prime-logo.png"
        alt="Golden Prime"
        width={220}
        height={120}
        className="h-11 w-auto object-contain sm:h-12"
        priority
      />
    </Link>
  );
}
