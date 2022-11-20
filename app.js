new Vue({
    el:"#app",
    data:{
      title:"Google",
      isItTrue:true,
      cars:['Ford','Corolla','Toyata'],
      robots:{
        name:'Franky'
      },
      greeting(){
        return "Hello World";
      }
    }
});