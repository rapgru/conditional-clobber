import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky-APP_TARGET';
import { vuexNestedMutations } from 'vuex-nested-mutations';
import moment from 'moment';
import _ from 'lodash';

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
      unit: 'us',
      avatar: {
        hair: 'Black',
        hairType: 'First',
        body: 'White',
        gender: 'Male',
      },
    },
    errors: [],
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
        if (unit === 'us' || unit === 'ca') {
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
    error: {
      addError(state, error) {
        if (state.errors.indexOf(error) === -1) {
          state.errors.push(error);
        }
      },
      removeError(state, id) {
        _.remove(state.errors, e => e.id === id);
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
      context.dispatch('predictToday');
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
        e => context.dispatch('submitError', {
          id: 'geolocation_not_available',
          msg: 'Can\'t load your current position',
          hasAction: false,
        }),
      );
    },
    submitError(context, error) {
      context.commit('error.addError', error);
      setTimeout(() => {
        context.commit('error.removeError', error.id);
      }, 4000);
    },
  },
};
