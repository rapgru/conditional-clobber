export function darkskyTimeMachine(f, location, time) {
   cordovaFetch(`https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${location},${time}`).then(r => f(r.json()));
}
export function darkskyForecast(f, location) {
   cordovaFetch(`https://api.darksky.net/forecast/5fe65e2763d6ddcef87f821ebaf028be/${location}`).then(r => f(r.json()));
}
