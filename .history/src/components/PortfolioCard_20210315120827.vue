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
    <div
      class="font-publicSans Class
Properties
text-xs	font-size: 0.75rem;
line-height: 1rem;
text-sm	font-size: 0.875rem;
line-height: 1.25rem;
text-base"
    >
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
