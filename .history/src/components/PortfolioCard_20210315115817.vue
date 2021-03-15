<template>
  <div>
    <img :src="project.mobileImg" />
  </div>

  <div class="pt-14">
    <div class="text-4xl text-grayBlue">
      <h2>{{ project.title }}</h2>
    </div>

    {{ project.description }}
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
