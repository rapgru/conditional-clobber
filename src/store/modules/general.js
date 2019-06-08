//import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky-APP_TARGET';
import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky';
import { vuexNestedMutations } from 'vuex-nested-mutations';
import moment from 'moment-timezone';
import _ from 'lodash';
import axios from 'axios';

function coordsToPlace(coords) {
  return axios
    .get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}`)
    .then(value => value.data);
}

export default {
  state: {
    weather: {
      timemachine: {
        hourly: {
          data: [
            {
              temperature: 49,
              precipProbability: 1,
              time: 1,
            },
          ],
        },
      },
      forecast: {
        hourly: {
          data: [
            {
              temperature: 49,
              precipProbability: 1,
              time: 1,
            },
          ],
        },
      },
      warnings: [
        'ice',
        'rain',
      ],
    },
    settings: {
      place: {
        display_name: 'Nowhere',
        lon: 0,
        lat: 0,
      },
      timezone: null,
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
      setTimezone(state, zone) {
        state.settings.timezone = zone;
      },
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

      const coords = context.state.settings.place;
      const locationString = `${coords.lat},${coords.lon}`;
      darkskyTimeMachine((result) => {
        context.commit('weather.setRawTimeMachine', result);
        context.commit('setLoading', false);
        context.dispatch('predictToday');
        context.dispatch('generateInfo');
      }, locationString, moment.tz(context.state.settings.timezone)
        .second(0)
        .minute(0)
        .hour(0)
        .format(), context.state.settings.unit);
      darkskyForecast((result) => {
        context.commit('weather.setRawForecast', result);
      }, locationString, context.state.settings.unit);
    },
    loadTimezone(context) {
      axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${context.state.settings.place.lat},${context.state.settings.place.lon}`)
        .then((v) => {
          context.commit('settings.setTimezone', v.data.timezone);
          context.dispatch('refreshWeather');
        });
    },
    loadPosition(context) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position !== {} && position !== undefined) {
            console.log('Loading Reverse Place ' + position.coords.longitude + " " + position.coords.latitude);
            coordsToPlace({ lon: position.coords.longitude, lat: position.coords.latitude })
              .then((value) => {
                console.log(value);
                context.commit('settings.setPlace', value);
                context.dispatch('loadTimezone')
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
    generateInfo(context) {
      let warnings = [];
      const icon = context.state.weather.forecast.data.daily.data[0].icon;
      switch (icon) {
        case 'rain':
          warnings.push('rain');
          break;
        case 'snow':
          warnings.push('snow');
          break;
        case 'thunderstorm':
          warnings.push('thunderstorm');
          break;
        case 'clear-day':
          warnings.push('sun');
          break;
        case 'hail':
          warnings.push('hail');
          break;
        default: break;
      }
    },
  },
};
