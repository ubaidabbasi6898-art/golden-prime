export type CartItem = {
  productId: string;
  quantity: number;
};

const STORAGE_KEY = "golden-prime-simple-cart";

type Listener = () => void;

let items: CartItem[] = [];
let hydrated = false;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

function persist() {
  if (typeof window === "undefined" || !hydrated) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function subscribeCart(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Cache these functions to avoid infinite loops in useSyncExternalStore
let cachedSnapshot: { items: CartItem[]; hydrated: boolean } | null = null;

export function getCartSnapshot() {
  if (cachedSnapshot && cachedSnapshot.items === items && cachedSnapshot.hydrated === hydrated) {
    return cachedSnapshot;
  }
  cachedSnapshot = { items, hydrated };
  return cachedSnapshot;
}

const serverSnapshot = { items: [] as CartItem[], hydrated: false };

export function getCartServerSnapshot() {
  return serverSnapshot;
}

export function hydrateCart() {
  if (hydrated || typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as CartItem[]) : [];
    items = Array.isArray(parsed) ? parsed : [];
  } catch {
    items = [];
  }
  hydrated = true;
  cachedSnapshot = null; // Invalidate cache
  emit();
}

export function addToCart(productId: string) {
  hydrateCart();
  const existing = items.find((item) => item.productId === productId);
  items = existing
    ? items.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    : [...items, { productId, quantity: 1 }];
  cachedSnapshot = null; // Invalidate cache
  persist();
  emit();
}

export function updateQuantity(productId: string, quantity: number) {
  hydrateCart();
  if (quantity <= 0) {
    items = items.filter((item) => item.productId !== productId);
  } else {
    items = items.map((item) =>
      item.productId === productId ? { ...item, quantity } : item,
    );
  }
  cachedSnapshot = null; // Invalidate cache
  persist();
  emit();
}

export function removeFromCart(productId: string) {
  hydrateCart();
  items = items.filter((item) => item.productId !== productId);
  cachedSnapshot = null; // Invalidate cache
  persist();
  emit();
}
