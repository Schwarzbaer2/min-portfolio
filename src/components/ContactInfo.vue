<template>
  <article class="flex flex-col w-full border-t xl:flex-row">
    <div class="pt-8 mr-28 xl:pt-12">
      <h2 class="text-4xl font-bold leading-10 tracking-tight font-ibarra ">
        Get in Touch
      </h2>
    </div>

    <div class="py-6 xl:py-0 xl:w-5/6 xl:pt-12">
      <p class="leading-7">
        I’d love to hear about what you’re working on and how I could help. I’m
        currently looking for a new role and am open to a wide range of
        opportunities. My preference would be to find a position in a company in
        London. But I’m also happy to hear about opportunites that don’t fit
        that description. I’m a hard-working and positive person who will always
        approach each task with a sense of purpose and attention to detail.
        Please do feel free to check out my online profiles below and get in
        touch using the form.
      </p>
      <div class="pt-6 text-green-600 fill-current">
        <SocialMedia class="text-black" />
      </div>
    </div>
  </article>
</template>

<script>
import SocialMedia from './SocialMedia.vue'

export default {
  name: 'ContactInfo',
  components: {
    SocialMedia
  }
}
</script>
