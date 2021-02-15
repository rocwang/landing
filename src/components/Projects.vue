<template>
  <section v-if="projects.length" :class="$style.root">
    <h2>{{ name }}</h2>

    <template v-for="(item, index) in projects" :key="index">
      <h3>{{ item.name }}</h3>

      <p :class="website">
        <strong>{{ item.website }}</strong>
      </p>

      <p>{{ item.description }}</p>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

declare interface Project {
  name: string;
  website: string;
  description: string;
}

export default defineComponent({
  name: "FeaturedProjects",
  props: {
    name: {
      type: String as PropType<string>,
    },
    projects: {
      type: Array as PropType<Project[]>,
    },
  },
});
</script>

<style module>
@media screen {
  .root {
    display: none;
  }
}
</style>
