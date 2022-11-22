<template>
  <div>
    Footer
    <p>LastName: {{ lastName }}</p>
  </div>
</template>
<script>
import { bus } from "../main";

export default {
  props: {
    lastName: String,
  },
  created() {
    bus.$on("changeName", (data) => {
      this.lastName = data;
    });
  },
};
</script>

<style scoped>
div {
  color: darkorange;
  font-size: 40px;
}
</style>
