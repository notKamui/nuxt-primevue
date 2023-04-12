<script setup lang="ts">
import { useToast } from 'primevue/usetoast'

const toast = useToast()

function showSuccess() {
  toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 })
}
</script>

<template>
  <div>
    <PToast />
    <p-button v-ripple label="Hey" icon="i-check" icon-pos="left" @click="showSuccess" />
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
