import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

Vue.directive('something', {
  bind(el, binding) {
    el.innerHTML = binding.value
    // el.style.color = "red"  
    // if (binding.arg === 'red') {
    //   el.style.color="red"
    // }
    // if (binding.arg === 'green') {
    //   el.style.color="green"
    // }
    if (binding.modifiers.red) {
      el.style.color = "red"
    }
    if (binding.modifiers.big) {
      el.style.fontSize = "35px"
    }
    if (binding.modifiers.blue) {
      el.style.color = "blue"
    }
    if (binding.modifiers.small) {
      el.style.fontSize = "14px"
    }
  }
})
export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
