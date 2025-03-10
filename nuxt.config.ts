// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
    },
  },
  nitro: {
    logLevel: 'info', // Уровень логирования
    preset: 'node-server', // Пресет для деплоя
    /*middleware: [
      '~/server/middleware/logger.ts', // Middleware для логирования
    ],*/
  },
  css: [
    '@/assets/scss/main.scss'
  ],
   vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/variables.scss" as *;
            @use "@/assets/scss/mixins.scss" as *;
          `
        }
      }
    }
  },
  compatibilityDate: '2025-01-25',
  devtools: { enabled: false }
})