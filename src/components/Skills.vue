<template>
  <section v-if="skills.length">
    <h2>Skills</h2>

    <div v-for="skill in skills" :key="skill.category">
      <h3>{{ skill.category }}</h3>
      <ul v-if="skill.items.length">
        <li v-for="item in skill.items" :key="item.name">
          <label>{{ item.name }}</label>
          <meter
            min="0"
            max="100"
            low="33"
            high="66"
            optimum="80"
            :value="item.value"
          >
            {{ item.value }} / 100
          </meter>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style module></style>
