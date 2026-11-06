# Standard Wix Headless website launch checklist

Apply this checklist to **every new Wix Headless website** and to existing headless sites when finishing or relaunching. Do not assume the Wix dashboard creates or serves SEO files for a custom frontend; verify the public website.

## Required pages
- [ ] Publish a **Privacy Policy** at `/privacy-policy` using the correct business name, location, contact email, actual data collection, hosting, form, analytics, booking and other third-party services.
- [ ] Publish **Terms of Use** at `/terms-of-use` covering website use, services, external links and booking/purchasing arrangements. Adapt the draft to the business and recommend legal review.
- [ ] Include visible links to both policies in the footer **on every page**, including the policy pages themselves.

## Sitemap and search discovery
- [ ] Publish a valid XML sitemap at **`/sitemap.xml`**, using absolute URLs on the **live custom domain** and listing every public, canonical, indexable route (including the two policy pages).
- [ ] Keep the sitemap current when pages are added, removed or renamed. Avoid URLs with `.html`, staging hostnames, redirects, errors, or `noindex`.
- [ ] Publish **`/robots.txt`** with a `Sitemap: https://<live-domain>/sitemap.xml` directive, unless an existing robots.txt already includes the correct directive.
- [ ] Verify the public sitemap returns HTTP 200 and XML, and the robots file returns HTTP 200 and text, after the Wix release.
- [ ] Ensure every page's canonical tag uses its final custom-domain URL, not a temporary Wix hostname.
- [ ] Where the owner has access to Google Search Console, submit or resubmit the sitemap.

## Headless build and release
- [ ] Preserve the **existing** Wix site ID, Forms integration, existing content, navigation, and other services; do not create a replacement Wix site.
- [ ] Confirm clean routes load directly, not only by client-side navigation.
- [ ] Build the Wix Astro project, verify `.wix/build-metadata.json` and bundled public assets, then deploy to the existing site.
- [ ] After release, check the homepage, main pages, both policy routes, footer links, `/sitemap.xml`, `/robots.txt`, and canonical URLs on the live domain.
- [ ] Keep H1 line-height at **1.1** across the website and use a Wix Form on the contact page (established headless design requirements).

## Steel Wool Hair implementation
- Domain: `https://steelwoolhair.com.au`
- Pages: `/`, `/hair-menu`, `/contact`, `/privacy-policy`, `/terms-of-use`
- Source: `public/sitemap.xml` and `public/robots.txt`
