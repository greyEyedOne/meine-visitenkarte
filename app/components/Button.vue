<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    class="flex-1 rounded-md bg-black hover:bg-gray-600 dark:bg-white text-white dark:text-black dark:hover:text-white px-4 py-2"
  >
    {{ name }}
  </button>
</template>
