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
          <component :is="item.company.name.replace(/ /g, '')" />
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
import Datacom from "../icons/Datacom";
import PocketSquare from "../icons/PocketSquare";
import Lero9 from "../icons/Lero9";
import MoustacheRepublic from "../icons/MoustacheRepublic";
import Tencent from "../icons/Tencent";
import Infosys from "../icons/Infosys";

export default {
  name: "CareerHistory",
  components: {
    Datacom,
    PocketSquare,
    Lero9,
    MoustacheRepublic,
    Tencent,
    Infosys
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
