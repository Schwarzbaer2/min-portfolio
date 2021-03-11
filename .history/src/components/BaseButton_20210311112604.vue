<template>
  <button
    :class="[`bg-${color}`, `hover:bg-${hoverColor}`]"
    class="flex items-center justify-between h-12 leading-3 tracking-widest text-white uppercase outline-none w-52 font-publicSans"
  >
    <img class="h-12 bg-black " src="../assets/images/icons/down-arrows.svg" />
    <div class="pr-7">
      <slot>Button</slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'darkBlue' },
    hoverColor: { type: String, default: 'hoverGreen' },
  },
}
</script>

<style></style>
