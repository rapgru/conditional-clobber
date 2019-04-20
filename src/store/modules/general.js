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
        precipType: 'none',
        icon: 'none',
        nearestStorm: 0,
        cloudCover: 0,
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
        setPrecipType(state, precipType) {
          state.weather.currently.precipType = precipType;
        },
        setIcon(state, icon) {
          state.weather.currently.icon = icon;
        },
        setNearestStorm(state, nearestStorm) {
          state.weather.currently.nearestStorm = nearestStorm;
        },
        setCloudCover(state, cloudCover) {
          state.weather.currently.cloudCover = cloudCover;
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
        setTemperatureLowTime(state, temperatureLowTime) {
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
        context.commit('weather.currently.setTime', result.currently.time);
        context.commit('weather.currently.setSummary', result.currently.summary);
        context.commit('weather.currently.setTemperature', result.currently.temperature);
        context.commit('weather.currently.setWindSpeed', result.currently.windSpeed);
        context.commit('weather.currently.setPrecipIntensity', result.currently.precipIntensity);
        context.commit('weather.currently.setPrecipType', result.currently.precipType);
        context.commit('weather.currently.setIcon', result.currently.icon);
        context.commit('weather.currently.setNearestStorm', result.currently.nearestStormDistance);
        context.commit('weather.currently.setCloudCover', result.currently.cloudCover);

        context.commit('weather.midday.setTime', result.hourly.data[11].time);
        context.commit('weather.midday.setSummary', result.hourly.data[11].summary);
        context.commit('weather.midday.setTemperature', result.hourly.data[11].temperature);
        context.commit('weather.midday.setWindSpeed', result.hourly.data[11].windSpeed);
        context.commit('weather.midday.setPrecipIntensity', result.hourly.data[11].precipIntensity);
        context.commit('weather.midday.setPrecipPercentage', result.hourly.data[11].precipProbability);
        context.commit('weather.midday.setPrecipType', result.hourly.data[11].precipType);
        context.commit('weather.midday.setIcon', result.hourly.data[11].icon);
        context.commit('weather.midday.setCloudCover', result.hourly.data[11].cloudCover);

        context.commit('weather.daily.setTime', result.daily.data[0].time);
        context.commit('weather.daily.setSummary', result.daily.data[0].summary);
        context.commit('weather.daily.setTemperatureHigh', result.daily.data[0].temperatureHigh);
        context.commit('weather.daily.setTemperatureHighTime', result.daily.data[0].temperatureHighTime);
        context.commit('weather.daily.setTemperatureLow', result.daily.data[0].temperatureLow);
        context.commit('weather.daily.setTemperatureLowTime', result.daily.data[0].temperatureLowTime);
        context.commit('weather.daily.setWindSpeed', result.daily.data[0].windSpeed);
        context.commit('weather.daily.setPrecipIntensity', result.daily.data[0].precipIntensity);
        context.commit('weather.daily.setPrecipPercentage', result.daily.data[0].precipProbability);
        context.commit('weather.daily.setPrecipType', result.daily.data[0].precipType);
        context.commit('weather.daily.setIcon', result.daily.data[0].icon);
      });
    },
  },
};
