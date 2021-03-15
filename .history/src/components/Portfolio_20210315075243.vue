<template>
  <div>
    <h2>The Portfolio</h2>
    <PortfolioCard />
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'

export default {
  components: {
    PortfolioCard
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Manage',
          img: '',

          prevImg1: '',
          prevImg2: '',
          stack: 'HTML / CSS / JS',
          description:
            'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
          category: 'Interaction Design / Front End Development'
        }
      ]
    }
  }
}
</script>
