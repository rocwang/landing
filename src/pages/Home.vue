<template>
  <Hero
    :name="name"
    :email="email"
    :tel="tel"
    :tagline="tagline"
    :description="description"
  />
  <Career :career="career" />
  <Projects
    name="Featured Commercial Projects"
    :projects="commercialProjects"
    class="break-before"
  />
  <Projects name="Featured Hobby Projects" :projects="hobbyProjects" />
  <Skills :skills="skills" />
  <Footnote />
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
import Footnote from "../components/Footnote.vue";
import JsonLdPerson from "../components/JsonLdPerson";
import {
  career,
  description,
  email,
  github,
  name,
  commercialProjects,
  hobbyProjects,
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
    Footnote,
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
      commercialProjects,
      hobbyProjects,
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
    padding-bottom: 4rem;
  }
}
</style>
