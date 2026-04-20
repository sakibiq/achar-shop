"use client";

import { useCartStore } from "@/store/cartStore";
import { BUSINESS_NAME } from "@/lib/products";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { getCount, openCart } = useCartStore();
  const count = getCount();

  return (
    <header className="sticky top-0 z-40 bg-cyprus-500/95 backdrop-blur-sm border-b border-cyprus-600 shadow-cyprus">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-milk-200 rounded-xl flex items-center justify-center text-cyprus-500 font-display font-bold text-base shadow-sm group-hover:bg-white transition-colors">
            আ
          </div>
          <span className="font-display text-xl font-bold text-milk-200 group-hover:text-white transition-colors">
            {BUSINESS_NAME}
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-cyprus-100">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Cart Button */}
        <button
          onClick={openCart}
          className="relative flex items-center gap-2 bg-milk-200 hover:bg-white text-cyprus-500 px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 font-semibold text-sm shadow-sm"
          aria-label="Open cart"
        >
          <ShoppingBag size={18} />
          <span className="hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
