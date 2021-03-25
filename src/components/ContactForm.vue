<template>
  <div class="flex flex-col w-full mt-12 border-t xl:flex-row">
    <div class="pt-8 mr-28 xl:pt-12 ">
      <h2 class="text-4xl font-bold leading-10 tracking-tight font-ibarra">
        Contact Me
      </h2>
    </div>

    <div class="py-6 md:pt-6 md:pb-24 xl:py-0 xl:w-5/6 xl:pt-12">
      <form
        class="flex flex-col items-center justify-center"
        action="#"
        method="POST"
      >
        <div class="flex flex-col w-full">
          <label class="mb-2 bold" for="name">Name</label>

          <input
            class="border-0 bg-formGrey text-grayBlue"
            type="text"
            name="name"
            id="name"
            placeholder="Jane Appleseed"
            required
          />
        </div>

        <div class="flex flex-col w-full ">
          <label class="pt-6 mb-2" for="email">Email Address</label>

          <input
            class="border-0 bg-formGrey"
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            required
          />
        </div>

        <div class="flex flex-col w-full">
          <label class="pt-6 mb-2" for="message">Message</label>
          <textarea
            class="border-0 bg-formGrey"
            name="message"
            id="message"
            placeholder="How can I help"
          ></textarea>
        </div>
        <div class="self-start pt-6 pb-20">
          <base-button buttonType="primary">Send Message</base-button><br />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'ContactForm',
  components: {
    BaseButton
  }
}
</script>
