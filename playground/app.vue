<script setup>
import { ref } from 'vue'
import Chips from 'primevue/chips'

const value = ref([])
</script>

<template>
  <div>
    Nuxt module playground!
    <Chips v-model="value">
      <template #chip="slotProps">
        <div>
          <span>{{ slotProps.value }} - (active) </span>
        </div>
      </template>
    </Chips>
  </div>
</template>
