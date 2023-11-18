<script lang="ts" setup>
import projects from "@/content/projects.json";
</script>

<template lang="pug">
.text-center.mt-20.mb-8
  h2.section-title.mb-4 Projects
  p.section-sub-title Things I've build so far (featured)
section.project-wrapper.mx-auto.mt-16.px-2.grid.grid-cols-1.gap-y-10
  .flex-center(v-for="project  in projects" )
    project-card(v-bind="project")
</template>

<style scoped>
.project-wrapper {
  @apply max-w-[900px];
  @apply sm:grid-cols-2;
  @apply md:grid-cols-3;
}
</style>
