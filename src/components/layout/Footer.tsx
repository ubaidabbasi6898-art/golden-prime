import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="mt-auto bg-black text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Logo light />
          <p className="max-w-xs text-sm text-cream/70">
            Premium furniture for modern homes — crafted comfort, elegant
            finishes, and lasting quality.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-display text-xl text-gold">Explore</h3>
          <ul className="space-y-2 text-sm text-cream/75">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gold">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-display text-xl text-gold">Visit Us</h3>
          <p className="text-sm text-cream/75">
            Golden Prime
            <br />
            Islamabad S7 Parkers
            <br />
            <a href="tel:0300125789" className="hover:text-gold">
              0300125789
            </a>
            <br />
            <a href="mailto:Lukman124@gmail.com" className="hover:text-gold">
              Lukman124@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-cream/50 sm:px-6">
          © {new Date().getFullYear()} Golden Prime. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
