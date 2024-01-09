<template lang="pug">
section.section-wrapper.flex.flex-col-reverse.gap-y-8.px-8
  p.hero-text.w-full.text-app-title.font-black.text-lg
    | Hello, I'm Hamza
    br
    span.colored-words a Software Developer
    br
    span.quote-text "Turing Atay (tea) into code magic"
  .img-wrapper
    .colored-border
      img.rounded-full.mx-auto(src="/images/hamza-profile.jpg" alt="Hamza's profile")
</template>
<style lang="scss" scoped>
.section-wrapper {
  @apply sm:flex-row sm:flex-center-between;
}
.hero-text {
  @apply sm:text-2xl;
  @apply md:text-4xl md:leading-[45px];
  .colored-words {
    @apply bg-gradient-to-r from-app-primary to-app-secondary text-transparent bg-clip-text;
  }
  .quote-text {
    @apply text-sm sm:text-lg md:text-xl;
  }
  .quote-text::before {
    @apply absolute left-[7%] bottom-[16px];
  }
}
.img-wrapper {
  @apply flex-center w-full;

  .colored-border {
    @apply rounded-full w-52 p-2 md:p-2.5 md:w-64;
    @apply bg-gradient-to-b from-app-primary to-app-secondary;
  }
}
</style>
