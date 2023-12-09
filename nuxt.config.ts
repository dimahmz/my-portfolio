import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  runtimeConfig: {
    emailUser: "",
    emailPass: "",
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  css: ["~/assets/css/main.css", "~/assets/css/classes.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@pinia/nuxt",
    ["@nuxtjs/google-fonts", { families: { Poppins: true } }],
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
          })
        );
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
