<template>
  <main
    class="mx-auto pb-6 h-screen w-screen dark:bg-gray-900 bg-[url('/img/bg-template.png')] dark:bg-[url('/img/bg-dark-template.png')] bg-center bg-no-repeat bg-cover transition-all delay-150 duration-300 ease-in-out"
  >
    <div class="backdrop-blur-sm h-full w-full">
      <div class="flex flex-col items-center justify-center h-full mx-auto">
        <Header />
        <NuxtPage />
        <Footer />
      </div>
    </div>
  </main>
</template>

<style>
main {
  transition: all 1s ease-in-out;
}

main:has(.connect:hover) {
  background-image: url('/img/bg-ready-project.png');
}

main:has(.connect:hover) .card {
  background: #cbd5e1c5;
  color: #312e81;
}

main:has(.connect:hover) .menu-item {
  background: #eef2ff;
  color: #312e81;
}

main:has(.connect:hover) .card h1,
main:has(.connect:hover) .card h2,
main:has(.connect:hover) .card p {
  color: #312e81;
}
</style>
