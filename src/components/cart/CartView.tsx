"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import { formatPKR } from "@/lib/format";

export function CartView() {
  const { items, total, hydrated, updateQuantity, removeFromCart } = useCart();

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="h-32 animate-pulse bg-beige" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-5xl text-black">Your cart is empty</h1>
        <p className="mt-4 text-muted">Browse the collection and add pieces you like.</p>
        <Link
          href="/products"
          className="mt-8 inline-flex bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-black"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-5xl text-black">Your Cart</h1>
      <p className="mt-2 text-sm text-muted">
        Simple selection list — contact us to place an order. No online payment.
      </p>

      <ul className="mt-8 space-y-4">
        {items.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return (
            <li
              key={item.productId}
              className="flex flex-col gap-4 border border-black/10 bg-white/50 p-4 sm:flex-row sm:items-center"
            >
              <div className="relative h-28 w-full overflow-hidden bg-beige sm:h-24 sm:w-24 sm:shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-2xl text-black">{product.name}</h2>
                <p className="text-sm text-muted">{formatPKR(product.price)} each</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="inline-flex border border-black/15">
                    <button
                      type="button"
                      className="h-10 w-10"
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="flex h-10 w-10 items-center justify-center border-x border-black/15 text-sm">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="h-10 w-10"
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId)}
                    className="text-xs uppercase tracking-[0.18em] text-muted hover:text-gold"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-base font-medium text-black sm:text-right">
                {formatPKR(product.price * item.quantity)}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg">
          Total: <span className="font-medium">{formatPKR(total)}</span>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/products"
            className="inline-flex justify-center border border-black/20 px-5 py-3 text-xs uppercase tracking-[0.18em]"
          >
            Continue Browsing
          </Link>
          <Link
            href="/contact"
            className="inline-flex justify-center bg-gold px-5 py-3 text-xs uppercase tracking-[0.18em] text-black"
          >
            Contact to Order
          </Link>
        </div>
      </div>
    </div>
  );
}
