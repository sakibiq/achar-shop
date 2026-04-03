"use client";

import { useCartStore } from "@/store/cartStore";
import { BUSINESS_NAME } from "@/lib/products";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { getCount, openCart } = useCartStore();
  const count = getCount();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-earth-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-display font-bold text-sm">
            আ
          </div>
          <span className="font-display text-xl font-bold text-earth-800 group-hover:text-brand-600 transition-colors">
            {BUSINESS_NAME}
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-earth-600">
          <Link href="/" className="hover:text-brand-500 transition-colors">
            Home
          </Link>
          <Link href="/#products" className="hover:text-brand-500 transition-colors">
            Products
          </Link>
          <Link href="/#contact" className="hover:text-brand-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Cart Button */}
        <button
          onClick={openCart}
          className="relative flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-xl transition-all duration-200 active:scale-95"
          aria-label="Open cart"
        >
          <ShoppingBag size={18} />
          <span className="hidden sm:inline text-sm font-semibold">Cart</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-earth-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
