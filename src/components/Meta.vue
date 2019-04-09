<script>
import favicon from "../assets/favicon.png";

export default {
  name: "Meta",
  render: () => null,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    }
  },
  metaInfo() {
    return {
      htmlAttrs: {
        lang: "en"
      },
      title: this.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1.0" },
        {
          name: "description",
          content: this.description
        }
      ],
      link: [
        { rel: "icon", href: favicon },
        { rel: "canonical", href: this.website }
      ]
    };
  }
};
</script>
