<script setup>
import socialMedia from "@/content/social-media.json";
</script>

<template lang="pug">
.flex-center-between
  img.w-10(src="/images/hamza-logo.svg" alt="portfolio's logo")
  .social-media.flex.space-x-2
    a(v-for="platform in socialMedia" :href="platform.link" target="_blank")
      span {{ platform.label }}
      v-icon(icon="mdi-arrow-top-right")
hr.my-10.bg-app-parag
</template>

<style scoped>
img {
  @apply sm:w-16;
  @apply md:w-20;
}
.social-media {
  @apply text-[12px];
  @apply sm:text-sm sm:space-x-4;
  @apply md:space-x-7 md:text-base;
}
hr {
  @apply inline-block w-full h-[1.5px];
  @apply md:my-40;
}
</style>
