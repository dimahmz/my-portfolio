<template lang="pug">
section
  div.text-center
    h2.text-app-title.text-xl.font-bold.mb-3 My Tech Stack
    p.text-app-parag.text-sm.px-4 Technologies I've been working with recently
  .flex-center
    .technologies-wrapper.w-full.mt-8.px-4.grid.grid-cols-3.gap-6
      .mx-auto.w-full.flex-center(v-for="(modules , path  ) in technologies_svgs" )
        img.w-full(:src="'/_nuxt'+path")
</template>
<script setup>
const technologies_svgs = import.meta.glob("/assets/technologies/*");
</script>
<style lang="scss" scoped>
h2 {
  @apply sm:text-2xl;
  @apply md:text-3xl;
}
p {
  @apply md:text-base;
}
.technologies-wrapper {
  @apply max-w-[750px];
  @apply sm:grid-cols-4;
  @apply md:gap-14 md:grid-cols-6;
  img {
    @apply max-w-[70px] hover:cursor-pointer;
  }
}
</style>
