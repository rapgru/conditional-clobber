import axios from 'axios';

export function placeToCoords(place) {
  return Promise.resolve({ long: place.lon, lat: place.lat });
}

export function coordsToPlace(coords) {
  console.log(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.long}`);
  return axios
    .get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.long}`)
    .then(value => value.data);
}
