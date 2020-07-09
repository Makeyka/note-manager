import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


  
/*
  *  deploy to netlify
   *
    *  run command: npm run build
   * 
  *  publish directory: dist
*/