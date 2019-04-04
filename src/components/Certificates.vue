<template>
  <section class="certificates">
    <h2>Certification</h2>

    <ul class="certificates__list">
      <li class="certificates__list-item">
        <div class="certificates__logo-container">
          <a
            href="http://www.magentocommerce.com/certification/directory/dev/1711726/"
            title="Magento Certified Developer"
            class="certificates__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconMagento />
          </a>
        </div>

        <div class="certificates__description">
          <h4 class="media-heading">Magento Certified Developer</h4>
          <span class="text-muted">May 2014</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import IconMagento from "./IconMagento";

export default {
  name: "Certificates",
  components: { IconMagento }
};
</script>

<style module></style>
