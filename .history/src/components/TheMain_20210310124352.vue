<template>
  <main>
    <MainHero />
    <MainAbout />
  </main>
</template>

<script>
import MainHero from './MainHero.vue'
import MainAbout from './MainAbout.vue'

export default {
  name: 'TheMain',
  components: {
    MainHero,
  },
}
</script>

<style></style>
