<template lang="pug">
v-sheet.py-18.pa-8.text-center.mx-auto( max-width='400' rounded='lg' width='100%')
  v-icon.mb-5(color='success' icon='mdi-check-circle' size='72')
  h2.text-h5.mb-6.text-app-title You message Has been sent
  p.text-app-parag
    | I appreciate your message!
    br
    | I will respond as soon as I can.
</template>
<style scoped>
.v-sheet {
  @apply bg-app-background;
}
</style>
