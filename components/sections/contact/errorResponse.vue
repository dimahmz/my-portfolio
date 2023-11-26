<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps(["showError"]);
const emit = defineEmits(["update:showError"]);

computed({
  get() {
    return props.showError;
  },
  set(value) {
    emit("update:showError", value);
  },
});
</script>

<template lang="pug">
v-sheet.pa-8.text-center.mx-auto( max-width='400' rounded='lg' width='100%')
  v-icon.mb-5(color='warning' icon='mdi-alert-circle' size='72')
  h2.text-h5.mb-3 An error has occurred!
  p.text-medium-emphasis.text-body-2
    | Please check your connection or try again
    br
  v-divider.mb-5
  .text-center
    v-btn(class="text-none" color="black" variant="flat" @click="emit('update:showError', false)") Try again
  </template>
