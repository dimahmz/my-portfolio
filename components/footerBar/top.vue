<script setup>
import socialMedia from "@/content/social-media.json";
</script>

<template lang="pug">
.flex-center-between.pt-10
  my-logo.my-logo
  .social-media.flex.space-x-1
    .link(v-for="platform in socialMedia")
      a.text-app-link( :href="platform.link" target="_blank")
        span {{ platform.label }}
        v-icon(icon="mdi-arrow-top-right")
hr.my-6.bg-app-parag
</template>

<style scoped lang="scss">
.social-media {
  @apply text-[11px];
  @apply sm:text-sm sm:space-x-4;
  @apply md:space-x-7 md:text-base;

  .link {
    @apply py-1 relative;
    a::before {
      @apply bg-gradient-to-r from-app-primary to-app-secondary;
      @apply content-[""] absolute w-full h-1 rounded-sm bottom-0 left-0;
      @apply transform origin-right scale-x-0 transition-transform duration-500 ease-in-out;
    }
    a:hover::before {
      @apply transform origin-left scale-x-100;
    }
  }
}
.my-logo {
  @apply sm:text-[26px] font-black;
}
hr {
  @apply inline-block w-full h-[1.5px] bg-[#bdc0c5];
  @apply md:my-10;
}
</style>
