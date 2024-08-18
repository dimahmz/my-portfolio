import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", () => {
  // state
  const themeBtnToggeledToDark = ref(<Boolean>false);

  function isPageShouldBeInDarkMode() {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }

  function togglePageTheme() {
    const isDarktheme = document.documentElement.classList.contains("dark");
    if (isDarktheme) {
      document.documentElement.classList.remove("dark");
      themeBtnToggeledToDark.value = false;
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      themeBtnToggeledToDark.value = true;
    }
  }

  return {
    togglePageTheme,
    themeBtnToggeledToDark,
    isPageShouldBeInDarkMode,
  };
});
