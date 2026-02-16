# Luigi Brandolini - Multilingual Portfolio

Astro site with i18n routing (IT, EN, ES, FR), SEO metadata, and GitHub Pages deployment.

## Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Install dependencies                        |
| `npm run dev`   | Start dev server at `localhost:4321`        |
| `npm run build` | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally     |

## Deployment

Push to `main` to trigger GitHub Actions for GitHub Pages. The workflow is in `.github/workflows/deploy.yml`.

## Search Engine Verification

To enable ownership verification in production, set these repository secrets/variables:

- `PUBLIC_GOOGLE_SITE_VERIFICATION`
- `PUBLIC_BING_SITE_VERIFICATION`
- `PUBLIC_YANDEX_SITE_VERIFICATION`
