<template>
  <div class="flex flex-col content-center justify-between w-screen h-screen">
    <div class="flex justify-center ">
      <section class="max-w-7xl">
        <div class="px-8 pt-16 md:px-10 xl:px-40">
          <ContactInfo />

          <ContactForm />
        </div>
      </section>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import ContactInfo from './ContactInfo.vue'
import ContactForm from './ContactForm.vue'
import TheFooter from './TheFooter.vue'

export default {
  name: 'TheContact',
  components: {
    ContactInfo,
    ContactForm,
    TheFooter
  }
}
</script>
