import { defineComponent, PropType, h } from "vue";
import { Person, WithContext } from "schema-dts";

export default defineComponent({
  name: "JsonLdPerson",
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    email: {
      type: String as PropType<string>,
      required: true,
    },
    tel: {
      type: String as PropType<string>,
      required: true,
    },
    website: {
      type: String as PropType<string>,
      required: true,
    },
    github: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
  },
  render() {
    const person: WithContext<Person> = {
      "@context": "https://schema.org",
      "@type": "Person",
      email: this.email,
      name: this.name,
      telephone: this.tel,
      url: this.website,
      sameAs: [this.github],
      description: this.description,
    };

    return h(
      "script",
      {
        type: "application/ld+json",
      },
      JSON.stringify(person)
    );
  },
});
