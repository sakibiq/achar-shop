// ============================================================
// PRODUCTS DATA
// ============================================================
// To add, remove, or edit products, just change this file.
// - id: unique string, no spaces
// - name: product display name
// - description: short description shown on card
// - price: number in BDT (Taka)
// - image: put your image in /public/images/ and update the path
// - badge: optional badge text like "Best Seller" or "New"
// ============================================================

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "mango-achar",
    name: "Mango Achar",
    description: "Tangy sun-dried mango pickle with traditional Cox's Bazar spices. Perfect with rice or paratha.",
    price: 180,
    image: "/images/mango-achar.jpg",
    badge: "Best Seller",
  },
  {
    id: "tamarind-achar",
    name: "Tamarind Achar",
    description: "Sweet and sour tamarind pickle with a bold spice blend. A classic Bangladeshi favourite.",
    price: 160,
    image: "/images/tamarind-achar.jpg",
  },
  {
    id: "olive-achar",
    name: "Olive Achar",
    description: "Fresh olive pickle with mustard oil and green chilli. Crispy, tangy, and irresistible.",
    price: 200,
    image: "/images/olive-achar.jpg",
    badge: "New",
  },
  {
    id: "burmese-pickle",
    name: "Mixed Burmese Pickle",
    description: "Authentic Burmese-style mixed vegetable pickle. A unique blend you won't find elsewhere.",
    price: 250,
    image: "/images/burmese-pickle.jpg",
    badge: "Special",
  },
  {
    id: "dry-fish-pack",
    name: "Dry Fish Special Pack",
    description: "Premium quality sun-dried fish from Cox's Bazar. Rich flavour, great with dal and rice.",
    price: 320,
    image: "/images/dry-fish-pack.jpg",
  },
];

// ============================================================
// DELIVERY CHARGE
// ============================================================
// Change this number to update the delivery charge across the
// entire website. Amount is in BDT (Taka).
// ============================================================
export const DELIVERY_CHARGE = 80;

// ============================================================
// WHATSAPP NUMBER
// ============================================================
// Change this to your WhatsApp number.
// Format: country code + number, no spaces or + sign.
// Example for Bangladesh: 8801712345678
// ============================================================
export const WHATSAPP_NUMBER = "8801700000000";

// ============================================================
// BUSINESS INFO
// ============================================================
export const BUSINESS_NAME = "আচার ঘর";
export const BUSINESS_TAGLINE = "Authentic Achar & Burmese Flavours from Cox's Bazar";
