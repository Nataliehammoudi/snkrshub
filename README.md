# SNKRS HUB — Demo Site

## What's inside

- `index.html` — homepage
- `shop.html` — full catalogue with Men / Women / Kids / Sale filters
- `product.html` — product detail page (color switch, size, quantity, add to cart)
- `cart.html` — cart with quantity editing and removal
- `checkout.html` — name, phone, delivery location, Cash on Delivery / CliQ, sends the order to WhatsApp
- `css/style.css` — all styling, one file
- `js/products.js` — the product catalogue (edit this to add or change sneakers)
- `js/cart.js` — cart logic, stored in the browser's localStorage
- `js/main.js` — mobile menu toggle

## Before you deploy

1. Open `checkout.html` and set `STORE_WHATSAPP` near the top of the script to the real store WhatsApp number, country code first, no plus sign, no spaces (example: `962790000000`).
2. Open `js/products.js` and swap each `placeholderImage(...)` call for a real photo URL or file path. Each color has its own set of images. The hero image on `index.html` and the story image on `about.html` work the same way, look for `placeholderImage(...)` in the inline script near the bottom of each file.
3. Prices are in JOD, set per product in `js/products.js`.

## Deploying the demo on Vercel

1. Drag this whole folder into a new Vercel project, or push it to a GitHub repo and import that repo in Vercel.
2. No build step is needed, it's static HTML, CSS and JS. Framework preset: "Other".
3. Vercel will give you a live link you can send for approval.

## Moving to Shopify later

This demo is plain HTML/CSS/JS so it runs anywhere, but Shopify stores run on Liquid templates and Shopify's own checkout, so it isn't a drag-and-drop file swap. Once the design is approved, here's the honest path to bring the same look to Shopify:

- **Visual system carries over directly.** The colors, fonts (Anton, Inter, Space Mono), spacing and component styles in `css/style.css` can be dropped into a Shopify theme's CSS almost as-is.
- **Homepage, category strip, product grid** → rebuilt as Shopify sections using the same markup and classes, pulling from Shopify's real collections instead of `products.js`.
- **Product page** → Shopify's product template already handles variants (color and size) through its native variant system, so the color-swap gallery and size buttons get rebuilt using Shopify's variant data instead of the custom JS here, same look, different data source.
- **Cart** → Shopify has its own cart (AJAX cart API), so `cart.js` gets replaced with Shopify's cart endpoints, styled to match this design.
- **Checkout** → Shopify requires using its own secure checkout for payment. The custom checkout page here is fine for this demo, but on Shopify, Cash on Delivery and CliQ would be set up as manual payment methods inside Shopify's checkout settings, and the location field maps to Shopify's built-in shipping address form.

In short, the design language transfers fully. The interactive parts (cart, variants, checkout) get rebuilt on Shopify's native systems, which is normal for any custom-designed Shopify build and is a well-scoped follow-up once the client signs off on the look.
