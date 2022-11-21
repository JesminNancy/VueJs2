<template>
  <div>
    <app-header />
    <compFooter />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import compFooter from "./Components/TheFooter.vue";
export default {
  data() {
    return {
      name: "Radifa",
      age: 8,
    };
  },
  components: {
    compFooter,
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
