// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    viewer: true,
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
