import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky-APP_TARGET';
import { vuexNestedMutations } from 'vuex-nested-mutations';
import moment from 'moment';

// TODO: Error handling when loading external data

export default {
  state: {
    weather: {
      timemachine: {
        hourly: {
          data: [{ temperature: 49 }],
        },
      },
      forecast: {
        hourly: {
          data: [{ temperature: 49 }],
        },
      },
    },
    settings: {
      position: {
        coords: {
          longitude: 48.477231,
          latitude: 15.673781,
        },
      },
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
      setLocation(state, val) {
        state.settings.position.coords.latitude = val.coords.latitude;
        state.settings.position.coords.longitude = val.coords.longitude;
      },
    },
  }),
  actions: {
    refreshWeather(context) {
      const { coords } = context.state.settings.position;
      const locationString = `${coords.latitude},${coords.longitude}`;
      darkskyTimeMachine((result) => {
        context.commit('weather.setRawTimeMachine', result);
      }, locationString, moment()
        .second(0)
        .minute(0)
        .hour(0)
        .format());
      darkskyForecast((result) => {
        context.commit('weather.setRawForecast', result);
      }, locationString);
    },
    loadLocation(context) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          context.commit('settings.setLocation', position);
          context.dispatch('refreshWeather');
        },
        e => alert(`Can't get geolocation! ${e.message}`),
      );
    },
  },
};
