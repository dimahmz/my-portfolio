<script lang="ts" setup>
import projects from "@/content/projects.json";
</script>

<template lang="pug">
.mt-20
  #projects.text-center.mb-8
    h2.section-title.mb-4 Projects
    p.section-sub-title Things I've build so far (featured)
  section.project-wrapper.mx-auto.w-full.mt-16.px-2.grid.grid-cols-1.gap-y-10
    .flex-justify-center(v-for="project  in projects" )
      project-card(v-bind="project")
</template>

<style scoped>
.project-wrapper {
  @apply w-full;
  @apply sm:grid-cols-2 sm:max-w-[900px];
  @apply md:grid-cols-3;
}
</style>
