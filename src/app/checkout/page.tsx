"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { DELIVERY_CHARGE } from "@/lib/products";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  address: string;
  area: string;
  deliveryNote: string;
  paymentMethod: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  address?: string;
  area?: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const subtotal = getTotal();
  const total = subtotal + DELIVERY_CHARGE;

  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    address: "",
    area: "",
    deliveryNote: "",
    paymentMethod: "Cash on Delivery",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{9,15}$/.test(form.phone.trim()))
      newErrors.phone = "Please enter a valid phone number.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    if (!form.area.trim()) newErrors.area = "Area / district is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (items.length === 0) {
      setSubmitError("Your cart is empty. Please add products before ordering.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const orderData = {
        ...form,
        items: items.map((i) => ({
          name: i.product.name,
          price: i.product.price,
          quantity: i.quantity,
          lineTotal: i.product.price * i.quantity,
        })),
        subtotal,
        deliveryCharge: DELIVERY_CHARGE,
        total,
        orderDate: new Date().toLocaleString("en-BD", {
          timeZone: "Asia/Dhaka",
          dateStyle: "full",
          timeStyle: "short",
        }),
      };

      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to place order.");
      }

      clearCart();
      router.push("/success");
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <span className="text-6xl mb-4">🛒</span>
        <h2 className="font-display text-2xl font-bold text-earth-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-earth-500 mb-6">
          Add some products before checking out.
        </p>
        <a href="/" className="btn-primary">
          ← Browse Products
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-display text-2xl md:text-3xl font-bold text-earth-800 mb-8">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-3 space-y-5">
            {/* Delivery Info */}
            <div className="card p-5 space-y-4">
              <h2 className="font-semibold text-earth-800 text-lg border-b border-earth-100 pb-3">
                📦 Delivery Information
              </h2>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="আপনার পুরো নাম লিখুন"
                  className={`input-field ${errors.fullName ? "border-red-400 ring-1 ring-red-300" : ""}`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  className={`input-field ${errors.phone ? "border-red-400 ring-1 ring-red-300" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1.5">
                  Full Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="বাড়ি নম্বর, রাস্তা, এলাকার বিস্তারিত ঠিকানা"
                  rows={3}
                  className={`input-field resize-none ${errors.address ? "border-red-400 ring-1 ring-red-300" : ""}`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.address}
                  </p>
                )}
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1.5">
                  Area / District <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="e.g. Dhaka, Chittagong, Cox's Bazar..."
                  className={`input-field ${errors.area ? "border-red-400 ring-1 ring-red-300" : ""}`}
                />
                {errors.area && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.area}
                  </p>
                )}
              </div>

              {/* Delivery Note */}
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1.5">
                  Delivery Note{" "}
                  <span className="text-earth-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="deliveryNote"
                  value={form.deliveryNote}
                  onChange={handleChange}
                  placeholder="Any special instructions for delivery..."
                  className="input-field"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="card p-5">
              <h2 className="font-semibold text-earth-800 text-lg border-b border-earth-100 pb-3 mb-4">
                💵 Payment Method
              </h2>
              <label className="flex items-center gap-3 p-4 border-2 border-brand-400 bg-brand-50 rounded-xl cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked
                  readOnly
                  className="accent-brand-500 w-4 h-4"
                />
                <div>
                  <p className="font-semibold text-earth-800">
                    Cash on Delivery
                  </p>
                  <p className="text-earth-500 text-sm">
                    পণ্য পেয়ে টাকা পরিশোধ করুন। আমরা কল করে কনফার্ম করব।
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-2">
            <div className="card p-5 sticky top-20">
              <h2 className="font-semibold text-earth-800 text-lg border-b border-earth-100 pb-3 mb-4">
                🧾 Order Summary
              </h2>

              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-start">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-earth-50 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                        sizes="48px"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xl -z-0">
                        🫙
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-earth-800 truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-earth-500">
                        ৳{item.product.price} × {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-earth-800 flex-shrink-0">
                      ৳{item.product.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-earth-100 pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-earth-600">
                  <span>Subtotal</span>
                  <span>৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-earth-600">
                  <span>Delivery</span>
                  <span>৳{DELIVERY_CHARGE}</span>
                </div>
                <div className="flex justify-between font-bold text-base text-earth-800 pt-2 border-t border-earth-100">
                  <span>Total</span>
                  <span className="text-brand-600">৳{total}</span>
                </div>
              </div>

              {/* Submit error */}
              {submitError && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm flex gap-2">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full bg-brand-500 hover:bg-brand-600 disabled:bg-earth-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all duration-200 active:scale-95 text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Placing Order...
                  </span>
                ) : (
                  "✅ Place Order"
                )}
              </button>

              <p className="text-center text-xs text-earth-400 mt-3">
                অর্ডার করার পর আমরা ফোনে কনফার্ম করব।
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
