<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const excludeDisclaimerOn = [
  '/',
  '/contacts',
  '/about',
  '/en/privacy-policy',
  '/datenschutzerklaerung',
  '/en/imprint',
  '/impressum',
]
console.log(route.path)
</script>

<template>
  <header class="relative w-full">
    <div class="container">
      <Menu />
      <div v-if="!excludeDisclaimerOn.includes(route.path)" class="mt-4">
        <Disclaimer />
      </div>
    </div>
  </header>
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
