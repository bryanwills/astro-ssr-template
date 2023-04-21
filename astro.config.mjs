import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({ mode: "directory" }),
});