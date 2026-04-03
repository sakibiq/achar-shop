import { BUSINESS_NAME, WHATSAPP_NUMBER } from "@/lib/products";

export default function Footer() {
  return (
    <footer id="contact" className="bg-earth-800 text-earth-100 py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                আ
              </div>
              <span className="font-display text-xl font-bold text-white">
                {BUSINESS_NAME}
              </span>
            </div>
            <p className="text-earth-300 text-sm leading-relaxed">
              Authentic achar and Burmese food products from Cox's Bazar.
              Homemade with love, delivered to your door.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-earth-300">
              <li>
                <a href="/" className="hover:text-brand-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-brand-300 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/checkout" className="hover:text-brand-300 transition-colors">
                  Checkout
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3">যোগাযোগ করুন</h3>
            <ul className="space-y-2 text-sm text-earth-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Cox's Bazar, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp করুন
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💵</span>
                <span>Cash on Delivery</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-earth-400">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Made with ❤️ in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
