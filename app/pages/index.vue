<script setup>
useHead({
  title: 'Frontend Developer in Hamburg',
  meta: [
    {
      name: 'description',
      content:
        'Marina Appel is a Frontend Developer in Hamburg working with Vue, Nuxt and Tailwind. Freelance and contract projects.',
    },
  ],
})
</script>

<template>
  <div class="flex flex-col">
    <h1 class="uppercase mb-4 dark:text-sky-50">
      Marina Appel – Your Websmith
      <span class="w-full block font-sans text-lg">Frontend Developer in Hamburg</span>
    </h1>

    <p class="dark:text-sky-100">
      I build modern, accessible and performance-focused web interfaces using React, Vue.js, Nuxt 4
      and Tailwind CSS <br />
      Bridging the gap between your ideas and a live website, together
    </p>
    <ConnectButton />
  </div>
</template>
