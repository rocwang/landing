<template>
  <section v-if="careerHistory.length">
    <h2>Career History</h2>

    <ul>
      <li v-for="item in careerHistory" :key="item.from">
        <a
          :href="item.company.website"
          target="_blank"
          rel="noreferrer noopener"
          :title="item.company.name"
        >
          <component :is="`Icon${item.company.name.replace(/ /g, '')}`" />
        </a>
        <time>{{ item.from }} &mdash; {{ item.to }}</time>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <p>{{ item.company.name }}</p>
        <p>{{ item.location }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import IconDatacom from "./IconDatacom";
import IconPocketSquare from "./IconPocketSquare";
import IconLero9 from "./IconLero9";
import IconMoustacheRepublic from "./IconMoustacheRepublic";
import IconTencent from "./IconTencent";
import IconInfosys from "./IconInfosys";

export default {
  name: "CareerHistory",
  components: {
    IconDatacom,
    IconPocketSquare,
    IconLero9,
    IconMoustacheRepublic,
    IconTencent,
    IconInfosys
  },
  props: {
    careerHistory: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style module></style>
