<template>
  <footer
    class="flex flex-col items-center text-center md:flex-row md:justify-between md:px-10 xl:px-40 md:h-20 bg-grayBlue font-publicSans"
  >
    <div class="flex flex-col items-center md:flex-row">
      <div class="mt-14 md:mt-0">
        <img src="../assets/images/logo.svg" />
      </div>

      <ul
        class="flex flex-col mt-10 tracking-widest text-white uppercase md:flex-row md:mt-0 md:pl-12 "
      >
        <li class="mb-8 md:mb-0 md:pr-9"><router-link :to="{ name: 'TheMain' }">Home</router-link></li>
        <li class="mb-8 md:mb-0 md:pr-9"><router-link :to="{ name: 'Portfolio' }">Portfolio</router-link></li>
        <li class="mb-8 md:mb-0 md:pr-9"><router-link :to="{ name: 'Contact' }">Contact me</router-link></li>
      </ul>
    </div>
    <div class="flex my-10">
      <img src="../assets/images/icons/github.svg" />
      <img class="px-4" src="../assets/images/icons/twitter.svg" />
      <img src="../assets/images/icons/linkedin.svg" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheMain',
}
</script>

<style></style>

