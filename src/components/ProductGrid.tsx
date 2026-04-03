import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="py-12 md:py-16 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-2 block">
          Our Products
        </span>
        <h2 className="section-title mb-3">আমাদের সেরা পণ্য</h2>
        <p className="text-earth-500 max-w-md mx-auto text-sm md:text-base">
          Handmade with love. Sourced fresh. Delivered to your door.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Info strip */}
      <div className="mt-10 bg-brand-50 border border-brand-100 rounded-2xl p-5 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
        <div className="flex items-center gap-3 text-earth-700 text-sm">
          <span className="text-2xl">🚚</span>
          <div>
            <p className="font-semibold">Cash on Delivery</p>
            <p className="text-earth-500">Pay when you receive your order</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-earth-700 text-sm">
          <span className="text-2xl">📞</span>
          <div>
            <p className="font-semibold">Call Confirmation</p>
            <p className="text-earth-500">We call you to confirm every order</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-earth-700 text-sm">
          <span className="text-2xl">🏠</span>
          <div>
            <p className="font-semibold">Homemade Quality</p>
            <p className="text-earth-500">Fresh from Cox's Bazar kitchen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
