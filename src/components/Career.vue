<template>
  <section v-if="career.length" :class="$style.root">
    <h2>Career</h2>

    <template v-for="(item, index) in career" :key="index">
      <h3>{{ item.title }} @ {{ item.company }}</h3>

      <p :class="$style.timeAddr">
          <time :class="$style.time">
            {{ item.from }} &mdash; {{ item.to }}
          </time>
          &nbsp;
          <address :class="$style.address">{{ item.location }}</address>
      </p>

      <p>{{ item.description }}</p>
    </template>
  </section>
</template>

<script lang="ts">
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
  .root {
    grid-area: career;
  }

  .timeAddr {
    font-size: 1.2rem;
    font-style: normal;
  }

  .timeAddr * {
    display: inline;
  }
}
</style>
