import { darkskyForecast, darkskyTimeMachine } from '@/store/modules/darksky';
import { vuexNestedMutations } from 'vuex-nested-mutations';
import moment from 'moment-timezone';
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
        data: {
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
      },
      forecast: {
        data: {
          time: 1,
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
    error: {
      active: false,
    },
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
      setWarnings(state, warnings) {
        state.weather.warnings = warnings;
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
      setError(state, error) {
        state.error = error;
      },
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  }),
  actions: {
    refreshWeather(context) {
      context.commit('setLoading', true);

      console.log(moment.tz(context.state.settings.timezone)
        .startOf('day')
        .format());

      const coords = context.state.settings.place;
      const locationString = `${coords.lat},${coords.lon}`;
      darkskyTimeMachine((result) => {
        context.commit('weather.setRawTimeMachine', result);
        context.commit('setLoading', false);
        context.dispatch('predictToday');
      }, locationString, moment.tz(context.state.settings.timezone)
      .startOf('day')
      .format(), context.state.settings.unit);
      darkskyForecast((result) => {
        context.commit('weather.setRawForecast', result);
        context.dispatch('generateInfo');
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
            coordsToPlace({ lon: position.coords.longitude, lat: position.coords.latitude })
              .then((value) => {
                context.commit('settings.setPlace', value);
                context.dispatch('loadTimezone');
              });
          }
        },
        () => context.dispatch('submitError', {
          id: 'geolocation_not_available',
          msg: 'Can\'t load your current position',
          hasAction: false,
          active: true,
        }),
      );
    },
    submitError(context, error) {
      context.commit('error.setError', error);
      setTimeout(() => {
        const tmp = error;
        tmp.active = false;
        context.commit('error.setError', tmp);
      }, 4000);
    },
    generateInfo(context) {
      const { unit } = context.state.settings;
      const warnings = [];
      const { icon, temperatureHigh } = context.state.weather.forecast.data.daily.data[0];
      switch (icon) {
        case 'rain':
          warnings.push('/img/svgs/Weather/Prediction/Rain.svg');
          warnings.push('/img/svgs/Weather/Tools/Umbrella.svg');
          break;
        case 'snow':
          warnings.push('/img/svgs/Weather/Prediction/Snow.svg');
          break;
        case 'thunderstorm':
          warnings.push('/img/svgs/Weather/Prediction/Thunderstorm.svg');
          break;
        case 'partly-cloudy-day':
        case 'clear-day':
          warnings.push('/img/svgs/Weather/Prediction/Sun.svg');
          break;
        case 'hail':
          warnings.push('/img/svgs/Weather/Prediction/Hail.svg');
          break;
        default: break;
      }
      const border = (unit === 'ca' ? 28 : 82)
      if ((icon === 'clear-day' || icon === 'partly-cloudy-day') && temperatureHigh >= border) {
        warnings.push('/img/svgs/Weather/Tools/Suncreme.svg');
      }
      context.commit('weather.setWarnings', warnings);
    },
  },
};
