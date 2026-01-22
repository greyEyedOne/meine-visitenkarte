<script setup lang="ts">
// const locale = useCookie('locale', { default: () => 'en' })
</script>

<template>
  <div class="flex flex-col min-h-screen h-full mx-auto justify-center items-center">
    <Header />
    <div class="content w-full flex flex-1">
      <div class="container flex w-full h-full mx-6">
        <NuxtPage />
      </div>
    </div>
    <Footer />
  </div>
</template>
