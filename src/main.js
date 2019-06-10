import Vue from 'vue';
import App from '@/App.vue';
//import router from '@/router';
import store from '@/store/index';
import AsyncComputed from 'vue-async-computed';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import 'material-design-icons/iconfont/material-icons.css';
//import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(AsyncComputed);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
