import type { Metadata } from "next";
import { ProductCard } from "@/components/products/ProductCard";
import { CATEGORIES, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Golden Prime furniture — beds, sofas, dining, wardrobes and more.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Collection</p>
        <h1 className="mt-3 font-display text-5xl text-black">Products</h1>
        <p className="mt-3 text-muted">
          Explore our curated furniture selection with sample pricing in Pakistani Rupees.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <a
            key={category}
            href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
            className="border border-black/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-muted transition hover:border-gold hover:text-black"
          >
            {category}
          </a>
        ))}
      </div>

      <div className="space-y-14">
        {CATEGORIES.map((category) => {
          const items = products.filter((product) => product.category === category);
          if (items.length === 0) return null;
          return (
            <section
              key={category}
              id={category.toLowerCase().replace(/\s+/g, "-")}
            >
              <h2 className="mb-6 border-b border-black/10 pb-3 font-display text-3xl text-black">
                {category}
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
