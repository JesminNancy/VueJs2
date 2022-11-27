<template>
  <div>
    <compListHelper>
      <ul slot="listItem">
        <li v-for="li in list" :key="li">
          {{ li }}
        </li>
      </ul>
      <p slot="para">This is paragrap</p>
      <p :slot="loader">See You Again</p>
    </compListHelper>
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
