<template>
  <section class="skills">
    <h2 class="skills__title">Skills</h2>

    <section class="skills__group">
      <h3 class="skills__chart-title">Languages</h3>

      <div class="skills__chart-container">
        <canvas id="skills__chart--language" class="skills__chart"></canvas>
      </div>

      <div class="bar-chart js-bar-chart" data-label="language">
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 95%;"
          >
            HTML
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 95%;"
          >
            CSS (SASS/LESS)
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 90%;"
          >
            JS / Typescript
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 90%;"
          >
            PHP
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 70%;"
          >
            SQL
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 40%;"
          >
            Objective-C
          </div>
        </div>
      </div>
    </section>

    <section class="skills__group">
      <h3 class="skills__chart-title">Frameworks / Platforms</h3>

      <div class="skills__chart-container">
        <canvas id="skills__chart--framework" class="skills__chart"></canvas>
      </div>

      <div class="bar-chart js-bar-chart" data-label="framework">
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 90%;"
          >
            Magento 1
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 90%;"
          >
            Shopify
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 80%;"
          >
            Vue.js
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemnfoin="0"
            aria-valuemax="100"
            style="width: 70%;"
          >
            Wordpress
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 40%;"
          >
            Magento 2
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 40%;"
          >
            React
          </div>
        </div>
      </div>
    </section>

    <section class="skills__group">
      <h3 class="skills__chart-title">Tools</h3>

      <div class="skills__chart-container">
        <canvas id="skills__chart--tools" class="skills__chart"></canvas>
      </div>

      <div class="bar-chart js-bar-chart" data-label="tools">
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 95%;"
          >
            Shell / CLI
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 90%;"
          >
            Git
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 80%;"
          >
            PhpStorm
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 80%;"
          >
            Vim
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 70%;"
          >
            Webpack / Vue CLI
          </div>
        </div>
        <div class="bar-chart__bg">
          <div
            class="bar-chart__bar js-bar-chart__bar"
            role="progressbar"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 30%;"
          >
            Sketch
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style module></style>
