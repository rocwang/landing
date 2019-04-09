<template>
  <section v-if="projects.length">
    <h2>Side Projects</h2>

    <ul>
      <li v-for="item in projects" :key="item.name">
        <h3>
          <a :href="item.website" target="_blank" rel="noreferrer noopener">
            {{ item.name }}
          </a>
        </h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "SideProjects",
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style module></style>
