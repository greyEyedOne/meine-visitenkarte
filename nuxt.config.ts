import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap',
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
