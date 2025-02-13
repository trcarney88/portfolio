// @ts-check
import { defineConfig } from 'astro/config';
import aws from "astro-sst";
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://trcarney.com",
  server: {host: true},
  output: "server",
  adapter: aws(),
  integrations: [react(), sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});
