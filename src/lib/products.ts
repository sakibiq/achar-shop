// ============================================================
// PRODUCTS DATA — Updated from Excel
// 62 products across 9 categories
//
// To add/edit products: just update this array.
// To add a new category: add it to the CATEGORIES list below.
// Images: place photos in /public/images/ and update the path.
// ============================================================

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;         // Min price shown
  maxPrice?: number;     // If product has size variants
  category: string;
  image: string;
  badge?: string;        // e.g. "Sale", "Best Seller", "New"
  discount?: number;     // discount % e.g. -13 means 13% off
  onSale?: boolean;
}

// ============================================================
// CATEGORIES — shown as filter tabs on the homepage
// Order here controls order on the website
// ============================================================
export const CATEGORIES = [
  { id: "all",            label: "সব পণ্য",          labelEn: "All" },
  { id: "আচার",           label: "আচার",              labelEn: "Achar" },
  { id: "হোম মেইড আচার",  label: "হোম মেইড আচার",    labelEn: "Homemade Achar" },
  { id: "শুটকি-বালাচাও",  label: "শুটকি / বালাচাও",  labelEn: "Dry Fish" },
  { id: "ড্রাই ফুড",      label: "ড্রাই ফুড",         labelEn: "Dry Food" },
  { id: "চকলেট",          label: "চকলেট",             labelEn: "Chocolate" },
  { id: "কম্বো প্যাকেজ", label: "কম্বো প্যাকেজ",     labelEn: "Combo" },
  { id: "বাম",            label: "বাম",               labelEn: "Balm" },
  { id: "প্রসাধনী",       label: "প্রসাধনী",          labelEn: "Beauty" },
  { id: "অন্যান্য",       label: "অন্যান্য",          labelEn: "Others" },
];

