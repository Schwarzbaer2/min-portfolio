<template>
  <div>
    <img :src="project.mobileImg" />
  </div>

  <div>
    <div>
      {{ project.title }}
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
