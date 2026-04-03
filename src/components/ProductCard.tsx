"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    // Open cart briefly to show user
    openCart();
    setTimeout(() => {}, 100);
  };

  return (
    <div className="card group flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative aspect-square bg-earth-50 overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-brand-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to placeholder if image doesn't exist
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Fallback placeholder pattern */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50 to-earth-100 -z-10">
          <span className="text-5xl">🫙</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-earth-800 text-base mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-earth-500 text-sm mb-4 flex-1 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-xl font-bold text-brand-600">
            ৳{product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
              added
                ? "bg-green-500 text-white"
                : "bg-brand-500 hover:bg-brand-600 text-white"
            }`}
          >
            {added ? (
              <>
                <Check size={15} />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart size={15} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
