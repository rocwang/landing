<template>
  <footer v-if="skills.length" :class="$style.root">
    Keywords for recruiters:
    {{ skills.join(", ") }}
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Skills",
  props: {
    skills: {
      type: Array as PropType<string[]>,
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
    position: absolute;
    bottom: 0;
    color: gray;
    font-size: 1rem;
  }
}
</style>
