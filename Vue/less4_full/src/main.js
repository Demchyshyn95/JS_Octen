import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'
import {store} from "./store/storee";

Vue.config.productionTip = false
Vue.use(VueResourse)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
