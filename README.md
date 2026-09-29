# ErrorFound.net

Premium domain marketplace for **errorfound.net** and the surrounding portfolio. Astro 7, Tailwind CSS 4, deployed as Cloudflare Workers static assets.

## Stack

- Astro 7 static output, trailing slashes
- Tailwind CSS 4
- `@astrojs/sitemap`
- Cloudflare Images for the hero
- Worker in front of assets for apex/HTTPS redirects and security headers
- `robots.txt` points at the generated sitemap

## Edit the book

Names, asking prices, and insight notes are in [`src/data/inventory.ts`](src/data/inventory.ts). A `null` price means “make offer.”

## Local

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
npm run deploy
```

`wrangler.toml` serves `./dist` with `run_worker_first` so canonical redirects win over the static file. Stay on the Workers free plan. No `@astrojs/cloudflare` adapter.

Production: https://errorfound.net

Inquiries: sales@desertrich.com
