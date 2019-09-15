import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {url} from '@/config.js';

Vue.config.productionTip = false;
Vue.prototype.url = url;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
