export default defineNuxtConfig({
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
  ],
  build: {
    transpile: ['primevue'],
  },
  modules: ['../src/module'],
  primevue: {
    ripple: true,
  },
})
