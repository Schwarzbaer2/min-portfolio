<template>
  <section class="px-8 pt-24 md:px-10 xl:px-40">
    <div class="flex flex-col md:flex-row">
      <img
        class="md:hidden "
        src="../assets/images/homepage/mobile/image-homepage-profile@2x.jpg"
      />
      <img
        class="hidden w-64 md:block xl:hidden"
        src="../assets/images/homepage/tablet/image-homepage-profile@2x.jpg"
      />

      <img
        class="hidden w-96 xl:block"
        src="../assets/images/homepage/desktop/image-homepage-profile@2x.jpg"
      />

      <div class="md:pl-16 xl:pl-32 text-grayBlue">
        <h2
          class="pt-16 text-4xl font-bold leading-10 tracking-tight font-ibarra"
        >
          About me
        </h2>
        <p class="leading-7 font-publicSans pt-7 xl:w-80 xl:auto">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainAbout',
}
</script>

<style></style>
