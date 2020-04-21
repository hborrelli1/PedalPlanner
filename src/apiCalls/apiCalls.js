const denver = {
  lat: 'lat=39.6553&',
  lon: 'lon=-106.8287&'
}
const BASE_URL = 'https://www.mtbproject.com/data/';
const KEY = 'key=200727340-18179035d847acc131a5863b82f49454';
const MAX_DISTANCE = 'maxDistance=200&';
const MAX_RESULTS = 'maxResults=500&';

export const apiGetLocalTrails = async () => {
  let data = await fetch(BASE_URL + 'get-trails?' + denver.lat + denver.lon  + MAX_DISTANCE + MAX_RESULTS + KEY)
              .then(data => data.json());
  return data;
}
