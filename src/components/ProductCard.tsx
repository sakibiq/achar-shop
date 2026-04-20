"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // don't navigate when clicking Add
    addItem(product);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="card group flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative aspect-square bg-milk-200 overflow-hidden">
        {product.discount ? (
          <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-lg">
            {product.discount}%
          </span>
        ) : product.badge ? (
          <span className="absolute top-2 left-2 z-10 bg-cyprus-500 text-milk-200 text-xs font-bold px-2 py-0.5 rounded-lg">
            {product.badge}
          </span>
        ) : null}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Emoji fallback */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-milk-200 to-milk-300 -z-10">
          <span className="text-5xl">🫙</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-semibold text-cyprus-700 text-sm mb-1 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-cyprus-300 text-xs mb-3 flex-1 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto gap-1">
          <div>
            <span className="font-display text-base font-bold text-cyprus-500">
              ৳{product.price}
            </span>
            {product.maxPrice && (
              <span className="text-cyprus-200 text-xs ml-1">– ৳{product.maxPrice}</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 flex-shrink-0 ${
              added
                ? "bg-green-500 text-white"
                : "bg-cyprus-500 hover:bg-cyprus-600 text-milk-200"
            }`}
          >
            {added ? <><Check size={13} />Added!</> : <><ShoppingCart size={13} />Add</>}
          </button>
        </div>
      </div>
    </Link>
  );
}
