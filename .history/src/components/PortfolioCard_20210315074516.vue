<template>
  <div>
    <img :src="project.img" :alt="project.title" />
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
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
