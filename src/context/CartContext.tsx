"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getProductById } from "@/data/products";
import {
  addToCart,
  getCartServerSnapshot,
  getCartSnapshot,
  hydrateCart,
  removeFromCart,
  subscribeCart,
  updateQuantity,
} from "@/lib/cart-store";

type CartContextValue = {
  items: ReturnType<typeof getCartSnapshot>["items"];
  itemCount: number;
  total: number;
  hydrated: boolean;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeCart,
    getCartSnapshot,
    getCartServerSnapshot,
  );

  useEffect(() => {
    hydrateCart();
  }, []);

  const { itemCount, total } = useMemo(() => {
    let count = 0;
    let sum = 0;
    for (const item of snapshot.items) {
      const product = getProductById(item.productId);
      if (!product) continue;
      count += item.quantity;
      sum += product.price * item.quantity;
    }
    return { itemCount: count, total: sum };
  }, [snapshot.items]);

  return (
    <CartContext.Provider
      value={{
        items: snapshot.items,
        itemCount,
        total,
        hydrated: snapshot.hydrated,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
