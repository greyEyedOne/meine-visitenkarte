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
    class="catalogue-item gap-2 h-full shadow-xs hover:shadow-md flex flex-col rounded-md p-3 bg-white dark:bg-transparent dark:shadow-none dark:border dark:border-solid dark:border-pink-900 dark:hover:border-red-300 transition-all duration-300"
  >
    <div class="item-image mt-auto mb-auto relative overflow-hidden rounded-xl">
      <div class="badges absolute top-1 right-1 z-10">
        <div
          v-for="badge in item.badges"
          :key="badge"
          class="badge text-sm inline-block mx-1 py-1 px-2 bg-[#0a0] leading-[1.1] rounded-[5px] uppercase text-white"
        >
          {{ badge }}
        </div>
      </div>
      <div
        class="image-container overflow-hidden mx-auto flex items-center justify-center rounded-xl"
      >
        <img
          class="product-image h-full w-full object-cover object-center transition-all duration-500 ease-in-out aspect-[4/5] text-transparent"
          :src="item.imageUrl"
          :alt="item.name"
        />
      </div>
      <div
        class="photo-credit text-xs text-gray-500 absolute -top-8 bg-white block w-full py-1 px-2 opacity-0 transition-all duration-500 ease-in-out !important rounded-t-xl z-15"
      >
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
    <div class="item-description flex flex-1 flex-col gap-2">
      <h3 class="product-name line-clamp-2 text-lg font-bold text-gray-900! dark:text-gray-100!">
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
        class="bg-[#f88c6d] text-white p-3 rounded-full flex items-center justify-center shadow-lg transform transition-all pointer duration-300 hover:bg-[#da4d25] focus:outline-none"
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

.item-image:hover .photo-credit {
  opacity: 0.9;
  top: 0;
}
</style>
