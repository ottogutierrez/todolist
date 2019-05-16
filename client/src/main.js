import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootswatch/dist/lux/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
