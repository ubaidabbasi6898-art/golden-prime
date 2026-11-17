export type ProductCategory =
  | "Luxury Beds"
  | "Modern Sofas"
  | "Dining Tables"
  | "Dining Chairs"
  | "Wardrobes"
  | "Coffee Tables"
  | "Office Furniture"
  | "Bedroom Furniture";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
}

export const CATEGORIES: ProductCategory[] = [
  "Luxury Beds",
  "Modern Sofas",
  "Dining Tables",
  "Dining Chairs",
  "Wardrobes",
  "Coffee Tables",
  "Office Furniture",
  "Bedroom Furniture",
];

export const products: Product[] = [
  {
    id: "gp-01",
    name: "Royal King Luxury Bed",
    price: 275000,
    category: "Luxury Beds",
    description: "Tall upholstered headboard with a warm walnut base for a serene suite.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-02",
    name: "Velvet Platform Bed",
    price: 198000,
    category: "Luxury Beds",
    description: "Soft channel-tufted headboard and low platform silhouette.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-03",
    name: "Walnut Floating Bed",
    price: 245000,
    category: "Luxury Beds",
    description: "Solid-feel walnut frame with a floating profile and clean lines.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-04",
    name: "Royal Velvet Sofa",
    price: 289000,
    category: "Modern Sofas",
    description: "Deep-seat velvet sofa with sculpted arms and brass-tone legs.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-05",
    name: "Modern L-Shaped Sofa",
    price: 349000,
    category: "Modern Sofas",
    description: "Modular sectional with generous chaise seating for open living rooms.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-06",
    name: "Minimal Three-Seater Sofa",
    price: 219000,
    category: "Modern Sofas",
    description: "Low-profile sofa in a soft textured weave for contemporary homes.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-07",
    name: "Elegant Six-Seater Dining Table",
    price: 189000,
    category: "Dining Tables",
    description: "Walnut dining table with tapered legs and refined proportions.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-08",
    name: "Marble Look Dining Table",
    price: 265000,
    category: "Dining Tables",
    description: "Sintered stone top with a sculptural antique-gold pedestal.",
    image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-09",
    name: "Classic Wooden Dining Set",
    price: 329000,
    category: "Dining Tables",
    description: "Complete dining ensemble with a rectangular table and matching chairs.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-10",
    name: "Gold Tip Dining Chair",
    price: 42000,
    category: "Dining Chairs",
    description: "Velvet dining chair with curved backrest and gold-tipped legs.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-11",
    name: "Modern Accent Dining Chair",
    price: 48000,
    category: "Dining Chairs",
    description: "Comfortable padded seat with a slim contemporary silhouette.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-12",
    name: "Classic Upholstered Chair",
    price: 45000,
    category: "Dining Chairs",
    description: "Soft fabric seat and curved timber frame for everyday dining.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-13",
    name: "Sliding Mirror Wardrobe",
    price: 385000,
    category: "Wardrobes",
    description: "Spacious wardrobe with mirrored sliding doors and organised interiors.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-14",
    name: "Classic Wooden Wardrobe",
    price: 295000,
    category: "Wardrobes",
    description: "Hinged wardrobe with hanging rail, drawers and brass handles.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-15",
    name: "Premium Walnut Coffee Table",
    price: 89000,
    category: "Coffee Tables",
    description: "Low walnut table with rounded corners and an open lower shelf.",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-16",
    name: "Round Marble Coffee Table",
    price: 112000,
    category: "Coffee Tables",
    description: "Round marble-look top on a slender antique-gold pedestal.",
    image: "https://images.unsplash.com/photo-1532372320572-cda25618a5c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-17",
    name: "Executive Office Desk",
    price: 165000,
    category: "Office Furniture",
    description: "Spacious desk with cable ports and dual soft-close drawers.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba55a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-18",
    name: "Premium Office Chair",
    price: 78000,
    category: "Office Furniture",
    description: "Ergonomic leatherette chair with lumbar support and refined base.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-19",
    name: "Walnut Nightstand Pair",
    price: 72000,
    category: "Bedroom Furniture",
    description: "Matched nightstands with drawer storage and brass pulls.",
    image: "https://images.unsplash.com/photo-1538688525198-39b3da4cfab4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-20",
    name: "Bedroom Console Table",
    price: 95000,
    category: "Bedroom Furniture",
    description: "Slim console for styling lamps, mirrors and bedroom accents.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-21",
    name: "Chesterfield Lounge Sofa",
    price: 315000,
    category: "Modern Sofas",
    description: "Button-tufted classic sofa with rolled arms and deep comfort.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gp-22",
    name: "Queen Panel Bed",
    price: 175000,
    category: "Luxury Beds",
    description: "Clean panel headboard and sturdy platform for modern bedrooms.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(limit = 4) {
  return products.slice(0, limit);
}
