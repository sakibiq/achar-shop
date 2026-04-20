import { BUSINESS_NAME, WHATSAPP_NUMBER } from "@/lib/products";

export default function Footer() {
  return (
    <footer id="contact" className="bg-cyprus-500 text-cyprus-100 py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-milk-200 rounded-xl flex items-center justify-center text-cyprus-500 font-bold text-sm">আ</div>
              <span className="font-display text-xl font-bold text-milk-200">{BUSINESS_NAME}</span>
            </div>
            <p className="text-cyprus-200 text-sm leading-relaxed opacity-80">
              Authentic achar and Burmese food products from Cox's Bazar. Homemade with love, delivered to your door.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-milk-200 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-cyprus-200 opacity-80">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/checkout" className="hover:text-white transition-colors">Checkout</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-milk-200 mb-3">যোগাযোগ করুন</h3>
            <ul className="space-y-2 text-sm text-cyprus-200 opacity-80">
              <li className="flex items-start gap-2"><span>📍</span><span>Cox's Bazar, Bangladesh</span></li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-green-400 transition-colors">WhatsApp করুন</a>
              </li>
              <li className="flex items-center gap-2"><span>💵</span><span>Cash on Delivery</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cyprus-400 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cyprus-300 opacity-70">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Made with ❤️ in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
