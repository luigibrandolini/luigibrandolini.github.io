export const prerender = true;

export function GET() {
  const site = import.meta.env.SITE || "https://luigibrandolini.github.io/";
  const base = site.replace(/\/$/, "");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${base}/sitemap-index.xml</loc>\n  </sitemap>\n</sitemapindex>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
