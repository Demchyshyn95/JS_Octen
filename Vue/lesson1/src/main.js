import Vue from 'vue'
import myApp from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(myApp),
}).$mount('#app')
