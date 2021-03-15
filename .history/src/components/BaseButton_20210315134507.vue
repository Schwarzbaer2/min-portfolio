<template>
  <button
    class="px-6 py-2 "
    :class="[
      {
        'bg-darkBlue  hover:bg-hoverGreen text-white': buttonType === 'primary'
      },
      {
        'bg-white  hover:bg-darkBlue hover:text-white border-black border-solid border-b-4 h-12':
          buttonType === 'secondary'
      }
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
