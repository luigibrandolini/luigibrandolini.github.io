export const prerender = true;

export function GET() {
  const site = import.meta.env.SITE || "https://luigibrandolini.github.io/";
  const base = site.replace(/\/$/, "");
  const host = new URL(site).host;
  const body = `User-agent: *\nAllow: /\nHost: ${host}\nSitemap: ${base}/sitemap.xml\nSitemap: ${base}/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
