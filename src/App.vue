<template>
  <div id="app" class="bg">
    <Meta :title="name" :description="description" :website="website" />
    <Header />
    <CareerHistory :careerHistory="careerHistory" />
    <FeaturedProjects :projects="featuredProjects" />
    <SideProjects :projects="sideProjects" />
    <Skills :skills="skills" />
    <Certification :certification="certification" />
  </div>
</template>

<script>
import Meta from "./components/Meta";
import Header from "./components/Header";
import CareerHistory from "./components/CareerHistory";
import FeaturedProjects from "./components/FeaturedProjects";
import SideProjects from "./components/SideProjects";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import profile from "./profile";

export default {
  name: "app",
  components: {
    Meta,
    Header,
    FeaturedProjects,
    SideProjects,
    Skills,
    Certification,
    CareerHistory
  },
  data() {
    return {
      ...profile
    };
  }
};
</script>

<style></style>
