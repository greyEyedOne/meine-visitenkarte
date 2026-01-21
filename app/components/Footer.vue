<template>
  <footer class="mt-auto">
    <div class="flex flex-col items-center justify-center p-4">
      <div
        class="legals flex flex-wrap justify-center items-center gap-2 dark:text-gray-300 text-gray-600 text-base"
      >
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/contacts" class="cta relative italic font-bold"
        >Let's discuss your task</NuxtLink
        >
        | <NuxtLink to="/en/privacy-policy">Privacy Policy</NuxtLink> |
        <NuxtLink to="/en/imprint">Imprint</NuxtLink> |
        <button onclick="klaro.show()">Cookie settings</button>
      </div>
      <p class="about text-center my-2 font-thin">
        Operating as a freelance software developer in Germany. <br />Based in Hamburg, Germany ·
        CET Time Zone (UTC+1)
      </p>
      <div class="text-gray-400 text-xs font-thin text-center mb-2">Made by Dara Appel, 2025</div>
    </div>
  </footer>
</template>
