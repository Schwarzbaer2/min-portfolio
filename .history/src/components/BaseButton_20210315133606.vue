<template>
  <button
    class="px-3 py-2"
    :class="[
      {
        'bg-darkBlue  hover:bg-hoverGreen text-white': buttonType === 'primary'
      },
      { 'bg-white hover:bg-darkBlue': buttonType === 'secondary' }
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
