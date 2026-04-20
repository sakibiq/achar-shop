import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-milk-200">
      <div className="max-w-md w-full text-center">
        {/* Success icon */}
        <div className="w-24 h-24 bg-cyprus-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-cyprus-lg">
          <svg className="w-12 h-12 text-milk-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-2xl md:text-3xl font-bold text-cyprus-500 mb-3">
          Order Placed! 🎉
        </h1>

        {/* Main message */}
        <div className="bg-white border-2 border-cyprus-200 rounded-2xl p-5 mb-6 shadow-sm">
          <p className="text-cyprus-600 text-base leading-relaxed font-medium">
            Your order has been received.{" "}
            <span className="text-cyprus-500 font-bold">
              আমরা অল্প সময়ের মধ্যে ফোনে কনফার্ম করব।
            </span>
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="bg-white border border-milk-300 rounded-2xl p-4 shadow-sm">
            <span className="text-2xl block mb-1">📞</span>
            <p className="font-semibold text-cyprus-600">Call Confirmation</p>
            <p className="text-cyprus-300 text-xs mt-1">We'll call you shortly to confirm</p>
          </div>
          <div className="bg-white border border-milk-300 rounded-2xl p-4 shadow-sm">
            <span className="text-2xl block mb-1">💵</span>
            <p className="font-semibold text-cyprus-600">Cash on Delivery</p>
            <p className="text-cyprus-300 text-xs mt-1">Pay when you receive your items</p>
          </div>
        </div>

        <Link href="/"
          className="inline-flex items-center gap-2 bg-cyprus-500 hover:bg-cyprus-600 text-milk-200 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-cyprus">
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}
