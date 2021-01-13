<template>
  <HtmlHead :title="name" :description="description" :website="website" />
  <Hero
    :name="name"
    :email="email"
    :tel="tel"
    :tagline="tagline"
    :description="description"
  />
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
  tagline,
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
      tagline,
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
@media screen {
  body {
    background-color: var(--color-black);
  }
}

@media print {
  html {
    height: 100%;
  }

  body {
    display: grid;
    grid-template:
      "hero hero" auto
      "career projects" 1fr
      "skills skills" auto
      / 1fr 1fr;
    grid-gap: 0 30px;
    height: 100%;
  }
}
</style>
