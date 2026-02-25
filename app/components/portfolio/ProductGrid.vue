<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="catalogue-container grid justify-between">
    <div v-for="item in items" :key="item.id" class="catalogue-item-container">
      <ProductCard :item="item" />
    </div>
  </div>
</template>
<style>
.catalogue {
  /* --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1440px; */
  --gap-mobile: 1rem;
  --gap-desktop: 1.5rem;
}

.catalogue-container {
  grid-template-columns: ifr;
  gap: var(--gap-mobile);
}

.catalogue-item-container {
  flex-basis: 100%;
}

@media (min-width: 480px) {
  .catalogue-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .catalogue-item-container {
    flex-basis: calc(50% - var(--gap-mobile));
  }
}
@media (min-width: 768px) {
  .catalogue-container {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-mobile);
  }
  .catalogue-item-container {
    flex-basis: calc(33.3% - var(--gap-mobile));
  }
}
@media (min-width: 1024px) {
  .catalogue-container {
    grid-template-columns: repeat(4, 1fr);
  }

  .catalogue-item-container {
    flex-basis: calc(25% - var(--gap-desktop));
  }
}
@media (min-width: 1440px) {
  .catalogue-container {
    grid-template-columns: repeat(5, 1fr);
  }

  .catalogue-item-container {
    flex-basis: calc(20% - var(--gap-desktop));
  }
}
</style>
