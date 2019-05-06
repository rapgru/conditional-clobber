import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky-APP_TARGET';
import { vuexNestedMutations } from 'vuex-nested-mutations';

export default {
  state: {
    weather: {
      hourly: {
        data: [{ temperature: 49 }],
      },
    },
    settings: {
    },
  },
  mutations: vuexNestedMutations({
    weather: {
      setRawTimeMachine(state, raw) {
        state.weather.timemachine = raw;
      },
      setRawForecast(state, raw) {
        state.weather.forecast = raw;
      },
    },
    settings: {
      setLocation(state, position) {
        state.settings.position = position;
      },
    },
  }),
  actions: {
    refreshWeather(context) {
      darkskyTimeMachine((result) => {
        context.commit('weather.setRawTimeMachine', result);
      });
      darkskyForecast((result) => {
        context.commit('weather.setRawForecast', result);
      });
    },
    setCurrentLocation(context) {
      navigator.geolocation.getCurrentPosition(
        position => context.commit('settings.setLocation', position),
        e => alert(`Can't get geolocation! ${e.message}`),
      );
    },
  },
};
