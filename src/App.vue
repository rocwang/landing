<template>
  <div id="app" class="bg">
    <Meta />
    <Header />
    <div class="container">
      <Experience />
      <Portfolio />
      <SideProjects />
      <Skills />
      <Education />
      <Certificates />
    </div>

    <Footer />
    <IconQrCode />
  </div>
</template>

<script>
import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import SideProjects from "./components/SideProjects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import IconQrCode from "./components/IconQrCode";

export default {
  name: "app",
  components: { Meta, Header, Footer, IconQrCode, Education, Portfolio, SideProjects, Skills, Certificates, Experience }
};
</script>

<style></style>
