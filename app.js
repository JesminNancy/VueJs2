new Vue({
    el:"#app",
    data:{
       user:"Jhonny",
       userAge:16,
       allowedAge:18
    },
    methods:{
      changeUser(){
        return this.user==='Jhonny' ? true : false;
      }
    }
   
});