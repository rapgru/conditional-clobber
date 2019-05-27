import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/main/Main.vue';
import Travel from './views/travel/Travel.vue';
import TravelResult from './views/travel/TravelResult.vue';
import Settings from './views/settings/Settings.vue';
import Impressum from './views/impressum/Impressum.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel,
    },
    {
      path: '/travel/result',
      name: 'travel-result',
      component: TravelResult,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});
