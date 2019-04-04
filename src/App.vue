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
    <QrCode />
  </div>
</template>

<script>
import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QrCode from "./components/QrCode";
import Experience from "./components/Education";
import Portfolio from "./components/Portfolio";
import SideProjects from "./components/SideProjects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";

export default {
  name: "app",
  components: { Meta, Header, Footer, QrCode, Education, Portfolio, SideProjects, Skills, Certificates, Experience }
};
</script>

<style></style>
