<template>
  <div v-html="html" :class="$style.root"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { html } from "../posts/cash-launcher.md";

export default defineComponent({
  name: "Post",
  setup() {
    return { html };
  },
});
</script>

<style module>
.root {
  color: var(--color-white);
  max-width: 768px;
  padding: 30px;
  margin: auto;
  line-height: 1.4;
}

.root p,
.root blockquote,
.root table,
.root ul,
.root ol,
.root dl {
  margin-bottom: 0.75rem;
  margin-top: 0;
}

.root p:last-child,
.root ul:last-child,
.root ol:last-child {
  margin-bottom: 0;
}

.root h1,
.root h2,
.root h3,
.root h4,
.root h5,
.root h6 {
  line-height: 1.2;
  margin-top: 1.5rem;
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
  font-size: 85%;
}

.root code,
.root kbd {
  padding: 3px;
}

.root pre {
  margin-bottom: 1.5rem;
  padding: 10px 12px;
}
.root pre code,
.root pre kbd {
  border: 0;
}

.root blockquote {
  border: 0;
  border-left: 5px solid #bbb;
  margin-left: 1px;
  padding: 12px 1.5rem;
}

.root blockquote:first-child {
  margin-top: 0;
}
.root blockquote p:last-child,
.root blockquote ul:last-child,
.root blockquote ol:last-child {
  margin-bottom: 0;
}
.root blockquote footer {
  display: block;
  font-size: 80%;
}

.root img {
  border: 0;
  display: block;
  max-width: 100% !important;
  vertical-align: middle;
}

.root hr {
  border: 0;
  border-bottom: 2px solid #bbb;
  height: 0;
  margin: 2.25rem 0;
  padding: 0;
}

.root dt {
  font-weight: bold;
}

.root dd {
  margin: 0;
  margin-bottom: 0.75rem;
}

.root abbr[title],
.root acronym[title] {
  border: 0;
  text-decoration: none;
}
</style>
