<template>
  <div>
    <compListHelper> </compListHelper>
  </div>
</template>

<script>
import compListHelper from "./Components/ListHelper.vue";
export default {
  data() {
    return {
      list: ["html", "css", "javaScript", "php", "laravel"],
      loader: "",
    };
  },
  components: {
    compListHelper,
  },
  created() {
    setTimeout(() => {
      this.loader = "loading";
    }, 3000);
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
p {
  color: blue;
}
</style>
