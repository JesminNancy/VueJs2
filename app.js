new Vue({
    el:"#app",
    data:{
      name: 'Radifa',
      x: 0,
      y: 0
  },
  methods: {
    update() {
           return this.name = 'Nancy';
    },
    getCoord(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    }
});