export const products: Product[] = [
  // ── আচার ────────────────────────────────────────────────
  {
    id: "viral-999-burmese-achar",
    name: "ভাইরাল 999 বার্মিজ আচার – ৩০ পিস",
    description: "ভাইরাল বার্মিজ আচার, ৩০ পিস প্যাক। টক-ঝাল-মিষ্টি মিশ্রণ।",
    price: 220,
    category: "আচার",
    image: "/images/viral-999-burmese-achar.jpg",
    badge: "Sale",
    discount: -12,
    onSale: true,
  },
  {
    id: "chui-jhal-chutney",
    name: "চুই ঝাল চাটনী – Chui Jhal Chutney (20 Pack)",
    description: "চুই ঝালের অসাধারণ চাটনি, ২০ পিস প্যাক। ভাত ও নাস্তার সাথে পারফেক্ট।",
    price: 160,
    category: "আচার",
    image: "/images/chui-jhal-chutney.jpg",
  },
  {
    id: "pahadi-tok-tetul",
    name: "পাহাড়ি টক তেতুল (খোসা ছাড়া)",
    description: "পাহাড়ি এলাকার বিশেষ টক তেতুল, খোসা ছাড়ানো। রান্নায় ও আচারে ব্যবহারযোগ্য।",
    price: 380,
    category: "আচার",
    image: "/images/pahadi-tok-tetul.jpg",
    badge: "Sale",
    discount: -5,
    onSale: true,
  },
  {
    id: "burmese-amsotto-achar",
    name: "বার্মিজ আমসত্ত্ব আচার – ১০ পিস",
    description: "বার্মিজ স্টাইলে তৈরি আমসত্ত্ব আচার, ১০ পিস প্যাক।",
    price: 200,
    category: "আচার",
    image: "/images/burmese-amsotto-achar.jpg",
  },
  {
    id: "jhal-pinik-boroi-achar",
    name: "ঝাল পিনিক বরই আচার – ২৪ পিস",
    description: "ঝাল-টক বরই আচার, ২৪ পিস প্যাক। স্কুল-কলেজের ছেলেমেয়েদের ফেভারিট।",
    price: 150,
    category: "আচার",
    image: "/images/jhal-pinik-boroi-achar.jpg",
  },
  {
    id: "pachmishali-achar",
    name: "পাঁচমিশালী আচার – ৫ পিস",
    description: "পাঁচ রকম ফল-সবজির মিশ্রণে তৈরি আচার, ৫ পিস প্যাক।",
    price: 100,
    category: "আচার",
    image: "/images/pachmishali-achar.jpg",
  },

  // ── হোম মেইড আচার ──────────────────────────────────────
  {
    id: "asto-masaladar-tetul",
    name: "আস্ত মাসালাদার তেঁতুল",
    description: "ঘরে তৈরি মশলাদার আস্ত তেঁতুল আচার। বিভিন্ন সাইজে পাওয়া যায়।",
    price: 220,
    maxPrice: 800,
    category: "হোম মেইড আচার",
    image: "/images/asto-masaladar-tetul.jpg",
  },
  {
    id: "tetul-gulli",
    name: "তেঁতুল গুল্লি – হোম মেইড",
    description: "হাতে তৈরি তেঁতুল গুল্লি। টক-ঝাল-মিষ্টি স্বাদের অসাধারণ কম্বিনেশন।",
    price: 220,
    maxPrice: 800,
    category: "হোম মেইড আচার",
    image: "/images/tetul-gulli.jpg",
  },
  {
    id: "tin-rotno-mix-achar",
    name: "তিন রত্ন মিক্স আচার",
    description: "তিন ধরনের ফলের মিশ্রণে তৈরি বিশেষ হোম মেইড আচার।",
    price: 400,
    maxPrice: 750,
    category: "হোম মেইড আচার",
    image: "/images/tin-rotno-mix-achar.jpg",
  },
  {
    id: "alubokhara-achar",
    name: "আলুবোখরা আচার",
    description: "আলুবোখরার বিশেষ আচার। মিষ্টি-টক স্বাদের অনন্য কম্বিনেশন।",
    price: 300,
    maxPrice: 560,
    category: "হোম মেইড আচার",
    image: "/images/alubokhara-achar.jpg",
  },
  {
    id: "ek-koa-rosun-achar",
    name: "এক কোয়া রসুন আচার",
    description: "আস্ত এক কোয়া রসুনের তৈরি বিশেষ আচার। রসুনপ্রিয়দের জন্য।",
    price: 300,
    maxPrice: 560,
    category: "হোম মেইড আচার",
    image: "/images/ek-koa-rosun-achar.jpg",
  },
  {
    id: "gorur-mangser-achar",
    name: "গরুর মাংসের আচার",
    description: "বিশেষ মশলায় তৈরি গরুর মাংসের আচার। ভাতের সাথে অসাধারণ।",
    price: 420,
    maxPrice: 800,
    category: "হোম মেইড আচার",
    image: "/images/gorur-mangser-achar.jpg",
    badge: "Special",
  },
  {
    id: "tetul-boroi-mix-achar",
    name: "তেতুল+বরই মিক্স আচার",
    description: "তেতুল ও বরইয়ের মিশ্রণে তৈরি হোম মেইড আচার।",
    price: 220,
    maxPrice: 400,
    category: "হোম মেইড আচার",
    image: "/images/tetul-boroi-mix-achar.jpg",
  },
  {
    id: "naga-rosun-achar",
    name: "নাগা+রসুন আচার",
    description: "নাগা মরিচ ও রসুনের কম্বিনেশনে তৈরি ঝাল আচার।",
    price: 250,
    maxPrice: 480,
    category: "হোম মেইড আচার",
    image: "/images/naga-rosun-achar.jpg",
  },
  {
    id: "am-tetul-amra-mix",
    name: "আম তেতুল আমড়া মিক্স আচার",
    description: "আম, তেতুল ও আমড়ার মিশ্রণে তৈরি বিশেষ মিক্স আচার।",
    price: 230,
    maxPrice: 450,
    category: "হোম মেইড আচার",
    image: "/images/am-tetul-amra-mix.jpg",
  },
  {
    id: "tetul-achar",
    name: "তেতুল আচার",
    description: "ঘরে তৈরি বিশেষ তেতুল আচার। ক্লাসিক স্বাদ।",
    price: 200,
    maxPrice: 380,
    category: "হোম মেইড আচার",
    image: "/images/tetul-achar.jpg",
  },
  {
    id: "rosun-achar",
    name: "রসুন আচার – হোম মেইড",
    description: "হাতে তৈরি রসুনের আচার। বিশেষ মশলায় তৈরি।",
    price: 250,
    maxPrice: 450,
    category: "হোম মেইড আচার",
    image: "/images/rosun-achar.jpg",
  },
  {
    id: "jolpai-rosun-achar",
    name: "জলপাই+রসুন আচার",
    description: "জলপাই ও রসুনের কম্বিনেশনে তৈরি বিশেষ আচার।",
    price: 250,
    maxPrice: 480,
    category: "হোম মেইড আচার",
    image: "/images/jolpai-rosun-achar.jpg",
  },
  {
    id: "chicken-kima-jhalmuri",
    name: "চিকেন কিমা ঝাল মুড়ি মশলা",
    description: "চিকেন কিমা দিয়ে তৈরি বিশেষ ঝাল মুড়ি মশলা।",
    price: 320,
    maxPrice: 1150,
    category: "হোম মেইড আচার",
    image: "/images/chicken-kima-jhalmuri.jpg",
  },

  // ── শুটকি / বালাচাও ─────────────────────────────────────
  {
    id: "nona-ilish-special",
    name: "নোনা ইলিশ (ফালি-স্পেশাল)",
    description: "কক্সবাজারের বিশেষ নোনা ইলিশ মাছ। সেরা মানের স্পেশাল ফালি।",
    price: 850,
    maxPrice: 1650,
    category: "শুটকি-বালাচাও",
    image: "/images/nona-ilish-special.jpg",
    badge: "Special",
  },
  {
    id: "peyaj-beresta",
    name: "পিঁয়াজ বেরেস্তা (হোম মেইড)",
    description: "ঘরে তৈরি মচমচে পিঁয়াজ বেরেস্তা। বিরিয়ানি ও পোলাওয়ের জন্য আদর্শ।",
    price: 120,
    category: "শুটকি-বালাচাও",
    image: "/images/peyaj-beresta.jpg",
  },

  // ── ড্রাই ফুড ───────────────────────────────────────────
  {
    id: "premium-mixed-dry-fruits",
    name: "প্রিমিয়াম মিক্সড ড্রাই ফ্রূটস & নাটস",
    description: "বিভিন্ন ধরনের ড্রাই ফ্রুটস ও নাটসের প্রিমিয়াম মিশ্রণ।",
    price: 350,
    maxPrice: 1350,
    category: "ড্রাই ফুড",
    image: "/images/premium-mixed-dry-fruits.jpg",
  },
  {
    id: "ghee-shahi-laccha-semai",
    name: "ঘিয়ে ভাজা শাহী লাচ্চা সেমাই",
    description: "খাঁটি ঘিয়ে ভাজা শাহী লাচ্চা সেমাই। ঈদ ও উৎসবের জন্য আদর্শ।",
    price: 650,
    maxPrice: 1200,
    category: "ড্রাই ফুড",
    image: "/images/ghee-shahi-laccha-semai.jpg",
  },
  {
    id: "khejur-gift-box",
    name: "খেজুর গিফট বক্স 4 in 1",
    description: "চার ধরনের প্রিমিয়াম খেজুরের গিফট বক্স। উপহারের জন্য আদর্শ।",
    price: 1190,
    category: "ড্রাই ফুড",
    image: "/images/khejur-gift-box.jpg",
    badge: "Gift",
  },
  {
    id: "special-seedmix",
    name: "স্পেশাল সিডমিক্স (Spacial Seedmix)",
    description: "বিভিন্ন ধরনের বীজের মিশ্রণ। স্বাস্থ্যকর ও পুষ্টিকর স্ন্যাক।",
    price: 240,
    maxPrice: 900,
    category: "ড্রাই ফুড",
    image: "/images/special-seedmix.jpg",
  },
  {
    id: "chia-seeds",
    name: "চিয়া সিড – Chia Seeds",
    description: "উচ্চমানের চিয়া সিড। সুপারফুড হিসেবে পরিচিত, স্বাস্থ্যকর।",
    price: 200,
    category: "ড্রাই ফুড",
    image: "/images/chia-seeds.jpg",
  },
  {
    id: "black-raisins",
    name: "প্রিমিমিয়াম কালো কিসমিস – Black Raisins",
    description: "প্রিমিয়াম মানের কালো কিসমিস। মিষ্টি ও পুষ্টিকর।",
    price: 300,
    category: "ড্রাই ফুড",
    image: "/images/black-raisins.jpg",
  },
  {
    id: "burmese-badam-vaja",
    name: "বার্মিজ বাদাম ভাজা",
    description: "বার্মিজ স্টাইলে ভাজা বাদাম। মচমচে ও সুস্বাদু।",
    price: 180,
    maxPrice: 350,
    category: "ড্রাই ফুড",
    image: "/images/burmese-badam-vaja.jpg",
    badge: "Sale",
    discount: -13,
    onSale: true,
  },
  {
    id: "tok-tetul-box",
    name: "টক তেঁতুল বক্স (খোসা সহ) – 450gm",
    description: "৪৫০ গ্রামের টক তেঁতুল বক্স। রান্না ও আচারে ব্যবহারের জন্য।",
    price: 500,
    category: "ড্রাই ফুড",
    image: "/images/tok-tetul-box.jpg",
  },
  {
    id: "golden-raisins",
    name: "প্রিমিয়াম গোল্ডেন কিসমিস – Golden Raisins",
    description: "প্রিমিয়াম গোল্ডেন কিসমিস। মিষ্টি রান্নায় ও সরাসরি খাওয়ার জন্য।",
    price: 280,
    category: "ড্রাই ফুড",
    image: "/images/golden-raisins.jpg",
  },
  {
    id: "all-in-one-dry-food-combo",
    name: "অল ইন ওয়ান ড্রাই ফুড কম্বো",
    description: "সব ধরনের ড্রাই ফুডের একটি কম্বো প্যাকেজ।",
    price: 2490,
    category: "ড্রাই ফুড",
    image: "/images/all-in-one-dry-food-combo.jpg",
  },
  {
    id: "pahadi-kaju-badam",
    name: "পাহাড়ি কাজু বাদাম (দেশি)",
    description: "দেশি পাহাড়ি কাজু বাদাম। তাজা ও উচ্চমানের।",
    price: 450,
    maxPrice: 1750,
    category: "ড্রাই ফুড",
    image: "/images/pahadi-kaju-badam.jpg",
  },
  {
    id: "garlic-chips",
    name: "গার্লিক চিপস (হোম মেইড)",
    description: "ঘরে তৈরি মচমচে গার্লিক চিপস। স্ন্যাক হিসেবে আদর্শ।",
    price: 300,
    category: "ড্রাই ফুড",
    image: "/images/garlic-chips.jpg",
  },
  {
    id: "palm-candy-talmisri",
    name: "Palm Candy / Talmisri (তাল মিছরি)",
    description: "প্রাকৃতিক তাল মিছরি। মিষ্টি ও স্বাস্থ্যকর।",
    price: 220,
    maxPrice: 400,
    category: "ড্রাই ফুড",
    image: "/images/palm-candy-talmisri.jpg",
  },
  {
    id: "badam-papri-kotkoti",
    name: "বাদাম পাপড়ি কটকটি",
    description: "বাদামের তৈরি মচমচে পাপড়ি কটকটি। ছেলেমেয়েদের পছন্দের স্ন্যাক।",
    price: 130,
    category: "ড্রাই ফুড",
    image: "/images/badam-papri-kotkoti.jpg",
  },
  {
    id: "golden-garden-red-plum",
    name: "Golden Garden Red Plum",
    description: "ইম্পোর্টেড গোল্ডেন গার্ডেন রেড প্লাম। টক-মিষ্টি স্বাদ।",
    price: 150,
    category: "ড্রাই ফুড",
    image: "/images/golden-garden-red-plum.jpg",
  },

  // ── চকলেট ───────────────────────────────────────────────
  {
    id: "americano-chewy-candy",
    name: "Americano Chewy Candy Mixed Flavor – 280gm",
    description: "মিক্সড ফ্লেভারের চিউই ক্যান্ডি, ২৮০ গ্রাম। বাচ্চাদের ফেভারিট।",
    price: 450,
    category: "চকলেট",
    image: "/images/americano-chewy-candy.jpg",
  },
  {
    id: "demy-cocoa-cones",
    name: "Demy Cocoa Cones Chocolate – 150gm",
    description: "কোকো কোন চকলেট, ১৫০ গ্রাম। ক্রিমি ও সুস্বাদু।",
    price: 300,
    category: "চকলেট",
    image: "/images/demy-cocoa-cones.jpg",
  },
  {
    id: "ice-cream-mallows",
    name: "Ice Cream Mallows Mix Flavour 24 PCS",
    description: "আইসক্রিম ফ্লেভার মার্শম্যালো, ২৪ পিস প্যাক।",
    price: 200,
    category: "চকলেট",
    image: "/images/ice-cream-mallows.jpg",
  },
  {
    id: "maxsonic-3-flavours",
    name: "MAXSONIC 3 Flavours Chocolate – 180gm",
    description: "তিন ফ্লেভারের ম্যাক্সসনিক চকলেট, ১৮০ গ্রাম।",
    price: 300,
    category: "চকলেট",
    image: "/images/maxsonic-3-flavours.jpg",
  },
  {
    id: "blasting-coconut-ice-cream",
    name: "Blasting Coconut Ice Cream Chocolate Cone – 300gm",
    description: "নারকেল আইসক্রিম চকলেট কোন, ৩০০ গ্রাম।",
    price: 500,
    category: "চকলেট",
    image: "/images/blasting-coconut-ice-cream.jpg",
  },
  {
    id: "nuts-crisp-chocolate",
    name: "Nuts Crisp Chocolate – 200gm (Imported)",
    description: "ইম্পোর্টেড নাটস ক্রিসপ চকলেট, ২০০ গ্রাম। প্রিমিয়াম মানের।",
    price: 320,
    category: "চকলেট",
    image: "/images/nuts-crisp-chocolate.jpg",
    badge: "Sale",
    discount: -9,
    onSale: true,
  },

  // ── কম্বো প্যাকেজ ────────────────────────────────────────
  {
    id: "achar-chatni-combo",
    name: "আচার + চাটনি কম্বো প্যাকেজ",
    description: "বিভিন্ন ধরনের আচার ও চাটনির কম্বো প্যাকেজ। সাশ্রয়ী মূল্যে বেশি পণ্য।",
    price: 1000,
    category: "কম্বো প্যাকেজ",
    image: "/images/achar-chatni-combo.jpg",
    badge: "Combo",
  },
  {
    id: "viral-achar-chatni-combo",
    name: "ভাইরাল আচার-চাটনি কম্বো",
    description: "ভাইরাল আচার ও চাটনির বিশেষ কম্বো। বাসায় থাকুক সারাক্ষণ।",
    price: 700,
    category: "কম্বো প্যাকেজ",
    image: "/images/viral-achar-chatni-combo.jpg",
    badge: "Combo",
  },
  {
    id: "all-in-one-gift-combo",
    name: "অল ইন ওয়ান-গিফট কম্বো প্যাকেজ",
    description: "সব কিছু মিলিয়ে একটি গিফট কম্বো প্যাকেজ। উপহারের জন্য পারফেক্ট।",
    price: 2590,
    category: "কম্বো প্যাকেজ",
    image: "/images/all-in-one-gift-combo.jpg",
    badge: "Sale",
    discount: -10,
    onSale: true,
  },
  {
    id: "shoishober-tiffinbox-combo",
    name: "শৈশবের টিফিনবক্স কম্বো প্যাকেজ",
    description: "ছোটবেলার পছন্দের স্ন্যাক্সের কম্বো। নস্টালজিক স্বাদের সমাহার।",
    price: 1290,
    category: "কম্বো প্যাকেজ",
    image: "/images/shoishober-tiffinbox-combo.jpg",
    badge: "Sale",
    discount: -7,
    onSale: true,
  },
  {
    id: "shwader-bhandar-combo",
    name: "স্বাদের ভাণ্ডার কম্বো",
    description: "বিভিন্ন স্বাদের পণ্যের সমাহার একটি কম্বো প্যাকেজে।",
    price: 1300,
    category: "কম্বো প্যাকেজ",
    image: "/images/shwader-bhandar-combo.jpg",
    badge: "Combo",
  },
  {
    id: "money-saving-combo",
    name: "মানি সেভিং কম্বো",
    description: "কম দামে বেশি পণ্য। সাশ্রয়ী কম্বো প্যাকেজ।",
    price: 400,
    category: "কম্বো প্যাকেজ",
    image: "/images/money-saving-combo.jpg",
    badge: "Combo",
  },
  {
    id: "hit-combo-65",
    name: "হিট কম্বো প্যাকেজ 65",
    description: "সবচেয়ে জনপ্রিয় কম্বো প্যাকেজ। ২৮% ছাড়ে পাচ্ছেন।",
    price: 650,
    category: "কম্বো প্যাকেজ",
    image: "/images/hit-combo-65.jpg",
    badge: "Sale",
    discount: -28,
    onSale: true,
  },

  // ── বাম ─────────────────────────────────────────────────
  {
    id: "two-snakes-ring-lotion",
    name: "Two Snakes Ring Warm Lotion",
    description: "বার্মিজ টু স্নেকস রিং ওয়ার্ম লোশন। ব্যথা ও ক্লান্তি দূর করে।",
    price: 250,
    category: "বাম",
    image: "/images/two-snakes-ring-lotion.jpg",
  },
  {
    id: "axe-brand-universal-oil",
    name: "AXE Brand Universal Oil",
    description: "বিখ্যাত AXE ব্র্যান্ডের ইউনিভার্সাল অয়েল। মাথাব্যথা ও শরীরের ব্যথায় উপকারী।",
    price: 160,
    maxPrice: 900,
    category: "বাম",
    image: "/images/axe-brand-universal-oil.jpg",
  },
  {
    id: "lingzhi-analgesic-balm",
    name: "Lingzhi Analgesic Balm (কলিজা বাম)",
    description: "লিংঝি অ্যানালজেসিক বাম। পরিচিত কলিজা বাম নামে। ব্যথানাশক।",
    price: 250,
    category: "বাম",
    image: "/images/lingzhi-analgesic-balm.jpg",
  },
  {
    id: "tun-shwe-wah-balm",
    name: "Tun Shwe Wah Balm (অর্জিনাল বার্মিজ বাম্)",
    description: "অরিজিনাল বার্মিজ তুন শোয়ে ওয়াহ বাম। সর্বোচ্চ মানের।",
    price: 220,
    category: "বাম",
    image: "/images/tun-shwe-wah-balm.jpg",
    badge: "Original",
  },
  {
    id: "zandu-ultra-power-balm",
    name: "Zandu Ultra Power Balm",
    description: "জান্ডু আল্ট্রা পাওয়ার বাম। মাথাব্যথা ও শরীরের ব্যথায় কার্যকর।",
    price: 200,
    category: "বাম",
    image: "/images/zandu-ultra-power-balm.jpg",
  },

  // ── প্রসাধনী ─────────────────────────────────────────────
  {
    id: "cintaku-thai-papaya-soap",
    name: "Cintaku Thai Papaya Soap 100g",
    description: "থাই পেঁপে সোপ, ১০০ গ্রাম। ত্বক ফর্সা ও মসৃণ করে।",
    price: 250,
    category: "প্রসাধনী",
    image: "/images/cintaku-thai-papaya-soap.jpg",
  },
  {
    id: "kim-cream-white",
    name: "Kim-Cream White 20g",
    description: "কিম ক্রিম হোয়াইট, ২০ গ্রাম। জনপ্রিয় বার্মিজ ফেয়ারনেস ক্রিম।",
    price: 350,
    category: "প্রসাধনী",
    image: "/images/kim-cream-white.jpg",
  },
  {
    id: "kim-red-cream",
    name: "Kim-Red Cream 20g",
    description: "কিম রেড ক্রিম, ২০ গ্রাম। বার্মিজ বিশেষ স্কিন ক্রিম।",
    price: 350,
    category: "প্রসাধনী",
    image: "/images/kim-red-cream.jpg",
  },
  {
    id: "shwe-pyi-nann-thanakha",
    name: "Shwe Pyi Nann Thanakha Face Wash – 20ml",
    description: "থানাখা ফেস ওয়াশ, ২০ মিলি। বার্মিজ প্রাকৃতিক উপাদানে তৈরি।",
    price: 150,
    category: "প্রসাধনী",
    image: "/images/shwe-pyi-nann-thanakha.jpg",
  },
  {
    id: "godrej-no1-soap",
    name: "Godrej No.1 Soap – 75gm",
    description: "গডরেজ নম্বর ১ সোপ, ৭৫ গ্রাম। সুলভ মূল্যে উন্নত মানের সাবান।",
    price: 70,
    category: "প্রসাধনী",
    image: "/images/godrej-no1-soap.jpg",
  },
  {
    id: "qian-li-whitening-cream",
    name: "Qian LI Powerful Whitening Cream",
    description: "কিয়ান এলআই পাওয়ারফুল হোয়াইটেনিং ক্রিম। ইম্পোর্টেড।",
    price: 450,
    category: "প্রসাধনী",
    image: "/images/qian-li-whitening-cream.jpg",
  },
  {
    id: "min-wun-taung-spirulina",
    name: "Min Wun Taung Spirulina",
    description: "বার্মিজ স্পিরুলিনা সাপ্লিমেন্ট। স্বাস্থ্যকর ও পুষ্টিকর।",
    price: 300,
    category: "প্রসাধনী",
    image: "/images/min-wun-taung-spirulina.jpg",
  },

  // ── অন্যান্য ─────────────────────────────────────────────
  {
    id: "modhuhon-chanachur",
    name: "মধুবন চানাচুর – ২৫ পিস",
    description: "মধুবন চানাচুর ২৫ পিস প্যাক। মচমচে ও মশলাদার।",
    price: 80,
    category: "অন্যান্য",
    image: "/images/modhuhon-chanachur.jpg",
  },
];

// ============================================================
// DELIVERY CHARGE — change this number anytime
// ============================================================
export const DELIVERY_CHARGE = 80;

// ============================================================
// WHATSAPP NUMBER
// Format: 880 + your 10-digit number (no spaces, no +)
// ============================================================
export const WHATSAPP_NUMBER = "8801700000000";

// ============================================================
// BUSINESS INFO
// ============================================================
export const BUSINESS_NAME = "আচার ঘর";
export const BUSINESS_TAGLINE = "Authentic Achar & Burmese Flavours from Cox's Bazar";
