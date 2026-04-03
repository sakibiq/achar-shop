"use client";

import { BUSINESS_TAGLINE } from "@/lib/products";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-earth-600">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-brand-400/20 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            🌶️ Cox's Bazar Authentic
          </span>

          {/* Headline */}
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            আচার ঘর<br />
            <span className="text-brand-100 text-2xl md:text-3xl font-normal">
              Homemade &amp; Fresh
            </span>
          </h1>

          <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed">
            {BUSINESS_TAGLINE}. Cash on Delivery — <span className="font-semibold text-white">সারা বাংলাদেশে ডেলিভারি।</span>
          </p>

          {/* CTA */}
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-all duration-200 active:scale-95 shadow-lg"
          >
            সব পণ্য দেখুন
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 mt-10">
          {["✅ Cash on Delivery", "🚚 সারা বাংলাদেশ", "🏠 Homemade Quality", "📞 Call to Confirm"].map((pill) => (
            <span
              key={pill}
              className="bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full border border-white/20"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
