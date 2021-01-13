<template>
  <section v-if="projects.length" :class="$style.root">
    <h2>Featured Projects</h2>

    <template v-for="(item, index) in projects" :key="index">
      <h3>
        <a :href="item.website">{{ item.name }}</a>
      </h3>

      <p>{{ item.description }}</p>
    </template>
  </section>
</template>

<script lang="ts">
import Area51 from "../icons/Area51.vue";
import { defineComponent, PropType } from "vue";

declare interface Project {
  name: string;
  website: string;
  description: string;
}

export default defineComponent({
  name: "FeaturedProjects",
  components: {
    Area51,
  },
  props: {
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
