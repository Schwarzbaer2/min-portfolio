<template>
  <section class="px-8 pt-24 md:px-10 xl:px-40">
    <div
      class="flex flex-col items-center text-center md:flex-row md:justify-between md:items-baseline"
    >
      <div>
        <h2
          class="max-w-xs text-4xl font-bold leading-10 tracking-tight text-grayBlue font-ibarra"
        >
          Interested in doing a project together?
        </h2>
      </div>

      <div class="pt-10 pb-20 md:pt-0">
        <BaseButtonSecondary />
      </div>
    </div>
  </section>
</template>

<script>
import BaseButtonSecondary from './BaseButtonSecondary.vue'

export default {
  name: 'MainContact',
  components: {
    BaseButtonSecondary,
  },
}
</script>

<style></style>
