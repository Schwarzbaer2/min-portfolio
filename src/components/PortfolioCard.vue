<template>
<section  class="flex flex-col md:flex-row md:items-center md:px-10 xl:mb-20">
  <div class="flex text-grayBlue"  

   :class="{'md:order-last': project.id % 2 != 1}"


 >

    <div class="md:hidden">
    <img  :src="project.mobileImg" />
    </div>
    <div class="hidden pr-16 md:block xl:hidden"
         :class="{'pr-0 pl-16': project.id % 2 != 1}"
    >
    <img :src="project.tabletImg" />
    </div>
    <div class="hidden min-w-full pr-32 xl:block"
     :class="{'pr-0 pl-32': project.id % 2 != 1}"
    >
    <img  :src="project.desktopImg" />
    </div>
  </div>


  <div class="pb-16 border-b pt-14 md:pt-0 md:pb-0 xl:py-32 xl:w-4/6 ">
    <div
      class="text-4xl font-bold leading-loose tracking-tight text-center font-ibarra"
    >
      <h2 class="py-6 border-t">{{ project.title }}</h2>
    </div>
    <div class="text-base leading-8 font-publicSans">
      {{ project.description }}
    </div>
    <div class="py-6"> 
    <base-button buttonType="secondary">View Project</base-button>
    </div>
  </div>
</section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'PortfolioCard',
  props: {
    project: {
      type: Object,
      required: true
    },
    
 
  },
   components: { BaseButton }
}
</script>

<style></style>
