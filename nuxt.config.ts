import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      link: [],
      script: [
        {
          src: '/klaro-config.js',
          type: 'text/javascript',
        },
        {
          src: 'https://cdn.kiprotect.com/klaro/v0.7.22/klaro.js', // replace with min-css later
          type: 'text/javascript',
          defer: true,
        },
      ],
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
