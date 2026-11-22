# Saelle — 3D walk-in beauty store

A walk-through 3D store for **Saelle**, a made-up beauty brand. You start on the street at night, the doors open, and you walk in. Inside there are four sections: skincare, the fragrance bar, makeup, and hair & body. You can pick products off the shelves into a basket and pay at the counter, which shows a receipt and confetti. Prices are in ₹, and no real payment is taken.

## Run it

Open `index.html` through any static server, because textures and models are loaded with `fetch`:

```bash
npx serve .        # or: python3 -m http.server 8080
```

**Live:** https://shubhsitedeveloper.github.io/Saellestore/ (GitHub Pages, served from `main`). No build step is needed to host it.

Add `?low` to the URL for the light mode, which turns off ambient occlusion and reflections. Phones pick light mode on their own. Add `?list` to open straight into the product list.

The product list, search, filters, basket and product pages work as soon as the page opens, on any browser. The 3D store loads behind them; if a browser can't run it, the list stays as the store.

Keyboard: `W A S D` or arrows walk, `N`/`P` next and previous product, `Enter` adds it, `L` or `/` opens the list, `T` starts the tour, `M` turns sound on or off, `C` opens the receipt, `Esc` closes.

## Edit it

The code lives in `src/`. `index.html` is built from it:

```bash
npm install
npm run build      # writes index.html and store.js (minified); DEV=1 npm run build keeps them readable
```

| File | What it holds |
| --- | --- |
| `src/data.js` | Sections, the product list (names, sizes, ₹ prices, notes) and the guided tour order |
| `src/products.js` | Every product, modelled in code: droppers, jars, pumps, perfumes, lipsticks, palettes… |
| `src/world.js` | The store: facade, street, shelves, fragrance bar, counter, vanity |
| `src/shop.js`, `src/core.js` | The page's own script: product list, search, filters, basket, product pages, sound; loads the 3D store |
| `src/store.js` | The 3D store: renderer, lights, post-processing, camera walk, tap-to-walk, receipt (built to `store.js`) |
| `assets/thumbs/` | Product photos rendered from the 3D models, used by the list and product pages |
| `src/kit.js` | Materials, textures and small geometry helpers |
| `src/shell.html`, `src/ui.css` | Page markup and interface styles |

## Credits

The HDRIs, PBR textures and furniture/plant models come from [Poly Haven](https://polyhaven.com) under CC0. Rendering uses [three.js](https://threejs.org) r170 and animation uses [GSAP](https://gsap.com) 3.12.5, both bundled into `store.js`.
