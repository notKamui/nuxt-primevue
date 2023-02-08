<template>
  <div>
    <p-button v-ripple label="Hey" icon="i-check" icon-pos="left" />
  </div>
</template>

<style>
.i-check {
  --icon: url(./assets/icons/check.svg);
  -webkit-mask: var(--icon) no-repeat;
  mask: var(--icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  background-color: currentColor;
  color: inherit;
  width: 1.5em;
  height: 1.5em;
}
</style>
