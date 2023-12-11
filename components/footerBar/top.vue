<script setup>
import socialMedia from "@/content/social-media.json";
</script>

<template lang="pug">
.flex-center-between
  my-logo.my-logo.text-xl
  .social-media.flex.space-x-2
    a(v-for="platform in socialMedia" :href="platform.link" target="_blank")
      span {{ platform.label }}
      v-icon(icon="mdi-arrow-top-right")
hr.my-10.bg-app-parag
</template>

<style scoped lang="scss">
.social-media {
  @apply text-[12px];
  @apply sm:text-sm sm:space-x-4;
  @apply md:space-x-7 md:text-base;
}
.my-logo {
  @apply sm:text-2xl;

  @apply sm:text-[35px] font-black;
}
hr {
  @apply inline-block w-full h-[1.5px];
  @apply md:my-40;
}
</style>
