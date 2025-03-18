
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourdomain.com',  // Update with your Cloudflare domain
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  integrations: [],
});
