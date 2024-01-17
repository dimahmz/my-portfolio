<template lang="pug">
section#skills.mt-20
  div.text-center
    h2.text-app-title.text-xl.font-bold.mb-3 My Tech Stack
    p.text-app-parag.text-sm.px-4 Technologies I've been working with recently
  .flex-center.mt-8
    .technologies-wrapper.w-full.mt-8.px-4.grid.grid-cols-3.gap-6
      .mx-auto.w-full.flex-center(v-for="(technology  ) in technologies_svgs" )
        .flex-column.justify-center.w-full.text-center.space-y-6
          .w-full
            img.w-full.mx-auto(:src="technology.path" :alt="technology.alt")
          span.text-app-link.text-xs {{ technology.title }}
</template>
<script setup>
import technologies_svgs from "@/content/technologies.json";
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
  @apply md:gap-12 md:grid-cols-6;
  img {
    @apply max-w-[50px] sm:max-w-[60px] md:max-w-[70px];
  }
}
</style>
