<template>
  <div class="flex flex-col justify-between max-h-6xl ">
 <section> 
 <div class="px-8 pt-16 md:px-10 xl:px-40">
<ContactInfo />
<ContactForm />
</div>
</section>

<TheFooter  />

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
  },

}



</script>
