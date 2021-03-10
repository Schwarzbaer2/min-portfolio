<template>
  <footer
    class="flex flex-col items-center text-center md:flex-row md:justify-between md:px-10 bg-grayBlue font-publicSans"
  >
    <div class="flex flex-col">
      <div class="mt-14 md:mt-0">
        <img src="../assets/images/logo.svg" />
      </div>

      <ul
        class="flex flex-col mt-10 tracking-widest text-white uppercase md:flex-row md:mt-0 "
      >
        <li class="mb-8 md:mb-0">Home</li>
        <li class="mb-8 md:mb-0 md:pl-9">Portfolio</li>
        <li class="md:pl-9">Contact me</li>
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
