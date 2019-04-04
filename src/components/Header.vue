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
        <small class="contact__tag-line">&mdash; Builds artisanal websites.</small>
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
      </ul>
    </div>
  </header>
</template>

<script>
import videoWebm from "../assets/bungy-jump.webm";
import videoMp4 from "../assets/bungy-jump.mp4";

export default {
  name: "Header",
  data() {
    return {
      videoWebm,
      videoMp4
    };
  }
};
</script>

<style module></style>
