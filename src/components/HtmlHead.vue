<template>
  <teleport to="head" v-if="!serverRendered">
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta name="theme-color" content="#1e1e20" />
    <meta name="description" :content="description" />
    <meta name="canonical" :href="website" />
    <title>{{ title }}</title>
    <link rel="icon" :href="favicon" />
    <link rel="author" :href="website" />
  </teleport>
</template>

<script>
import favicon from "../assets/favicon.png";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HtmlHead",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      favicon,
      serverRendered: document.body.dataset.serverRendered === "true",
    };
  },
});
</script>
