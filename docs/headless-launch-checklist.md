# Standard Wix Headless website launch checklist

Apply this checklist to all new Wix Headless sites. This version is for **Wix-managed Astro**; other frameworks and self-managed sites have different sitemap hosting requirements.

## Mandatory legal pages
- [ ] Publish a **Privacy Policy** at `/privacy-policy`, tailored to the business and its actual services, forms, third-party tools and contact details.
- [ ] Publish **Terms of Use** at `/terms-of-use`, tailored to appointments, products and other site features.
- [ ] Add links to both pages in the footer **on every page**, including the policy pages.
- [ ] Recommend legal review of the drafts.

## Correct Wix-managed Astro sitemap workflow
- [ ] Use `@wix/astro` and `@wix/astro-pages`.
- [ ] Register every main page as its **own `.astro` page** under `src/pages/`, even if it renders the contents of an existing HTML file using `<Fragment set:html={html} />`. A single `[...path].ts` endpoint can serve working URLs while leaving Wix's main-page registry **empty**.
- [ ] Do **not** create `public/sitemap.xml`, `src/pages/sitemap.xml.ts`, or a `*-sitemap.xml` Astro endpoint. Wix reserves these paths and generates the XML sitemap automatically for registered pages.
- [ ] Let Wix manage `/robots.txt` through SEO & GEO > Robots.txt Editor. If you intentionally serve your own Astro route, use the documented `wix({ robots: false })` configuration to prevent collisions.
- [ ] Check overall and per-page indexability in Wix SEO settings. Noindex pages must not be included.
- [ ] Build and release to the **existing Wix site**. Confirm build output `dist/client/_wix/pages.json` contains all expected main-page paths, not `[]`. Also check that `.wix/build-metadata.json` exists.
- [ ] On the **live custom domain**, GET `/_wix/pages.json`, `/sitemap.xml`, `/pages-sitemap.xml` and `/robots.txt`. Check HTTP 200 and correct content type. The sitemap index alone being HTTP 200 **does not prove the pages sitemap has entries**: check all expected `<loc>` URLs in `/pages-sitemap.xml`.
- [ ] Wix can briefly return an empty child sitemap after a release while page registry and sitemap generation settle; repeat an external HTTP check, not just an internal build assertion.
- [ ] Confirm all canonicals point to the site's canonical domain and avoid competing duplicated manual SEO tags and Wix-generated SEO tags.
- [ ] Where available, submit or check the sitemap in Google Search Console.

## Build and release protections
- [ ] Preserve the existing Wix site ID, contact Wix Form, styling, pages, and services; do not create a replacement website.
- [ ] Verify main routes load directly on desktop and mobile.
- [ ] Verify Privacy Policy, Terms of Use, footer links, sitemap, robots and SEO metadata after publishing.

## Steel Wool Hair implementation (verified 6 November 2026)
- Primary domain: `https://www.steelwoolhair.com.au`
- Main pages: `/`, `/hair-menu`, `/contact`, `/privacy-policy`, `/terms-of-use`
- Source: `src/pages/*.astro` main-page routes; existing HTML page content in `src/content/`
- Wix-managed sitemap index: `https://www.steelwoolhair.com.au/sitemap.xml`
- Wix-managed child sitemap: `https://www.steelwoolhair.com.au/pages-sitemap.xml`
- Wix-managed robots: `https://www.steelwoolhair.com.au/robots.txt`
- Automatic external verification: `.github/workflows/check-live-sitemap.yml`
