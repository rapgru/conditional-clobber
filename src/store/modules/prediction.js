export default {
  state: {
    temperatur: 0,
    rainPercentage: 0.0,
    icon: 'none',
  },
  mutations: {
    setTemp(state, temperatur) {
      state.temperatur = temperatur;
    },

    setRainPercentage(state, rainPercentage) {
      state.rainPercentage = rainPercentage;
    },
    setIcon(state, icon) {
      state.icon = icon;
    },
  },
  actions: {
    refreshAll(context) {
      const url = 'https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/37.8267,-122.4233';
      fetch(url, { mode: 'no-cors' })
        .then(value => value.json())
        .then((value) => {
          console.log(JSON.stringify(value));
          context.commit('setTemp', { temperatur: value.temperature });
          // this.$store.commit('setRainPercentage', { rainPercentage: weatherForcast.rain });
          context.commit('setIcon', { icon: value.icon });
        });
    },
  },
};
