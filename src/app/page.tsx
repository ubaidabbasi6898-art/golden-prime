import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts(4);

  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-black text-cream">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury furniture living room"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-end px-4 pb-16 pt-28 sm:px-6 lg:items-center">
          <div className="max-w-xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Golden Prime Furniture
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
              Elevate Your Living with Golden Prime
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cream/80">
              Discover elegant beds, sofas, dining sets and crafted pieces
              designed to bring quiet luxury into every room of your home.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-black transition hover:bg-gold-bright"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Featured</p>
          <h2 className="mt-3 font-display text-4xl text-black">
            Featured Products
          </h2>
          <p className="mt-3 text-muted">
            A selection of popular pieces from the Golden Prime collection.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="text-xs uppercase tracking-[0.22em] text-black transition hover:text-gold"
          >
            View all products →
          </Link>
        </div>
      </section>

      <section className="border-y border-black/10 bg-beige/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
              alt="Furniture craftsmanship and interior detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Craftsmanship
            </p>
            <h2 className="mt-3 font-display text-4xl text-black">
              Quality you can feel
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              At Golden Prime, every piece is chosen for comfort, lasting
              materials and refined design. From walnut finishes to soft
              upholstery, we help you furnish a home that feels premium every
              day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
