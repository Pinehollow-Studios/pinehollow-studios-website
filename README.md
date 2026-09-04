# Pinehollow Studios — website

The studio's single-page site at [pinehollow.studio](https://pinehollow.studio). Next.js App Router, no client-side JavaScript beyond what Next ships, no analytics, no cookies.

```bash
npm install
npm run dev
```

- Type is Manrope only (see BRAND.md). Copy and facts live in `app/page.tsx` and `lib/site.ts` (email, company line, Vestige dates).
- Palette, type and the mark are documented in `BRAND.md`; tokens in `app/globals.css`.
- Favicon, Apple icon and the share card are generated at build time in `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`.
