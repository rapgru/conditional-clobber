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
        longitude: 48.477231,
        latitude: 15.673781,
      },
      unit: 'fahrenheit',
      avatar: {
        hair: 'Black',
        hairType: 'Male/First',
        body: 'White',
        gender: "Male",
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
      position: {
        setLatitude(state, lat) {
          state.settings.position.latitude = lat;
        },
        setLongitude(state, long) {
          state.settings.position.longitude = long;
        },
      },
      setUnit(state, unit) {
        if (unit === 'fahrenheit' || unit === 'celcius') {
          state.settings.unit = unit;
        }
      },
      avatar: {
        setHair(state, hair) {
          if (hair === 'Black' || hair === 'Brown' || hair === 'Orange' || hair === 'Blond') {
            state.settings.avatar.hair = hair;
          }
        },
        setHairType(state, hairType) {
          state.settings.avatar.hairType = hairType;
        },
        setBody(state, body) {
          if (body === 'Black' || body === 'White' || body === 'Yellow') {
            state.settings.avatar.body = body;
          }
        },
        setGender(state, gender) {
          if (gender === 'Female' || gender === 'Male') {
            state.settings.avatar.gender = gender;
          }
        },
      },
    },
  }),
  actions: {
    refreshWeather(context) {
      const coords = context.state.settings.position;
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
    loadPosition(context) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position !== {} && position !== undefined) {
            context.commit('settings.position.setLongitude', position.coords.longitude);
            context.commit('settings.position.setLatitude', position.coords.latitude);
          }
          context.dispatch('refreshWeather');
        },
        e => alert(`Can't get geolocation! ${e.message}`),
      );
    },
  },
};
