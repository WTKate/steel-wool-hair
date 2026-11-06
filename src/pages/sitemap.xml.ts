import type { APIRoute } from "astro";

export const prerender = false;

const origin = "https://steelwoolhair.com.au";
const paths = ["/", "/hair-menu", "/contact", "/privacy-policy", "/terms-of-use"];

export const GET: APIRoute = () => {
  const entries = paths.map(path => `  <url><loc>${origin}${path}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
};
