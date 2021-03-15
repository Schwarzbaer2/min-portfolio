<template>
  <button v-on="$listeners"></button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ' darkBlue'
    }
  }
}
</script>
