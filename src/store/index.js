import Vue from 'vue';
import Vuex from 'vuex';

import general from '@/store/modules/general';
import prediction from '@/store/modules/prediction';
import travel from '@/store/modules/travel';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    general,
    prediction,
    travel,
  },
  plugins: [createPersistedState()],
});
