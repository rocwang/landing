<template>
  <header class="contact">
    <!-- Video background -->
    <video autoplay muted loop playsinline class="contact__video-bg" preload="auto">
      <source src="video/bungy-jump.webm" type="video/webm" />
      <source src="video/bungy-jump.mp4" type="video/mp4" />
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
            <svg class="icon">
              <use xlink:href="#icon-envelope"></use>
            </svg>
            roc@kiwiberry.nz
          </a>
        </li>
        <li class="contact__address-item contact__website">
          <a href="https://kiwiberry.nz/">
            <svg class="icon">
              <use xlink:href="#icon-globe"></use>
            </svg>
            kiwiberry.nz
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style module></style>
