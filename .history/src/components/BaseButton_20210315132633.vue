<template>
  <button
    class="px-3 py-2"
    :class="[
      { 'bg-blue-400': buttonType === 'primary' },
      { 'bg-orange-400': buttonType === 'secondary' }
    ]"
  >
    {{ buttonType }} button
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true
    }
  }
}
</script>
