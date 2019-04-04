<template>
  <section class="portfolio">
    <h2>Portfolio</h2>

    <ul class="portfolio__list">
      <li class="portfolio__list-item">
        <a
          href="https://area51store.co.nz/"
          target="_blank"
          rel="noreferrer noopener"
          class="portfolio__logo-link"
          title="Area51"
        >
          <IconArea51 />
        </a>
      </li>
      <li class="portfolio__list-item">
        <a
          href="https://www.superette.co.nz/"
          target="_blank"
          rel="noreferrer noopener"
          class="portfolio__logo-link"
          title="Superette"
        >
          <IconHuckleBerry />
        </a>
      </li>
      <li class="portfolio__list-item">
        <a
          href="http://theliquoriceland.co.nz/"
          target="_blank"
          rel="noreferrer noopener"
          class="portfolio__logo-link"
          title="The Liquoriceland"
        >
          The Liquoriceland
        </a>
      </li>
      <li class="portfolio__list-item">
        <a
          href="https://www.huckleberry.co.nz/"
          target="_blank"
          rel="noreferrer noopener"
          class="portfolio__logo-link"
          title="Huckleberry"
        >
          <IconSuperette />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import IconArea51 from "./IconArea51";
import IconSuperette from "./IconSuperette";
import IconHuckleBerry from "./IconHuckleBerry";
export default {
  name: "Portfolio",
  components: {
    IconArea51,
    IconHuckleBerry,
    IconSuperette
  }
};
</script>

<style module></style>
