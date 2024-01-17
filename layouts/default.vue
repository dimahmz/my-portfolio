<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    console.log("shoud be dark");
    document.documentElement.classList.add("dark");
  } else {
    console.log("shoud be ligth");
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template lang="pug">
.bg-app-surface
  SpeedInsights
  slot
</template>
