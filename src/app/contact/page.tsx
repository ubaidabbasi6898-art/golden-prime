import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Golden Prime in Islamabad for furniture enquiries.",
};

const WHATSAPP_URL = "https://wa.me/92300125789";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
        <h1 className="mt-3 font-display text-5xl text-black">Get in touch</h1>
        <p className="mt-3 text-muted">
          Reach Golden Prime for product questions, visits or custom furniture guidance.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="border border-black/10 bg-white/50 p-6 sm:p-8">
          <h2 className="font-display text-3xl text-black">Contact information</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="uppercase tracking-wider text-muted">Business Name</dt>
              <dd className="mt-1 text-base text-black">Golden Prime</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted">Phone Number</dt>
              <dd className="mt-1">
                <a href="tel:0300125789" className="text-base text-black hover:text-gold">
                  0300125789
                </a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted">Email Address</dt>
              <dd className="mt-1">
                <a
                  href="mailto:Lukman124@gmail.com"
                  className="text-base text-black hover:text-gold"
                >
                  Lukman124@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted">Business Address</dt>
              <dd className="mt-1 text-base text-black">Islamabad S7 Parkers</dd>
            </div>
          </dl>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#25D366] px-5 py-3 text-xs uppercase tracking-[0.18em] text-black transition hover:brightness-95"
          >
            WhatsApp Us
          </a>
        </section>

        <section className="border border-black/10 bg-beige/40 p-6 sm:p-8">
          <h2 className="mb-6 font-display text-3xl text-black">Send an inquiry</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
