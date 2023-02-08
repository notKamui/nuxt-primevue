# Nuxt Primevue

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Nuxt module for PrimeVue

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

Provides auto import of PrimeVue components and directives.

## Quick Setup

1. Add `@notkamui/nuxt-primevue` dependency to your project

```bash
# Using pnpm
pnpm add -D @notkamui/nuxt-primevue

# Using yarn
yarn add --dev @notkamui/nuxt-primevue

# Using npm
npm install --save-dev @notkamui/nuxt-primevue
```

2. Add `@notkamui/nuxt-primevue` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@notkamui/nuxt-primevue'
  ]
})
```

That's it! You can now use Primevue in your Nuxt app ✨

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
