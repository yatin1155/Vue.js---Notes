import Vue from 'vue'
import App from './App.vue'

import MyOn from './MyOn.vue'

Vue.directive('highlight',{
  bind(el, binding, vnode){
    // el.style.backgroundColor = 'pink';
    // el.style.backgroundColor = binding.value;

    var delay = 0;
    if(binding.modifiers['delay']){
      delay = 5000;
    }
    setTimeout(()=>{
      if(binding.arg == "background"){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    },delay)
   
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#myon',
  render: h => h(MyOn)
})