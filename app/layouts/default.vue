<script setup lang="ts">
// const locale = useCookie('locale', { default: () => 'en' })
</script>

<template>
  <div class="flex flex-col min-h-screen h-full mx-auto justify-center items-center">
    <Header />
    <div class="content w-full flex flex-1">
      <div
        class="container flex w-full h-full max-w-[1150px] flex flex-col items-center px-2 sm:px-3 md:px-4 mx-auto"
      >
        <NuxtPage />
      </div>
    </div>
    <Footer />
  </div>
</template>
