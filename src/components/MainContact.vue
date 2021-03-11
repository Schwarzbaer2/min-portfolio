<template>
  <section class="px-8 pt-24 md:px-10 xl:px-40">
    <div
      class="flex flex-col items-center pb-20 text-center md:flex-row md:justify-between md:items-center md:pb-24"
    >
      <div>
        <h2
          class="max-w-xs text-4xl font-bold leading-10 tracking-tight text-grayBlue font-ibarra"
        >
          Interested in doing a project together?
        </h2>
      </div>

      <div class="pt-10 md:pt-0">
        <base-button color="white" hover="grayBlue" textClr="darkBlue"
          >Contact Me</base-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'MainContact',
  components: {
    BaseButton,
  },
}
</script>

<style></style>
