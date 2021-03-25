<template>
  <div
    class="flex flex-col items-center text-center md:flex-row md:justify-between md:px-10 xl:px-40 md:h-20 bg-grayBlue font-publicSans"
  >
    <div class="flex flex-col items-center md:flex-row">
      <div class="mt-14 md:mt-0">
        <img src="../assets/images/logo.svg" />
      </div>

      <ul
        class="flex flex-col mt-10 tracking-widest text-white uppercase md:flex-row md:mt-0 md:pl-12 "
      >
        <li class="mb-8 md:mb-0 md:pr-9">
          <router-link :to="{ name: 'TheMain' }">Home</router-link>
        </li>
        <li class="mb-8 md:mb-0 md:pr-9">
          <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link>
        </li>
        <li class="mb-8 md:mb-0 md:pr-9">
          <router-link :to="{ name: 'Contact' }">Contact me</router-link>
        </li>
      </ul>
    </div>
    <div class="my-10 text-white fill-current ">
      <SocialMedia />
    </div>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue'

export default {
  name: 'TheFooter',
  components: {
    SocialMedia
  }
}
</script>

<style></style>
