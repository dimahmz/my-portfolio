<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  technologies: string[];
  url: string;
  repoLink: string;
  imgPath: string;
}>();
</script>

<template lang="pug">
v-card.mx-auto
  v-img(:src='imgPath' cover)
  p.card-title.mt-4.text-center.text-app-link.font-semibold {{ title }}
  p.card-description.mt-2.px-3.text-xs.text-center.text-app-parag  {{ description }} 
  .techs-section.flex.w-full.px-2.text-xs.mt-3
    p.title.text-app-title.font-semibold.whitespace-nowrap Tech Stack :&nbsp;
    .flex.space-x-2.flex-wrap.text-app-primary
      p(v-for='technology in technologies') {{ technology }}
  v-card-actions
    a(:href="url" target="_blank")
      v-icon(icon="mdi-link-variant")
      span.underline Live Preview
    a(:href="url" target="_blank")
      v-icon(icon="mdi-github")
      span.underline View Code 
    v-spacer
</template>

<style lang="scss" scoped>
.v-card {
  @apply rounded-2xl max-w-[210px];
  @apply sm:max-w-[230px];
  @apply md:max-w-[270px];

  .v-img {
    @apply md:h-[175px];
  }

  .card-title {
    @apply md:text-lg md:font-black md:mt-5;
  }
  .card-description {
    @apply md:mt-3 md:text-sm;
  }
  .techs-section {
    @apply sm:text-sm;
    .title {
      @apply sm:font-bold;
    }
  }

  .v-card-actions {
    @apply px-1 flex-center;
    a {
      @apply w-full text-center block text-app-link whitespace-nowrap;
      .v-icon {
        @apply text-[18px];
        @apply sm:text-[22px];
      }
      span {
        @apply ml-0.5 text-[12px];
        @apply sm:ml-2 sm:text-[14px];
      }
    }
  }
}
</style>
