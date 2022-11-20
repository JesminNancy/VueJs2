new Vue({
    el:"#app",
    data:{
      name:'Radifa',
  },
  methods: {
    update() {
      setTimeout(() => {
        return this.name = 'Jesmin';
      },2000)
      },
    }
});