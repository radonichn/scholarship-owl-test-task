import Material from '@primeuix/themes/material';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@primevue/nuxt-module'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Material,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
});
