<template>
  <button class="px-4 py-2 font-bold text-white rounded">
    <slot></slot>
  </button>
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
