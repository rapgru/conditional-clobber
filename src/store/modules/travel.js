import { predictDay } from '@/services/ml-service/ml-service';
import moment from 'moment-timezone';
import _ from 'lodash';
import axios from 'axios';
import svgs from '@/views/travel/travelsvgs';

export default {
  state: {
    queryMode: true,
    query: {
      destination: null,
      departure: null,
      treturn: null,
    },
    result: null,
    loading: true,
  },
  mutations: {
    setQuery(state, val) {
      state.query.destination = val.destination;
      state.query.departure = val.departure;
      state.query.treturn = val.treturn;
    },
    setQueryMode(state, val) {
      state.queryMode = val;
    },
    setTravelLoading(state, val) {
      state.loading = val;
    },
    setResult(state, val) {
      state.result = val;
    },
  },
  actions: {
    setQuery(context, query) {
      axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${query.destination.lat},${query.destination.lon}`)
        .then((v) => {
          const { timezone } = v.data;
          context.commit('setQuery', {
            departure: moment.tz([query.departure.getFullYear(), query.departure.getMonth(), query.departure.getDate()], timezone).format(),
            destination: query.destination,
            treturn: moment.tz([query.treturn.getFullYear(), query.treturn.getMonth(), query.treturn.getDate()], timezone).format(),
          });
          context.dispatch('predictTravel');
        });
    },
    predictTravel(context) {
      context.commit('setTravelLoading', true);

      const start = moment(context.state.query.departure);
      const end = moment(context.state.query.treturn);
      const diff = end.diff(start, 'd');
      const days = _.range(0, diff + 1, 1).map(i => start.add(i, 'd'));

      const { unit } = context.rootState.general.settings;
      
      const weather = days.map((d) => {
        const locationString = `${context.state.query.destination.lat},${context.state.query.destination.lon}`;
        const time = d
          .hour(12)
          .minute(0)
          .second(0)
          .format();
        return axios
          .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${locationString},${time}?units=${unit}`)
      });
      Promise.all(weather).then((res) => {
        const preds = res.map(w => predictDay({
          weather: w.data.daily.data[0],
          gender: _.toLower(context.rootState.general.settings.avatar.gender),
          settings: { mintemp: (unit === 'ca' ? 0 : 15), maxtemp: (unit === 'ca' ? 35 : 100) },
        }));
        console.log(preds);
        const types = [];
        _.forEach(preds, (v) => {
          _.forEach(v, (value, key) => {
            if (value !== '') {
              const a = _.find(types, { type: value });
              if (a) {
                a.count += 1;
              } else {
                types.push({ type: value, count: 1 });
              }
            }
          });
        });
        types.map((t) => {
          const gender = _.toLower(context.rootState.general.settings.avatar.gender);
          const svg = _.find(svgs, { type: t.type, gender });
          t.display = svg.display;
          if (svg.holds === Infinity) {
            t.count = 1;
            return t;
          }
          t.count /= svg.holds;
          t.count = _.ceil(t.count);
          return t;
        });
        context.commit('setTravelLoading', false);
        context.commit('setResult', types);
        console.log(types);
      });
    },
  },
};
