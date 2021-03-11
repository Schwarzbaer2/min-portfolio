<template>
  <main>
    <MainHero />
    <MainAbout />
    <MainContact />
  </main>
</template>

<script>
import MainHero from './MainHero.vue'
import MainAbout from './MainAbout.vue'
import MainContact from './MainContact.vue'

export default {
  name: 'TheMain',
  components: {
    MainHero,
    MainAbout,
    MainContact,
  },
}
</script>

<style></style>
