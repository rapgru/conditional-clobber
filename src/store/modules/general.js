//import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky-APP_TARGET';
import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky';
import { vuexNestedMutations } from 'vuex-nested-mutations';
import moment from 'moment';
import _ from 'lodash';
import { placeToCoords, coordsToPlace } from '@/util/location';

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
      place: {
        display_name: 'Nowhere',
        lon: 0,
        lat: 0,
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
    loading: false,
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
      setPlace(state, place) {
        state.settings.place = place;
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
    setLoading(state, loading) {
      state.loading = loading;
    },
  }),
  actions: {
    refreshWeather(context) {
      context.commit('setLoading', true);
      placeToCoords(context.state.settings.place)
        .then((coords) => {
          const locationString = `${coords.lat},${coords.long}`;
          darkskyTimeMachine((result) => {
            context.commit('weather.setRawTimeMachine', result);
            context.commit('setLoading', false);
            context.dispatch('predictToday');
          }, locationString, moment()
            .second(0)
            .minute(0)
            .hour(0)
            .format(), context.state.settings.unit);
          darkskyForecast((result) => {
            context.commit('weather.setRawForecast', result);
          }, locationString, context.state.settings.unit);
        });
    },
    loadPosition(context) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position !== {} && position !== undefined) {
            console.log('Loading Reverse Place ' + position.coords.longitude + " " + position.coords.latitude);
            coordsToPlace({ long: position.coords.longitude, lat: position.coords.latitude })
              .then((value) => {
                console.log(value);
                context.commit('settings.setPlace', value);
                context.dispatch('refreshWeather');
              });
          }
        },
        () => context.dispatch('submitError', {
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
