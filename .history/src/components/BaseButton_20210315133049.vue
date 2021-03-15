<template>
  <button
    class="px-3 py-2"
    :class="[
      { darkBlue: buttonType === 'primary' },
      { 'bg-orange-400': buttonType === 'secondary' }
    ]"
  >
    <slot>Button</slot>
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
