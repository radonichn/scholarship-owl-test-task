import Material from '@primeuix/themes/material';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxt/eslint', '@primevue/nuxt-module'],
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
