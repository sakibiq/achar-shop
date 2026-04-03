# আচার ঘর — Achar Shop 🫙

Authentic Achar & Burmese Food eCommerce — Next.js + Tailwind + Resend

---

## 📁 Project Structure

```
achar-shop/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── order/
│   │   │       └── route.ts        ← Sends order email via Resend
│   │   ├── cart/
│   │   │   └── page.tsx            ← Full cart page
│   │   ├── checkout/
│   │   │   └── page.tsx            ← Checkout form page
│   │   ├── success/
│   │   │   └── page.tsx            ← Order success page
│   │   ├── globals.css             ← Global styles + Tailwind
│   │   ├── layout.tsx              ← Root layout (Navbar, CartDrawer, WhatsApp)
│   │   └── page.tsx                ← Home page
│   ├── components/
│   │   ├── CartDrawer.tsx          ← Slide-in cart sidebar
│   │   ├── Footer.tsx              ← Footer with contact info
│   │   ├── HeroBanner.tsx          ← Homepage banner
│   │   ├── Navbar.tsx              ← Sticky top nav with cart icon
│   │   ├── ProductCard.tsx         ← Individual product card
│   │   ├── ProductGrid.tsx         ← Grid of all products
│   │   └── WhatsAppButton.tsx      ← Floating WhatsApp button
│   ├── lib/
│   │   └── products.ts             ← ⭐ ALL products, prices, delivery charge, WhatsApp number
│   └── store/
│       └── cartStore.ts            ← Cart state (Zustand)
├── public/
│   └── images/                     ← Put your product images here
├── .env.local                      ← ⭐ Your secret API keys (never commit this)
├── .env.local.example              ← Template for .env.local
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ How It Works

1. Customer visits your website and sees product cards.
2. They click **Add** — products go into the cart (saved in browser storage).
3. They open the cart drawer, adjust quantities, then click **Proceed to Checkout**.
4. On the checkout page they fill in: name, phone, address, area, delivery note.
5. They click **Place Order**.
6. Your server calls Resend to send a full order email to **your email address**.
7. Customer sees the success page with the Bangla confirmation message.
8. **You** receive a beautiful HTML email with all order details and call the customer.

---

## 🚀 Setup Guide (Step by Step)

### Step 1 — Install Node.js
Download and install Node.js from https://nodejs.org (choose the LTS version).

### Step 2 — Download / Clone the project
Put the project folder wherever you like. Open a terminal inside the folder.

### Step 3 — Install dependencies
```bash
npm install
```
This will install Next.js, Tailwind, Resend, Zustand and all other packages.

### Step 4 — Set up Resend (Email)

1. Go to https://resend.com
2. Sign up for a free account (100 emails/day free)
3. In the dashboard, go to **API Keys**
4. Click **Create API Key** → give it any name → copy the key

### Step 5 — Configure your environment variables

Open the file `.env.local` and paste your Resend API key:

```env
RESEND_API_KEY=re_abc123your_real_key_here
ORDER_NOTIFICATION_EMAIL=sakibiq001@gmail.com
```

⚠️ **Important:** In Resend's free sandbox mode, you can ONLY send emails to the email address you signed up with. Verify that email in Resend dashboard under "Domains" → "Verify Email".

### Step 6 — Add product images (optional)

Place your product images in `/public/images/`:
- `mango-achar.jpg`
- `tamarind-achar.jpg`
- `olive-achar.jpg`
- `burmese-pickle.jpg`
- `dry-fish-pack.jpg`

If images are missing, a 🫙 emoji placeholder shows automatically — this is fine for testing.

### Step 7 — Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🧪 How to Test Placing an Order

1. Open http://localhost:3000
2. Click **Add** on any product
3. The cart drawer slides open — you can adjust quantities
4. Click **Proceed to Checkout**
5. Fill in the form (use your own phone number and address for testing)
6. Click **Place Order**
7. Check your email — you should receive the order email!
8. You'll be redirected to the success page

---

## 🌐 How to Deploy (Vercel — Recommended)

Vercel is the easiest way to deploy Next.js apps. It's free for small projects.

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
# Create a repo on github.com, then:
git remote add origin https://github.com/yourusername/achar-shop.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com and sign up with GitHub
2. Click **New Project** → Import your GitHub repo
3. Click **Deploy** (Vercel auto-detects Next.js)

### Step 3 — Add Environment Variables on Vercel
1. Go to your project on Vercel → **Settings** → **Environment Variables**
2. Add:
   - `RESEND_API_KEY` = your Resend API key
   - `ORDER_NOTIFICATION_EMAIL` = sakibiq001@gmail.com
3. Redeploy the project

### Step 4 — Custom Domain (optional)
In Vercel project settings → **Domains** → add your domain name.

---

## ✏️ How to Customize Everything

### Change Products / Prices
Open `src/lib/products.ts` — edit the `products` array:
```ts
{
  id: "mango-achar",        // unique ID (no spaces)
  name: "Mango Achar",      // display name
  description: "...",       // short description
  price: 180,               // price in BDT
  image: "/images/mango-achar.jpg",  // path in /public/images/
  badge: "Best Seller",     // optional badge (remove line to hide)
},
```

### Change Delivery Charge
In `src/lib/products.ts`:
```ts
export const DELIVERY_CHARGE = 80;  // ← change this number
```

### Change WhatsApp Number
In `src/lib/products.ts`:
```ts
export const WHATSAPP_NUMBER = "8801700000000";
// Format: 880 (Bangladesh code) + 10-digit number, no spaces
```

### Change Your Email Address
In `.env.local`:
```env
ORDER_NOTIFICATION_EMAIL=your-new-email@gmail.com
```
Also update it in Vercel environment variables if deployed.

### Change Business Name / Tagline
In `src/lib/products.ts`:
```ts
export const BUSINESS_NAME = "আচার ঘর";
export const BUSINESS_TAGLINE = "Authentic Achar & Burmese Flavours from Cox's Bazar";
```

### Change Colors
In `tailwind.config.ts` — edit the `brand` color values.
The main orange color is `brand-500: "#f97316"`.

---

## ✅ Before Going Live — Checklist

- [ ] Set real `RESEND_API_KEY` in `.env.local` and Vercel
- [ ] Set real `ORDER_NOTIFICATION_EMAIL` in `.env.local` and Vercel
- [ ] Verify your email address in Resend dashboard
- [ ] (Optional) Verify your domain in Resend for custom `from` address
- [ ] Update `WHATSAPP_NUMBER` in `src/lib/products.ts`
- [ ] Replace emoji placeholders with real product photos in `/public/images/`
- [ ] Update product names, descriptions, and prices
- [ ] Update delivery charge if needed
- [ ] Update business name and tagline
- [ ] Test a full order end-to-end
- [ ] Deploy to Vercel
- [ ] Add custom domain (optional)

---

## 💌 Email: Resend Sandbox vs Production

| Mode | Sender address | Recipients |
|------|---------------|------------|
| Sandbox (free, default) | `onboarding@resend.dev` | Only your verified Resend email |
| Production (after domain verify) | `orders@yourdomain.com` | Any email address |

For production, verify your domain in Resend dashboard → Domains, then update the `from` field in `src/app/api/order/route.ts`:
```ts
from: "orders@yourdomain.com",  // ← update this
```

---

## 📦 Tech Stack

| Technology | Purpose | Why chosen |
|------------|---------|------------|
| Next.js 14 | Framework | Best for React + server-side |
| Tailwind CSS | Styling | Fast, mobile-first styling |
| Zustand | Cart state | Simple, no boilerplate |
| Resend | Email sending | Easiest beginner-friendly email API |

---

## ❓ Common Problems

**Email not received?**
- Check Resend dashboard → Emails tab to see if it was sent
- Make sure your email is verified in Resend
- Check spam folder
- Make sure `.env.local` has the correct API key

**Images not showing?**
- This is normal if you haven't added images yet
- The 🫙 emoji placeholder will show instead
- Add images to `/public/images/` with exact filenames

**Cart empty after refresh?**
- Cart is saved in browser localStorage — it should persist
- If using Incognito/Private mode, cart won't persist (this is normal)
