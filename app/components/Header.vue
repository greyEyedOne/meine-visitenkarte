<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const excludeDisclaimerOn = ['/', '/contacts', '/about']
</script>

<template>
  <div class="relative w-full">
    <Menu />
    <div v-if="!excludeDisclaimerOn.includes(route.path)" class="mt-4">
      <Disclaimer />
    </div>
  </div>
</template>

<style>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideDown {
  animation: slideDown 0.25s ease-out;
}
</style>
