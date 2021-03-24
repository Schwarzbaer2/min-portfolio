<template>
  <section>
    <div
      class="flex flex-col justify-center px-8 pt-10 md:px-10 xl:px-40 md:pt-20 text-grayBlue"
      v-if="project"
    >
      <div class="flex flex-col items-center">
        <div class="md:hidden">
          <img :src="require(`../assets/portfolio/${project.mobileHero}`)" />
        </div>
        <div class="hidden md:block xl:hidden">
          <img :src="require(`../assets/portfolio/${project.tabletHero}`)" />
        </div>
        <div class="hidden w-3/4 xl:block">
          <img :src="require(`../assets/portfolio/${project.desktopHero}`)" />
        </div>

        <div class="pt-10 max-w-7xl">
          <h1
            class="pt-6 text-4xl font-bold leading-10 tracking-tight border-t font-ibarra"
          >
            {{ project.title }}
          </h1>

          <div class="flex flex-col md:flex-row-reverse">
            <p
              class="pt-6 leading-8 transform -translate-y-0 md:-translate-y-10 font-publicSan md:w-5/6 md:pt-0"
            >
              {{ project.description }}
            </p>
            <div
              class="py-6 text-sm font-bold leading-8 md:w-full font-publicSan text-hoverGreen"
            >
              <p>
                {{ project.category }}
              </p>
              <p class="pb-4">
                {{ project.stack }}
              </p>
              <base-button class="text-grayBlue" buttonType="secondary"
                >View Website</base-button
              >
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="max-w-7xl">
          <h2
            class="pt-6 text-3xl leading-10 tracking-tight border-t font-ibarra"
          >
            Project Background
          </h2>
          <p class="pt-6 leading-8 md:pt-7 font-publicSan">
            {{ project.background }}
          </p>

          <div>
            <h3 class="py-10 text-3xl leading-10 tracking-tight font-ibarra">
              Static Preview
            </h3>
          </div>

          <div class="md:hidden">
            <div>
              <img
                :src="require(`../assets/portfolio/${project.mobilePreview1}`)"
              />
            </div>
            <div class="pt-8 pb-16">
              <img
                :src="require(`../assets/portfolio/${project.mobilePreview2}`)"
              />
            </div>
          </div>
          <div class="hidden md:block xl:hidden">
            <div>
              <img
                :src="require(`../assets/portfolio/${project.tabletPreview1}`)"
              />
            </div>
            <div class="pt-8 pb-16">
              <img
                :src="require(`../assets/portfolio/${project.tabletPreview2}`)"
              />
            </div>
          </div>
          <div
            class="flex-col items-center justify-center hidden min-w-full xl:flex"
          >
            <div>
              <img
                :src="require(`../assets/portfolio/${project.desktopPreview1}`)"
              />
            </div>
            <div class="pt-8 pb-16">
              <img
                :src="require(`../assets/portfolio/${project.desktopPreview2}`)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterContact />
  <TheFooter />
</template>

<script>
import BaseButton from './BaseButton.vue'
import FooterContact from './FooterContact.vue'
import TheFooter from './TheFooter.vue'

export default {
  props: ['id'],
  components: {
    BaseButton,
    FooterContact,
    TheFooter
  },
  data() {
    return {
      project: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects/' + this.id)
      .then(res => res.json())
      .then(data => (this.project = data))
      .catch(err => console.log(err.message))
  }
}
</script>
