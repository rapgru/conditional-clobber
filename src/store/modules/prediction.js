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
      cordovaFetch(url)
        .then((response) => {
          return response.json();
        })
        .then((value) => {
          alert(JSON.stringify(value));
          alert(value.summary);
          context.commit('setTemp', { temperatur: value["summary"] });
          // this.$store.commit('setRainPercentage', { rainPercentage: weatherForcast.rain });
          context.commit('setIcon', { icon: value.current.icon });
        });
    },
  },
};
