<template>
  <div>
    <p>FirstName: {{ firstName }}</p>
    <p>LastName: {{ lastName }}</p>
    <p>Age: {{ age }}</p>
    <button @click="updateName">click me</button>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String,
    age: Number,
  },
  methods: {
    updateName() {
      //
      this.$emit("updateValue", "Ripon");
    },
  },
};
</script>

<style scoped>
div {
  color: darkred;
}
</style>
