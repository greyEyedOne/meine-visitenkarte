<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="catalogue-item h-full shadow-xs hover:shadow-md flex sm:flex-col rounded-xs m-3 p-3 bg-white dark:bg-gray-900 transition-shadow duration-300"
  >
    <div class="item-image">
      <div
        class="image-container overflow-hidden mx-auto flex items-center justify-center rounded-xl"
      >
        <img
          class="product-image h-full w-full object-cover object-center"
          :src="item.imageUrl"
          :alt="item.name"
        />
      </div>
      <div class="photo-credit text-xs text-gray-500">
        Photo by
        <a class="text-gray-900! dark:text-gray-400!" :href="item.photoCredit.photographerLink">{{
          item.photoCredit.photographer
        }}</a>
        on
        <a class="text-gray-900! dark:text-gray-400!" :href="item.photoCredit.sourceLink">{{
          item.photoCredit.source
        }}</a>
      </div>
    </div>
    <div class="item-description flex flex-col gap-2 mt-4">
      <h3 class="product-name text-lg font-bold text-gray-900! dark:text-gray-100!">
        {{ item.name }}
      </h3>
      <p
        class="product-description line-clamp-2 text-sm! text-justify! text-gray-700! dark:text-gray-300! m-0!"
      >
        {{ item.description }}
      </p>
      <div class="product-price flex gap-2 mt-auto justify-end">
        <span class="price-primary font-bold">{{ item.pricePrimary }}</span
        ><span class="price-reduced font-light line-through">{{ item.priceReduced }}</span
        ><span class="price-recommended line-through">{{ item.priceRecommended }}</span>
      </div>
      <button
        class="bg-[#f88c6d] text-white p-3 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
<style>
.catalogue-item:hover img {
  scale: 1.03;
}

.product-image {
  transition: all 0.5s ease-in-out;
  aspect-ratio: calc(4 / 5);
}

.photo-credit {
  position: absolute;
  top: -2rem;
  background: #fff;
  display: block;
  width: 100%;
  padding: 0.25rem 0.5rem;
  opacity: 0;
  transition: all 0.5s ease-in-out !important;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.item-image {
  position: relative;
  overflow: hidden;
}

.item-image:hover .photo-credit {
  opacity: 0.9;
  top: 0;
}

.item-description {
  flex: 1 1 0%;
}
</style>
