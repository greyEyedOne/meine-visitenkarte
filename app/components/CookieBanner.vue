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
  <div role="dialog" aria-live="polite" class="cookie-banner">
    <p>
      {{ text }}
    </p>

    <div class="cookie-actions">
      <button type="button" @click="emit('accept')">
        {{ acceptLabel }}
      </button>

      <button type="button" @click="emit('reject')">
        {{ rejectLabel }}
      </button>
    </div>

    <a :href="policyLink">
      {{ policyLabel }}
    </a>
  </div>
</template>
<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0 !important;
  margin-top: 20px !important;
  background: white;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid aliceblue;
  border-radius: 10px;
}

.cookie-actions button {
  margin: 1rem 0;
  background: #efefef55;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.cookie-banner a {
  font-size: smaller;
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
}
</style>
