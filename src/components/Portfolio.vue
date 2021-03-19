<template>
  <div class="px-8 pt-10 md:px-10 md:pt-16 xl:pl-40 xl:pr-56">
    <PortfolioCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
   
    />
  </div>
  <TheFooter />
</template>

<script>
import axios from 'axios';
import PortfolioCard from './PortfolioCard.vue'
import TheFooter from './TheFooter.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioCard,
    TheFooter
  },
  
  data() {
    return {
     projects: []
    }
  },
created() {
    axios.get('data.json')
      .then(response => {
        this.projects = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

   }
</script>