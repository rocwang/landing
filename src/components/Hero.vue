<template>
  <header :class="$style.root">
    <video muted loop playsinline autoplay :class="$style.video" preload="auto">
      <source :src="videoH265" type="video/mp4; codecs=hevc" />
      <source :src="videoH264" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <h1 :class="$style.title">
      <span :class="$style.name">Roc Wong</span>
      <small :class="$style.tagLine"> &mdash; artisanal web developer. </small>
    </h1>

    <a href="mailto:roc@kiwiberry.nz" :class="$style.email">
      roc@kiwiberry.nz
    </a>
  </header>
</template>

<script>
import videoH264 from "../assets/bungy-jump.h264.mp4";
import videoH265 from "../assets/bungy-jump.h265.mp4";
import Github from "../icons/Github.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: { Github },
  setup() {
    return {
      videoH264,
      videoH265,
      siteUrl: window.location.href,
    };
  },
});
</script>

<style module>
.root {
  display: grid;
  width: 100vw;
  height: 100vh;
  place-content: stretch;
  position: relative;
}

.video {
  grid-area: 1/1/2/2;
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 100%;
}

.root::before {
  content: "";
  grid-area: 1/1/2/2;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAHElEQVQIW2OUk1P4/+jRA0YGBgYGMAETAHNgAgDNXglfa/ch1wAAAABJRU5ErkJggg==);
  background-size: auto auto;
  background-position: left top;
  background-repeat: repeat;
  z-index: 5;
}

.title {
  grid-area: 1/1/2/2;
  place-self: center start;
  z-index: 10;
  margin-left: 10%;
}

.name {
  display: block;
  font-weight: 300;
  font-size: 36px;
  color: var(--color-white);
  line-height: 1.4;
}

@media screen and (min-width: 768px) {
  .name {
    font-weight: 100;
    font-size: 84px;
  }
}

@media screen and (min-width: 992px) {
  .name {
    font-size: 140px;
  }
}

.tagLine {
  display: block;
  color: #d9cb9e;
  font-size: 14px;
}

@media screen and (min-width: 768px) {
  .tagLine {
    font-weight: 100;
    font-size: 54px;
  }
}

.email {
  color: #d9cb9e;
  align-self: flex-end;
  position: absolute;
  z-index: 15;
  right: 20px;
  bottom: 20px;
}
</style>
