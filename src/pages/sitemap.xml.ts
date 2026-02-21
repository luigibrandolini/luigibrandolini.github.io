export const prerender = true;

export function GET() {
  const site = import.meta.env.SITE || "https://luigibrandolini.github.io/";
  const base = site.replace(/\/$/, "");
  const urls = ["/", "/en/", "/es/", "/fr/"];
  const entries = urls
    .map((path) => `  <url>\n    <loc>${base}${path}</loc>\n  </url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
