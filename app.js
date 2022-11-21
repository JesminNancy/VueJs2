const app = new Vue({
    el:"#app",
    data:{
      value:'1st'
  },
  methods: {
    changeValue() {
      app1.value = 'Updated';
    }, 
    }
});

const app1 = new Vue({
    el:"#app1",
    data:{
     value:'2nd'

  }
});