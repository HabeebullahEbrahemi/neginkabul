
# neginKabul — Frontend-Only E‑Commerce (HTML/CSS/JS/JSON)

This is a fully functional **frontend demo** store. It uses:
- **HTML/CSS** for UI
- **JavaScript (modules)** for logic
- **LocalStorage** for the shopping cart
- **`products.json`** as a lightweight "database"

> ⚠️ No backend is included. Checkout simulates an order and clears the cart.

## Features
- Product listing and detail pages
- Add to cart / update quantity / remove
- Cart totals and checkout form
- Thank-you page with a generated order id
- About & Contact pages
- Responsive, clean design

## Files
- `index.html` — Home + featured products
- `products.html` — All products grid
- `product.html?id=1` — Product detail (expects `id` query param)
- `cart.html` — View/update cart
- `checkout.html` — Place order (simulated)
- `thankyou.html` — Post‑checkout confirmation
- `about.html`, `contact.html` — Info pages
- `css/styles.css` — Styles
- `js/layout.js` — Header/footer rendering
- `js/store.js` — Cart + product utilities (LocalStorage)
- `products.json` — Product catalog

## How It Works
- Product data is loaded from `products.json` using `fetch`.
- Cart is stored in `localStorage` under key `nk_cart_v1`.
- Checkout generates a faux order id and redirects to `thankyou.html?orderId=...`.

## Running Locally
Because browsers restrict `fetch` from local files, serve this folder with a local server:

### Option A: Using VS Code
- Install **Live Server** extension, right‑click `index.html` → **Open with Live Server**.

### Option B: Python (built‑in)
```bash
cd neginKabul
python3 -m http.server 8080
# open http://localhost:8080 in your browser
```

## Customization
- Edit `products.json` to add products (ensure unique `id` values).
- Update images in `assets/` with real product images (keep same file names or update JSON).
- Tweak theme colors in `css/styles.css` under `:root` variables.

## Notes
- Currency formatting uses `Intl.NumberFormat` (defaults to your locale).
- Stock values are included for future validation but not enforced in this demo.
