<script setup lang="ts">
import Catalogue from '~/components/portfolio/Catalogue.vue'
</script>

<template>
  <div>
    <NuxtLink to="/portfolio" class="navigation mr-auto before:content-['<<'] before:mr-1">
      Back to portfolio</NuxtLink
    >
    <div class="case-preview-card">
      <Catalogue />
    </div>
  </div>
</template>
