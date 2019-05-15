import axios from 'axios';

export function darkskyTimeMachine(f, location, time, unit) {
  axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${location},${time}?units=${unit}`)
    .then((response) => {
      console.log(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${location},${time}?units=${unit}`);
      console.log(response);
      f(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function darkskyForecast(f, location, unit) {
  axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${location}?units=${unit}`)
    .then((response) => {
      f(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
