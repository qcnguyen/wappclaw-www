# Wappclaw website

The public website for **Wappclaw**, built with [Astro](https://astro.build) and deployed to GitHub Pages.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build into dist/
npm run preview
```

## Where things are

- `src/data/site.ts` — domain (`SITE_URL`), name, tagline, contact link. Change the domain here, in
  `public/robots.txt`, and add `public/CNAME` when the custom domain is set up.
- `src/data/features.ts` — the capability groups (home page cards + Features page).
- `src/data/articles.ts` — articles (trusted HTML), rendered at `/articles/<slug>`.
- `src/pages/` — Home, Features, Get started, Articles, About, 404.
- `public/` — logo and icons, copied from the product repo's `branding/` folder.

## Deploying

`.github/workflows/deploy.yml` builds with `withastro/action` and deploys to GitHub Pages on every
push to `main`. In the repository's **Settings → Pages**, set the source to **GitHub Actions**.
