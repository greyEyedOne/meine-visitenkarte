<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="flex-1">
    {{ name }}
  </button>
</template>
