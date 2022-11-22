<template>
  <div>
    <compHeader :myStudents="students" />
    <compFooter />
  </div>
</template>

<script>
import compHeader from "./Components/TheHeader.vue";
import compFooter from "./Components/TheFooter.vue";
export default {
  data() {
    return {
      students: ["Radifa", "Debi", "Esha", "Samiya"],
    };
  },
  components: {
    compHeader,
    compFooter,
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
