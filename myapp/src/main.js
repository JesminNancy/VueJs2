import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

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

Vue.filter('removeText', (value) => {
  return value.slice(2);
})

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
