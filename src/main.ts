import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
const pages = import.meta.globEager("./pages/*.vue");

const app = createApp(App);

app.use(
  createRouter({
    history: createWebHistory(),
    routes: Object.entries(pages)
      .map(([filePath, component]) => {
        const matches = filePath.match(/(\w+)\.vue$/);

        if (matches && matches[1]) {
          if (matches[1] === "Home") {
            matches[1] = "";
          }

          return {
            path: `/${matches[1].toLowerCase()}`,
            component: component.default,
          };
        } else {
          return {
            path: "",
            component: component.default,
          };
        }
      })
      .filter(({ path }) => path !== ""),
  })
);

app.mount(document.body);
