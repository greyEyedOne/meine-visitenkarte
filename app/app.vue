<script setup>
useHead({
  titleTemplate: (title) =>
    title ? `${title} · Marina Appel` : 'Marina Appel – Frontend Developer in Hamburg',
  meta: [
    {
      name: 'description',
      content:
        'Frontend Developer based in Hamburg. React, Vue 3, Nuxt 4, Tailwind CSS, modern JavaScript. Available for freelance and contract work.',
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
    class="mx-auto min-h-screen w-screen max-w-full transition-all delay-150 duration-300 ease-in-out"
  >
    <NuxtLayout />
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

/* html {
  scroll-snap-type: y mandatory;
}

header,
section {
  scroll-snap-align: start;
} */

body {
  overflow-x: clip;
}

main {
  transition: all 0.25s ease-in-out;
}

@layer base {
  body {
    background-image:
      radial-gradient(
        at 19.986% 24.585851378407796%,
        hsl(352.8, 87.7%, 68.2%) 0%,
        hsla(352.8169014084507, 87.65432098765434%, 68.23529411764706%, 0) 100%
      ),
      radial-gradient(
        at 1.9567786171107215% 11.616934065844164%,
        hsl(13.8, 91.1%, 69.2%) 0%,
        hsla(13.846153846153845, 91.08280254777071%, 69.2156862745098%, 0) 100%
      ),
      radial-gradient(
        at 70.02698980899875% 17.192069800390964%,
        hsl(31.4, 95%, 68.4%) 0%,
        hsla(31.372549019607845, 95.0310559006211%, 68.43137254901961%, 0) 100%
      ),
      radial-gradient(
        at 9.306259907358683% 56.817884560584496%,
        hsl(52.4, 87.7%, 68.2%) 0%,
        hsla(52.39436619718308, 87.65432098765434%, 68.23529411764706%, 0) 100%
      ),
      radial-gradient(
        at 97.60926234403912% 12.459315402253834%,
        hsl(352.8, 87.7%, 68.2%) 0%,
        hsla(352.8169014084507, 87.65432098765434%, 68.23529411764706%, 0) 100%
      );
  }
}

h1,
h2,
h3,
p,
.menu-item,
.content a,
.content li,
footer .legals,
footer .made-by {
  color: #f8f1f2 !important;
}

h1 {
  font-family: 'sansationbold';
  font-style: normal;
  font-size: clamp(2.25rem, 9vw, 3.25rem);
  line-height: 1.15;
  letter-spacing: 2.5px;
  color: #c4866f;
}

.logo img {
  box-shadow: none !important;
  opacity: 0.9;
}

.container {
  padding: 1rem;
  max-width: 1150px;
  margin-inline: 1rem;
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

footer .legals a:hover,
footer .legals button:hover {
  color: white;
}

.about {
  font-size: small;
}

footer button {
  cursor: pointer;
  font-size: small;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin-inline: auto;
}

.content > .container {
  margin-top: 4vh;
  margin-bottom: 4vh;
}

.content p {
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

h1 {
  text-align: center;
  font-size: clamp(2.25rem, 5vw, 4rem);
  margin-top: 2vh;
  margin-bottom: 4vh;
}

h1 span {
  font-size: clamp(1.25rem, 4.5vw, 1.75rem);
}

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

@media (prefers-color-scheme: dark) {
  header {
    background: linear-gradient(180deg, #172250 5%, #1f2b5d 86%);
  }

  .content {
    background: linear-gradient(
      180deg,
      #1f2b5d 6%,
      #866997 63%,
      #ee8062 89%,
      #da4e40 95%,
      #6d364c 99%
    );
  }

  footer {
    background: linear-gradient(180deg, #573044 4%, #321622 25%, #0a0710 90%);
  }
}
</style>
