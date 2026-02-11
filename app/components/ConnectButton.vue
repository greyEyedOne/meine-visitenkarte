<template>
  <button class="connect mt-6 text-md uppercase rounded-md w-fit mx-auto">
    <NuxtLink
      to="/contacts"
      class="px-4 py-2 block box-border cursor-pointer rounded-md bg-black dark:bg-black text-amber-50! dark:text-sky-100! opacity-80 dark:opacity-90 hover:opacity-100"
    >Get in Touch</NuxtLink
    >
  </button>
</template>
<style>
button.connect {
  margin-bottom: 10vh;
  z-index: 10;
  position: relative;
  transition: scale 0.25s ease-in-out;
}

button.connect:hover {
  opacity: 0.95 !important;
  scale: 1.03;
}

.connect::after,
.connect::before {
  border-radius: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  --angle: 0deg;
  background-image: conic-gradient(from var(--angle), #ffff0050, #00ffff50, #ff00ff50, #ffff0050);
  animation: borderAnimation 5s linear infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1 !important;
  padding: 1px;
  box-sizing: unset;
  background-image: conic-gradient(from var(--angle), #fff, #fff9, #fff) !important;
  transition: filter 0.5s ease-in-out;
}

.connect::after {
  filter: blur(12px);
}

.connect:hover:after {
  filter: blur(4px) !important;
}

@media (prefers-color-scheme: dark) {
  .connect::after,
  .connect::before {
    background-image: conic-gradient(
      from var(--angle),
      #ffffff40,
      #ffffff80,
      #ffffffaf,
      #fff,
      #ffffffaf,
      #ffffff80,
      #ffffff40
    ) !important;
  }
}
</style>
