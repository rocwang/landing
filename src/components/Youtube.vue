<template>
  <div :class="$style.root">
    <iframe
      :src="`https://www.youtube.com/embed/${id}`"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      :class="$style.iframe"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Youtube",
  props: {
    id: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style module>
.root {
  position: relative;
  padding-top: calc(9 / 16 * 100%);
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
