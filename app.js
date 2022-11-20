new Vue({
    el:"#app",
    data:{
      return:{
        basemultiplier: 5,
        baseValue: 2
      }
    },
    methods:{
      add(a,b,c){
        return a+b+c;
      },
      multiply(num){
        return num * this.basemultiplier;
      },
    },
});