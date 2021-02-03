<template>
  <section v-if="projects.length" :class="$style.root">
    <h2>{{ name }}</h2>

    <template v-for="(item, index) in projects" :key="index">
      <h3>
        <a :href="item.website">{{ item.name }}</a>
      </h3>

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

@media print {
  .root {
    grid-area: var(--grid-area);
  }

  .root:nth-child(3) {
    padding-bottom: 15px;
    border-bottom: 1px solid var(--color-black);
  }
}
</style>
