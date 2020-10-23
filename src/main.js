import Vue from 'vue'
import router from "./router";
import store from "./store/store";
import App from './App.vue'

import './assets/libs/arm-ui/arm-ui.min.css'
import './assets/styles/main.scss'

import './assets/libs/arm-ui/arm-ui.min.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
