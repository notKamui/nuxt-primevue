import { addComponent, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { PrimeVueConfiguration, PrimeVueLocaleAriaOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from './options'
import { componentNames } from './runtime/autoimports'

export type { PrimeVueConfiguration, PrimeVueLocaleAriaOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions }

const defaults: PrimeVueConfiguration = {
  includeChart: false,
  includeEditor: false,
}

function registerComponents(components: string[]) {
  components.forEach(name => addComponent({
    export: 'default',
    name: `P${name}`,
    filePath: `primevue/${name.toLocaleLowerCase()}`,
    global: true,
  }))
}

export default defineNuxtModule<PrimeVueConfiguration>({
  meta: {
    name: '@notkamui/nuxt-primevue',
    configKey: 'primevue',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults,
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    nuxt.options.runtimeConfig.public.primevue = options
    nuxt.options.build.transpile.push('primevue')
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    addPlugin(resolver.resolve('./runtime/plugin'))

    const { includeChart, includeEditor } = options
    registerComponents(componentNames
      .filter(name => name !== 'Chart' || includeChart)
      .filter(name => name !== 'Editor' || includeEditor))
  },
})
