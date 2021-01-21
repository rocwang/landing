<template>
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
  <JsonLdPerson
    :name="name"
    :email="email"
    :tel="tel"
    :website="website"
    :github="github"
    :description="description"
  />
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import Hero from "../components/Hero.vue";
import Career from "../components/Career.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import JsonLdPerson from "../components/JsonLdPerson";
import {
  career,
  description,
  email,
  github,
  name,
  projects,
  skills,
  tagline,
  tel,
  website,
} from "../profile.json";

export default defineComponent({
  name: "Home",
  components: {
    Hero,
    Career,
    Projects,
    Skills,
    JsonLdPerson,
  },
  setup() {
    document.querySelector("html").classList.add("home");
    onUnmounted(() => document.querySelector("html").classList.remove("home"));

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
      github,
    };
  },
});
</script>

<style>
@media print {
  html.home {
    height: 100%;
  }

  html.home body {
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
