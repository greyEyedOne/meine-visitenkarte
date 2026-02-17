<script setup>
const catalogueItems = [
  {
    id: 1,
    name: 'a Creme',
    description: 'It makes your skin soft and smooth and young. Just try it!',
    pricePrimary: '€12.99',
    priceReduced: '€11.99',
    priceRecommended: '',
    imageUrl: '/img/catalogue/nataliya-melnychuk-PdzMmdHqN2c-unsplash(1).jpg',
    photoCredit: {
      photographer: 'Nataliya Melnychuk',
      photographerLink:
        'https://unsplash.com/@natinati?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink:
        'https://unsplash.com/photos/orange-plastic-bottle-beside-orange-plastic-bottle-PdzMmdHqN2c',
    },
  },

  {
    id: 2,
    name: 'Wireless Headphones',
    description:
      'Minimalist wireless headphones with clear sound and comfortable ear cushions. Perfect for work and travel.',
    pricePrimary: '€89.00',
    priceReduced: '',
    priceRecommended: '€99.00',
    imageUrl: '/img/catalogue/c-d-x-PDX_a_82obo-unsplash.jpg',
    photoCredit: {
      photographer: 'C D-X',
      photographerLink:
        'https://unsplash.com/@cdx2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink:
        'https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo',
    },
  },

  {
    id: 3,
    name: 'Sun Di Gioia Perfume',
    description:
      'A warm and sunny fragrance with soft floral notes. Ideal for everyday wear and special moments.',
    pricePrimary: '€64.50',
    priceReduced: '€59.90',
    priceRecommended: '',
    imageUrl: '/img/catalogue/karly-jones-4i9ef6xU738-unsplash.jpg',
    photoCredit: {
      photographer: 'Karly Jones',
      photographerLink:
        'https://unsplash.com/@earthtokarly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink: 'https://unsplash.com/photos/sun-di-gioia-bottle-4i9ef6xU738',
    },
  },

  {
    id: 4,
    name: 'Specialty Coffee Beans',
    description:
      'Freshly roasted coffee beans with a rich aroma and smooth taste. Perfect for espresso lovers.',
    pricePrimary: '€14.90',
    priceReduced: '',
    priceRecommended: '€16.50',
    imageUrl: '/img/catalogue/battlecreek-coffee-roasters-rsnzc-8dVs0-unsplash.jpg',
    photoCredit: {
      photographer: 'Battlecreek Coffee Roasters',
      photographerLink:
        'https://unsplash.com/@battlecreekcoffeeroasters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink: 'https://unsplash.com/photos/battercreek-coffee-pack-rsnzc-8dVs0',
    },
  },

  {
    id: 5,
    name: 'Wooden Bar Stool',
    description:
      'Elegant wooden bar stool with a natural finish. Fits perfectly into modern and classic interiors.',
    pricePrimary: '€129.00',
    priceReduced: '',
    priceRecommended: '',
    imageUrl: '/img/catalogue/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg',
    photoCredit: {
      photographer: 'Ruslan Bardash',
      photographerLink:
        'https://unsplash.com/@ruslanbardash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink: 'https://unsplash.com/photos/beige-wooden-bar-stool-4kTbAMRAHtQ',
    },
  },

  {
    id: 6,
    name: 'Studio Headphones',
    description:
      'Professional over-ear headphones with deep bass and precise sound. Designed for long listening sessions.',
    pricePrimary: '€149.00',
    priceReduced: '€139.00',
    priceRecommended: '',
    imageUrl: '/img/catalogue/kiran-ck-LSNJ-pltdu8-unsplash.jpg',
    photoCredit: {
      photographer: 'Kiran CK',
      photographerLink:
        'https://unsplash.com/@kiranck123?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink:
        'https://unsplash.com/photos/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8',
    },
  },

  {
    id: 7,
    name: 'Organic Hair Spray',
    description:
      'Lightweight organic hair spray that keeps your style natural and flexible without stiffness.',
    pricePrimary: '€18.50',
    priceReduced: '',
    priceRecommended: '',
    imageUrl: '/img/catalogue/mitzie-organics-dnstpPqCBbw-unsplash.jpg',
    photoCredit: {
      photographer: 'Mitzie Organics',
      photographerLink:
        'https://unsplash.com/@mitzie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink: 'https://unsplash.com/photos/black-mitzie-spray-bottle-near-window-dnstpPqCBbw',
    },
  },

  {
    id: 8,
    name: 'Leather Backpack',
    description:
      'Stylish leather backpack with enough space for everyday essentials. Durable and timeless design.',
    pricePrimary: '€179.00',
    priceReduced: '',
    priceRecommended: '€199.00',
    imageUrl: '/img/catalogue/jakob-owens-O_bhy3TnSYU-unsplash(1).jpg',
    photoCredit: {
      photographer: 'Jakob Owens',
      photographerLink:
        'https://unsplash.com/@jakobowens1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink:
        'https://unsplash.com/photos/person-holding-black-and-brown-vinta-backpack-O_bhy3TnSYU',
    },
  },

  {
    id: 9,
    name: 'Floral Heels',
    description:
      'Elegant floral heels with a comfortable fit. A perfect accent for summer outfits and events.',
    pricePrimary: '€74.00',
    priceReduced: '€69.00',
    priceRecommended: '',
    imageUrl: '/img/catalogue/mohammad-metri-E-0ON3VGrBc-unsplash.jpg',
    photoCredit: {
      photographer: 'Mohammad Metri',
      photographerLink:
        'https://unsplash.com/@mohammadmetri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceLink:
        'https://unsplash.com/photos/pair-of-blue-and-pink-floral-almond-toe-pumps-E-0ON3VGrBc',
    },
  },
]
</script>

<template>
  <section class="catalogue bg-[#f9f9f9] dark:bg-[#1a1a1a] p-6 rounded-sm shadow-md">
    <h2 class="catalogue-title">Our products</h2>
    <div class="catalogue-container flex flex-wrap justify-between gap-y-8">
      <div
        v-for="item in catalogueItems"
        :key="item.id"
        class="catalogue-item flex sm:flex-col gap-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div class="item-image">
          <div
            class="image-container w-[250px] h-[250px] overflow-hidden mx-auto flex items-center justify-center"
          >
            <img
              class="product-image h-full w-full object-cover object-center"
              :src="item.imageUrl"
              :alt="item.name"
            />
          </div>
          <div class="photo-credit text-xs text-gray-500 mt-1">
            Photo by
            <a :href="item.photoCredit.photographerLink">{{ item.photoCredit.photographer }}</a>
            on
            <a :href="item.photoCredit.sourceLink">{{ item.photoCredit.source }}</a>
          </div>
        </div>
        <div class="item-description">
          <h3 class="product-name">{{ item.name }}</h3>
          <p class="product-description">
            {{ item.description }}
          </p>
          <div class="product-price flex gap-2">
            <span class="price-primary">{{ item.pricePrimary }}</span
            ><span class="price-reduced line-through">{{ item.priceReduced }}</span
            ><span class="price-recommended line-through">{{ item.priceRecommended }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
