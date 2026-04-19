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
    openCart();
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="card group flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative aspect-square bg-earth-50 overflow-hidden">
        {/* Badge */}
        {product.discount ? (
          <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-lg">
            {product.discount}%
          </span>
        ) : product.badge ? (
          <span className="absolute top-2 left-2 z-10 bg-brand-500 text-white text-xs font-bold px-2 py-0.5 rounded-lg">
            {product.badge}
          </span>
        ) : null}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Emoji fallback placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50 to-earth-100 -z-10">
          <span className="text-5xl">🫙</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-semibold text-earth-800 text-sm mb-1 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-earth-500 text-xs mb-3 flex-1 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto gap-1">
          {/* Price */}
          <div>
            <span className="font-display text-base font-bold text-brand-600">
              ৳{product.price}
            </span>
            {product.maxPrice && (
              <span className="text-earth-400 text-xs ml-1">
                – ৳{product.maxPrice}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 flex-shrink-0 ${
              added
                ? "bg-green-500 text-white"
                : "bg-brand-500 hover:bg-brand-600 text-white"
            }`}
          >
            {added ? (
              <>
                <Check size={13} />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart size={13} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
