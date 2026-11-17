import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review furniture selected in your Golden Prime cart.",
};

export default function CartPage() {
  return <CartView />;
}
