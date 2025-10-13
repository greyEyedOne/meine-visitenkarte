<script setup>
const buttonNames = [
  { title: "About me", link: "/about" },
  { title: "Meet my CV", link: "/cv" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Contacts", link: "/contacts" },
  { title: "Blog", link: "/blog" },
];
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="topbar justify-between flex mt-0 gap-4 w-full">
      <NuxtLink
        v-for="(item, index) in buttonNames"
        :key="index"
        :to="item.link"
        class="flex flex-1 rounded-md bg-black hover:bg-gray-600 dark:bg-white text-white dark:text-black dark:hover:text-white px-4 py-2"
        ><Button :name="item.title"
      /></NuxtLink>
    </div>
    <Disclaimer />
  </div>
</template>
