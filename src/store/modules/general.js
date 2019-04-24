import darksky from '@/store/modules/darksky-APP_TARGET';
import { vuexNestedMutations } from 'vuex-nested-mutations';

export default {
  state: {
    weather: {
      hourly: {
        data: [{ temperature: 49 }],
      },
    },
  },
  mutations: vuexNestedMutations({
    weather: {
      setRaw(state, raw) {
        state.weather.raw = raw;
      },
    },
  }),
  actions: {
    refreshWeather(context) {
      darksky((result) => {
        context.commit('weather.setRaw', result);
      });
    },
  },
};
