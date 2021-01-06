<template>
  <HtmlHead :title="name" :description="description" :website="website" />
  <Hero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HtmlHead from "./components/HtmlHead.vue";
import Hero from "./components/Hero.vue";
import { name, description, website } from "./profile.json";

export default defineComponent({
  name: "app",
  components: {
    HtmlHead,
    Hero,
  },
  setup() {
    return {
      name,
      description,
      website,
    };
  },
});
</script>

<style></style>
