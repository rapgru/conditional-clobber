import darksky from '@/.../darksky-APP_TARGET';

export default {
  state: {
    weather: {
      currently: {
        time: 0,
        summary: 'none',
        temperature: 0,
        windSpeed: 0,
        precipIntensity: 0,
        precipPercentage: 0,
        precipType: 'none',
        icon: 'none',
        nearestStorm: 0,
      },
      midday: {
        time: 0,
        summary: 'none',
        temperature: 0,
        windSpeed: 0,
        precipIntensity: 0,
        precipPercentage: 0,
        precipType: 'none',
        icon: 'none',
        cloudCover: 0,
      },
      daily: {
        time: 0,
        summary: 'none',
        temperatureHigh: 0,
        temperatureHighTime: 0,
        temperatureLow: 0,
        temperatureLowTime: 0,
        windSpeed: 0,
        precipIntensity: 0,
        precipPercentage: 0,
        precipType: 'none',
        icon: 'none',
      },
    },
  },
  mutations: {
    weather: {
      currently: {
        setTime(state, time) {
          state.weather.midday.time = time;
        },
        setSummary(state, summary) {
          state.weather.midday.summary = summary;
        },
        setTemperature(state, temperature) {
          state.weather.midday.temperature = temperature;
        },
        setWindSpeed(state, windSpeed) {
          state.weather.midday.windSpeed = windSpeed;
        },
        setPrecipIntensity(state, precipIntensity) {
          state.weather.midday.precipIntensity = precipIntensity;
        },
        setPrecipPercentage(state, precipPercentage) {
          state.weather.midday.precipPercentage = precipPercentage;
        },
        setPrecipType(state, precipType) {
          state.weather.midday.precipType = precipType;
        },
        setIcon(state, icon) {
          state.weather.midday.icon = icon;
        },
        setCloudCover(state, cloudCover) {
          state.weather.midday.cloudCover = cloudCover;
        },
      },
      midday: {
        setTime(state, time) {
          state.weather.currently.time = time;
        },
        setSummary(state, summary) {
          state.weather.currently.summary = summary;
        },
        setTemperature(state, temperature) {
          state.weather.currently.temperature = temperature;
        },
        setWindSpeed(state, windSpeed) {
          state.weather.currently.windSpeed = windSpeed;
        },
        setPrecipIntensity(state, precipIntensity) {
          state.weather.currently.precipIntensity = precipIntensity;
        },
        setPrecipPercentage(state, precipPercentage) {
          state.weather.currently.precipPercentage = precipPercentage;
        },
        setPrecipType(state, precipType) {
          state.weather.currently.precipType = precipType;
        },
        setIcon(state, icon) {
          state.weather.currently.icon = icon;
        },
        setNearestStorm(state, nearestStorm) {
          state.weather.currently.nearestStorm = nearestStorm;
        },
      },
      daily: {
        setTime(state, time) {
          state.weather.currently.time = time;
        },
        setSummary(state, summary) {
          state.weather.currently.summary = summary;
        },
        setTemperatureHigh(state, temperatureHigh) {
          state.weather.currently.temperature = temperatureHigh;
        },
        setTemperatureHighTime(state, temperatureHighTime) {
          state.weather.currently.temperatureHighTime = temperatureHighTime;
        },
        setTemperatureLow(state, temperatureLow) {
          state.weather.currently.temperatureLow = temperatureLow;
        },
        setTemperature(state, temperatureLowTime) {
          state.weather.currently.temperatureLowTime = temperatureLowTime;
        },
        setWindSpeed(state, windSpeed) {
          state.weather.currently.windSpeed = windSpeed;
        },
        setPrecipIntensity(state, precipIntensity) {
          state.weather.currently.precipIntensity = precipIntensity;
        },
        setPrecipPercentage(state, precipPercentage) {
          state.weather.currently.precipPercentage = precipPercentage;
        },
        setPrecipType(state, precipType) {
          state.weather.currently.precipType = precipType;
        },
        setIcon(state, icon) {
          state.weather.currently.icon = icon;
        },
      },
    },
  },
  actions: {
    refreshWeather() {
      darksky((result) => {
        console.log(result);
      });
    },
    predictToday() {

    },
    predictTravel() {

    },
  },
};
