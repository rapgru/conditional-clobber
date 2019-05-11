export function darkskyTimeMachine(f, location, time, unit) {
  cordovaFetch(`https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${location},${time}?units=${unit}`).then(r => f(r.json()));
}
export function darkskyForecast(f, location, unit) {
  cordovaFetch(`https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${location}?units=${unit}`).then(r => f(r.json()));
}
