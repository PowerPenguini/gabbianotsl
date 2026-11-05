/** Prefixes a root-relative path with the configured Astro `base` (e.g. /gabbianotsl for GitHub Pages). */
export const u = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
