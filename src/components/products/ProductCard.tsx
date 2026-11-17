"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/format";
import type { Product } from "@/data/products";

const FALLBACK =
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [src, setSrc] = useState(product.image);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <Image
          src={src}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          onError={() => setSrc(FALLBACK)}
        />
        <span className="absolute left-3 top-3 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-widest text-cream">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 pt-4">
        <h3 className="font-display text-2xl text-black">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted">{product.description}</p>
        <p className="mt-auto pt-2 text-base font-medium text-black">
          {formatPKR(product.price)}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-2 border border-black bg-black px-4 py-3 text-xs uppercase tracking-[0.2em] text-cream transition hover:border-gold hover:bg-gold hover:text-black"
        >
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
