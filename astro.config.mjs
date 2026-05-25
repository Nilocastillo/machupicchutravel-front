// @ts-check
import { defineConfig, fontProviders, sessionDrivers } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: "server",
  // Evita que @astrojs/cloudflare v13 auto-habilite sesiones con KV
  // (el binding SESSION sin ID cuelga el deploy para siempre)
  session: {
    driver: sessionDrivers.null(),
  },
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal'
          },
          {
            src: ['@fontsource-variable/inter/files/inter-latin-wght-italic.woff2'],
            weight: '100 900',
            style: 'italic'
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Playfair Display',
      cssVariable: '--font-playfair-display',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2'],
            weight: '400 900',
            style: 'normal'
          },
          {
            src: ['@fontsource-variable/playfair-display/files/playfair-display-latin-wght-italic.woff2'],
            weight: '400 900',
            style: 'italic'
          }
        ]
      }
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
