<script setup lang="ts">
defineProps<{
  text: string
  acceptLabel: string
  rejectLabel: string
  policyLink: string
  policyLabel: string
}>()

const emit = defineEmits<{
  (e: 'accept' | 'reject'): void
}>()
</script>

<template>
  <div
    role="dialog"
    aria-live="polite"
    class="cookie-banner sticky bottom-0 !mt-5 m-4 p-4 bg-white dark:bg-gray-800 border dark:border-orange-50 rounded-[10px] shadow-lg"
  >
    <p class="text-black dark:text-white">
      {{ text }}
    </p>

    <div class="cookie-actions flex gap-4">
      <button
        type="button"
        class="bg-green-50 dark:bg-green-900 text-black dark:text-white opacity-100 my-4 px-4 py-2 rounded cursor-pointer"
        @click="emit('accept')"
      >
        {{ acceptLabel }}
      </button>

      <button
        type="button"
        class="bg-red-50 dark:bg-red-900 text-black dark:text-white opacity-100 my-4 px-4 py-2 rounded cursor-pointer"
        @click="emit('reject')"
      >
        {{ rejectLabel }}
      </button>
    </div>

    <a :href="policyLink" class="text-sm underline decoration-[0.5px]">
      {{ policyLabel }}
    </a>
  </div>
</template>
