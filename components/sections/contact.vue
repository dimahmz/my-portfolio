<script setup></script>
<template lang="pug">
section.px-3
  sections-contact-header
  form
    v-text-field( label='Name')
    v-text-field( label='E-mail')
    v-textarea( label='Message')
    .flex-center
      v-btn(type='submit') send
</template>
<style scoped lang="scss">
form {
  @apply mt-8 mx-auto max-w-[600px];
}
</style>
