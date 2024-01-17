<script lan="ts" setup>
import { ref } from "vue";
import { navBarLinks as links } from "@/content/links.json";
const drawer = ref(false);
function toogleDrawer() {
  drawer.value = !drawer.value;
}
</script>

<template lang="pug">
header.flex-center.px-4.pt-7(class="sm:px-8 sm:py-4")
  nav.w-full.flex-center-between
    my-logo.my-logo
    .text-app-link.hidden(class="sm:flex justify-between sm:space-x-4 md:space-x-10 lg:space-x-14")
      router-link(v-for="(link , i) in links" :key="i" :to="link.location") {{link.title}}
      a(href="https://medium.com/@essaadihamza4" target="_blank") Blogs
      buttons-toggle-theme
      //- buttons-resume
    div(class="sm:hidden")
      v-icon.text-app-parag(icon="mdi-menu" size="35" @click="toogleDrawer")
nav-bar-mobile-drawer(v-model:drawer="drawer").overflow-hidden
</template>

<style lang="scss" scoped>
.my-logo {
  @apply transition-all text-[35px] font-black;
  &:hover {
    @apply rotate-0;
  }
}
</style>
