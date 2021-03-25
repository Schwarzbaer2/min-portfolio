<template>
  <div class="px-8 pt-10 md:px-10 md:pt-16 xl:pl-40 xl:pr-56">
    <PortfolioCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
  <FooterContact />
  <TheFooter />
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'
import FooterContact from './FooterContact.vue'
import TheFooter from './TheFooter.vue'

export default {
  name: 'ThePortfolio',
  components: {
    PortfolioCard,
    FooterContact,
    TheFooter
  },

  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => (this.projects = data))
      .catch(err => console.log(err.message))
  }
}
</script>
