export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  imports: {
    dirs: ['components/**', 'composables/**', 'services'],
    imports: [
      { name: 'useQuery', from: '@tanstack/vue-query' },
      { name: 'useQueries', from: '@tanstack/vue-query' },
      { name: 'useMutation', from: '@tanstack/vue-query' },
      { name: 'useQueryClient', from: '@tanstack/vue-query' },
    ],
  },

  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    'nuxt-icon',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  experimental: {
    viewTransition: true,
  },

  css: ['@/assets/css/main.css'],
})
