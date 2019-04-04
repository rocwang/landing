<script>
import favicon from "../assets/favicon.png";

export default {
  name: "Meta",
  render: () => null,
  metaInfo: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Roc Wang",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0" },
      {
        name: "description",
        content:
          "Roc is certified Magento Developer with extensive development experience on online retailing. As a full stack developer, Roc is able to deliver end to end website solutions for you, from cutting edge CSS tricks to high performance server infrastructure."
      }
    ],
    link: [{ rel: "icon", href: favicon }, { rel: "canonical", href: "https://kiwiberry.nz/" }]
  }
};
</script>
