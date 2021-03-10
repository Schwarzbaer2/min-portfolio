<template>
  <header>
    <nav>
      <div class="flex items-center justify-between px-8 pt-8 pb-10 ">
        <img src="../assets/images/logo_dark.svg" />
        <img
          class="visible w-6 h-3 md:invisible"
          src="../assets/images/icons/hamburger.svg"
        />
        <div class="hidden md:flex md:flex-row">
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style></style>
