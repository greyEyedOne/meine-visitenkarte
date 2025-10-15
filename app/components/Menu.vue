<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const buttonNames = [
  { title: 'Home', link: '/' },
  { title: 'About me', link: '/about' },
  { title: 'Meet my CV', link: '/cv' },
  { title: 'Portfolio', link: '/portfolio' },
  { title: 'Contacts', link: '/contacts' },
  { title: 'Blog', link: '/blog' },
]
</script>

<template>
  <!-- Top panel -->
  <div
    class="flex relative z-50 bg-black dark:bg-white justify-between items-center w-full"
  >
    <!-- Burger menu -->
    <button
      class="md:hidden w-10 h-10 flex items-center justify-center rounded-xs bg-black dark:bg-white text-white dark:text-black"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span v-if="!isMenuOpen">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Desktop menu -->
    <div class="hidden md:flex gap-2 w-full justify-center">
      <NuxtLink
        v-for="(item, i) in buttonNames"
        :key="i"
        :to="item.link"
        class="menu-item px-4 py-2 rounded-xs bg-black text-white uppercase dark:bg-white dark:text-black hover:opacity-80"
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
      class="absolute top-10 w-11/12 max-w-sm bg-white dark:bg-gray-900 rounded-xs shadow-lg flex flex-col text-center z-50 animate-slideDown"
      @click.stop
    >
      <NuxtLink
        v-for="(item, i) in buttonNames"
        :key="i"
        :to="item.link"
        class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        @click="isMenuOpen = false"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>
