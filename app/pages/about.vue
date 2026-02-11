<template>
  <section class="about-page">
    <h1>About me</h1>
    <div class="about-me flex flex-col">
      <div class="item flex flex-col! sm:flex-row!">
        <p>
          I’m a frontend-focused web developer working with startups and small teams to improve
          existing websites and product interfaces. <br />
          I enjoy joining products that are already live but need refinement: cleaner UI, better
          structure, improved usability, or small but meaningful fixes that make the product feel
          more stable and complete.
        </p>
        <div class="photo max-h-[200px] max-w-[150px]">
          <img src="/img/portrait.png" alt="my photo" />
        </div>
      </div>
      <div class="item flex flex-col! gap-1">
        <p>
          I’ve worked on landing pages, internal tools, and affiliate platforms, often collaborating
          closely with designers, product owners, and developers.
        </p>
        <p>
          I value clear communication, defined scopes, and respectful collaboration. I usually work
          in focused task blocks and prefer projects where thoughtful work matters more than speed
          for speed’s sake.
        </p>
        <p>Based in Hamburg. Open to short-term freelance or collaborative work.</p>
        <span class="mt-1 underline block w-full text-center"
        ><a href="/documents/Marina_Appel_CV_Freelance.pdf" target="_blank"
        >Meet my CV (PDF)</a
        ></span
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}

.photo {
  flex: 0 1 80%;
  margin: 1rem 0 1rem 1rem;
}

.photo::before {
  display: block;
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  padding: 1rem;
  background: rgb(243, 243, 242);
  z-index: 0;
  transform: rotate(2deg);
}

.photo {
  position: relative;
}

img {
  position: relative;
  padding: 0.75rem;
  z-index: 10;
}

@media screen {
  .item {
    flex-direction: row;
  }
}
</style>
