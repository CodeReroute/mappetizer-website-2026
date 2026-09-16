# mappetizer website

Static marketing site built with Next.js (App Router, `output: "export"`) and styled-components.

## Commands

```bash
yarn dev     # start dev server
yarn build   # static export to ./out
yarn lint
```

## Where things live

| Path | Purpose |
| --- | --- |
| `config/webConfig.ts` | Store URLs, social URLs, feature flags (`snapSections`, `animateDownButton`) |
| `content/site.ts` | Copy shared by every page (footer, store labels, download sheet) |
| `app/(home)/content.ts` | All home page copy, grouped by section |
| `app/(home)/faqs.ts` | Q&A list (`{ title, description }[]`) |
| `app/<route>/content.ts` | Copy for each additional page |
| `theme/` | Colors, breakpoints, spacing, global styles |
| `components/` | Reusable UI (buttons, phone mockup, bottom sheet, footer, icons...) |
| `lib/seo.ts` | `buildSeo({ title, description, path?, image? })` → full metadata set |
| `lib/platform.ts` | iOS / Android detection used by the Download button |
| `public/images/` | Raster assets grouped by section; `public/icons/` store glyphs; `public/fonts/goga/` |
