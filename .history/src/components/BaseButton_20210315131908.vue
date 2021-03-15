<template>
  <button
    class="px-3 py-2"
    :class="[
      { 'bg-blue-400': color === 'blue' },
      { 'bg-orange-400': color === 'orange' }
    ]"
  >
    {{ color }} button
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>
