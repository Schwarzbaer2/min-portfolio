<template>
  <section class="px-8">
    <div class="flex justify-center">
      <img
        class="md:hidden"
        src="../assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
      />
      <img
        class="hidden"
        src="../assets/images/homepage/tablet/image-homepage-hero@2x.jpg"
      />
    </div>

    src/assets/images/homepage/tablet/image-homepage-hero@2x.jpg

    <div>
      <h1 class="pt-6 text-4xl font-bold leading-10 tracking-tight font-ibarra">
        Hey, I’m Alex Spencer and I love building beautiful websites
      </h1>
    </div>
    <div class="pt-8">
      <BaseButton />
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
