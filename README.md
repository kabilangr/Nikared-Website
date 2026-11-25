# Nika Red website

Source for [nikared.com](https://nikared.com), the website of Nika Red, an engineering studio in Chennai. The site covers our services, industries, products (Valam, Viduthi, Alavi), blog, and contact form.

Built with Next.js 16 (App Router), React 19, and TypeScript. It is exported as a static site and hosted on GitHub Pages.

> This Next.js version has breaking changes from older releases. Check the guides in `node_modules/next/dist/docs/` before changing framework-level code.

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Command         | What it does                                       |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Start the dev server                               |
| `npm run build` | Build the static export into `out/`                |
| `npm run lint`  | Run ESLint                                         |
| `node scripts/blog-covers.mjs` | Regenerate blog cover art (SVG and PNG) |

## Project layout

```
src/
  app/              Routes: home, about, services, industries, products, blog, contact, privacy, terms
                    plus sitemap.ts, robots.ts, manifest.ts, and the blog RSS feed
  components/       Shared UI (Header, Footer, ThemeToggle, UplinkForm, NeuralCanvas, page building blocks)
  lib/
    site.ts         Site-wide constants: domain, company details, contact email
    metadata.ts     Page metadata helpers
    structured-data.ts  JSON-LD schema builders
    content/        Page content as typed data: services, industries, products, blog posts
public/             Static assets: logos, icons, product screenshots, blog covers, CNAME
scripts/            blog-covers.mjs, the cover art generator
DESIGN.md           Design system notes: colors, typography, layout rules
```

## Editing content

Most copy lives in `src/lib/content/`, not in the page files.

- **Services, industries, products:** edit the matching file in `src/lib/content/`. Dynamic `[slug]` routes pick up new entries automatically, and so does the sitemap.
- **Blog posts:** add an entry to `src/lib/content/blog.ts`. Each post needs a cover at `public/blog/covers/<slug>.svg` and `.png`. Add a cover function for the slug in `scripts/blog-covers.mjs`, then run the script.
- **Company details** (email, address, domain): `src/lib/site.ts`.

Style rule for site copy: no em dashes.

## Contact form

`UplinkForm` writes submissions to the `contacts` collection in Firestore when Firebase is configured. Set these in `.env.local` for local builds, and as repository secrets with the same names (Settings > Secrets and variables > Actions) for deploys. The deploy workflow passes them into the build:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Without them, the form falls back to opening the visitor's email app addressed to contact@nikared.com. The same fallback applies to the live site if the repository secrets are not set.

## Deployment

Pushing to `main` runs `.github/workflows/nextjs.yml`, which builds the site and deploys `out/` to GitHub Pages. The custom domain comes from `public/CNAME`.

`next.config.ts` sets `output: "export"`, `trailingSlash: true` (so `/x` and `/x/` both resolve on Pages), and unoptimized images. Server-only features such as API routes, middleware, and runtime image optimization are not available.
