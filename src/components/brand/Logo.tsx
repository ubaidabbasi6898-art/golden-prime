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
      {/* SVG keeps the GP mark + GOLDEN/PRIME wordmark sharp at every size */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? "/golden-prime-logo-light.svg" : "/golden-prime-logo.svg"}
        alt="Golden Prime"
        width={240}
        height={65}
        className="h-11 w-auto object-contain sm:h-14"
        decoding="async"
      />
    </Link>
  );
}
