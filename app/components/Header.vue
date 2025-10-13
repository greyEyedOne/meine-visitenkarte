<script setup>
const buttonNames = ["About me", "Meet my CV", "Portfolio", "Contacts", "Blog"];
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="topbar justify-between flex mt-0 gap-4 w-full">
      <Button v-for="(name, index) in buttonNames" :key="index" :name="name" />
    </div>
    <div class="disclaimer mt-2 text-center text-red-300 w-full">
      Dear visitors, <br />
      the site is currently under development.<br />
      <span class="underline">
        <NuxtLink to="/contacts">Let's stay in touch</NuxtLink>
      </span>
    </div>
  </div>
</template>
