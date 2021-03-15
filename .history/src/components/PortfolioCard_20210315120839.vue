<template>
  <div class="flex justify-center text-grayBlue">
    <img :src="project.mobileImg" />
  </div>

  <div class="pt-14">
    <div
      class="text-4xl font-bold leading-loose tracking-tight text-center font-ibarra"
    >
      <h2>{{ project.title }}</h2>
    </div>
    <div class="text-base font-publicSans">
      {{ project.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
