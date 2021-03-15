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
      projects: []
    }
  }
}
</script>
