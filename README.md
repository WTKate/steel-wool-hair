# Steel Wool Hair

Wix-managed Astro clean-URL build for the **existing** Steel Wool Hair Wix Headless site.

Existing Wix site ID: `3a1fe884-069e-4cfb-a76b-de7403733eed`.

Target routes: `/`, `/hair-menu`, `/contact`, `/privacy-policy`, `/terms-of-use`.

Production sitemap: `https://steelwoolhair.com.au/sitemap.xml` (server endpoint: `src/pages/sitemap.xml.ts`).

Robots file: `https://steelwoolhair.com.au/robots.txt` (server endpoint: `src/pages/robots.txt.ts`).

**Standard headless launch procedure:** [docs/headless-launch-checklist.md](docs/headless-launch-checklist.md). Every headless site must include Terms of Use, Privacy Policy, and a live XML sitemap; link both policies in the footer and verify all three routes after release.

Do not provision a new Wix site or replace the existing frontend with a static upload. Preserve the existing site content and Wix Forms integration.
