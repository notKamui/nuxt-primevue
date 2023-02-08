import PrimeVue from 'primevue/config'
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import Tooltip from 'primevue/tooltip'
import FocusTrap from 'primevue/focustrap'

import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

import type { PrimeVueConfiguration } from '../options'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin(({ vueApp }) => {
  const runtimeConfig = useRuntimeConfig()
  const config: PrimeVueConfiguration = runtimeConfig?.primevue?.config ?? {}

  vueApp
    .use(PrimeVue, config)
    .directive('badge', BadgeDirective)
    .directive('ripple', Ripple)
    .directive('style-class', StyleClass)
    .directive('tooltip', Tooltip)
    .directive('focus-trap', FocusTrap)
    .use(ConfirmationService)
    .use(ToastService)
})
