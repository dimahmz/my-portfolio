<script setup>
import socialMedia from "@/content/social-media.json";
import { portfolio_source_code, nuxt_link } from "@/content/links.json";
</script>

<template lang="pug">
footer.px-4
  .flex-center-between
    img.w-10(src="/images/hamza-logo.svg" alt="portfolio's logo")
    .social-media.flex.space-x-2
      a(v-for="platform in socialMedia" :href="platform.link" target="_blank")
        span {{ platform.label }}
        v-icon(icon="mdi-arrow-top-right")
  hr.my-10.bg-app-parag
  .footer-text
    p Designed and built by
      span.gradian-text-color &nbsp;Hamza 
      | using
      span
        a(:href="nuxt_link" target="_blank")
          v-icon.ml-1(icon="mdi-nuxt")
          | &nbsp;nuxtJs
          v-icon(icon="mdi-arrow-top-right")
    p.text-center.mt-3
      v-icon(icon="mdi-open-source-initiative")
      | &nbsp;2023
      span.gradian-text-color.underline
        a.ml-2(:href="portfolio_source_code" target="_blank") Source Code
</template>

<style scoped lang="scss">
footer {
  img {
    @apply sm:w-16;
    @apply md:w-20;
  }
  hr {
    @apply inline-block w-full h-[1.5px];
    @apply md:my-40;
  }
  .social-media {
    @apply text-[12px];
    @apply sm:text-sm sm:space-x-4;
    @apply md:space-x-6;
  }
  .footer-text {
    @apply text-app-parag text-sm text-center;
    @apply md:text-[16px];
  }
}
.gradian-text-color {
  @apply font-black bg-gradient-to-r from-app-primary to-app-secondary text-transparent bg-clip-text;
}
</style>
