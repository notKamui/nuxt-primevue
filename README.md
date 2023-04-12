# Nuxt PrimeVue

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Nuxt module for PrimeVue

## Features

Provides auto import of PrimeVue components and directives.

## Quick Setup

1. Add `primevue` dependency to your project

```bash
# Using pnpm
pnpm add -D primevue

# Using yarn
yarn add --dev primevue

# Using npm
npm install --save-dev primevue
```

2. Add `@notkamui/nuxt-primevue` dependency to your project

```bash
# Using pnpm
pnpm add -D @notkamui/nuxt-primevue

# Using yarn
yarn add --dev @notkamui/nuxt-primevue

# Using npm
npm install --save-dev @notkamui/nuxt-primevue
```

3. As of now, you need to create a Nuxt plugin to include the services provided by Primevue. Create a `primevue.ts` file in the `plugins` folder :

```js
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(ToastService)
  vueApp.use(ConfirmationService)
  vueApp.use(DialogService)
})
```

4. Add `@notkamui/nuxt-primevue` to the `modules` section of `nuxt.config.ts`, along with the PrimeVue CSS files.

```js
export default defineNuxtConfig({
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
  ],
  modules: [
    '@notkamui/nuxt-primevue'
  ],
  primevue: {
    // PrimeVue configuration
    // see https://primevue.org/setup,

    // additional PrimeVue components to auto-import
    includeChart: true, // default: false
    includeEditor: true, // default: false
  },
})
```

That's it! You can now use PrimeVue in your Nuxt app with (almost) all the directives and components auto-imported ✨

## Configuration

There are two PrimeVue components that are not auto-imported by default:
- `Chart`
- `Editor`

This is because they require additional dependencies to function (`chart.js` and `quill` respectively).

To include them, set the `includeChart` and/or `includeEditor` options to `true` in the module configuration, after installing their dependencies.

Moreover, the rest of the module configuration options are the exact same as the PrimeVue plugin's configuration options (and they are typed !).

Please refer to the Configuration section of [this page](https://primevue.org/configuration) for more information.

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@notkamui/nuxt-primevue/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@notkamui/nuxt-primevue

[npm-downloads-src]: https://img.shields.io/npm/dm/@notkamui/nuxt-primevue.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@notkamui/nuxt-primevue

[license-src]: https://img.shields.io/npm/l/@notkamui/nuxt-primevue.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@notkamui/nuxt-primevue
