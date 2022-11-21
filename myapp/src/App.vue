<template>
  <div>
    <compHeader />
    <compFooter />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import compHeader from "./Components/TheHeader.vue";
import compFooter from "./Components/TheFooter.vue";
export default {
  data() {
    return {
      name: "Radifa",
      age: 8,
    };
  },
  components: {
    compHeader,
    compFooter,
  },
};
</script>

<style></style>
