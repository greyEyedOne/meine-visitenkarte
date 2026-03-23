<script setup lang="ts">
import Catalogue from '~/components/portfolio/Catalogue.vue'
</script>

<template>
  <div>
    <NuxtLink to="/portfolio" class="navigation mr-auto before:content-['<<'] before:mr-1">
      Back to portfolio</NuxtLink
    >
    <section id="case-details" class="max-w-5xl mx-auto py-16">
      <div class="space-y-10">
        <!-- Header -->
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">Responsive Product Grid</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Nuxt 4 · Vue 3 · TailwindCSS</p>

        <!-- Context -->
        <div
          class="space-y-3 grid [grid-template-areas:'title''description''demo'] sm:[grid-template-areas:'title_title''description_demo'] gap-x-6"
        >
          <h3 class="text-xl font-semibold [grid-area:title]">Context</h3>
          <p class="leading-relaxed text-base text-justify! [grid-area:description] self-center">
            This project demonstrates responsive layout engineering and theme system implementation
            within a realistic UI component. The goal was to build a stable product grid with
            light/dark mode support and predictable behaviour across all screen sizes.
            <NuxtLink
              class="block w-full mt-2 mb-2 curssor-pointer text-gray-200! hover:text-white!"
              to="#case-preview-card"
            >See below</NuxtLink
            >
          </p>
          <div
            class="overflow-hidden [grid-area:demo] rounded-md border border-gray-200 dark:border-gray-400 p-1 mb-auto max-w-[300px]"
          >
            <img
              class="rounded-md w-full h-auto object-fill object-center"
              src="/img/portfolio-cases/responsive-product-grid-demo.gif"
              alt="responsive product grid demonstration"
            />
          </div>
        </div>

        <!-- Goal -->
        <div class="space-y-3">
          <h3 class="text-xl font-semibold">Goal</h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Implement adaptive grid layout (1–5 columns)</li>
            <li>Maintain consistent 4:5 image ratio</li>
            <li>Prevent layout shift</li>
            <li>Support light/dark theme</li>
            <li>Keep clean and scalable component structure</li>
          </ul>
        </div>

        <!-- Key Decisions -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Key Decisions</h3>

          <div class="space-y-2">
            <h4 class="font-medium">Grid-first approach</h4>
            <p class="leading-relaxed">
              CSS Grid with controlled max-width container prevents ultra-wide stretching and
              preserves readability.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-medium">Stable image rendering</h4>
            <p class="leading-relaxed">
              Fixed 4:5 aspect ratio with
              <code
                class="px-1 py-0.5 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded text-sm"
              >object-fit: cover</code
              >
              ensures visual consistency regardless of content variations.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-medium">Resilience to imperfect data</h4>
            <p class="leading-relaxed">
              Line clamping, optional badges, and image fallback handling keep layout stable under
              real-world conditions.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-medium">Theme system</h4>
            <p class="leading-relaxed">
              Light and dark modes implemented via Tailwind theme configuration without duplicating
              components.
            </p>
          </div>
        </div>

        <!-- Implementation -->
        <div class="space-y-3">
          <h3 class="text-xl font-semibold">Implementation Highlights</h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Nuxt 4 with Composition API</li>
            <li>
              Reusable
              <code
                class="px-1 py-0.5 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded text-sm"
              >ProductCard</code
              >
              component
            </li>
            <li>Lazy-loaded images</li>
            <li>Hover interactions without layout shift</li>
            <li>Visual feedback for “Add to cart” interaction</li>
          </ul>
        </div>

        <!-- Outcome -->
        <div class="space-y-3">
          <h3 class="text-xl font-semibold">Outcome</h3>
          <p class="leading-relaxed">
            The result is a predictable, scalable UI system ready for API integration. The layout
            remains stable across five breakpoints and maintains visual consistency in both light
            and dark themes.
          </p>
        </div>
      </div>
    </section>
    <div id="case-preview-card">
      <Catalogue />
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: justify;
  font-size: medium;
  color: white !important;
  letter-spacing: 1px;
  font-weight: 200 !important;
}
</style>
