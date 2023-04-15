import PrimeVue from 'primevue/config'
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import Tooltip from 'primevue/tooltip'
import FocusTrap from 'primevue/focustrap'

import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin(({ vueApp }) => {
  const runtimeConfig = useRuntimeConfig()
  const config = runtimeConfig?.public?.primevue ?? {}

  vueApp.use(PrimeVue, config)
  vueApp.directive('badge', BadgeDirective)
  vueApp.directive('ripple', Ripple)
  vueApp.directive('style-class', StyleClass)
  vueApp.directive('tooltip', Tooltip)
  vueApp.directive('focus-trap', FocusTrap)
})
