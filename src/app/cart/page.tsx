"use client";

import { useCartStore } from "@/store/cartStore";
import { DELIVERY_CHARGE } from "@/lib/products";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const subtotal = getTotal();
  const total = subtotal + (subtotal > 0 ? DELIVERY_CHARGE : 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl md:text-3xl font-bold text-cyprus-500 mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <ShoppingBag size={64} className="text-cyprus-200 mb-4" />
          <h2 className="font-semibold text-cyprus-400 text-xl mb-2">Your cart is empty</h2>
          <p className="text-cyprus-300 text-sm mb-8">Looks like you haven't added anything yet.</p>
          <Link href="/" className="btn-primary">← Start Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => (
              <div key={item.product.id} className="card flex gap-4 p-4 items-start">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-milk-200 flex-shrink-0">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} sizes="80px" />
                  <div className="absolute inset-0 flex items-center justify-center text-3xl -z-0">🫙</div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-cyprus-600">{item.product.name}</h3>
                  <p className="text-cyprus-400 text-sm mb-3">৳{item.product.price} each</p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-milk-200 hover:bg-milk-300 rounded-lg transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-bold text-cyprus-600">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-milk-200 hover:bg-milk-300 rounded-lg transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button onClick={() => removeItem(item.product.id)} className="text-cyprus-300 hover:text-red-500 transition-colors p-1">
                    <Trash2 size={16} />
                  </button>
                  <p className="font-bold text-cyprus-600">৳{item.product.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="card p-5 sticky top-20">
              <h2 className="font-semibold text-cyprus-600 text-lg mb-4 border-b border-milk-300 pb-3">Order Summary</h2>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between text-cyprus-400"><span>Subtotal</span><span>৳{subtotal}</span></div>
                <div className="flex justify-between text-cyprus-400"><span>Delivery</span><span>৳{DELIVERY_CHARGE}</span></div>
                <div className="flex justify-between font-bold text-base text-cyprus-600 border-t border-milk-300 pt-2">
                  <span>Total</span><span className="text-cyprus-500">৳{total}</span>
                </div>
              </div>
              <Link href="/checkout"
                className="block w-full bg-cyprus-500 hover:bg-cyprus-600 text-milk-200 text-center font-bold py-3 rounded-xl transition-all duration-200 active:scale-95">
                Proceed to Checkout →
              </Link>
              <Link href="/" className="block text-center text-sm text-cyprus-400 hover:text-cyprus-500 mt-3 transition-colors">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
