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
  <section class="catalogue bg-[#f9f9f9] dark:bg-[#1a1a1a] p-6 rounded-sm shadow-md">
    <h2 class="catalogue-title text-mint-500!">Our products</h2>
    <div class="catalogue-container flex flex-wrap justify-between gap-y-8">
      <div
        v-for="item in items"
        :key="item.id"
        class="catalogue-item-container sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <ProductCard :item="item" />
      </div>
    </div>
  </section>
</template>
