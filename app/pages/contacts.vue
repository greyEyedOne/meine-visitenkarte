<template>
  <div class="contact-data flex flex-col gap-4 mt-6 text-gray-600 dark:text-white">
    <h1 class="text-2xl">Contacts</h1>
    <div class="flex flex-col text-lg gap-1">
      <p class="e-mail underline">
        <NuxtLink to="mailto:info@your-websmith.de" class="hover:text-black! dark:hover:text-white!"
        >info@your-websmith.de</NuxtLink
        >
      </p>
      <p class="linkedin underline">
        <NuxtLink
          to="https://www.linkedin.com/in/marina-appel/"
          class="hover:text-black! dark:hover:text-white!"
        >linkedin.com/in/marina-appel</NuxtLink
        >
      </p>
      <br />
      <p>No spam, no sales funnels. Just a conversation.</p>
      <p>I usually reply within 1–2 working days.</p>
    </div>
  </div>
</template>
