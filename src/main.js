import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/index';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import pictureRenderer from 'workerize-loader!@/services/picture-service/picture-service';

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

const renderService = pictureRenderer();
renderService.renderPrediction().then(test => console.log(test));
