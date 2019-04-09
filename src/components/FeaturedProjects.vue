<template>
  <section v-if="projects.length">
    <h2>Featured Projects</h2>

    <ul>
      <li v-for="item in projects" :key="item.name">
        <a
          :href="item.name"
          target="_blank"
          rel="noreferrer noopener"
          :title="item.website"
        >
          <component :is="item.name.replace(/ /g, '')" />
        </a>
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import Area51 from "../icons/Area51";
import Superette from "../icons/Superette";
import SamanthaSung from "../icons/HuckleBerry";

export default {
  name: "FeaturedProjects",
  components: {
    Area51,
    SamanthaSung,
    Superette
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style module></style>
