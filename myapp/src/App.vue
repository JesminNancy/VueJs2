<template>
  <div>
    <compHeader
      :firstName="fName"
      :lastName="lName"
      :age="myAge"
      @updateValue="fName = $event"
    />
    <compFooter />
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
      myAge: 35,
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
