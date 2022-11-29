<template>
  <div class="container">
    <ClientPage></ClientPage>
    <UserPage></UserPage>
  </div>
</template>
<script>
import ClientPage from "./Components/ClientPage.vue";
import UserPage from "./Components/UserPage.vue";
export default {
  data() {
    return {};
  },
  components: {
    ClientPage,
    UserPage,
  },
};
</script>

<style></style>
