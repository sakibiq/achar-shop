import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        {/* Big success icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="font-display text-2xl md:text-3xl font-bold text-earth-800 mb-3">
          Order Placed! 🎉
        </h1>

        {/* Main message - EXACT text as requested */}
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
          <p className="text-earth-700 text-base leading-relaxed font-medium">
            Your order has been received.{" "}
            <span className="text-brand-700">
              আমরা অল্প সময়ের মধ্যে ফোনে কনফার্ম করব।
            </span>
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="bg-white border border-earth-100 rounded-xl p-4">
            <span className="text-2xl block mb-1">📞</span>
            <p className="font-semibold text-earth-700">Call Confirmation</p>
            <p className="text-earth-500 text-xs mt-1">
              We'll call you shortly to confirm your order
            </p>
          </div>
          <div className="bg-white border border-earth-100 rounded-xl p-4">
            <span className="text-2xl block mb-1">💵</span>
            <p className="font-semibold text-earth-700">Cash on Delivery</p>
            <p className="text-earth-500 text-xs mt-1">
              Pay when you receive your items
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 active:scale-95"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}
