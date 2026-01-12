import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      link: [],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/test-utils', '@nuxt/ui'],
  vite: {
    plugins: [svgLoader()],
  },
})
