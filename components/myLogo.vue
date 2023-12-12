<template lang="pug" scoped>
#logo-container
  #logo.gradian-text-color &lt;hamza&#47;&gt;
</template>
<style lang="scss">
#logo-container {
  @apply py-1;
  #logo {
    cursor: pointer;
    // &::before {
    //   @apply content-[''] absolute w-full h-[3px] bg-gradient-to-r from-app-primary to-app-secondary bottom-0 left-0;
    // }

    // &::after {
    //   @apply content-[''] absolute w-full bg-gradient-to-r from-app-secondary to-app-primary h-[2px] top-0 left-0;
    // }
  }
}
</style>
