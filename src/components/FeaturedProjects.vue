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
          <component :is="`Icon${item.name.replace(/ /g, '')}`" />
        </a>
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import IconArea51 from "./IconArea51";
import IconSuperette from "./IconSuperette";
import IconSamanthaSung from "./IconHuckleBerry";
export default {
  name: "FeaturedProjects",
  components: {
    IconArea51,
    IconSamanthaSung,
    IconSuperette
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
