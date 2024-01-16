// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    asyncEntry: false,
    reactivityTransform: false,
    externalVue: false,
    treeshakeClientOnly: false,
    emitRouteChunkError: 'automatic',
    restoreState: false,
    inlineSSRStyles: false,
    noScripts: false,
    renderJsonPayloads: true,
    noVueServer: false,
    payloadExtraction: false,
    clientFallback: false,
    crossOriginPrefetch: false,
    viewTransition: false,
    writeEarlyHints: false,
    componentIslands: false,
    configSchema: false,
    polyfillVueUseHead: false,
    respectNoSSRHeader: false,
    localLayerAliases: false,
    typedPages: false
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@hypernym/nuxt-gsap'
  ],

  googleFonts: {
    preload: true,
    families: {
      Comfortaa: true
    }
  },

  plugins: [
    '~/plugins/preline.client.js'
  ],

  gsap: {
    extraPlugins: {
      text: true
    },
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    baseURL: "/homepage_alt"
  }

  
})
