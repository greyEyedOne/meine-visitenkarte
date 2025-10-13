<script setup>
const buttonNames = ["About me", "Meet my CV", "Portfolio", "Contacts", "Blog"];
</script>

<template>
  <div class="topbar justify-between flex mt-0 gap-4 w-full">
    <Button v-for="(name, index) in buttonNames" :key="index" :name="name" />
  </div>
</template>
