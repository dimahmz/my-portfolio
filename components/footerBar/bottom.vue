<script setup>
import { ref } from "vue";
import { portfolio_source_code, nuxt_link } from "@/content/links.json";

const year = ref(new Date().getFullYear());
</script>

<template lang="pug">
.footer-text
    p.text-center.mt-3
      | built using
      a.ml-2(:href='nuxt_link' target="_blank").underline Nuxt
      | 
      br
      |
      span.text-xs.italic (without any love!)
    p.mt-4
      v-icon(icon="mdi-open-source-initiative")
      | &nbsp;{{year}}
      span.gradian-text-color.underline
        a.ml-2(:href="portfolio_source_code" target="_blank") Source Code
</template>

<style scoped lang="scss">
.footer-text {
  @apply text-app-parag text-sm text-center;
  @apply md:text-[16px];
}
</style>
