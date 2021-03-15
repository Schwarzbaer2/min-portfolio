<template>
  <div>
    <img
      :src="
        require(`../../assets/images/portfolio/mobile/${project.mobileImg}`)
      "
      :alt="project.title"
    />
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
