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
    .links-wrapper.text-app-link.hidden(class="sm:flex justify-between sm:space-x-4 md:space-x-10 lg:space-x-14")
      .link(v-for="(link , i) in links" :key="i") 
        router-link(:to="link.location") {{link.title}}
      .link
        a(href="https://medium.com/@essaadihamza4" target="_blank") Blogs
      buttons-toggle-theme
      //- buttons-resume
    .menu-container(class="sm:hidden")
      v-icon(icon="mdi-menu" size="35" @click="toogleDrawer")
nav-bar-mobile-drawer(v-model:drawer="drawer")
</template>

<style lang="scss" scoped>
.my-logo {
  @apply transition-all text-[35px] font-black;
  &:hover {
    @apply rotate-0;
  }
}
.links-wrapper {
  .link {
    @apply relative;
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
.menu-container {
  .v-icon {
    @apply text-app-parag;
  }
}
</style>
