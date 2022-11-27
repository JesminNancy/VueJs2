<template>
  <div>
    <slot name="listItem"></slot>
    I am a list helper
    <slot name="para"></slot>
    <slot name="loading">Loading...</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
ul li {
  color: brown;
}
</style>
