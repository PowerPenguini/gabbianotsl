import { defineConfig } from 'astro/config';

// GitHub Pages: https://powerpenguini.github.io/gabbianotsl/
// Dla własnej domeny (np. gabbianotsl.com) ustaw SITE_URL i BASE_PATH=/ w zmiennych środowiskowych.
const site = process.env.SITE_URL ?? 'https://powerpenguini.github.io';
const base = process.env.BASE_PATH ?? '/gabbianotsl';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
