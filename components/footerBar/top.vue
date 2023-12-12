<script setup>
import socialMedia from "@/content/social-media.json";
</script>

<template lang="pug">
.flex-center-between.py-6
  my-logo.my-logo
  .social-media.flex.space-x-1
    a(v-for="platform in socialMedia" :href="platform.link" target="_blank")
      span {{ platform.label }}
      v-icon(icon="mdi-arrow-top-right")
hr.my-10.bg-app-parag
</template>

<style scoped lang="scss">
.social-media {
  @apply text-[11px];
  @apply sm:text-sm sm:space-x-4;
  @apply md:space-x-7 md:text-base;
}
.my-logo {
  @apply sm:text-[26px] font-black;
}
hr {
  @apply inline-block w-full h-[1.5px];
  @apply md:my-40;
}
</style>
