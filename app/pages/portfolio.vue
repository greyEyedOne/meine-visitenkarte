<script setup>
const recommendations = [
  {
    name: 'Roman',
    position: 'RB Lab DOO CEO',
    quote:
      'I recommend Marina Appel, whom I supervised for one year at RBLab, primarily on the Nunami client project. She consistently demonstrated maturity and reliability in frontend and software engineering, thoroughly understanding problems before implementing stable, well-considered solutions. Her work included UI improvements for landing pages, maintaining frontend components, and investigating CTR and redirect issues in affiliate networks. Marina works confidently within existing systems, respects constraints, and takes clear ownership without requiring constant supervision. I confidently recommend Marina for roles valuing reliability, maturity, and professional independence.',
    proofText: 'See on Malt',
    proofLink: 'https://en.malt.de/profile/daraappel',
  },
  {
    name: 'Sergey',
    position: 'Co-Founder & Chief Technology Officer at NUNAMI (formerly Recova)',
    quote:
      'I worked with Marina from June 2023 to October 2024. She consistently demonstrated strong attention to detail, respect for deadlines, and the ability to work independently. She also suggested several valuable improvements, especially on the frontend, which helped improve the product and overall customer feedback.',
    proofText: 'See on LinkedIn',
    proofLink: 'https://www.linkedin.com/in/marina-appel/details/recommendations/',
  },
  {
    name: 'Szymon',
    position: 'Former direct manager at NUNAMI',
    quote:
      'I had the pleasure of working with Marina as a Junior Software Developer. She consistently delivered high-quality work with attention to detail. Marina took initiative to improve our workflow, which boosted our development efficiency. She was professional and quick to apply feedback, growing steadily throughout her time with us.',
    proofText: 'See on LinkedIn',
    proofLink: 'https://www.linkedin.com/in/marina-appel/details/recommendations/',
  },
]
</script>

<template>
  <div>
    <h1>My portfolio</h1>
    <h2 class="my-3 text-xl">Recommendations</h2>
    <div>
      <div
        v-for="(item, i) in recommendations"
        :key="i"
        class="recommendation-card opacity-75 dark:opacity-70 rounded-lg p-6 border bg-white text-gray-800 border-gray-200 dark:bg-neutral-900 dark:text-gray-200 dark:border-neutral-700"
      >
        <h3
          class="recommendation-name text-sm font-medium leading-snug text-gray-900 dark:text-gray-100"
        >
          {{ item.name }} <br />
          <span
            class="recommendation-position text-xs font-normal text-gray-800 dark:text-gray-200"
          >{{ item.position }}</span
          >
        </h3>
        <blockquote
          class="italic recommendation-quote block mt-4 text-sm leading-relaxed text-gray-800 dark:text-gray-100"
        >
          {{ item.quote }}
        </blockquote>
        <span class="text-xs">
          (<a
            :href="item.proofLink"
            class="ml-1 not-italic underline underline-offset-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >{{ item.proofText }} </a
          >)
        </span>
      </div>
    </div>
  </div>
</template>
