<template>
  <main>
    <MainHero />
    <MainAbout />
    <MainContact />
    <TheFooter />
  </main>
</template>

<script>
import MainHero from './MainHero.vue'
import MainAbout from './MainAbout.vue'
import MainContact from './MainContact.vue'
import TheFooter from './TheFooter.vue'

export default {
  name: 'TheMain',
  components: {
    MainHero,
    MainAbout,
    MainContact,
    TheFooter,
  },
}
</script>

<style></style>
