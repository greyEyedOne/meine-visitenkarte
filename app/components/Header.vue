<template>
  <div class="relative w-full">
    <Menu />

    <Disclaimer class="mt-4" />
  </div>
</template>

<style>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideDown {
  animation: slideDown 0.25s ease-out;
}
</style>
