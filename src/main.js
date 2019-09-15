import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {url} from '@/config.js';

Vue.config.productionTip = false;
Vue.prototype.url = url;
Vue.prototype.axios = axios;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
