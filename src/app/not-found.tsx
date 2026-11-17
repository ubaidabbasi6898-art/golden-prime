import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-5xl text-black">Page not found</h1>
      <p className="mt-4 text-muted">Return to Golden Prime to continue browsing.</p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
