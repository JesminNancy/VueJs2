const temp = '<p>The country is {{ name }}</p>';
const app1 = new Vue({
    data:{
      name:'America'
  },
  template: temp
 
});

setTimeout(() => {
  app1.$mount('#app');
}, 2000);

