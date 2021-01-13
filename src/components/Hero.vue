<template>
  <header :class="$style.root">
    <video muted loop playsinline autoplay :class="$style.video" preload="auto">
      <source :src="videoH265" type="video/mp4; codecs=hvc1" />
      <source :src="videoH264" type="video/mp4; codecs=avc1.64001E" />
    </video>

    <h1 :class="$style.title">
      <span :class="$style.name">{{ name }}</span>
      <small :class="[$style.tagLine, 'no-print']">
        &mdash; {{ tagline }}
      </small>
    </h1>

    <p :class="$style.email">
      <a href="mailto:roc@kiwiberry.nz">
        {{ email }}
      </a>
      <a :href="`tel:${tel}`" :class="$style.noScreen">
        &nbsp;
        {{ tel }}
      </a>
      <a href="https://kiwiberry.nz/" :class="[$style.noScreen, 'no-reformat']">
        &nbsp; https://kiwiberry.nz/
      </a>
    </p>

    <p :class="$style.noScreen">{{ description }}</p>
  </header>
</template>

<script lang="ts">
import videoH264 from "../assets/bungy-jump.h264.mp4";
import videoH265 from "../assets/bungy-jump.h265.mp4";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    name: {
      type: String as PropType<string>,
    },
    email: {
      type: String as PropType<string>,
    },
    tel: {
      type: String as PropType<string>,
    },
    tagline: {
      type: String as PropType<string>,
    },
    description: {
      type: String as PropType<string>,
    },
  },
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
@media screen {
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
    color: var(--color-gold);
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    .tagLine {
      font-weight: 100;
      font-size: 54px;
    }
  }

  .email {
    color: var(--color-gold);
    align-self: flex-end;
    position: absolute;
    z-index: 15;
    right: 20px;
    bottom: 20px;
  }

  .noScreen {
    display: none;
  }
}

@media print {
  .root {
    grid-area: hero;
  }

  .video {
    display: none;
  }
}
</style>
