"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, Check, ArrowLeft, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  const { addItem, openCart } = useCartStore();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-milk-200">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <Link href="/" className="inline-flex items-center gap-2 text-cyprus-400 hover:text-cyprus-500 text-sm font-medium transition-colors">
          <ArrowLeft size={16} />
          Back to Products
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl shadow-cyprus overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div className="relative aspect-square md:aspect-auto min-h-72 bg-milk-200">
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.discount && (
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-xl shadow">
                    {product.discount}% OFF
                  </span>
                )}
                {product.badge && !product.discount && (
                  <span className="bg-cyprus-500 text-milk-200 text-sm font-bold px-3 py-1 rounded-xl shadow">
                    {product.badge}
                  </span>
                )}
              </div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-milk-200 to-milk-300 -z-10">
                <span className="text-9xl opacity-40">🫙</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-cyprus-50 text-cyprus-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-cyprus-100">
                  <Tag size={11} />
                  {product.category}
                </span>
              </div>

              <h1 className="font-display text-2xl md:text-3xl font-bold text-cyprus-600 leading-snug mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-3xl font-bold text-cyprus-500">
                  ৳{product.price}
                </span>
                {product.maxPrice && (
                  <span className="text-cyprus-300 text-lg">– ৳{product.maxPrice}</span>
                )}
                {product.onSale && (
                  <span className="bg-red-50 text-red-600 text-sm font-bold px-2 py-0.5 rounded-lg">
                    On Sale!
                  </span>
                )}
              </div>

              <div className="bg-milk-200 rounded-2xl p-4 mb-6">
                <p className="text-cyprus-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-cyprus-500">Quantity:</span>
                <div className="flex items-center gap-2 bg-milk-200 rounded-xl p-1">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-cyprus-500 hover:bg-cyprus-50 transition-colors font-bold text-lg"
                  >−</button>
                  <span className="w-8 text-center font-bold text-cyprus-600">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-cyprus-500 hover:bg-cyprus-50 transition-colors font-bold text-lg"
                  >+</button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-base transition-all duration-200 active:scale-95 shadow-cyprus ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-cyprus-500 hover:bg-cyprus-600 text-milk-200"
                }`}
              >
                {added
                  ? <><Check size={20} /> Added to Cart!</>
                  : <><ShoppingCart size={20} /> Add to Cart — ৳{product.price * qty}</>
                }
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                {[
                  { icon: "💵", text: "Cash on Delivery" },
                  { icon: "📞", text: "Call Confirmation" },
                  { icon: "🚚", text: "Delivery All BD" },
                  { icon: "🏠", text: "Homemade Quality" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2 text-xs text-cyprus-400">
                    <span>{b.icon}</span><span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 pb-16">
          <div className="mb-6">
            <h2 className="font-display text-xl font-bold text-cyprus-500">আরও দেখুন</h2>
            <p className="text-cyprus-300 text-sm mt-1">You might also like these</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}