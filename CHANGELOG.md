# Changelog

## 2026-09-29

- Replaced the single-image splash with a domain marketplace: flagship listing, filterable portfolio, listing pages, insights, about, and contact.
- Titles, descriptions, canonicals, Open Graph, and JSON-LD (Organization, WebSite, Product, Article).
- Canonical host stays apex HTTPS. Worker now also sends HSTS, nosniff, referrer policy, frame, and permissions headers.
- Portfolio prices and copy live in `src/data/inventory.ts`.
- Forms prepare an email to erg@errorfound.net. They do not charge a card.
- Still Cloudflare Workers static assets on the free plan. No adapter.
