# 404.eg

Everyday streetwear storefront — static site (HTML + CSS + vanilla JS), no build step.

## Structure

```
.
├── index.html        # markup
├── css/style.css     # all styles (desktop + mobile)
├── js/main.js        # all behaviour (cart, products, checkout, gallery…)
└── assets/           # product images (+ Logo.png, Banner.png in the root)
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Works on GitHub Pages / Vercel / Netlify as-is — just point it at the repo root.
