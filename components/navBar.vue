<template lang="pug">
header.flex-center.px-4.py-2(class="sm:px-8 sm:py-4")
  nav.flex-center-between.w-full(class="max-w-[1000px]")
    img(src="/images/hamza-logo.svg" alt="portfolio's logo")
    div.hidden(class="sm:flex justify-between sm:space-x-4 md:space-x-10 lg:space-x-14")
      router-link(v-for="(link , i) in links" :key="i" :to="link.location") {{link.title}}
      buttons-resume
    div(class="sm:hidden")
      v-icon.text-app-parag(icon="mdi-menu" size="35" @click="toogleDrawer")
div(class="sm:hidden")
  v-layout
    v-navigation-drawer(v-model="drawer")
      .flex-column.h-full.pb-12
        nav.flex-column.space-y-6.py-6.h-full.text-app-text 
          router-link(v-for="(link , i) in links" :key="i" :to="link.location" )
            p.px-16.py-2.text-center(class="hover:bg-app-background") {{link.title}}
        .flex-center
          buttons-resume
</template>

<script lan="ts" setup>
import { ref } from "vue";
const drawer = ref(false);

const links = reactive([
  {
    title: "Home",
    location: "/",
  },
  {
    title: "Tech Stack",
    location: "#skills",
  },
  {
    title: "Projects",
    location: "#projects",
  },
  {
    title: "Contact",
    location: "#contact",
  },
]);
function toogleDrawer() {
  drawer.value = !drawer.value;
}
</script>
