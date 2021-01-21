<template>
  <div :class="$style.root">
    <h1>{{ title }}</h1>
    <time>{{ date }}</time>

    <Post />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { attributes, VueComponentWith } from "../posts/cash-launcher.md";
import Youtube from "../components/Youtube.vue";
import { format, parseISO } from "date-fns";

export default defineComponent({
  name: "Blog",
  components: { Post: VueComponentWith({ Youtube }) },
  setup() {
    console.log(attributes);
    return {
      title: attributes.title,
      date: format(parseISO(attributes.date), "PP"),
    };
  },
});
</script>

<style module>
.root {
  color: var(--color-white);
  max-width: 768px;
  padding: 30px;
  margin: auto;
  line-height: 1.5;
}

.root > * {
  margin-bottom: 2rem;
  margin-top: 0;
}

.root > *:last-child {
  margin-bottom: 0;
}

.root h1,
.root h2,
.root h3,
.root h4,
.root h5,
.root h6 {
  line-height: 1.2;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.root h1 {
  font-size: 2.5rem;
}

.root h2 {
  font-size: 2rem;
}

.root h3 {
  font-size: 1.75rem;
}

.root h4 {
  font-size: 1.5rem;
}

.root h5 {
  font-size: 1.25rem;
}

.root h6 {
  font-size: 1rem;
}

.root a,
.root a:visited {
  color: var(--color-gold);
  text-decoration: none;
  word-wrap: break-word;
}

.root table {
  border-collapse: collapse;
}

.root thead {
  display: table-header-group;
}

.root table,
.root th,
.root td {
  border-bottom: 1px solid #000;
}

.root td,
.root th {
  padding: 8px 16px;
  page-break-inside: avoid;
}

.root code,
.root pre,
.root kbd {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}

.root code,
.root kbd {
  padding: 3px;
}

.root pre {
  margin-bottom: 2rem;
  padding: 10px;
}
.root pre code,
.root pre kbd {
  border: 0;
}

.root blockquote {
  border: 0;
  border-left: 5px solid var(--color-white);
  margin-left: 1px;
  padding: 12px 1.5rem;
}

.root blockquote > *:last-child {
  margin-bottom: 0;
}

.root img {
  max-width: 100%;
}

.root hr {
  border: 0;
  border-bottom: 2px solid var(--color-white);
  height: 0;
  margin: 2.25rem 0;
  padding: 0;
}

.root dt {
  font-weight: bold;
}

.root dd {
  margin: 0 0 0.75rem 0;
}
</style>
