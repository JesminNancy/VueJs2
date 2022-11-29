<template>
  <div>
    <p>{{ text }}</p>
    <ul>
      <li v-for="car in cars" :key="car">
        {{ car }}
      </li>
    </ul>
  </div>
</template>
<script>
import { carMixins } from "./mixin";
export default {
  data() {
    return {
      text: "Hello World",
    };
  },
  mixins: [carMixins],
};
</script>
