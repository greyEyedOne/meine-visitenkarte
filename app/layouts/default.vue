<script setup lang="ts">
// const locale = useCookie('locale', { default: () => 'en' })
</script>

<template>
  <div>
    <div
      class="flex flex-col min-h-screen h-full max-w-[1150px] mx-auto justify-center items-center"
    >
      <Header />
      <div class="container flex w-full max-w-95/100 h-full mx-6">
        <NuxtPage />
      </div>
      <Footer />
    </div>
  </div>
</template>
