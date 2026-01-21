<script setup>
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
  <link rel="preload" as="image" href="/img/bg-ready-project.png" />
  <main
    class="mx-auto pb-6 h-screen w-screen dark:bg-gray-900 bg-[url('/img/bg-template.png')] dark:bg-[url('/img/bg-dark-template.png')] bg-center bg-no-repeat bg-cover transition-all delay-150 duration-300 ease-in-out"
  >
    <div class="backdrop-blur-sm min-h-screen w-full">
      <NuxtLayout />
    </div>
  </main>
</template>

<style>
@property --angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0deg;
}

@font-face {
  font-family: 'Luckiest Guy';
  src:
    url('/fonts/Luckiest_Guy/luckiestguy-regular-webfont.woff2') format('woff2'),
    url('/fonts/Luckiest_Guy/luckiestguy-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'sansationregular';
  src:
    url('/fonts/sansation/sansation-regular-webfont.woff2') format('woff2'),
    url('/fonts/sansation/sansation-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'sansation_lightlight';
  src:
    url('/fonts/sansation/sansation-light-webfont.woff2') format('woff2'),
    url('/fonts/sansation/sansation-light-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'sansationbold';
  src:
    url('/fonts/sansation/sansation-bold-webfont.woff2') format('woff2'),
    url('/fonts/sansation/sansation-bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
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
  font-family: 'sansationbold';
  font-style: normal;
  font-size: clamp(2.25rem, 9vw, 3.25rem);
  line-height: 1.15;
  letter-spacing: 2.5px;
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

.menu-item {
  font-family: sansation_lightlight;
  letter-spacing: 1px;
  font-variant: all-petite-caps;
}

footer .legals a {
  font-family: sansationregular;
  letter-spacing: 1px;
  font-size: small;
}

.about {
  font-size: small;
}

footer button {
  cursor: pointer;
  font-size: small;
}

.container {
  row-gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
}

.content p {
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.content {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  /* font-size: clamp(2.25rem, 9vw, 3.25rem); */
  font-size: clamp(2.25rem, 5vw, 4rem);
  margin-top: 5vh;
  margin-bottom: 4vh;
}

/* Inline | http://localhost:3000/ */

h1 span {
  font-size: clamp(1.25rem, 4.5vw, 1.75rem);
}

/* Inline | http://localhost:3000/ */

.content p {
  font-size: clamp(1.25rem, 1.7vw, 1.75rem);
  font-weight: 100;
}

@media (orientation: landscape) {
  .top-panel {
    margin-bottom: 1vh;
  }

  .logo,
  .logo img {
    height: 17vh !important;
  }
}
</style>
