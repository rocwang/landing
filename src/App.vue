<template>
  <HtmlHead :title="name" :description="description" :website="website" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HtmlHead from "./components/HtmlHead.vue";
import { name, description, website } from "./profile.json";

export default defineComponent({
  name: "App",
  components: { HtmlHead },
  setup() {
    return {
      name,
      description,
      website,
    };
  },
});
</script>

<style>
@media screen {
  body {
    background-color: var(--color-black);
  }
}

@media print {
  html {
    height: 100%;
  }

  body {
    display: grid;
    grid-template:
      "hero hero" auto
      "career projects" 1fr
      "skills skills" auto
      / 1fr 1fr;
    grid-gap: 0 30px;
    height: 100%;
  }
}
</style>
