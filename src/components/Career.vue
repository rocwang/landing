<template>
  <section v-if="career.length" :class="$style.root">
    <h2>Career</h2>

    <template v-for="(item, index) in career" :key="index">
      <h3>{{ item.title }} @ {{ item.company }}</h3>

      <p>
        <small>
          <time>{{ item.from }} &mdash; {{ item.to }}</time>
          &nbsp;
          <address :class="$style.address">{{ item.location }}</address>
        </small>
      </p>

      <p>{{ item.description }}</p>
    </template>
  </section>
</template>

<script lang="ts">
import PocketSquare from "../icons/PocketSquare.vue";
import MoustacheRepublic from "../icons/MoustacheRepublic.vue";
import Tencent from "../icons/Tencent.vue";
import Infosys from "../icons/Infosys.vue";
import { defineComponent, PropType } from "vue";

declare interface Career {
  from: string;
  to: string;
  company: string;
  location: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: "Career",
  components: {
    PocketSquare,
    MoustacheRepublic,
    Tencent,
    Infosys,
  },
  props: {
    career: {
      type: Array as PropType<Career[]>,
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
  .address {
    display: inline;
    font-style: normal;
  }
}
</style>
