import darksky from '@/store/modules/darksky-APP_TARGET';
import { vuexNestedMutations } from 'vuex-nested-mutations';

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
  mutations: vuexNestedMutations({
    weather: {
      currently: {
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
      midday: {
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
      daily: {
        setTime(state, time) {
          state.weather.daily.time = time;
        },
        setSummary(state, summary) {
          state.weather.daily.summary = summary;
        },
        setTemperatureHigh(state, temperatureHigh) {
          state.weather.daily.temperature = temperatureHigh;
        },
        setTemperatureHighTime(state, temperatureHighTime) {
          state.weather.daily.temperatureHighTime = temperatureHighTime;
        },
        setTemperatureLow(state, temperatureLow) {
          state.weather.daily.temperatureLow = temperatureLow;
        },
        setTemperature(state, temperatureLowTime) {
          state.weather.daily.temperatureLowTime = temperatureLowTime;
        },
        setWindSpeed(state, windSpeed) {
          state.weather.daily.windSpeed = windSpeed;
        },
        setPrecipIntensity(state, precipIntensity) {
          state.weather.daily.precipIntensity = precipIntensity;
        },
        setPrecipPercentage(state, precipPercentage) {
          state.weather.daily.precipPercentage = precipPercentage;
        },
        setPrecipType(state, precipType) {
          state.weather.daily.precipType = precipType;
        },
        setIcon(state, icon) {
          state.weather.daily.icon = icon;
        },
      },
    },
  }),
  actions: {
    refreshWeather(context) {
      darksky((result) => {
        console.log(result);
      });
    },
  },
};
