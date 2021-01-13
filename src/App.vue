<template>
  <HtmlHead :title="name" :description="description" :website="website" />
  <Hero :name="name" :email="email" :tel="tel" />
  <Career :career="career" />
  <Projects :projects="projects" />
  <Skills :skills="skills" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HtmlHead from "./components/HtmlHead.vue";
import Hero from "./components/Hero.vue";
import Career from "./components/Career.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import {
  name,
  email,
  tel,
  description,
  website,
  career,
  projects,
  skills,
} from "./profile.json";

export default defineComponent({
  name: "app",
  components: {
    HtmlHead,
    Hero,
    Career,
    Projects,
    Skills,
  },
  setup() {
    return {
      name,
      email,
      tel,
      description,
      website,
      career,
      projects,
      skills,
    };
  },
});
</script>

<style>
:root {
  --color-red: #dc3522;
  --color-gold: #d9cb9e;
  --color-light-gray: #374140;
  --color-dark-gray: #2a2c2b;
  --color-black: #1e1e20;
  --color-white: #fff;
}

@media screen {
  body {
    background-color: var(--color-black);
  }
}

@media print {
  body {
    padding: 0;
    display: grid;
    grid-template:
      "hero hero" auto
      "career projects" auto
      / 1fr 1fr;
    grid-gap: 0 30px;
  }
}
</style>
