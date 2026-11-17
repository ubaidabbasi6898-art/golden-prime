import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3"
      aria-label="Golden Prime home"
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold bg-black"
        aria-hidden
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
          <defs>
            <linearGradient id="gp" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F0D78C" />
              <stop offset="100%" stopColor="#C6A04A" />
            </linearGradient>
          </defs>
          <path
            d="M10 30V12h8c4.2 0 7 2.6 7 6.2S22.2 24.4 18 24.4H14V30H10zm4-9.6h3.7c1.5 0 2.4-.9 2.4-2.1s-.9-2.1-2.4-2.1H14v4.2z"
            fill="url(#gp)"
          />
          <path
            d="M22 30l5.5-18H31L25.5 30H22z"
            fill="url(#gp)"
            opacity="0.85"
          />
          <path d="M8 31h24" stroke="url(#gp)" strokeWidth="1.2" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.05rem] tracking-[0.28em] ${
            light ? "text-cream" : "text-black"
          }`}
        >
          GOLDEN
        </span>
        <span className="block font-display text-[1.05rem] tracking-[0.32em] text-gold">
          PRIME
        </span>
      </span>
    </Link>
  );
}
