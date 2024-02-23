<script setup lang="ts">
import { navBarLinks as links } from "@/content/links.json";
import { computed } from "vue";

const props = defineProps({ drawer: Boolean });
const emit = defineEmits(["update:drawer"]);

const drawer = computed({
  get() {
    return props.drawer;
  },
  set(value) {
    return emit("update:drawer", value);
  },
});
</script>

<template lang="pug">
.layout-container(class="sm:hidden")
  v-layout
    v-navigation-drawer(v-model="drawer")
      .flex-column.h-full.pb-12
        nav.flex-column.space-y-6.py-6.h-full.text-app-text.px-4.font-semibold
          router-link(v-for="(link , i) in links" :key="i" :to="link.location" )
            p.px-16.py-2.text-center {{link.title}}
          a.px-16.py-2.text-center(href="https://medium.com/@essaadihamza4" target="_blank") Blogs
        .flex.justify-center.relative
          buttons-toggle-theme
</template>

<style lang="scss">
.layout-container {
  @apply overflow-hidden z-30;
}
.v-layout {
  @apply overflow-hidden;
}
.v-navigation-drawer {
  @apply bg-app-surface;
}
</style>
