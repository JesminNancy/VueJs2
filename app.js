new Vue({
    el:"#app",
    data:{
      name: 'Radifa',
      x: 0,
      y: 0
  },
  methods: {
    update(name) {
        this.name = name;
    },
    getCoord(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    handleForm() {
      console.log('Form submit');
    },
    }
});