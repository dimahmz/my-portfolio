<script lang="ts" setup>
// change theme function
function changeTheme() {
  const isDarktheme = document.documentElement.classList.contains("dark");
  if (isDarktheme) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
}
</script>
<template lang="pug">
div
  input(type="checkbox" class="checkbox" @change="changeTheme" id="checkbox")
  label(for="checkbox" class="checkbox-label")
    i(class="fas fa-moon")
      v-icon(size="small"  icon="mdi-moon-waning-crescent")
    i(class="fas fa-sun")
      v-icon(size="small" icon="mdi-white-balance-sunny")
    span(class="ball")
</template>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
  z-index: 10000;
}

.checkbox-label {
  @apply bg-app-link;
  width: 60px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fa-moon {
  color: #f1c40f;
}
.fa-sun {
  color: #f39c12;
}
.checkbox-label .ball {
  @apply bg-app-surface;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 4px;
  top: 4px;
  border-radius: 50%;
  transition: transform 0.1s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(29px);
}
</style>
