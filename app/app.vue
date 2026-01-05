<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
useHead({
  titleTemplate: (title) =>
    title ? `${title} · Dara Appel` : 'Dara Appel – Frontend Developer in Hamburg',
  meta: [
    {
      name: 'description',
      content:
        'Frontend Developer based in Hamburg. Vue 3, Nuxt 4, Tailwind CSS, modern JavaScript. Available for freelance and contract work.',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <main
    class="mx-auto pb-6 h-screen w-screen dark:bg-gray-900 bg-[url('/img/bg-template.png')] dark:bg-[url('/img/bg-dark-template.png')] bg-center bg-no-repeat bg-cover transition-all delay-150 duration-300 ease-in-out"
  >
    <div class="backdrop-blur-sm min-h-screen w-full">
      <NuxtLayout />
    </div>
  </main>
  <SpeedInsights />
</template>

<style>
@property --angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0deg;
}

body {
  overflow-x: clip;
}

main {
  transition: all 0.25s ease-in-out;
}

main:has(.connect:hover) {
  background-image: url('/img/bg-ready-project.png');
}

main:has(.connect:hover) .card {
  background: #cbd5e1c5;
  color: #312e81;
}

main:has(.connect:hover) .menu-item {
  color: ghostwhite;
}

main:has(.connect:hover) .card h1,
main:has(.connect:hover) .card h2,
main:has(.connect:hover) .card p {
  color: #312e81;
}

main:has(.connect:hover) .disclaimer {
  color: aqua;
}

body:has(.connect:hover),
body:has(.connect:hover) footer .legals {
  color: ghostwhite !important;
}

h1 {
  font-family: 'Luckiest Guy';
  font-weight: 400;
  font-style: normal;
  font-size: clamp(2.5rem, 11vw, 4rem);
  line-height: 1.15;
}

.logo img {
  box-shadow: none !important;
}

.container {
  padding: 1rem;
}

.menu-mobile > div {
  z-index: 1000;
  opacity: 0.95;
}

.logo-link {
  z-index: 50;
  position: relative;
}

.menu-mobile {
  z-index: 1000;
}

@keyframes glitchMove {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.5;
  }
  25% {
    transform: translate(0.5px, -0.5px);
    opacity: 0.7;
  }
  50% {
    transform: translate(-0.5px, 0.5px);
    opacity: 0.8;
  }
  75% {
    transform: translate(1px, -0.5px);
    opacity: 0.6;
  }
}

.connect {
  position: relative;
}
.connect::after,
.connect::before {
  border-radius: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  --angle: 0deg;
  background-image: conic-gradient(from var(--angle), #ffff0050, #00ffff50, #ff00ff50, #ffff0050);
  animation: borderAnimation 5s linear infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1 !important;
  padding: 1px;
  box-sizing: unset;
}

@media (prefers-color-scheme: dark) {
  .connect::after,
  .connect::before {
    background-image: conic-gradient(
      from var(--angle),
      #ffff00aa,
      #00ffffaa,
      #ff00ffaa,
      #ffff00aa
    ) !important;
  }
}

.connect::after {
  filter: blur(8px);
}

@keyframes borderAnimation {
  to {
    --angle: 360deg;
  }
}
</style>
