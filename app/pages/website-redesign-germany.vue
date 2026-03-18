<script setup>
useHead({
  title: 'Website Redesign & UI Improvements | Freelance Web Developer Germany',
  meta: [
    {
      name: 'description',
      content:
        'Website redesign, responsive fixes and frontend maintenance for small businesses and agencies in Germany. Modernizing outdated websites without full rebuilds.',
    },

    // Open Graph
    { property: 'og:title', content: 'Website Redesign & UI Improvements' },
    { property: 'og:image', content: 'https://www.your-websmith.de/img/website-redesign.png' },
    { property: 'og:locale', content: 'en_US' },
    {
      property: 'og:description',
      content:
        'Fix outdated website design, improve responsiveness and stabilize existing frontend projects.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.your-websmith.de/website-redesign-germany' },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.your-websmith.de/website-redesign-germany',
    },
  ],
})
</script>

<template>
  <section class="flex flex-col gap-6">
    <h1 class="text-center mb-0!">
      Website Redesign and UI Improvements for Small Businesses in Germany
    </h1>

    <!-- Positioning Core -->
    <div class="mx-auto text-lg text-center flex flex-col gap-4">
      <p>
        I support businesses and agencies by fixing, improving and stabilizing existing frontend
        projects. I specialize in responsive improvements, careful UI refactoring and ongoing
        frontend maintenance - without unnecessary rebuilds.
      </p>
    </div>

    <h2>Frontend Refactoring, Responsive Fixes & Ongoing UI Support for Existing Projects.</h2>
    <div class="flex flex-col md:flex-row gap-6 items-center">
      <p class="flex-1">
        Many websites do not need a full rebuild. They need thoughtful frontend fixes, better
        responsiveness and structured improvements. I help modernize outdated interfaces, improve
        mobile usability and keep projects stable and maintainable over time.
      </p>
    </div>
    <!-- Redesign -->
    <h2>Redesign Outdated Websites</h2>
    <div class="flex flex-col md:flex-row gap-6 items-center">
      <p class="flex-1">
        Business websites built with older technologies such as Bootstrap or custom CSS often start
        to look outdated and inconsistent across devices. I offer redesign consulting and practical
        frontend updates to modernize your website while preserving your existing structure and
        content.
        <br /><br />
        This is especially relevant for websites built 5–10 years ago that no longer reflect your
        brand identity or current usability standards.
      </p>
      <img
        src="/img/website-redesign.png"
        alt="Example of redesigning an outdated Bootstrap website"
        class="w-full md:w-1/2 min-w-[220px] max-w-[350px] object-cover rounded-lg opacity-92 dark:opacity-85"
      />
    </div>

    <!-- UI Fixes -->
    <h2>Fix Website Issues and Improve UI</h2>
    <div class="flex flex-col md:flex-row gap-6 items-center">
      <p class="flex-1">
        I provide targeted frontend fixes including responsive layout corrections, cross-browser
        improvements and UI refinements. Whether your website looks different on mobile devices or
        certain elements appear broken, I can diagnose and
        <NuxtLink to="/portfolio-cases/responsive-product-catalogue" class="underline">
          fix the issues efficiently </NuxtLink
        >.
      </p>
    </div>

    <!-- Maintenance -->
    <h2>Ongoing Website Maintenance</h2>
    <div class="flex flex-col md:flex-row gap-6 items-center">
      <img
        src="/img/website-maintenance.png"
        alt="Frontend specialist working on website maintenance and UI improvements"
        class="w-full md:w-1/2 min-w-[220px] max-w-[350px] object-cover rounded-lg opacity-92 dark:opacity-85"
      />
      <p class="flex-1">
        For businesses and agencies that need reliable frontend support, I offer ongoing website
        maintenance across Germany and remote collaboration throughout Europe. This includes small
        improvements, visual adjustments, performance optimization and structured refactoring within
        existing codebases.
      </p>
    </div>

    <!-- Location -->
    <h2>Based in Hamburg – Working Across Germany</h2>
    <div class="max-w-3xl mx-auto text-center">
      <p>
        I am a freelance web specialist based in Hamburg, supporting companies across Germany. If
        you are looking for help with website redesign, UI improvements or frontend stabilization,
        feel free to get in touch.
      </p>
    </div>

    <!-- Audience -->
    <h2>For Businesses and Agencies</h2>
    <div class="max-w-3xl mx-auto text-center">
      <p>
        Whether you run a small business that needs a more modern, mobile-friendly website, or you
        are an agency looking for dependable frontend support, I can join your existing project and
        deliver focused, maintainable improvements.
      </p>
    </div>

    <div class="flex justify-center">
      <ConnectButton />
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: clamp(1.5rem, 3.5vw, 3.15rem) !important;
  line-height: 1.5;
}
h2 {
  font-size: clamp(1.35rem, 3vw, 2.5rem);
  text-align: center;
  letter-spacing: 1.5px;
}
</style>
