<template>
  <footer :class="$style.root">
    This CV is built with TypeScript, Vue.js and Vite. The source code is
    available at https://github.com/rocwang/landing
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Footnote",
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
    position: fixed;
    bottom: 0;
  }
}
</style>
