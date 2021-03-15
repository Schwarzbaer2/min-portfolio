<template>
  <div class="h-72">
    <img :src="project.mobileImg" />
  </div>

  <div>
    {{ project.title }}
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
