<template>
<header class="font-publicSans text-grayBlue">
   <nav>
  <div>
    <router-link :to="{ name: 'TheMain' }">Home</router-link>
  </div>
  <router-view />
</nav>
</header>
</template>

<script>
// import TheHeader from './components/TheHeader.vue'
//import TheMain from './components/TheMain.vue'
//import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
   // TheHeader,
    //TheMain,
    //TheFooter,
  },
}
</script>

<style></style>
