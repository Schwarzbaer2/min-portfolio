<template>
<div class="flex flex-col w-full xl:flex-row">
<h2 class="pt-12 mt-8 text-4xl font-bold leading-10 tracking-tight border-t font-ibarra">Contact Me</h2>
<form  class="flex flex-col items-center justify-center py-6 md:pt-6 md:pb-24" action="#" method="POST">

  <div class="flex flex-col w-full">

    <label  class="mb-2 bold" for="name">Name</label>
    
    <input class="border-0 bg-formGrey text-grayBlue" type="text" name="name" id="name" placeholder="Jane Appleseed" required>
  </div>

  <div class="flex flex-col w-full ">
    <label class="pt-6 mb-2" for="email">Email Address</label>


    <input class="border-0 bg-formGrey" type="email" name="email" id="email" placeholder="email@example.com" required>
  </div>

  <div class="flex flex-col w-full">
    <label class="pt-6 mb-2" for="message">Message</label>
    <textarea class="border-0 bg-formGrey" name="message" id="message" placeholder="How can I help"></textarea>
  </div>
  <div class="self-start pt-6">
  <base-button buttonType="primary">Send Message</base-button><br />
  </div>
</form>
</div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    name: "ContactForm",
      components: {
    BaseButton,
  },
    
}
</script>
