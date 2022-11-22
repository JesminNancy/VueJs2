<template>
  <div>
    <compHeader :firstName="fName" />
    <compFooter :lastName="lName" />
  </div>
</template>

<script>
import compHeader from "./Components/TheHeader.vue";
import compFooter from "./Components/TheFooter.vue";
export default {
  data() {
    return {
      fName: "Jhony",
      lName: "Doe",
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
