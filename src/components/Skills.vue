<template>
  <footer v-if="skills.length" :class="$style.root">
    My Skills: {{ skills.join(", ") }}
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
    color: gray;
    font-size: 1rem;
    grid-area: skills;
  }
}
</style>
