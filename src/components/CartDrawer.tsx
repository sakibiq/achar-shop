"use client";

import { useCartStore } from "@/store/cartStore";
import { DELIVERY_CHARGE } from "@/lib/products";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, getTotal } = useCartStore();
  const subtotal = getTotal();
  const total = subtotal + (subtotal > 0 ? DELIVERY_CHARGE : 0);

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" onClick={closeCart} />
      )}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-milk-300 bg-cyprus-500">
          <h2 className="font-display text-lg font-bold text-milk-200">
            Your Cart ({items.length})
          </h2>
          <button onClick={closeCart} className="p-2 hover:bg-cyprus-400 rounded-lg transition-colors">
            <X size={20} className="text-milk-200" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-milk-200">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag size={48} className="text-cyprus-200 mb-4" />
              <p className="font-semibold text-cyprus-400 text-lg mb-1">Your cart is empty</p>
              <p className="text-cyprus-300 text-sm mb-6">Add some delicious products!</p>
              <button onClick={closeCart} className="btn-primary text-sm">Browse Products</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-3 bg-white rounded-2xl p-3 shadow-sm border border-milk-300">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-milk-200 flex-shrink-0">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} sizes="64px" />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl -z-0">🫙</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-cyprus-600 text-sm truncate">{item.product.name}</p>
                  <p className="text-cyprus-400 font-bold text-sm">৳{item.product.price}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center bg-milk-200 border border-milk-400 rounded-lg hover:bg-milk-300 transition-colors">
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-cyprus-600">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center bg-milk-200 border border-milk-400 rounded-lg hover:bg-milk-300 transition-colors">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => removeItem(item.product.id)} className="p-1 hover:text-red-500 text-cyprus-300 transition-colors">
                    <Trash2 size={15} />
                  </button>
                  <p className="text-cyprus-600 font-bold text-sm">৳{item.product.price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-milk-300 p-4 space-y-3 bg-white">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-cyprus-400">
                <span>Subtotal</span><span className="font-medium">৳{subtotal}</span>
              </div>
              <div className="flex justify-between text-cyprus-400">
                <span>Delivery</span><span className="font-medium">৳{DELIVERY_CHARGE}</span>
              </div>
              <div className="flex justify-between font-bold text-base text-cyprus-600 border-t border-milk-300 pt-2">
                <span>Total</span><span className="text-cyprus-500">৳{total}</span>
              </div>
            </div>
            <Link href="/checkout" onClick={closeCart}
              className="block w-full bg-cyprus-500 hover:bg-cyprus-600 text-milk-200 text-center font-bold py-3.5 rounded-xl transition-all duration-200 active:scale-95">
              Proceed to Checkout →
            </Link>
            <p className="text-center text-xs text-cyprus-300">💵 Cash on Delivery only</p>
          </div>
        )}
      </div>
    </>
  );
}
