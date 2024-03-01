import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", () => {
  // state
  const themeBtnChecked = ref(false);

  return {
    themeBtnChecked,
  };
});
