import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  className?: string;
};

export function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Golden Prime home"
    >
      <Image
        src={light ? "/golden-prime-logo-light.png" : "/golden-prime-logo.png"}
        alt="Golden Prime"
        width={240}
        height={82}
        className="h-10 w-auto object-contain sm:h-12"
        priority
      />
    </Link>
  );
}
