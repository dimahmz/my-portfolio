<script lang="ts" setup>
import { reactive } from "vue";
import SuccessResponse from "./successResponse.vue";
import errorResponse from "./errorResponse.vue";
import sendMessage from "@/API/contact";
import type { serverResponseType } from "@/types/response";

const loading = ref(false);

const serverResponse = ref(false);
const responseError = ref(false);
const responseSuccess = ref(false);

const contact = reactive({
  name: "",
  email: "",
  message: "",
});

async function submit() {
  loading.value = true;

  const response: serverResponseType = await sendMessage(
    contact.email,
    contact.name,
    contact.message
  );

  loading.value = false;

  if (!response.success) {
    alert(response.message);
    return;
  }
  serverResponse.value = true;
  responseSuccess.value = true;
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
    form(@submit.prevent="submit")
      v-text-field(label='name' v-model="contact.name" variant="outlined")
      v-text-field(label='E-mail' v-model="contact.email" variant="outlined")
      v-textarea(label='Message' v-model="contact.message" variant="outlined")
      .flex-center
        v-btn(type='submit' :loading="loading" variant="tonal") send
</template>

<style scoped lang="scss">
form {
  @apply mt-8 mx-auto max-w-[600px];
}
</style>
