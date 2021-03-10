<template>
  <footer class="flex flex-col items-center  bg-grayBlue font-publicSans">
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
      />
    </svg>
    <ul class="text-white tracking-widest uppercase">
      <li>Home</li>
      <li>Portfolio</li>
      <li>Contact me</li>
    </ul>
    <div>
      <font-awesome-icon :icon="['fab', 'font-awesome']" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheMain',
}
</script>

<style></style>
