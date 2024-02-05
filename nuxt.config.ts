// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],

  googleFonts: {
    preload: true,
    families: {
      Comfortaa: true
    }
  },

  plugins: [
    '~/plugins/preline.client.ts'
  ],

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },

  build: {
    transpile: ["gsap"]
  }
})
