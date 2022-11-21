Vue.component('abc', {
  data() {
    return {
      name:'Radifa'
    }
  },
  template:`<p>{{name}}</p>`
})

new Vue({
  el:'#app',
});


