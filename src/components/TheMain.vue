<template>
  <main>
    <MainHero />
    <MainAbout />
    <FooterContact />
    <TheFooter />
  </main>
</template>

<script>
import MainHero from './MainHero.vue'
import MainAbout from './MainAbout.vue'
import FooterContact from './FooterContact.vue'
import TheFooter from './TheFooter.vue'

export default {
  name: 'TheMain',
  components: {
    MainHero,
    MainAbout,
    FooterContact,
    TheFooter,
  },
}
</script>

<style></style>
