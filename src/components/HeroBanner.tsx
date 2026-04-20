"use client";

import { BUSINESS_TAGLINE } from "@/lib/products";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-cyprus-500">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyprus-400/30 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-milk-200/10 rounded-full" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-400/20 rounded-full" />
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-milk-200/15 text-milk-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-milk-200/20 backdrop-blur-sm">
            🌶️ Cox&apos;s Bazar Authentic
          </span>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            আচার ঘর
            <br />
            <span className="text-milk-300 text-2xl md:text-3xl font-normal">
              Homemade &amp; Fresh
            </span>
          </h1>

          <p className="text-cyprus-100 text-base md:text-lg mb-8 leading-relaxed">
            {BUSINESS_TAGLINE}.{" "}
            <span className="font-semibold text-milk-200">
              সারা বাংলাদেশে ডেলিভারি।
            </span>
          </p>

          {/* CTA */}
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-milk-200 hover:bg-white text-cyprus-500 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg text-base"
          >
            সব পণ্য দেখুন
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2.5 mt-10">
          {["✅ Cash on Delivery", "🚚 সারা বাংলাদেশ", "🏠 Homemade Quality", "📞 Call Confirmation"].map((pill) => (
            <span
              key={pill}
              className="bg-white/10 backdrop-blur-sm text-milk-200 text-sm px-4 py-1.5 rounded-full border border-white/15"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
