<template>
  <section class="px-8 md:px-10 xl:px-40 md:relative">
    <div class="flex justify-center ">
      <img
        class="md:hidden"
        src="../assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
      />
      <img
        class="hidden md:block xl:hidden"
        src="../assets/images/homepage/tablet/image-homepage-hero@2x.jpg"
      />
      <img
        class="hidden xl:block"
        src="../assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
      />
    </div>

    <div
      class="bottom-0 md:bg-lightGrey md:absolute md:w-4/6 md:h-2/4 md:flex md:flex-col md:justify-between xl:w-2/6 xl:h-3/6"
    >
      <div>
        <h1
          class="pt-6 text-4xl font-bold leading-10 tracking-tight xl:text-5xl md:pt-14 font-ibarra"
        >
          Hey, I’m Alex Spencer and I love building beautiful websites
        </h1>
      </div>
      <div class="pt-8 md:pt-0">
        <base-button>Hallo</base-button>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'MainHero',
  components: {
    BaseButton,
  },
}
</script>

<style></style>
