<template>
  <div class="container">
    <button @click="componentToRender = 'compHome'">Home</button>
    <button @click="componentToRender = 'compContact'">Contact</button>
    <button @click="componentToRender = 'compAbout'">About</button>
    <keep-alive>
      <component :is="componentToRender"></component>
    </keep-alive>
  </div>
</template>
<script>
import compHome from "./Components/TheHome.vue";
import compAbout from "./Components/TheAbout.vue";
import compContact from "./Components/TheContact.vue";
export default {
  data() {
    return {
      componentToRender: "compContact",
    };
  },
  components: {
    compHome,
    compAbout,
    compContact,
  },
};
</script>
