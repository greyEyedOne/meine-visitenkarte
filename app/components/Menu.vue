<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const buttonNames = [
  { title: 'Home', link: '/' },
  { title: 'About me', link: '/about' },
  { title: 'Meet my CV', link: '/cv' },
  { title: 'Portfolio', link: '/portfolio' },
  { title: "Let's talk", link: '/contacts', class: 'cta dark:text-lime-600 text-green-800' },
  { title: 'Blog', link: '/blog' },
]
</script>

<template>
  <!-- Top panel -->
  <div
    class="flex relative z-50 bg-transparent justify-between items-center w-full max-w-95/100 mb-6 min-h-17 sm:min-h-20 md:min-h-22"
  >
    <NuxtLink to="/" class="logo-link">
      <div
        class="logo logo-mobile p-1 pt-0 h-full w-full border-2 border-solid border-white rounded-md"
      >
        <img
          src="/logo-dark.png"
          class="h-8 dark:hidden shadow-grey-400 -top-1 shadow-md scale-x-115%"
          alt="logo light"
        />
        <img src="/logo.png" class="h-8 hidden dark:block -top-2 scale-x-115%" alt="logo dark" />
      </div>
    </NuxtLink>

    <!-- Burger menu -->

    <button
      class="menu md:hidden cursor-pointer w-10 h-10 flex items-center justify-center rounded-xs dark:text-white text-black"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span v-if="!isMenuOpen">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Desktop menu -->
    <div class="hidden md:flex gap-2 w-full max-w-95/100 justify-end">
      <NuxtLink
        v-for="(item, i) in buttonNames"
        :key="i"
        :to="item.link"
        :class="[
          item.class,
          'menu-item px-4 py-2 rounded-xs text-black uppercase dark:text-white hover:opacity-80',
        ]"
        :data-text="item.title"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>

  <!-- Shadowing + menu animation -->
  <div
    v-if="isMenuOpen"
    class="menu-mobile fixed inset-0 z-40 bg-black/50 flex justify-center"
    @click="isMenuOpen = false"
  >
    <div
      class="menu-mobile-content absolute top-10 w-11/12 max-w-sm bg-white dark:bg-gray-900 rounded-xs shadow-lg flex flex-col text-center z-50 animate-slideDown"
      @click.stop
    >
      <NuxtLink
        v-for="(item, i) in buttonNames"
        :key="i"
        :to="item.link"
        class="px-3 py-3 border-b border-gray-200 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        @click="isMenuOpen = false"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.logo,
.logo img {
  width: 30px;
  height: 30px;
  border: none;
  box-sizing: content-box;
}

.logo img {
  border-radius: 6px;
  transform: scaleX(110%);
  position: absolute;
  margin-left: 2.5rem;
  width: auto !important;
}

.menu-item {
  font-size: 2vw;
  font-weight: 100;
  position: relative;
  text-transform: lowercase;
  text-wrap: nowrap;
  transition: all 0.25s ease-in-out;
}

.menu-item:hover {
  color: var(--color-amber-500);
}

.menu-item::before {
  content: attr(data-text);
  position: absolute;
  color: lightblue;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: top 0.75s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  top: 0.5vw;
  transition: opacity 0.8s ease-in-out;
}

.menu-item:hover::before {
  letter-spacing: 1px;
  opacity: 0.15;
  font-weight: bold;
  font-size: 2.5vw;
  z-index: 0;
  top: -0.5vw;
}

.container {
  padding: 1rem;
}

button.menu span {
  font-size: 3rem;
  margin-bottom: auto;
  line-height: 2.7rem;
}

button.menu {
  margin-bottom: auto;
  margin-right: 0.5rem;
}

.logo img:hover {
  transform: rotateY(-3deg);
}

.logo img {
  transition: all 1s ease-in-out;
}

.container.flex.w-full.h-full {
  padding: 1rem;
}

button.menu span {
  font-size: 3rem;
  margin-bottom: auto;
  line-height: 2.7rem;
}

button.menu {
  margin-bottom: auto;
  margin-right: 0.5rem;
}

/* .menu-mobile-content a {
  box-shadow:
    rgba(255, 26, 26, 0.636) 0px 10px 15px -3px,
    rgb(61, 124, 43) 0px 4px 6px -4px;
} */

.logo,
.logo img {
  min-width: 30px;
  min-height: 30px;
  max-width: 132px;
  max-height: 132px;
  width: auto;
  height: 17vw;
  top: 0;
}

.cta {
  font-weight: 400;
  letter-spacing: 0.85px;
  font-style: normal;
  animation: glitchMove 2s infinite ease-in-out alternate;
}
</style>
