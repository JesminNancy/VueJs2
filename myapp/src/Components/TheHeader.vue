<template>
  <div>
    <p>FirstName: {{ firstName }}</p>
    <button @click="updateName">click me</button>
    <hr />
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    firstName: String,
  },
  methods: {
    updateName() {
      bus.$emit("changeName", (this.firstName = "Jack"));
    },
  },
};
</script>

<style scoped>
div {
  color: darkred;
}
</style>
