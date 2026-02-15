// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://luigibrandolini.github.io/luigibrandolini/',
	base: '/luigibrandolini',
	integrations: [sitemap()],
	i18n: {
		defaultLocale: 'it',
		locales: ['it', 'en', 'es', 'fr'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
