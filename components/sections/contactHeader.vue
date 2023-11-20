<script lang="ts" setup>
import { email } from "@/content/contact.json";
import { ref } from "vue";

const copyingMsg = (element: HTMLElement) => {
  element.setAttribute("title", "coppied");
  console.log(element.getAttribute("title"));
  setTimeout(() => {
    element.setAttribute("title", "Copy to clipboard");
  }, 3000);
};

const copyIcon = ref<HTMLElement | null>(null);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    copyingMsg(copyIcon.value);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
</script>
<template lang="pug">
.text-center
  h2.section-title Contact
  p.mt-4.section-sub-title For any question you can cotact me at this email :
  h3.my-email-style.text-sm {{email}}
    span(ref="copyIcon" @click="copyEmail" title="Copy to clipboard")
      v-icon.ml-4.mt-4(icon="mdi-content-copy" size="small")     
  p.mt-4.section-sub-title Or you can send me your message from here : 
</template>
<style scoped lang="scss">
.my-email-style {
  @apply my-4 font-black bg-gradient-to-r from-app-primary to-app-secondary text-transparent bg-clip-text;
  @apply sm:text-lg;
  @apply md:text-xl md:my-8;
  .v-icon {
    @apply text-app-title;
  }
}
</style>
