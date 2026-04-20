"use client";

import { useState } from "react";
import { products, CATEGORIES } from "@/lib/products";
import ProductCard from "./ProductCard";

const CATEGORY_ICONS: Record<string, string> = {
  "all":            "🛍️",
  "আচার":           "🫙",
  "হোম মেইড আচার":  "🏠",
  "শুটকি-বালাচাও":  "🐟",
  "ড্রাই ফুড":      "🥜",
  "চকলেট":          "🍫",
  "কম্বো প্যাকেজ": "📦",
  "বাম":            "💊",
  "প্রসাধনী":       "✨",
  "অন্যান্য":       "🎁",
};

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-12 md:py-16 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-cyprus-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
          Our Products
        </span>
        <h2 className="section-title mb-3">আমাদের সেরা পণ্য</h2>
        <p className="text-cyprus-300 max-w-md mx-auto text-sm md:text-base">
          Handmade with love. Sourced fresh. Delivered to your door.
        </p>
      </div>

      {/* ── Category Cards Grid ── */}
      <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-10">
        {CATEGORIES.map((cat) => {
          const count =
            cat.id === "all"
              ? products.length
              : products.filter((p) => p.category === cat.id).length;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-1.5 p-2.5 md:p-3 rounded-2xl border-2 transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-cyprus-500 border-cyprus-500 shadow-cyprus text-white"
                  : "bg-white border-milk-300 hover:border-cyprus-300 hover:shadow-md text-cyprus-500"
              }`}
            >
              <span className="text-xl md:text-2xl leading-none">
                {CATEGORY_ICONS[cat.id] || "🏷️"}
              </span>
              <span className={`text-xs font-semibold text-center leading-tight ${isActive ? "text-milk-200" : "text-cyprus-600"}`}>
                {cat.label}
              </span>
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                isActive ? "bg-white/20 text-white" : "bg-milk-300 text-cyprus-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{CATEGORY_ICONS[activeCategory] || "🛍️"}</span>
        <div>
          <h3 className="font-display font-bold text-cyprus-500 text-lg leading-tight">
            {CATEGORIES.find((c) => c.id === activeCategory)?.label || "সব পণ্য"}
          </h3>
          <p className="text-cyprus-300 text-sm">{filtered.length} টি পণ্য</p>
        </div>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-cyprus-200">
          <span className="text-5xl block mb-3">🫙</span>
          <p className="font-medium">No products in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Info strip */}
      <div className="mt-12 bg-cyprus-500 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: "🚚", title: "Cash on Delivery", sub: "Pay when you receive your order" },
          { icon: "📞", title: "Call Confirmation", sub: "We call you to confirm every order" },
          { icon: "🏠", title: "Homemade Quality", sub: "Fresh from Cox's Bazar kitchen" },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-milk-200">{item.title}</p>
              <p className="text-cyprus-100 text-sm opacity-75">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
