<template>
  <div class="container">
    <transition
      name="appear"
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideInRight"
    >
      <div class="p-3 mb-3 bg-success text-white" v-if="display">Hello</div>
    </transition>

    <button @click="display = !display" class="btn btn-primary">Toggle</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      display: false,
    };
  },
};
</script>

<style></style>
