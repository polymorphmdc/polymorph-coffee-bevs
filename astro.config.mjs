import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://polymorph-coffee-bevs.github.io',
  base: '/polymorph-coffee-bevs',
  integrations: [tailwind()]
});