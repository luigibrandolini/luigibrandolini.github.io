export const prerender = true;

export function GET() {
  const site = import.meta.env.SITE || "https://luigibrandolini.github.io/luigibrandolini";
  const base = site.replace(/\/$/, "");
  const body = `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
