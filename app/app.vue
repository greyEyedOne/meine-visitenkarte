<template>
  <main
    class="mx-auto pb-6 h-screen w-screen dark:bg-gray-900 bg-[url('/img/bg-template.png')] dark:bg-[url('/img/bg-dark-template.png')] bg-center bg-no-repeat bg-cover transition-all delay-150 duration-300 ease-in-out"
  >
    <div class="backdrop-blur-sm min-h-screen w-full">
      <div class="flex flex-col min-h-screen h-full mx-auto justify-center items-center">
        <Header />
        <div class="container flex w-full h-full">
          <NuxtPage />
        </div>
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
  color: ghostwhite;
}

main:has(.connect:hover) .card h1,
main:has(.connect:hover) .card h2,
main:has(.connect:hover) .card p {
  color: #312e81;
}

main:has(.connect:hover) .disclaimer {
  color: aqua;
}

h1 {
  font-family: 'Luckiest Guy';
  font-weight: 400;
  font-style: normal;
  font-size: clamp(2.5rem, 11vw, 5rem);
}

.logo img {
  box-shadow: none !important;
}

.container {
  padding: 1rem;
}

.menu-mobile > div {
  z-index: 1000;
  opacity: 0.95;
}

.logo-link {
  z-index: 50;
  position: relative;
}

.menu-mobile {
  z-index: 1000;
}
</style>
