<script lang="ts" setup>
import { ref } from "vue";
import SuccessResponse from "./successResponse.vue";
import errorResponse from "./errorResponse.vue";

const loading = ref(false);
const serverResponse = ref(false);
const responseError = ref(false);
const responseSuccess = ref(false);

function sendMessage() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    serverResponse.value = true;
    responseSuccess.value = true;
  }, 3000);
}
</script>
<template lang="pug">
section#contact.px-3.mt-20
  sections-contact-header
  .mt-4(v-if="serverResponse")
    error-response(v-if="responseError" v-model:show-error="serverResponse")
    success-response(v-if="responseSuccess" )
  .mt-16(v-else)
    p.text-center.mt-8.section-sub-title Or you can send me your message directly : 
    form(@submit.prevent="sendMessage")
      v-text-field(label='name' variant="outlined")
      v-text-field(label='E-mail' variant="outlined")
      v-textarea(label='Message' variant="outlined")
      .flex-center
        v-btn(type='submit' :loading="loading" variant="tonal") send
</template>
<style scoped lang="scss">
form {
  @apply mt-8 mx-auto max-w-[600px];
}
</style>
