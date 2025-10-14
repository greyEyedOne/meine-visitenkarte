<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const buttonNames = [
  { title: "Home", link: "/" },
  { title: "About me", link: "/about" },
  { title: "Meet my CV", link: "/cv" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Contacts", link: "/contacts" },
  { title: "Blog", link: "/blog" },
];
</script>

<template>
  <div class="relative w-full">
    <!-- Top panel -->
    <div class="flex justify-between items-center w-full">
      <!-- Burger menu -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden w-10 h-10 flex items-center justify-center rounded-md bg-black dark:bg-white text-white dark:text-black"
      >
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- Desktop menu -->
      <div class="hidden md:flex gap-3 w-full justify-center">
        <NuxtLink
          v-for="(item, i) in buttonNames"
          :key="i"
          :to="item.link"
          class="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-80"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>

    <!-- Shadowing + menu animation -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-black/50 flex justify-center"
      @click="isMenuOpen = false"
    >
      <div
        class="absolute top-16 w-11/12 max-w-sm bg-white dark:bg-gray-900 rounded-md shadow-lg flex flex-col text-center z-50 animate-slideDown"
        @click.stop
      >
        <NuxtLink
          v-for="(item, i) in buttonNames"
          :key="i"
          :to="item.link"
          @click="isMenuOpen = false"
          class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>

    <Disclaimer class="mt-4" />
  </div>
</template>

<style scoped>
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
