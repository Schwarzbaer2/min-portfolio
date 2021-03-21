<template>
 <section>
<div class="flex flex-col px-8 text-grayBlue">
<h2 class="text-4xl font-bold leading-10 tracking-tight font-ibarra">Get in Touch</h2>
<p class="py-6 leading-7">I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>


<div>
<h2 class="text-4xl font-bold leading-10 tracking-tight font-ibarra">Contact Me</h2>
<form  class="flex flex-col items-center justify-center pt-6 pb-20" action="#" method="POST">

  <div class="flex flex-col w-full">

    <label  class="mb-2 bold" for="name">Name</label>
    
    <input class="bg-formGrey text-grayBlue" type="text" name="name" id="name" placeholder="Jane Appleseed" required>
  </div>

  <div class="flex flex-col w-full ">
    <label class="pt-6 mb-2" for="email">Email Address</label>


    <input class="bg-formGrey" type="email" name="email" id="email" placeholder="email@example.com" required>
  </div>

  <div class="flex flex-col w-full">
    <label class="pt-6 mb-2" for="message">Message</label>
    <textarea class=" bg-formGrey" name="message" id="message" placeholder="How can I help"></textarea>
  </div>
  <div class="pt-6">
  <base-button buttonType="primary">Send Message</base-button><br />
  </div>
</form>

</div>

</div>

<TheFooter />

 </section>
</template>


<script>
import BaseButton from './BaseButton.vue'
import TheFooter from './TheFooter.vue'

export default {
  name: 'TheContact',
  components: {
    BaseButton,
    TheFooter,
  },

}



</script>
