<template>
  <header class="font-publicSans text-grayBlue">
    <nav>
      <div
        class="flex items-center justify-between px-8 pt-8 pb-10 md:px-10 md:pt-16 md:pb-11 xl:px-40 xl:pb-14"
      >
        <img src="../assets/images/logo_dark.svg" />
        <img
          class="visible w-6 h-3 md:invisible"
          src="../assets/images/icons/hamburger.svg"
        />
        <div class="hidden md:flex ">
          <ul class="uppercase md:flex md:flex-row">
           <li> <router-link :to="{ name: 'TheMain' }">Home</router-link> </li>

            <li class="pl-9">Portfolio</li>
            <li class="pl-9">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style></style>
