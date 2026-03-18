<script setup>
useHead({
  title: 'Freelance Frontend Support & UI Refactoring Specialist in Hamburg',
  meta: [
    {
      name: 'description',
      content:
        'Marina Appel is a Freelance Frontend Support & UI Refactoring Specialist in Hamburg working with JavaScript, Vue, Nuxt, React and Tailwind. Available for B2B freelance and project-based frontend work.',
    },
  ],
})
</script>

<template>
  <div class="flex flex-col">
    <h1 class="uppercase mb-4 dark:text-sky-50">
      Marina Appel - Freelance Frontend Support and UI Refactoring
    </h1>

    <p>
      I work with existing products and websites that need care: improving UI, usability and
      structure so businesses and teams can move forward with confidence.
      <NuxtLink to="/website-redesign-germany" class="underline ml-1">
        Learn more about my frontend support services.
      </NuxtLink>
    </p>
    <p>JavaScript · React · Vue · Nuxt · Tailwind</p>
    <ConnectButton />
  </div>
</template>
