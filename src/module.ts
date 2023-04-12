import { addComponent, addImports, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { PrimeVueConfiguration, PrimeVueLocaleAriaOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from './options'
import { componentNames, composables } from './runtime/autoimports'

export type { PrimeVueConfiguration, PrimeVueLocaleAriaOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions }

const defaults: PrimeVueConfiguration = {
  includeChart: false,
  includeEditor: false,
  ripple: true,
}

function registerComponents(components: string[]) {
  components.forEach(name => addComponent({
    export: 'default',
    name: `P${name}`,
    filePath: `primevue/${name.toLocaleLowerCase()}`,
    global: true,
  }))
}

function registerComposables(composables: { name: string; as: string; from: string }[]) {
  composables.forEach(composable => addImports(composable))
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
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.primevue = options as typeof nuxt.options.runtimeConfig.public.primevue
    nuxt.options.build.transpile.push('nuxt')
    nuxt.options.build.transpile.push('primevue')
    nuxt.options.build.transpile.push(resolve('./runtime'))
    nuxt.options.build.transpile.push(resolve('./runtime/plugin'))
    nuxt.options.build.transpile.push(resolve('./runtime/autoimports'))

    addPlugin(resolve('./runtime/plugin'))

    const { includeChart, includeEditor } = options
    registerComponents(componentNames
      .filter(name => name !== 'Chart' || includeChart)
      .filter(name => name !== 'Editor' || includeEditor))

    registerComposables(composables)
  },
})
