<template>
  <section v-if="certification.length">
    <h2>Certification</h2>

    <ul>
      <li v-for="item in certification" :key="item.title">
        <a
          :href="item.website"
          target="_blank"
          rel="noreferrer noopener"
          :title="item.title"
        >
          <component :is="`Icon${item.title.replace(/ /g, '')}`" />
        </a>
        <h3>{{ item.title }}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import IconMagentoCertifiedDeveloper from "./IconMagentoCertifiedDeveloper";

export default {
  name: "Certification",
  components: { IconMagentoCertifiedDeveloper },
  props: {
    certification: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style module></style>
