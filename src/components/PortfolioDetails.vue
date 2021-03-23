<template>
<div v-if="project">
<div class="px-8 text-grayBlue"> 
    
      <div>
        <img :src="require(`../assets/portfolio/${project.mobileHero}`)" /> 
        </div>

    <div class="pt-10 ">
    <h1 class="pt-6 text-4xl font-bold leading-10 border-t font-ibarra">{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <p>{{ project.category }}</p>
    <p>{{ project.stack }}
    <base-button buttonType="secondary">View Website</base-button>
    </p>
    </div>
    </div>

    <div>
      <h3 class="text-4xl font-bold font-ibarra">Project Background</h3>
      {{ project.background }}
      </div>

      <div>
        <h4>Static Preview</h4>
         <img  :src="require(`../assets/portfolio/${project.mobilePreview1}`)" /> 
          <img  :src="require(`../assets/portfolio/${project.mobilePreview2}`)" /> 

      </div>
 </div>
</template>



<script>
import BaseButton from './BaseButton.vue'

export default {
  props: ['id'],
  components: {
    BaseButton
  },
  data() {
    return {
      project: null,
    }
  },
mounted() {
         fetch('http://localhost:3000/projects/' + this.id)
        .then((res) => res.json())
        .then(data => this.project = data)
        .catch(err => console.log(err.message))
    }
}
</script>




