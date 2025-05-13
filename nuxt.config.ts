import Material from '@primeuix/themes/material';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@primevue/nuxt-module'],
  primevue: {
    options: {
      theme: {
        preset: Material,
        options: {
          darkModeSelector: false, // TODO: probably implement a dark theme switcher
        },
      },
    },
  },
});
