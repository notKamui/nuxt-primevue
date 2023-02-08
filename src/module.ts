import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { PrimeVueConfiguration, PrimeVueLocaleAriaOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from './options'

export type { PrimeVueConfiguration, PrimeVueLocaleAriaOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions }

const defaults: PrimeVueConfiguration = {}

export default defineNuxtModule<PrimeVueConfiguration>({
  meta: {
    name: '@notkamui/nuxt-primevue',
    configKey: 'primevue',
    compatibility: {
      nuxt: '^3.0.0',
    },
    defaults,
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
