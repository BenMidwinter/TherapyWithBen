// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://therapywithben.uk',
  // Root path — use with custom domain therapywithben.uk on GitHub Pages.
  // Until DNS is pointed, you can still deploy; the live URL will be the custom domain once set.
  base: '/',
});
