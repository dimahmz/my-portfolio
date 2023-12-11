<script lang="ts" setup>
import SuccessResponse from "./successResponse.vue";
import errorResponse from "./errorResponse.vue";
import { useContactStore } from "@/stores/contact";

const contactStore = useContactStore();
</script>
<template lang="pug">
section#contact.px-3.mt-20
  sections-contact-header
  .mt-4(v-if="contactStore.serverResponse")
    error-response(v-if="contactStore.responseError" v-model:show-error="contactStore.serverResponse")
    success-response(v-if="contactStore.responseSuccess" )
  .mt-16(v-else)
    p.text-center.mt-8.section-sub-title Or you can send me your message directly : 
    form(@submit.prevent="contactStore.sendToMyEmail")
      v-text-field(label='name' v-model="contactStore.name" v-bind="contactStore.nameProps"  variant="outlined")
      v-text-field(label='E-mail' v-model="contactStore.email" v-bind="contactStore.emailProps"  variant="outlined")
      v-textarea(label='Message' v-model="contactStore.message" v-bind="contactStore.messageProps"  variant="outlined")
      .flex-center
        v-btn(type='submit' :loading="contactStore.loading" variant="tonal") send
</template>

<style scoped lang="scss">
form {
  @apply mt-8 mx-auto max-w-[600px];
  .v-input {
    @apply py-4;
  }
  .v-btn {
    @apply text-lg text-white px-10 tracking-widest;
    @apply bg-gradient-to-r from-app-primary bg-transparent to-app-secondary;
  }
}
</style>
