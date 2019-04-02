import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/index';
import example from 'workerize-loader!@/services/example/example';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

const inst = example();
inst.expensive(1000).then(count => console.log(`Ran ${count} loops`));
