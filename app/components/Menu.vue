<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const buttonNames = [
  { title: 'Home', link: '/' },
  { title: 'About me', link: '/about' },
  { title: 'Portfolio', link: '/portfolio' },
  { title: "Let's talk", link: '/contacts', class: 'cta' },
  // { title: 'Blog', link: '/blog' },
]
</script>

<template>
  <!-- Top panel -->
  <div
    class="top-panel flex relative z-50 bg-transparent justify-between items-center w-full max-w-95/100 md:mb-6"
  >
    <NuxtLink to="/" class="logo-link">
      <div
        class="logo logo-mobile p-1 pt-0 h-full w-full border-2 border-solid border-white rounded-md"
      >
        <img
          src="/logo.png"
          class="h-8 dark:hidden shadow-grey-400 shadow-md mx-1 my-2"
          alt="logo light"
        />
        <img src="/logo-dark.png" class="h-8 hidden dark:block mx-1 my-2" alt="logo dark" />
      </div>
    </NuxtLink>

    <!-- Burger menu -->

    <button
      class="menu md:hidden cursor-pointer w-10 h-10 flex items-center justify-center rounded-xs dark:text-slate-300 dark:hover:text-slate-200 text-slate-700 hover:text-slate-600"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span v-if="!isMenuOpen">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Desktop menu -->
    <div class="menu hidden md:flex gap-2 w-full max-w-95/100 justify-end">
      <div v-for="(item, i) in buttonNames" :key="i" classs="menu-item relative">
        <NuxtLink
          :to="item.link"
          :class="[
            item.class,
            'menu-item absolute md:text-lg px-4 py-2 rounded-xs uppercase hover:text-black! dark:text-slate-300 dark:hover:text-white!',
          ]"
          :data-text="item.title"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
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
  width: auto !important;
  object-fit: contain;
  object-position: center;
}

.menu-item {
  font-weight: 100;
  position: relative;
  text-transform: lowercase;
  text-wrap: nowrap;
  transition: none;
}

.menu-item::before {
  content: attr(data-text);
  position: absolute;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: top 0.75s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  top: 0.5vw;
  transition: opacity 0.8s ease-in-out;
  filter: blur(2px);
}

.menu-item:hover::before {
  letter-spacing: 1px;
  opacity: 0.15;
  color: white;
  font-weight: bold;
  font-size: 2.5vw;
  z-index: 0;
  top: -0.15vw;
}

/* Inline | http://localhost:3000/ */

.menu-item {
  width: 130px !important;
  display: block;
  text-align: center;
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
  transform: scale(1.1);
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
  max-width: 122px;
  max-height: 122px;
  width: auto;
  height: 19vw;
  top: 0;
}

.cta {
  font-weight: 400;
  letter-spacing: 0.85px;
  font-style: normal;
  animation: glitchMove 2s infinite ease-in-out alternate;
}
</style>
