import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gabbianotsl.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
