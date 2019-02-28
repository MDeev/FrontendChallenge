import Vue from 'vue'
import App from './App.vue'
import router from './router'


// Using jquery
import $ from 'jquery'
global.$ = $

// Using Bootstrap
import 'bootstrap'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'

// Using axios
import axios from 'axios'
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#challenge')



// Short paragraphe filter
Vue.filter('shortPara', function(p){
  return p.slice(0, 100) + '...';
})