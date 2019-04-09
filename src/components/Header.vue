<template>
  <header class="contact">
    <!-- Video background -->
    <video muted loop playsinline class="contact__video-bg" preload="auto">
      <source :src="videoWebm" type="video/webm" />
      <source :src="videoMp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Contact -->
    <div class="contact__text">
      <!-- Name -->
      <h1 class="contact__name">
        Roc Wang<br />
        <small class="contact__tag-line"
          >&mdash; Builds artisanal websites.</small
        >
      </h1>

      <!-- Address -->
      <ul class="contact__address">
        <li class="contact__address-item">
          <a href="mailto:roc@kiwiberry.nz">
            Email: roc@kiwiberry.nz
          </a>
        </li>
        <li class="contact__address-item contact__website">
          <a href="https://kiwiberry.nz/">
            Website: kiwiberry.nz
          </a>
        </li>
        <li class="contact__address-item">
          <a
            href="https://github.com/rocwang/cv"
            class="page-footer__github"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconGithub />
            Github: rocwang
          </a>
        </li>
      </ul>
    </div>

    <QrcodeVue :value="siteUrl" />
  </header>
</template>

<script>
import videoWebm from "../assets/bungy-jump.webm";
import videoMp4 from "../assets/bungy-jump.mp4";
import IconGithub from "./IconGithub";
import QrcodeVue from "qrcode.vue";

export default {
  name: "Header",
  components: { IconGithub, QrcodeVue },
  data() {
    return {
      videoWebm,
      videoMp4,
      siteUrl: window.location.href
    };
  }
};
</script>

<style module></style>
