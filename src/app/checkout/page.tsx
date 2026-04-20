"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { DELIVERY_CHARGE } from "@/lib/products";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

interface FormData {
  fullName: string; phone: string; address: string;
  area: string; deliveryNote: string; paymentMethod: string;
}
interface FormErrors { fullName?: string; phone?: string; address?: string; area?: string; }

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const subtotal = getTotal();
  const total = subtotal + DELIVERY_CHARGE;

  const [form, setForm] = useState<FormData>({ fullName: "", phone: "", address: "", area: "", deliveryNote: "", paymentMethod: "Cash on Delivery" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{9,15}$/.test(form.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!form.address.trim()) e.address = "Address is required.";
    if (!form.area.trim()) e.area = "Area / district is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || items.length === 0) { setSubmitError("Your cart is empty."); return; }
    setIsSubmitting(true); setSubmitError("");
    try {
      const orderData = {
        ...form,
        items: items.map((i) => ({ name: i.product.name, price: i.product.price, quantity: i.quantity, lineTotal: i.product.price * i.quantity })),
        subtotal, deliveryCharge: DELIVERY_CHARGE, total,
        orderDate: new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka", dateStyle: "full", timeStyle: "short" }),
      };
      const res = await fetch("/api/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(orderData) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to place order.");
      clearCart();
      router.push("/success");
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally { setIsSubmitting(false); }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <span className="text-6xl mb-4">🛒</span>
        <h2 className="font-display text-2xl font-bold text-cyprus-600 mb-2">Your cart is empty</h2>
        <p className="text-cyprus-400 mb-6">Add some products before checking out.</p>
        <a href="/" className="btn-primary">← Browse Products</a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl md:text-3xl font-bold text-cyprus-500 mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 space-y-5">
            <div className="card p-5 space-y-4">
              <h2 className="font-semibold text-cyprus-600 text-lg border-b border-milk-300 pb-3">📦 Delivery Information</h2>
              {[
                { label: "Full Name", name: "fullName", type: "text", placeholder: "আপনার পুরো নাম লিখুন" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "01XXXXXXXXX" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-cyprus-500 mb-1.5">{f.label} <span className="text-red-500">*</span></label>
                  <input type={f.type} name={f.name} value={form[f.name as keyof FormData]} onChange={handleChange}
                    placeholder={f.placeholder}
                    className={`input-field ${errors[f.name as keyof FormErrors] ? "border-red-400 ring-1 ring-red-300" : ""}`} />
                  {errors[f.name as keyof FormErrors] && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors[f.name as keyof FormErrors]}</p>
                  )}
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-cyprus-500 mb-1.5">Full Address <span className="text-red-500">*</span></label>
                <textarea name="address" value={form.address} onChange={handleChange} placeholder="বাড়ি নম্বর, রাস্তা, এলাকার বিস্তারিত ঠিকানা" rows={3}
                  className={`input-field resize-none ${errors.address ? "border-red-400 ring-1 ring-red-300" : ""}`} />
                {errors.address && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.address}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-cyprus-500 mb-1.5">Area / District <span className="text-red-500">*</span></label>
                <input type="text" name="area" value={form.area} onChange={handleChange} placeholder="e.g. Dhaka, Chittagong, Cox's Bazar..."
                  className={`input-field ${errors.area ? "border-red-400 ring-1 ring-red-300" : ""}`} />
                {errors.area && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.area}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-cyprus-500 mb-1.5">Delivery Note <span className="text-cyprus-300 font-normal">(optional)</span></label>
                <input type="text" name="deliveryNote" value={form.deliveryNote} onChange={handleChange}
                  placeholder="Any special instructions..." className="input-field" />
              </div>
            </div>
            <div className="card p-5">
              <h2 className="font-semibold text-cyprus-600 text-lg border-b border-milk-300 pb-3 mb-4">💵 Payment Method</h2>
              <label className="flex items-center gap-3 p-4 border-2 border-cyprus-400 bg-cyprus-50 rounded-xl cursor-pointer">
                <input type="radio" name="paymentMethod" value="Cash on Delivery" checked readOnly className="accent-cyprus-500 w-4 h-4" />
                <div>
                  <p className="font-semibold text-cyprus-600">Cash on Delivery</p>
                  <p className="text-cyprus-400 text-sm">পণ্য পেয়ে টাকা পরিশোধ করুন। আমরা কল করে কনফার্ম করব।</p>
                </div>
              </label>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="card p-5 sticky top-20">
              <h2 className="font-semibold text-cyprus-600 text-lg border-b border-milk-300 pb-3 mb-4">🧾 Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-start">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-milk-200 flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} sizes="48px" />
                      <div className="absolute inset-0 flex items-center justify-center text-xl -z-0">🫙</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-cyprus-600 truncate">{item.product.name}</p>
                      <p className="text-xs text-cyprus-400">৳{item.product.price} × {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-cyprus-600 flex-shrink-0">৳{item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-milk-300 pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-cyprus-400"><span>Subtotal</span><span>৳{subtotal}</span></div>
                <div className="flex justify-between text-cyprus-400"><span>Delivery</span><span>৳{DELIVERY_CHARGE}</span></div>
                <div className="flex justify-between font-bold text-base text-cyprus-600 pt-2 border-t border-milk-300">
                  <span>Total</span><span className="text-cyprus-500">৳{total}</span>
                </div>
              </div>
              {submitError && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm flex gap-2">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />{submitError}
                </div>
              )}
              <button type="submit" disabled={isSubmitting}
                className="mt-4 w-full bg-cyprus-500 hover:bg-cyprus-600 disabled:bg-cyprus-200 disabled:cursor-not-allowed text-milk-200 font-bold py-3.5 rounded-xl transition-all duration-200 active:scale-95 text-base">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Placing Order...
                  </span>
                ) : "✅ Place Order"}
              </button>
              <p className="text-center text-xs text-cyprus-300 mt-3">অর্ডার করার পর আমরা ফোনে কনফার্ম করব।</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
