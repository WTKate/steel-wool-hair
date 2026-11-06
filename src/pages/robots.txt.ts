import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = () => new Response(
  "User-agent: *\nAllow: /\n\nSitemap: https://steelwoolhair.com.au/sitemap.xml\n",
  {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  }
);
