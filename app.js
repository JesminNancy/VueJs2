new Vue({
  el: '#app',
  data: {
    name:'Google',
  },
  methods: {
    updateName() {
      this.name = 'Facebook';
    },
    killInstance() {
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log('before create');
  },
  created() {
    console.log('created');
  },
    beforeMount() {
    console.log('before mounted');
  },
   mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before updated');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('before destroy');
  },
  destroyed() {
    console.log('destroyed');
  },
});


